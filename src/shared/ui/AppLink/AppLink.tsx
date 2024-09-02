import clsx from 'clsx'
import Link from 'next/link'
import s from './AppLink.module.scss'

export type AppLinkProps = {
  variant?: 'primary' | 'text'
} & React.ComponentProps<typeof Link>

export const AppLink: React.FC<AppLinkProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <Link {...props} className={clsx(s.link, s[variant], className)}>
      {children}
    </Link>
  )
}
