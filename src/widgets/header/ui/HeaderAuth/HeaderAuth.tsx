'use client'
import Link from 'next/link'
import { routes } from '@/shared/consts/routes'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import s from './HeaderAuth.module.scss'
import { AppLink, Button } from '@/shared/ui'

export const HeaderAuth = () => {
  const session = useSession()

  if (session.status === 'loading') {
    return <div className={s.loader} />
  }
  return (
    <>
      {session.data ? (
        <li>
          <Button
            variant={'secondary'}
            className={s.button}
            onClick={() => signOut({ callbackUrl: routes.HOME })}
          >
            Выйти
          </Button>
        </li>
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
