import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/shared/firebase/firestore'
import type { Meal } from '@/entities/meal'

export const getMeal = async (uid: string) => {
  const mealRef = doc(db, 'meals', uid)
  const mealSnap = await getDoc(mealRef)

  if (mealSnap.exists()) {
    const data = mealSnap.data() as Omit<Meal, 'id'>
    return JSON.parse(JSON.stringify({ id: mealSnap.id, ...data }))
  } else {
    throw new Error('No such document!')
  }
}

// import sql from 'better-sqlite3'

// const db = sql('meals.db')

// export const getMeal = async (slug: string) => {
//   await new Promise(resolve => setTimeout(resolve, 2000))

//   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
// }
