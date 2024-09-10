import { LoginForm } from '@/features/auth'
import { routes } from '@/shared/consts/routes'
import { AppLink, Page } from '@/shared/ui'
import s from './LoginPage.module.scss'

export const LoginPage = () => {
  return (
    <Page className={s.page}>
      <h1 className={s.title}>Войти</h1>
      <LoginForm />
      <div>
        <p className={s.text}>Нет аккаунта?</p>
        <AppLink href={routes.REGISTER} variant={'text'}>
          Зарегистрироваться
        </AppLink>
      </div>
    </Page>
  )
}
