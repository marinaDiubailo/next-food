import { Category } from '../../../../entities/meal/model/types/mealCategory'

export type MealData = {
  title: string
  summary: string
  instructions: string
  image: File
  category: Category
}
