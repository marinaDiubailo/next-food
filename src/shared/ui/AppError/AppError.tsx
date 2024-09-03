import { Page } from '../Page/Page'
import s from './AppError.module.scss'

export const AppError = () => {
  return (
    <Page className={s.main}>
      <div role={'alert'} className={s.alert}>
        <h1 className={s.title}>Произошла ошибка!</h1>
        <p className={s.text}>Не удалось загрузить данные. Пожалуйста, попробуйте позже.</p>
      </div>
    </Page>
  )
}
