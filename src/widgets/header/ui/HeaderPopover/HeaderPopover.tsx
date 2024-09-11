'use client'
import { routes } from '@/shared/consts/routes'
import { Popover } from '@/shared/ui'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { HeaderAuth } from '../HeaderAuth/HeaderAuth'
import { NavLink } from '../NavLink/NavLink'

import s from './HeaderPopover.module.scss'

export const HeaderPopover = () => {
  const pathname = usePathname()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768) {
        setIsPopoverOpen(false)
      }
    }

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    setIsPopoverOpen(false)
  }, [pathname])

  return (
    <Popover onOpenChange={setIsPopoverOpen} open={isPopoverOpen} triggerClassName={s.trigger}>
      <menu className={s.menu}>
        <ul>
          <NavLink title={'Блюда'} href={routes.MEALS} />
          <NavLink title={'Сообщество'} href={routes.COMMUNITY} />
          <HeaderAuth />
        </ul>
      </menu>
    </Popover>
  )
}
