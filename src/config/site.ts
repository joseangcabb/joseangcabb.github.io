import type { NavItem, SocialLink, Skills } from '@/types/site'

type SiteConfig = {
  name: string
  jobTitle: string
  seniority?: string
  focusArea?: string
  summary: string
  navItems: NavItem[]
  socialLinks?: SocialLink[]
  skills: Skills
}

export const siteConfig: SiteConfig = {
  name: 'Jose Palacios',
  jobTitle: 'Software Engineer',
  seniority: 'Senior',
  focusArea: 'Full-Stack',
  summary:
    'With over a decade of experience designing, developing, and maintaining high-performance software solutions.Certified Systems Engineer with a proven track record of delivering remote projects for clients in the US and Latin America, spanning legacy systems, modern web architectures, and scalable production environments.',
  navItems: [
    { label: 'About', href: '/', variant: 'link' },
    { label: 'Skills', href: '#skills', variant: 'link' },
    { label: 'Experiences', href: '#experiences', variant: 'link' },
    { label: 'Blog', href: '/blog', variant: 'button' },
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joseangpalacios',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/joseangcabb',
      icon: 'github',
    },
  ],
  skills: {
    backend: {
      title: 'Backend',
      description:
        'Strong backend foundations for scalable, secure, and maintainable applications',
      stack: ['python', 'golang', 'nodejs', 'kotlin', 'postgresql'],
    },
    frontend: {
      title: 'Frontend',
      description:
        'Building modern, responsive interfaces with clean, accessible, and high-quality code',
      stack: ['typescript', 'html5', 'css3', 'react', 'nextjs', 'tailwind'],
    },
    devOps: {
      title: 'DevOps & Infrastructure',
      description:
        'Designing secure, automated, and scalable infrastructure with CI/CD, containers, and cloud platforms',
      stack: ['aws', 'docker', 'kubernetes', 'ansible', 'git', 'bash'],
    },
    devWorkflow: {
      title: 'Developer Workflow',
      description:
        'A highly optimized developer workflow powered by Arch Linux, Neovim, tmux, custom tooling, and AI-assisted automation to maximize speed and productivity',
      stack: ['archlinux', 'neovim', 'tmux'],
    },
    softwareArchitecture: {
      title: 'Software Architecture',
      description:
        'Designing scalable and well-structured systems through proven architectural principles',
      stack: [
        'Clean Architecture',
        'Event-driven Systems',
        'Domain-Driven Design (DDD)',
        'API Design',
      ],
    },
  },
}
