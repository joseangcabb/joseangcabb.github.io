import type { IconName } from '@/lib/icons'

export type NavItem = {
  label: string
  href: string
  variant?: 'nav-link' | 'nav-button'
  icon?: IconName
}

export type Section = {
  id: string
  title?: string
  description?: string
}

export type Sections = {
  skills: Section
  experiences: Section
  projects: Section
}
