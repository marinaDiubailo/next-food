import { Category } from './mealCategory'

export type Meal = {
  id: string
  title: string
  slug: string
  image: string
  summary: string
  creator: string
  creator_email: string
  instructions: string
  timestamp: Date
  category: Category
}
