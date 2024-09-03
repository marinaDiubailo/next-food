import clsx from 'clsx'
import s from './AppLoader.module.scss'

export const AppLoader: React.FC<React.ComponentProps<'div'>> = ({ className, ...props }) => {
  return <div className={clsx(s.loader, className)} aria-label={'Загрузка страницы'} {...props} />
}
