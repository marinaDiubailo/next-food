import s from './HomePage.module.scss'
import { routes } from '@/shared/consts/routes'
import { ImageSlideshow } from '../ImageSlideshow/ImageSlideshow'

import { AppLink, Page, Accordion, type AccordionItem } from '@/shared/ui'
import { getPreviews } from '../../api/getPreviews'
import {
  ArrowUpRight,
  BookOpen,
  ReceiptText,
  Soup,
  MessageSquareHeart,
  CalendarHeart,
} from 'lucide-react'
import clsx from 'clsx'

const items: AccordionItem[] = [
  {
    content:
      'После регистрации перейдите в раздел "Добавить". Заполните все необходимые поля, такие как название, ингредиенты, пошаговая инструкция и фотографии. Нажмите "Поделиться", чтобы опубликовать рецепт.',
    trigger: 'Как добавить свой рецепт?',
  },
  {
    content:
      'Да, вы можете редактировать или удалять свои рецепты в разделе "Книга/Мои рецепты". Просто выберите рецепт и воспользуйтесь соответствующими опциями.',
    trigger: 'Могу ли я редактировать или удалять свои рецепты?',
  },
  {
    content:
      'Вы можете использовать поиск по ключевым словам или фильтры для поиска рецептов по категориям. Также можно просматривать популярные и новые рецепты на главной "Блюда".',
    trigger: 'Как найти рецепты других пользователей?',
  },
  {
    content:
      '"Книга рецептов" — это ваша персональная коллекция понравившихся рецептов. Вы можете добавлять в нее рецепты, которые хотите попробовать, и легко к ним возвращаться. ',
    trigger: 'Что такое "Книга рецептов"?',
  },
  {
    content:
      'Чтобы участвовать в мероприятиях, перейдите в раздел "Сообщество" и выберите интересующее вас событие. Вы можете зарегистрироваться или создать свое собственное мероприятие.',
    trigger: 'Как участвовать в мероприятиях?',
  },
  {
    content:
      'Да, вы можете оставлять комментарии к рецептам, которые попробовали. Это поможет другим пользователям узнать о вашем опыте и впечатлениях.',
    trigger: 'Могу ли я оставлять комментарии к рецептам?',
  },
]

export const HomePage = async () => {
  const result = await getPreviews()

  if ('error' in result) {
    return <p>{result.message}</p>
  }

  return (
    <Page className={s.page}>
      <header className={s.header}>
        <div className={s.slideshow}>
          <ImageSlideshow images={result} />
        </div>
        <div className={s.sloganContainer}>
          <div className={s.slogan}>
            <h1 className={clsx(s.title, s.accent)}>Next Food для гурманов нового уровня.</h1>
            <p>Пробуйте сами и делитесь рецептами своих блюд со всем миром.</p>
          </div>
          <div className={s.links}>
            <AppLink href={routes.COMMUNITY} variant="text" className={s.shake}>
              Присоединяйтесь к нам
              <span>
                <ArrowUpRight />
              </span>
            </AppLink>
            <AppLink href={routes.MEALS}>Попробуйте новое!</AppLink>
          </div>
        </div>
      </header>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>Как это работает?</h2>
        <p>
          <span className={s.accent}>Next Food</span> — это платформа для гурманов, где вы можете
          делиться своими любимыми рецептами и открывать новые блюда. Здесь вы найдете
          единомышленников и сможете обсудить кулинарные идеи.
        </p>
        <article className={s.article}>
          <h3>Основные возможности</h3>
          <ul className={s.oppotunities}>
            <li>
              <span className={s.circle}>
                <ReceiptText width={48} height={48} />
              </span>
              <h4>Делиться рецептами:</h4>
              <p>Зарегистрируйтесь и начните публиковать свои рецепты, чтобы вдохновить других.</p>
            </li>
            <li>
              <span className={s.circle}>
                <Soup width={48} height={48} />
              </span>
              <h4>Открывать новые блюда:</h4>
              <p>
                Исследуйте рецепты, созданные другими пользователями, и добавляйте их в свою
                коллекцию.
              </p>
            </li>
            {/* <li>
              <span className={s.circle}>
                <MessageSquareHeart width={48} height={48} />
              </span>
              <h4>Комментирование:</h4>
              <p>
                Оставляйте отзывы и комментарии к рецептам, которые вы попробовали, чтобы помочь
                другим пользователям.
              </p>
            </li> */}
            <li>
              <span className={s.circle}>
                <BookOpen width={48} height={48} />
              </span>
              <h4>Книга рецептов: </h4>
              <p>
                Отмечайте понравившиеся рецепты, чтобы создать собственную книгу кулинарных
                шедевров.
              </p>
            </li>
            <li>
              <span className={s.circle}>
                <CalendarHeart width={48} height={48} />
              </span>
              <h4>Участие в мероприятиях:</h4>
              <p>
                Присоединяйтесь к кулинарным мероприятиям или создавайте свои собственные, чтобы
                делиться опытом с другими.
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>Почему Next Food?</h2>
        <p>
          <span className={s.accent}>Next Food</span> — это не просто платформа для обмена
          рецептами. Это сообщество гурманов, где каждый может найти что-то новое, обсудить свои
          кулинарные находки и стать частью увлекательного мира кулинарии.
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>Часто задаваемые вопросы (FAQ)</h2>
        <Accordion items={items} />
      </section>
    </Page>
  )
}
