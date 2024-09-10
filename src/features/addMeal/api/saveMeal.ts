import { nanoid } from 'nanoid'
import slugify from 'slugify'
import { MealData } from '../model/types/mealData'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { imageStorage } from '@/shared/firebase/storage'
import { db } from '@/shared/firebase/firestore'
import { UserData } from '../model/types/userData'

const regex = /[*+~.()'"!:@]/g

const getSlug = (s: string) =>
  slugify(s, { lower: true, strict: true, replacement: '-', remove: regex, locale: 'ru' })

export const saveMeal = async (meal: MealData, userData: UserData) => {
  const append = nanoid()
  const slug = getSlug(`${userData.firstName} ${userData.lastName} ${meal.title}`)
  const storageRef = ref(imageStorage, `images/${slug}-${append}`)

  const metadata = {
    contentType: meal.image.type, // Указываем тип файла
  }

  await uploadBytes(storageRef, meal.image, metadata)
  const url = await getDownloadURL(storageRef)

  const mealData = {
    ...meal,
    slug,
    image: url,
    creator: `${userData.firstName} ${userData.lastName}`,
    creator_email: userData.email,
    timestamp: Timestamp.now(),
  }

  const mealsCollection = collection(db, 'meals')
  await addDoc(mealsCollection, mealData)
}

//import xss from 'xss'
//import sql from 'better-sqlite3'
//import fs from 'node:fs'

//const db = sql('meals.db')

// export const saveMeal = async (meal: MealData) => {
//   const preparedMeal = {
//     ...meal,
//     slug: getSlug(`${meal.creator} ${meal.title}`),
//     instructions: xss(meal.instructions),
//   }

//   const ext = preparedMeal.image.name.split('.').pop()
//   const append = nanoid()
//   const fileName = `${preparedMeal.slug + '-' + append}.${ext}`

//   const stream = fs.createWriteStream(`public/images/${fileName}`)
//   const bufferedImage = await preparedMeal.image.arrayBuffer()
//   stream.write(Buffer.from(bufferedImage), error => {
//     if (error) {
//       throw new Error(error.message)
//     }
//   })

//   const mealToSave = {
//     ...preparedMeal,
//     image: `/images/${fileName}`,
//   }

//   await new Promise(resolve => setTimeout(resolve, 2000))

//   return db
//     .prepare(
//       `
//     INSERT INTO meals
//       (creator, creator_email, title, summary, instructions, image, slug)
//     VALUES (
//       @creator,
//       @creator_email,
//       @title,
//       @summary,
//       @instructions,
//       @image,
//       @slug
//       )
//   `
//     )
//     .run(mealToSave)
// }
