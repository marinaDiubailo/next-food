import { RegisterForm } from '@/features/auth'
import { routes } from '@/shared/consts/routes'
import { AppLink, Page } from '@/shared/ui'
import s from './RegisterPage.module.scss'

export const RegisterPage = () => {
  return (
    <Page className={s.page}>
      <h1 className={s.title}>Зарегистрироваться</h1>
      <RegisterForm />

      <p className={s.text}>
        Уже есть аккаунт?
        <AppLink href={routes.LOGIN} variant={'text'}>
          Войти
        </AppLink>
      </p>
    </Page>
  )
}
