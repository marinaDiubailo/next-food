'use client'

import { AppLoader, Button } from '@/shared/ui'

import { useFormStatus } from 'react-dom'
export const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button type={'submit'} disabled={pending}>
      {pending ? <AppLoader style={{ height: '22px' }} /> : 'Поделиться'}
    </Button>
  )
}
