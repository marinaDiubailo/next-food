import { Page } from '@/widgets/page'

import s from './MealsPage.module.scss'

import { routes } from '@/shared/consts/routes'
import { AppLink } from '@/shared/ui'
import { getMeals } from '../api/meals'
import { type Meal, MealsList } from '@/entities/meal'

export const MealsPage = async () => {
  const meals = (await getMeals()) as Meal[]
  return (
    <Page>
      <header className={s.header}>
        <h1 className={s.title}>
          Вкуснейшие блюда, созданные <span>Вами</span>
        </h1>
        <p>Выберите любимый рецепт и приготовьте его сами! Это легко и весело!</p>
        <p>
          <AppLink href={routes.SHARE}>Поделитесь своим любимым рецептом!</AppLink>
        </p>
      </header>
      <section>
        <MealsList meals={meals} />
      </section>
    </Page>
  )
}
