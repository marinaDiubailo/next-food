import { Category } from '@/entities/meal'

export type MealData = {
  title: string
  summary: string
  instructions: string
  image: File
  category: Category
}
