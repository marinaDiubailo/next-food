import { MealPage } from '@/pages_/meal'

export default function Page({ params }: { params: { mealSlug: string } }) {
  return <MealPage slug={params.mealSlug} />
}
