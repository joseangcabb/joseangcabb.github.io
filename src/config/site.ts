import type { NavItem, Sections } from '@/types/site'

type SiteConfig = {
  siteName: string
  navItems: NavItem[]
  sections: Sections
}

export const siteConfig: SiteConfig = {
  siteName: 'Jose Palacios',
  navItems: [
    { label: 'About', href: '/', variant: 'link' },
    { label: 'Skills', href: '#skills', variant: 'link' },
    { label: 'Experiences', href: '#experiences', variant: 'link' },
    { label: 'Projects', href: '#projects', variant: 'link' },
    { label: 'Blog', href: '/blog', variant: 'button' },
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
