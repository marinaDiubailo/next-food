import { type Meal, MealDetails } from '@/entities/meal'
import { getMeal } from '../../api/meal'

export const MealPage = async ({ slug }: { slug: string }) => {
  const meal = (await getMeal(slug)) as Meal
  return <MealDetails meal={meal} />
}
