import s from './MealsPage.module.scss'

import { routes } from '@/shared/consts/routes'
import { AppLink, AppLoader, Page } from '@/shared/ui'
import { MealsList } from '@/entities/meal'
import { Suspense } from 'react'

export const MealsPage = async () => {
  return (
    <Page>
      <header className={s.header}>
        <h1 className={s.title}>
          Вкуснейшие блюда, созданные <span>Вами</span>
        </h1>
        <p>Выберите любимый рецепт и приготовьте его сами! Это легко и весело!</p>
        <p>
          <AppLink href={routes.SHARE}>Поделитесь любимым рецептом!</AppLink>
        </p>
      </header>
      <section>
        <Suspense
          fallback={
            <div className={s.loaderWrapper}>
              <AppLoader />
            </div>
          }
        >
          <MealsList />
        </Suspense>
      </section>
    </Page>
  )
}
