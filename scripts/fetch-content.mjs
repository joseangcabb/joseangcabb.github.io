import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

// -----------------------------------------------------------
// Config
// -----------------------------------------------------------

const REPOSITORIES = [{ name: 'linux-lfcs-notes', folder: 'docs' }]

const OWNER = 'joseangcabb'
const VALID_EXTENSIONS = /\.(md|markdown|mdx)$/i

const CONTENT_ROOT = 'src/content/external'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
const API = 'https://api.github.com'
const HEADERS = GITHUB_TOKEN
  ? { Authorization: `token ${GITHUB_TOKEN}`, 'User-Agent': OWNER }
  : { 'User-Agent': OWNER }

// -----------------------------------------------------------
// Utilities
// -----------------------------------------------------------

function log(msg) {
  console.log(`[sync] ${msg}`)
}

function cleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true })
  fs.mkdirSync(dir, { recursive: true })
}

function stripPrefix(pathname, prefix) {
  return pathname.replace(new RegExp(`^${prefix}/`), '')
}

// -----------------------------------------------------------
// Core logic
// -----------------------------------------------------------

async function fetchDirectory(repoName, sourceFolder, directory = sourceFolder) {
  const url = `${API}/repos/${OWNER}/${repoName}/contents/${directory}`
  const response = await fetch(url, { headers: HEADERS })

  if (!response.ok) {
    throw new Error(`GitHub error: ${repoName}/${directory} (${response.status})`)
  }

  const entries = await response.json()

  if (!Array.isArray(entries)) {
    log(`warning: non-array response at ${repoName}/${directory}`)
    return
  }

  for (const entry of entries) {
    if (entry.type === 'dir') {
      await fetchDirectory(repoName, sourceFolder, entry.path)
      continue
    }

    if (!VALID_EXTENSIONS.test(entry.name)) continue

    const raw = await fetch(entry.download_url).then((r) => r.text())
    writeFile(repoName, entry.path, raw, sourceFolder)
  }
}

function writeFile(repoName, relativePath, rawContent, sourceFolder) {
  if (!relativePath.startsWith(sourceFolder + '/')) {
    log(`skipped (outside folder): ${relativePath}`)
    return
  }

  const stripped = stripPrefix(relativePath, sourceFolder)

  const targetPath = path.join(CONTENT_ROOT, repoName, stripped)
  fs.mkdirSync(path.dirname(targetPath), { recursive: true })

  const finalContent = injectSourceFrontmatter(repoName, rawContent)
  fs.writeFileSync(targetPath, finalContent)

  log(`synced: ${repoName}/${stripped}`)
}

// -----------------------------------------------------------
// Frontmatter helpers
// -----------------------------------------------------------

function injectSourceFrontmatter(repoName, content) {
  if (!content.startsWith('---')) {
    return `---\nsource: ${repoName}\n---\n\n${content}`
  }

  const lines = content.split('\n')
  const hasSource = lines.some((line) => line.trim().startsWith('source:'))

  if (hasSource) return content

  lines.splice(1, 0, `source: ${repoName}`)
  return lines.join('\n')
}

// -----------------------------------------------------------
// Excution
// -----------------------------------------------------------

async function run() {
  log('Starting sync')
  cleanDir(CONTENT_ROOT)

  for (const { name, folder } of REPOSITORIES) {
    log(`Syncing repo "${name}" > folder "${folder}"`)
    await fetchDirectory(name, folder)
  }

  log('Sync completed')
}

run().catch((err) => {
  console.error('[sync:error]', err)
  process.exit(1)
})
