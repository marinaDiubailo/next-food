import { type Meal, MealDetails } from '@/entities/meal'
import { getMeal } from '../../api/meal'
import { notFound } from 'next/navigation'

export const MealPage = async ({ slug }: { slug: string }) => {
  const meal = (await getMeal(slug)) as Meal

  if (!meal) {
    notFound()
  }
  return <MealDetails meal={meal} />
}
