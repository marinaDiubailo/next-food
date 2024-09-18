'use client'

import Image from 'next/image'

import s from './MealDetails.module.scss'

import { Meal } from '../../model/types/meal'
import { Button, Page } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { categoriesMap } from '../../model/consts/mealCategories'
import { useSession } from 'next-auth/react'
import { addMealToBook, checkFavorites } from '../../api/addMealToBook'
import { useEffect, useState } from 'react'
import { Heart, HeartFilled } from '@/shared/assets/icons'
import { ArrowLeft } from 'lucide-react'

type Props = {
  meal: Meal
} & React.ComponentProps<'main'>

export const MealDetails: React.FC<Props> = ({ meal, ...props }) => {
  const { creator, creator_email, instructions, title, summary, image, category, id } = meal

  const [isFavorite, setIsFavorite] = useState(false)
  const [status, setStatus] = useState<'checked' | undefined>()

  const router = useRouter()
  const formattedInstructions = instructions.replace(/\n/g, '<br />')

  const { data: session } = useSession()

  useEffect(() => {
    async function checkMeals() {
      if (session?.user) {
        try {
          const isMealInFavs = await checkFavorites(id, session?.user.id as string)
          console.log(isMealInFavs)
          if (isMealInFavs) {
            setIsFavorite(true)
          }
        } catch (error) {
          console.log(error)
        } finally {
          setStatus('checked')
        }
      }
    }
    checkMeals()
  }, [session, id])

  const addToFavs = async () => {
    if (!session) return

    await addMealToBook(id, session?.user.id as string)
    setIsFavorite(true)
  }

  return (
    <Page className={s.main} {...props}>
      <Button style={{ marginBottom: '24px' }} variant="text" onClick={() => router.back()}>
        <ArrowLeft />
        Назад
      </Button>
      <header className={s.header}>
        <div className={s.image}>
          <Image src={image} alt={title} fill />
          {!isFavorite && status === 'checked' && (
            <button
              className={s.addToFavs}
              onClick={addToFavs}
              title={'Добавить в книгу'}
              aria-label="Добавить в книгу"
            >
              <Heart />
            </button>
          )}
        </div>

        <div className={s.headerText}>
          <h1 className={s.title}>{title}</h1>
          <a className={s.creator} href={`mailto:${creator_email}`}>
            {creator}
          </a>
          <p className={s.summary}>{summary}</p>
          <p className={s.category}>Категория: {categoriesMap[category]}</p>
        </div>
      </header>
      <article className={s.content}>
        <h2 className={s.category}>Способ приготовления:</h2>
        <p
          className={s.instructions}
          dangerouslySetInnerHTML={{ __html: formattedInstructions }}
        ></p>
      </article>
    </Page>
  )
}
