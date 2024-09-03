import clsx from 'clsx'

import s from './AppLink.module.scss'
import Link from 'next/link'

export type AppLinkProps = {
  variant?: 'primary' | 'text'
} & React.ComponentProps<typeof Link>

export const AppLink: React.FC<AppLinkProps> = props => {
  const { variant = 'primary', children, className, ...rest } = props
  return (
    <Link className={clsx(s.link, s[variant], className)} {...rest}>
      {children}
    </Link>
  )
}
