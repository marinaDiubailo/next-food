'use client'
import s from './MealsPage.module.scss'

import { AppLoader, Page, PageHeader } from '@/shared/ui'
import { MealsList } from '@/entities/meal'
import { useEffect } from 'react'
import { routes } from '@/shared/consts/routes'
import { getMeals } from '../../api/getMeals'
import { AppLink } from '@/shared/ui'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

export const MealsPage = () => {
  const {
    data: meals,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['meals'],
    queryFn: getMeals,
    initialPageParam: undefined,
    getNextPageParam: lastPage => lastPage.lastVisible,
    staleTime: 1000 * 60 * 5,
  })

  const mealsData = meals?.pages.flatMap(page => page.mealsData)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  console.log(meals?.pages)

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Page>
      <PageHeader
        title="Вкуснейшие блюда, созданные"
        highlight="Вами"
        text="Выберите любимый рецепт и приготовьте его сами! Это легко и весело!"
        addon={<AppLink href={routes.SHARE}>Поделитесь любимым рецептом!</AppLink>}
      />

      <section>
        {isFetching && (
          <div className={s.loaderWrapper}>
            <AppLoader />
          </div>
        )}
        {mealsData && <MealsList meals={mealsData} />}
      </section>

      {!isFetching && <div className={s.trigger} ref={ref} />}
      {isFetchingNextPage && (
        <div className={s.loaderWrapper}>
          <AppLoader />
        </div>
      )}
    </Page>
  )
}
