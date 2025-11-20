import Code from '@/assets/icons/code.svg'

// Social icons
import Linkedin from '@/assets/icons/socials/linkedin.svg'
import Github from '@/assets/icons/socials/github.svg'

// Tech icons
import Ansible from '@/assets/icons/tech/ansible.svg'
import Archlinux from '@/assets/icons/tech/archlinux.svg'
import Aws from '@/assets/icons/tech/aws.svg'
import Bash from '@/assets/icons/tech/bash.svg'
import Css3 from '@/assets/icons/tech/css3.svg'
import Docker from '@/assets/icons/tech/docker.svg'
import Git from '@/assets/icons/tech/git.svg'
import Golang from '@/assets/icons/tech/golang.svg'
import Html5 from '@/assets/icons/tech/html5.svg'
import Kotlin from '@/assets/icons/tech/kotlin.svg'
import Kubernetes from '@/assets/icons/tech/kubernetes.svg'
import Neovim from '@/assets/icons/tech/neovim.svg'
import Nextjs from '@/assets/icons/tech/nextjs.svg'
import Nodejs from '@/assets/icons/tech/nodejs.svg'
import Postgresql from '@/assets/icons/tech/postgresql.svg'
import Python from '@/assets/icons/tech/python.svg'
import React from '@/assets/icons/tech/react.svg'
import Tailwind from '@/assets/icons/tech/tailwind.svg'
import Tmux from '@/assets/icons/tech/tmux.svg'
import Typescript from '@/assets/icons/tech/typescript.svg'

export const icons = {
  ansible: Ansible,
  archlinux: Archlinux,
  aws: Aws,
  bash: Bash,
  code: Code,
  css3: Css3,
  docker: Docker,
  git: Git,
  github: Github,
  golang: Golang,
  html5: Html5,
  kotlin: Kotlin,
  kubernetes: Kubernetes,
  linkedin: Linkedin,
  neovim: Neovim,
  nextjs: Nextjs,
  nodejs: Nodejs,
  postgresql: Postgresql,
  python: Python,
  react: React,
  tailwind: Tailwind,
  tmux: Tmux,
  typescript: Typescript,
}

export type IconName = keyof typeof icons
