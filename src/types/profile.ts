import type { IconName } from '@/lib/icons'

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

export type Experience = {
  company: string
  role: string
  period: string
}

export type Project = {
  title: string
  description: string
  url: string
}
