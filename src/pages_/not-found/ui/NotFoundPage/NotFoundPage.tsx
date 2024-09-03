import { routes } from '@/shared/consts/routes'
import { Page } from '@/shared/ui'
import s from './NotFoundPage.module.scss'
import Link from 'next/link'

export const NotFoundPage = () => {
  return (
    <Page>
      <header className={s.header}>
        <h1>Страница не найдена | 404</h1>
        <p>
          К сожалению, запрашиваемая вами страница не найдена. Возможно, она была удалена,
          перемещена или вы ввели неверный адрес.
        </p>
      </header>
      <section className={s.content}>
        <h2>Что делать дальше?</h2>
        <ul>
          <li>Проверьте, правильно ли введен URL.</li>
          <li>
            Вернитесь на{' '}
            <Link href={routes.HOME} className={s.link}>
              главную страницу
            </Link>{' '}
            нашего сайта.
          </li>
        </ul>
      </section>
    </Page>
  )
}
