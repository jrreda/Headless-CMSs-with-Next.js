export type NavLink = {
  label: string
  href: string
}

export type ButtonEntry = {
  fields?: {
    label: string
    link: string
  }
}

export type NavigationEntry = {
  fields?: {
    name: string
    links: ButtonEntry[]
  }
}
