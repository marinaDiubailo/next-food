'use client'

import { routes } from '@/shared/consts/routes'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import s from './HeaderAuth.module.scss'
import { AppLink, Button } from '@/shared/ui'
import { NavLink } from '../NavLink/NavLink'

export const HeaderAuth = () => {
  const session = useSession()

  if (session.status === 'loading') {
    return <div className={s.loader} />
  }
  return (
    <>
      {session.data ? (
        <>
          <NavLink href={routes.SHARE} title={'Добавить'} />
          <li>
            <Button
              variant={'secondary'}
              className={s.button}
              onClick={() => signOut({ callbackUrl: routes.HOME })}
            >
              Выйти
            </Button>
          </li>
        </>
      ) : (
        <li>
          <AppLink href={routes.LOGIN} className={s.link}>
            Войти
          </AppLink>
        </li>
      )}
    </>
  )
}
