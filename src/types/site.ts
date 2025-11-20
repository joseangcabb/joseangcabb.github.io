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

export type SkillCategory<T = IconName> = {
  title: string
  description: string
  stack: T[]
}

export type Skills = {
  backend: SkillCategory
  frontend: SkillCategory
  devOps: SkillCategory
  devWorkflow: SkillCategory
  softwareArchitecture: SkillCategory<string>
}
