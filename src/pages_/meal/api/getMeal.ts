import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/shared/firebase/firestore'

export const getMeal = async (uid: string) => {
  const mealRef = doc(db, 'meals', uid)
  const mealSnap = await getDoc(mealRef)

  if (mealSnap.exists()) {
    return JSON.parse(JSON.stringify(mealSnap.data())) // Возвращает данные документа
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
