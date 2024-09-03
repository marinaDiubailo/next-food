import s from './MealsPage.module.scss'

import { routes } from '@/shared/consts/routes'
import { AppLink, AppLoader, Page, PageHeader } from '@/shared/ui'
import { MealsList } from '@/entities/meal'
import { Suspense } from 'react'

export const MealsPage = async () => {
  return (
    <Page>
      <PageHeader
        title="Вкуснейшие блюда, созданные"
        highlight="Вами"
        text="Выберите любимый рецепт и приготовьте его сами! Это легко и весело!"
        addon={<AppLink href={routes.SHARE}>Поделитесь любимым рецептом!</AppLink>}
      />
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
