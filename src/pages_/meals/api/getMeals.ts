import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  DocumentData,
} from 'firebase/firestore'
import { db } from '@/shared/firebase/firestore'
import { Meal } from '@/entities/meal'

// type FetchMealsResult = {
//   mealsData: Meal[]
//   lastVisible: DocumentData
//   count?: number
// }

export const getMeals = async ({ pageParam }: { pageParam?: DocumentData }) => {
  const mealsRef = collection(db, 'meals')
  const mealsQuery = query(
    mealsRef,
    orderBy('timestamp', 'desc'),
    ...(pageParam ? [startAfter(pageParam)] : []),
    limit(6)
  )
  const querySnapshot = await getDocs(mealsQuery)

  const mealsData = querySnapshot.docs.map(doc => {
    const data = doc.data() as Omit<Meal, 'id'>
    return { id: doc.id, ...data }
  })

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]

  return { mealsData, lastVisible }
}

// import sql from 'better-sqlite3'
// const db = sql('meals.db')
// export const getMeals = async () => {
//   await new Promise(resolve => setTimeout(resolve, 2000))

//   return db.prepare('SELECT * FROM meals').all()
// }
