import type { SocialLink, Skills, Experience, Project } from '@/types/profile'

type ProfileConfig = {
  name: string
  jobTitle: string
  seniority?: string
  focusArea?: string
  summary: string
  socialLinks?: SocialLink[]
  skills: Skills
  experiences: Experience[]
  projects: Project[]
}

export const profileConfig: ProfileConfig = {
  name: 'Jose',
  jobTitle: 'Software Engineer',
  seniority: 'Senior',
  focusArea: 'Full-Stack',
  summary:
    'With over a decade of experience designing, developing, and maintaining high-performance software solutions.Certified Systems Engineer with a proven track record of delivering remote projects for clients in the US and Latin America, spanning legacy systems, modern web architectures, and scalable production environments.',
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
      description: 'Strong backend foundations for scalable and reliable applications',
      stack: ['python', 'golang', 'nodejs', 'kotlin', 'postgresql'],
    },
    frontend: {
      title: 'Frontend',
      description:
        'Building modern, accessible interfaces with clean, high-quality code',
      stack: ['typescript', 'html5', 'css3', 'react', 'nextjs', 'tailwind'],
    },
    devOps: {
      title: 'DevOps & Infrastructure',
      description:
        'Designing secure, scalable infrastructure with CI/CD and cloud platforms.',
      stack: ['aws', 'docker', 'kubernetes', 'ansible', 'git', 'bash'],
    },
    devWorkflow: {
      title: 'Developer Workflow',
      description:
        'A high-performance workflow on Arch Linux and Neovim, enhanced with AI.',
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
  experiences: [
    {
      company: 'IOET',
      role: 'Senior Software Engineer',
      period: 'Oct 2025 - Present',
    },
    {
      company: 'XYSolid',
      role: 'Senior Software Engineer',
      period: 'Aug 2025 - Oct 2025',
    },
    {
      company: 'Autolab',
      role: 'Lead Software Engineer',
      period: 'Jan 2022 - Jul 2025',
    },
    {
      company: 'Tecla Labs',
      role: 'Software Engineer',
      period: 'Apr 2017 - Dec 2021',
    },
    {
      company: 'Northwest Title',
      role: 'RPA Developer',
      period: 'Dec 2020 - May 2021',
    },
    {
      company: 'ScottDb',
      role: 'Lead Sofftware Engineer',
      period: 'Dec 2013 - Mar 2017',
    },
    {
      company: 'My Marketing Solutions',
      role: 'Software Engineer',
      period: 'Sep 2013 - Nov 2013',
    },
  ],
  projects: [
    {
      title: 'Personal Website',
      description:
        'Personal website and blog built with Astro and TypeScript, showcasing software projects, technical insights, and development experiments.',
      url: 'https://github.com/joseangcabb/joseangcabb.github.io',
    },
    {
      title: 'Developer Dotfiles',
      description:
        'A modern and modular dotfiles setup featuring an optimized Neovim environment, productive tmux workflow, and consistent tooling across macOS and Linux.',
      url: '#',
    },
  ],
}
