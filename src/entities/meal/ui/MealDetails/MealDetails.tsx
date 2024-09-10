'use client'

import Image from 'next/image'

import s from './MealDetails.module.scss'

import { Meal } from '../../model/types/meal'
import { Button, Page } from '@/shared/ui'
import { useRouter } from 'next/navigation'

type Props = {
  meal: Meal
} & React.ComponentProps<'main'>

export const MealDetails: React.FC<Props> = ({ meal, ...props }) => {
  const { creator, creator_email, instructions, title, summary, image } = meal
  const router = useRouter()
  const formattedInstructions = instructions.replace(/\n/g, '<br />')
  return (
    <Page className={s.main} {...props}>
      <Button style={{ marginBottom: '24px' }} variant="text" onClick={() => router.back()}>
        Назад
      </Button>
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
        <p
          className={s.instructions}
          dangerouslySetInnerHTML={{ __html: formattedInstructions }}
        ></p>
      </article>
    </Page>
  )
}
