import { routes } from '@/shared/consts/routes'
import logo from '@/shared/assets/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import s from './Header.module.scss'
import clsx from 'clsx'

import { NavLink } from '../NavLink/NavLink'
import { HeaderAuth } from '../HeaderAuth/HeaderAuth'
import { HeaderPopover } from '../HeaderPopover/HeaderPopover'

export const Header: React.FC<React.ComponentProps<'header'>> = ({ className }) => {
  return (
    <header className={clsx(s.header, className)}>
      <Link href={routes.HOME} className={s.logo}>
        <Image src={logo} alt={'Логотип: тарелка с едой'} priority />
      </Link>
      <nav className={s.menu}>
        <ul>
          <NavLink title={'Блюда'} href={routes.MEALS} />
          <NavLink title={'Сообщество'} href={routes.COMMUNITY} />
          <HeaderAuth />
        </ul>
      </nav>
      <HeaderPopover />
    </header>
  )
}
