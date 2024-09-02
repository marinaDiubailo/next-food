'use client'

import Link from 'next/link'
import s from './NavLink.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  title: string
} & React.ComponentProps<'li'>
export const NavLink: React.FC<Props> = ({ href, title, ...props }) => {
  const pathname = usePathname()

  return (
    <li {...props}>
      <Link href={href} className={clsx(s.link, pathname.startsWith(href) && s.active)}>
        {title}
      </Link>
    </li>
  )
}
