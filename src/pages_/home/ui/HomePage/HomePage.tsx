import Link from 'next/link'
import s from './HomePage.module.scss'
import { routes } from '@/shared/consts/routes'
import { ImageSlideshow } from '../ImageSlideshow/ImageSlideshow'

export const HomePage = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={s.slogan}>
            <h1>Next Food для гурманов нового уровня.</h1>
            <p>Пробуйте сами и делитесь рецептами своих блюд со всем миром.</p>
          </div>
          <div className={s.links}>
            <Link href={routes.COMMUNITY}>Присоединяйтесь к нам</Link>
            <Link href={routes.MEALS}>Пробуйте новое!</Link>
          </div>
        </div>
      </div>
      <main>
        <section className={s.section}>
          <h2>Как это работает</h2>
          <p>
            Next Food — это платформа для гурманов, где они могут делиться любимыми рецептами с
            миром. Это место для открытия новых блюд и общения с другими любителями еды.
          </p>
          <p>Next Food — это место для открытия новых блюд и общения с другими любителями еды.</p>
        </section>

        <section className={s.section}>
          <h2>Почему Next Food?</h2>
          <p>
            Next Food — это платформа для гурманов, где они могут делиться своими любимыми рецептами
            с миром. Это место для открытия новых блюд и общения с другими любителями еды.
          </p>
          <p>Next Food — это место для открытия новых блюд и общения с другими любителями еды.</p>
        </section>
      </main>
    </>
  )
}
