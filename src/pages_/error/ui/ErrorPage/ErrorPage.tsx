import { ErrorMessage, Page } from '@/shared/ui'
import s from './ErrorPage.module.scss'

export const ErrorPage = () => {
  return (
    <Page className={s.main}>
      <ErrorMessage
        title={'Произошла ошибка'}
        text={'Не удалось загрузить данные. Пожалуйста, попробуйте позже.'}
      />
    </Page>
  )
}
