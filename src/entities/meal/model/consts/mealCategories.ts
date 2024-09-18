import { type MealCategory, Category } from '../types/mealCategory'

export const mealCategories: MealCategory[] = [
  {
    value: Category.FIRST,
    label: 'Первые блюда',
  },
  {
    value: Category.MAIN,
    label: 'Вторые блюда',
  },
  {
    value: Category.DRINKS,
    label: 'Напитки',
  },
  {
    value: Category.APPETIZERS,
    label: 'Салаты и закуски',
  },
  {
    value: Category.DESSERTS,
    label: 'Десерты и выпечка',
  },
]

export const categoriesMap: Record<Category, string> = {
  [Category.FIRST]: 'Первые блюда',
  [Category.MAIN]: 'Вторые блюда',
  [Category.DRINKS]: 'Напитки',
  [Category.APPETIZERS]: 'Салаты и закуски',
  [Category.DESSERTS]: 'Десерты и выпечка',
}
