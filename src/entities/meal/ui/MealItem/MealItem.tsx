import Image from 'next/image'

import s from './MealItem.module.scss'
import { routes } from '@/shared/consts/routes'
import { Meal } from '../../model/types/meal'
import { AppLink } from '@/shared/ui'
import { Heart, HeartFilled } from '@/shared/assets/icons'

type Props = {
  meal: Meal
} & React.ComponentProps<'article'>

export const MealItem: React.FC<Props> = ({ meal, ...props }) => {
  const { creator, title, summary, image, slug, id } = meal
  return (
    <article className={s.meal} {...props}>
      <header className={s.header}>
        <div className={s.image}>
          <Image src={image} alt={title} fill priority />
        </div>
        <div className={s.headerText}>
          <h2>{title}</h2>
          <p>{creator}</p>
        </div>
        {/* <button className={s.favorite}>
          <HeartFilled />
        </button> */}
      </header>
      <div className={s.content}>
        <p>{summary}</p>
        <div className={s.actions}>
          <AppLink href={routes.MEAL(id)} className={s.link}>
            Подробнее
          </AppLink>
        </div>
      </div>
    </article>
  )
}
