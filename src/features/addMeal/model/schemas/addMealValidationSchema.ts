import { z } from 'zod'

const imageSize = 10 * Math.pow(1024, 2)

export const addMealValidationSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: 'Обязательное поле' })
    .max(100, { message: 'Максимум 100 символов' }),
  summary: z
    .string()
    .trim()
    .min(1, { message: 'Обязательное поле' })
    .max(200, { message: 'Максимум 200 символов' }),

  instructions: z
    .string()
    .trim()
    .min(1, { message: 'Обязательное поле' })
    .max(2000, { message: 'Максимум 2000 символов' }),
  image: z
    .instanceof(File)
    .refine(file => file.size <= imageSize, {
      message: 'Размер изображения не должен превышать 10 мб',
    })
    .refine(file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type), {
      message: 'Изображение должно быть в формате jpg или png',
    }),
})

export type AddMealFormValues = z.infer<typeof addMealValidationSchema>
