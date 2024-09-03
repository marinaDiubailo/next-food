import { getMeals } from '../../api/meals'
import type { Meal } from '../../model/types/meal'
import { MealItem } from '../MealItem/MealItem'
import s from './MealsList.module.scss'

export const MealsList = async () => {
  const meals = (await getMeals()) as Meal[]
  return (
    <ul className={s.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  )
}
