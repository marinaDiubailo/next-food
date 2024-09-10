'use client'

import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import { db } from '@/shared/firebase/firestore'
import { Meal } from '../model/types/meal'

export const getMeals = async () => {
  const mealsRef = collection(db, 'meals')
  const mealsQuery = query(mealsRef, limit(4), orderBy('title', 'asc'))
  const querySnapshot = await getDocs(mealsQuery)

  const mealsData = querySnapshot.docs.map(doc => {
    const data = doc.data() as Omit<Meal, 'id'>
    return { id: doc.id, ...data }
  })

  console.log(mealsData)

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
  console.log(lastVisible)

  return { mealsData, lastVisible }
}

// {
//   pageParam,
// }: {
//   pageParam?: QueryDocumentSnapshot<DocumentData, DocumentData>
// }

// const mealsQuery = query(
//   mealsRef,
//   limit(4),
//   orderBy('title', 'asc'),
//   ...(pageParam ? [startAfter(pageParam)] : [])
// )

// import sql from 'better-sqlite3'
// const db = sql('meals.db')
// export const getMeals = async () => {
//   await new Promise(resolve => setTimeout(resolve, 2000))

//   return db.prepare('SELECT * FROM meals').all()
// }
