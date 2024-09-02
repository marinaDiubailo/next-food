import Link from 'next/link'
import Image from 'next/image'

import s from './MealItem.module.scss'
import { routes } from '@/shared/consts/routes'
import { Meal } from '../../model/types/meal'
import { AppLink } from '@/shared/ui'

type Props = {
  meal: Meal
} & React.ComponentProps<'article'>

export const MealItem: React.FC<Props> = ({ meal, ...props }) => {
  const { title, summary, image, creator, slug } = meal
  return (
    <article className={s.meal} {...props}>
      <header>
        <div className={s.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={s.headerText}>
          <h2>{title}</h2>
          <p> {creator}</p>
        </div>
      </header>
      <div className={s.content}>
        <p className={s.summary}>{summary}</p>
        <div className={s.actions}>
          <AppLink href={routes.MEAL(slug)} className={s.link}>
            Подробнее
          </AppLink>
        </div>
      </div>
    </article>
  )
}
