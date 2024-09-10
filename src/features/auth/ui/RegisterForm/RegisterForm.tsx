'use client'

import { AppLoader, Button, ControlledTextField } from '@/shared/ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from './RegisterForm.module.scss'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  registerUserValidationSchema,
  type RegisterFormValues,
} from '../../model/schemas/registerUserValidationSchema'
import { registerUser } from '../../api/createUser'
import { useRouter } from 'next/navigation'
import { routes } from '@/shared/consts/routes'

export const RegisterForm = () => {
  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit,
    reset,
    setError,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
    },
    mode: 'onChange',
    resolver: zodResolver(registerUserValidationSchema),
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<RegisterFormValues> = async data => {
    if (isValid) {
      try {
        await registerUser(data)

        reset()
        router.push(routes.LOGIN)
      } catch (error) {
        if (
          typeof error === 'object' &&
          error !== null &&
          'code' in error &&
          error.code === 'auth/email-already-in-use'
        ) {
          setError('email', {
            type: 'custom',
            message: 'Пользователь с такой почтой уже существует',
          })
        } else {
          console.log('Unexpected error', error)
        }
      }
    } else {
      return
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {/* <ControlledTextField label={'Имя пользователя'} name={'displayName'} control={control} /> */}
      <ControlledTextField label={'Почта'} name={'email'} control={control} />
      <ControlledTextField label={'Ваше имя'} name={'firstName'} control={control} />
      <ControlledTextField label={'Ваша фамилия'} name={'lastName'} control={control} />
      <ControlledTextField label={'Пароль'} name={'password'} type="password" control={control} />
      <ControlledTextField
        label={'Повторите пароль'}
        name={'passwordConfirmation'}
        type="password"
        control={control}
      />
      <Button type={'submit'} disabled={!isValid || isSubmitting}>
        {isSubmitting ? <AppLoader style={{ height: '22px' }} /> : 'Зарегистрироваться'}
      </Button>
    </form>
  )
}
