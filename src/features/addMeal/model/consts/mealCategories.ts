import { type MealCategory, Category } from '../types/mealCategory'

export const mealCategories: MealCategory[] = [
  {
    value: Category.FIRST,
    label: 'Первые блюда',
  },
  {
    value: Category.SECOND,
    label: 'Вторые блюда',
  },
  {
    value: Category.DRINKS,
    label: 'Напитки',
  },
  {
    value: Category.SALADS,
    label: 'Салаты и закуски',
  },
  {
    value: Category.DESSERTS,
    label: 'Десерты и выпечка',
  },
]
