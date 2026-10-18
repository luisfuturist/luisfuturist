export interface ShieldItem {
  label?: string
  name: string
  color: string
  logo?: string
  href: string
  alt?: string
}

export interface ProjectRepo {
  name: string
  href: string
  desc: string
  wip?: boolean
}

export interface ProjectCategory {
  name: string
  emoji: string
  repos: ProjectRepo[]
}

export interface OrgItem {
  name: string
  href: string
  desc: string
}
