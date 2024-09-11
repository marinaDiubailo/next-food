import { Category } from './mealCategory'

export type MealData = {
  title: string
  summary: string
  instructions: string
  image: File
  category: Category
}
