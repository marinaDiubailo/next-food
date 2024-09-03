import Image from 'next/image'

import s from './MealDetails.module.scss'

import { Meal } from '../../model/types/meal'
import { Page } from '@/shared/ui'

type Props = {
  meal: Meal
} & React.ComponentProps<'main'>

export const MealDetails: React.FC<Props> = ({ meal, ...props }) => {
  const { creator, creator_email, instructions, title, summary, image } = meal
  return (
    <Page className={s.main} {...props}>
      <header className={s.header}>
        <div className={s.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={s.headerText}>
          <h1 className={s.title}>{title}</h1>
          <a className={s.creator} href={`mailto:${creator_email}`}>
            {creator}
          </a>
          <p className={s.summary}>{summary}</p>
        </div>
      </header>
      <article className={s.content}>
        <h2>Способ приготовления:</h2>
        <p className={s.instructions} dangerouslySetInnerHTML={{ __html: instructions }}></p>
      </article>
    </Page>
  )
}
