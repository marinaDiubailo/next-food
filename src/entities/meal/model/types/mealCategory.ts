export enum Category {
  FIRST = 'first',
  MAIN = 'main',
  DRINKS = 'drinks',
  APPETIZERS = 'appetizers',
  DESSERTS = 'desserts',
}

export type MealCategory = {
  value: Category
  label: string
}
