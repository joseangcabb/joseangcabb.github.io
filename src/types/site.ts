import type { IconName } from '@/lib/icons'

export type NavItem = {
  label: string
  href: string
  variant?: 'link' | 'button'
}

export type SocialLink = {
  name: string
  url: string
  icon?: 'linkedin' | 'github'
}

export type Skills = {
  backend: IconName[]
  frontend: IconName[]
  devOps: IconName[]
  devWorkflow: IconName[]
}
