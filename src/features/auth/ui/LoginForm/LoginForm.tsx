'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, ControlledTextField, ErrorMessage } from '@/shared/ui'
import {
  loginUserValidationSchema,
  type LoginFormValues,
} from '../../model/schemas/loginUserValidationSchema'
import { signIn } from 'next-auth/react'
import s from './LoginForm.module.scss'
import { useRouter } from 'next/navigation'
import { routes } from '@/shared/consts/routes'
import { useState } from 'react'

export const LoginForm = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginUserValidationSchema),
  })

  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const onSubmit: SubmitHandler<LoginFormValues> = async data => {
    if (isValid) {
      try {
        const res = await signIn('credentials', { ...data, redirect: false })

        if (res && !res.error) {
          console.log(res)
          router.push(routes.HOME)
        } else if (res && res.error && res?.status === 401) {
          setError('Неверная почта и/или пароль')
        }
      } catch (error) {
        setError('Что-то пошло не так. Проверьте ваше интернет соединение и попробуйте ещё раз')
      }
    } else {
      return
    }
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField label={'Почта'} name={'email'} control={control} />
        <ControlledTextField label={'Пароль'} name={'password'} type="password" control={control} />
        <Button type={'submit'} disabled={!isValid}>
          Войти
        </Button>
      </form>
      {error && <ErrorMessage title={'Произошла ошибка!'} text={error} />}
    </>
  )
}
