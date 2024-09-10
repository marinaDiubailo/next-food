'use client'
import { useSession } from 'next-auth/react'
import { routes } from '@/shared/consts/routes'
import { AppLink } from '@/shared/ui'

export const ShareButton = () => {
  const session = useSession()
  console.log(session)

  if (!session.data) {
    return null
  }

  return <AppLink href={routes.SHARE}>Поделитесь любимым рецептом!</AppLink>
}
