'use client'

import { arrayUnion, updateDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '@/shared/firebase/firestore'

export const checkFavorites = async (mealId: string, userId: string) => {
  const userRef = doc(db, 'users', userId)

  const userDoc = await getDoc(userRef)

  if (userDoc.exists()) {
    const existingFavorites = userDoc.data().favorites || []
    return existingFavorites.includes(mealId)
  } else {
    return false
  }
}

export const addMealToBook = async (mealId: string, userId: string) => {
  const userRef = doc(db, 'users', userId)

  try {
    const isfavoriteExists = await checkFavorites(mealId, userId)

    if (!isfavoriteExists) {
      await updateDoc(userRef, {
        favorites: arrayUnion(mealId),
      })
    }
  } catch (error) {
    console.error('Error adding favorites: ', error)
  }
}
