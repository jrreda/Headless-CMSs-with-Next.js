import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import { contentfulClient } from '@/lib/contentful'
import type { NavLink, NavigationEntry } from './nav-types'

export const dynamic = 'force-dynamic'

function getHeaderLinks(entries: NavigationEntry[]): NavLink[] {
  const header = entries.find((entry) => entry.fields?.name === 'Header')
  if (!header?.fields?.links) return []

  return header.fields.links.flatMap((link) => {
    if (!link.fields?.label || !link.fields?.link) return []

    return [
      {
        label: link.fields.label,
        href: link.fields.link,
      },
    ]
  })
}

async function getNavLinks(): Promise<NavLink[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'navigation',
      include: 2,
    })

    return getHeaderLinks(
      response.items.map((item) => ({
        fields: item.fields as NavigationEntry['fields'],
      }))
    )
  } catch (error) {
    console.error('Error fetching navigation from Contentful:', error)
    return []
  }
}

const navLinkClassName =
  'mx-4 lg:mx-5 font-medium text-slate-300 hover:text-white text-sm transition duration-150 ease-in-out'

export default async function Header() {
  const navLinks = await getNavLinks()

  return (
    <header className="z-30 absolute w-full">
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex flex-wrap justify-center items-center grow">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className={navLinkClassName} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 justify-end items-center">
            <li>
              <Link className="font-medium text-slate-300 hover:text-white text-sm whitespace-nowrap transition duration-150 ease-in-out" href="/signin">Sign in</Link>
            </li>
            <li className="ml-6">
              <Link className="group before:absolute relative before:inset-0 before:bg-slate-800/30 before:rounded-full w-full text-slate-300 hover:text-white transition duration-150 ease-in-out before:pointer-events-none btn-sm [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box]" href="/signup">
                <span className="inline-flex relative items-center">
                  Sign up <span className="ml-1 text-purple-500 tracking-normal transition-transform group-hover:translate-x-0.5 duration-150 ease-in-out">-&gt;</span>
                </span>
              </Link>
            </li>
          </ul>

          <MobileMenu links={navLinks} />

        </div>
      </div>
    </header>
  )
}
