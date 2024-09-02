import clsx from 'clsx'
import s from './Page.module.scss'

export const Page: React.FC<React.ComponentProps<'main'>> = ({ children, className, ...props }) => {
  return (
    <main className={clsx(s.page, className)} {...props}>
      {children}
    </main>
  )
}
