import type { Meal } from '../../model/types/meal'
import { MealItem } from '../MealItem/MealItem'
import s from './MealsList.module.scss'

type Props = {
  meals: Meal[]
}

export const MealsList: React.FC<Props> = ({ meals }) => {
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

// <ul className={s.meals}>
//   {meals.map(meal => (
//     <li key={meal}>
//       <img src={meal} alt="meal" />
//     </li>
//   ))}
// </ul>
