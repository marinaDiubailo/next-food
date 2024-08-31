import { routes } from '@/shared/consts/routes'
import logo from '@/shared/assets/images/logo.png'
import Link from 'next/link'
import s from './Header.module.scss'
import clsx from 'clsx'

export const Header: React.FC<React.ComponentProps<'header'>> = ({ className }) => {
  return (
    <header className={clsx(s.header, className)}>
      <Link href={routes.HOME} className={s.logo}>
        <img src={logo.src} alt={'Логотип: тарелка с едой'} />
        Next Food
      </Link>
      <nav className={s.menu}>
        <ul>
          <li className={s.menuItem}>
            <Link href={routes.MEALS} className={s.link}>
              Меню
            </Link>
          </li>
          <li>
            <Link href={routes.COMMUNITY} className={s.link}>
              Сообщество
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
