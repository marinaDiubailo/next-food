import clsx from 'clsx'
import s from './AppLoader.module.scss'
import { forwardRef } from 'react'

export const AppLoader = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return <div className={clsx(s.loader, className)} aria-label={'Загрузка'} {...props} />
  }
)
