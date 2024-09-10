import { type UserCredential, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/shared/firebase/firestore'
import { auth } from '@/shared/firebase/config'
import { RegisterFormValues } from '../model/schemas/registerUserValidationSchema'

const createUser = async (user: UserCredential, additionalInfo: Record<string, string> = {}) => {
  if (!user) return

  const userDocRef = doc(db, 'users', user.user.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { email } = user.user
    const createdAt = new Date()

    await setDoc(userDocRef, {
      email,
      createdAt,
      ...additionalInfo,
    })
  }

  return userDocRef
}

export const registerUser = async (data: RegisterFormValues) => {
  const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)
  await createUser(userCredentials, { lastName: data.lastName, firstName: data.firstName })
}
