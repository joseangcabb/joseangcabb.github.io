export type NavItem = {
  label: string
  href: string
  variant?: 'link' | 'button'
}

export type Section = {
  id: string
  title: string
  description: string
}

export type Sections = {
  skills: Section
  experiences: Section
  projects: Section
}
