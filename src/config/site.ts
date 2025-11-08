import type { NavItem, SocialLink } from '@/types/site'

type SiteConfig = {
  name: string
  jobTitle: string
  seniority?: string
  focusArea?: string
  summary: string
  navItems: NavItem[]
  socialLinks?: SocialLink[]
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
}
