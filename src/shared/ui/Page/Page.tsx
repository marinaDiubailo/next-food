import clsx from 'clsx'
import s from './Page.module.scss'
import { forwardRef } from 'react'

export const Page = forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'main'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <main className={clsx(s.page, className)} ref={ref} {...props}>
        {children}
      </main>
    )
  }
)
