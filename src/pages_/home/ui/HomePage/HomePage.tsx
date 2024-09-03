import s from './HomePage.module.scss'
import { routes } from '@/shared/consts/routes'
import { ImageSlideshow } from '../ImageSlideshow/ImageSlideshow'

import { AppLink, Page } from '@/shared/ui'

export const HomePage = () => {
  return (
    <Page className={s.page}>
      <header className={s.header}>
        <div className={s.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={s.sloganContainer}>
          <div className={s.slogan}>
            <h1>Next Food для гурманов нового уровня.</h1>
            <p>Пробуйте сами и делитесь рецептами своих блюд со всем миром.</p>
          </div>
          <div className={s.links}>
            <AppLink href={routes.COMMUNITY} variant="text">
              Присоединяйтесь к нам
            </AppLink>
            <AppLink href={routes.MEALS}>Попробуйте новое!</AppLink>
          </div>
        </div>
      </header>

      <section className={s.section}>
        <h2>Как это работает?</h2>
        <p>
          Next Food — это платформа для гурманов, где они могут делиться любимыми рецептами с миром.
          Это место для открытия новых блюд и общения с другими любителями еды.
        </p>
        <p>Next Food — это место для открытия новых блюд и общения с другими любителями еды.</p>
      </section>

      <section className={s.section}>
        <h2>Почему Next Food?</h2>
        <p>
          Next Food — это платформа для гурманов, где они могут делиться своими любимыми рецептами с
          миром. Это место для открытия новых блюд и общения с другими любителями еды.
        </p>
        <p>Next Food — это место для открытия новых блюд и общения с другими любителями еды.</p>
      </section>
    </Page>
  )
}
