'use server'

import { redirect } from 'next/navigation'
import { MealData } from '../model/types/mealData'
import { saveMeal } from './saveMeal'
import { routes } from '@/shared/consts/routes'
import { revalidatePath } from 'next/cache'

const isValid = (str: string) => str.trim().length !== 0
const isEmail = (str: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str)

export const shareMeal = async (prevSate: any, formData: FormData) => {
  const meal: MealData = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
  }

  if (
    !isValid(meal.title) ||
    !isValid(meal.summary) ||
    !isValid(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Заполните все поля и загрузите изображение',
    }
  }

  try {
    //await saveMeal(meal)
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message }
    }
  }

  revalidatePath(routes.MEALS)

  redirect(routes.MEALS)
}
