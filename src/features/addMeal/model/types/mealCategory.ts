export enum Category {
  FIRST = 'первое',
  SECOND = 'второе',
  DRINKS = 'напитки',
  SALADS = 'салаты',
  DESSERTS = 'десерты',
}

export type MealCategory = {
  value: Category
  label: string
}
