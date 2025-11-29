import type { NavItem, Sections } from '@/types/site'

type SiteConfig = {
  logo: string
  siteName: string
  navItems: NavItem[]
  sections: Sections
}

export const siteConfig: SiteConfig = {
  logo: 'JP',
  siteName: 'Jose Palacios',
  navItems: [
    { label: 'Home', href: '#home', variant: 'nav-link' },
    { label: 'Skills', href: '#skills', variant: 'nav-link' },
    { label: 'Experiences', href: '#experiences', variant: 'nav-link' },
    { label: 'Projects', href: '#projects', variant: 'nav-link' },
    { label: 'Blog', href: '/blog', variant: 'nav-button', icon: 'document' },
  ],
  sections: {
    skills: {
      id: 'skills',
      title: 'Skills',
      description:
        'A solid technical foundation built across backend, frontend, DevOps, and high-performance engineering workflows. Tools and technologies I use daily to design, build, and scale reliable software.',
    },
    experiences: {
      id: 'experiences',
      title: 'Experiences',
      description:
        'Over a decade of experience building production-ready systems, delivering business-critical features, and leading engineering initiatives across startups and high-growth teams.',
    },
    projects: {
      id: 'projects',
      title: 'Projects',
      description:
        'A selection of personal and professional projects that showcase my engineering style, attention to detail, and ability to deliver clean, scalable, and thoughtful solutions.',
    },
  },
}
