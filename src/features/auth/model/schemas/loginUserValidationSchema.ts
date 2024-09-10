import { z } from 'zod'

export const loginUserValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: 'Почта должна соответствовать формату example@example.com' }),

  password: z.string().trim().min(1, { message: 'Пароль обязателен' }),
})

export type LoginFormValues = z.infer<typeof loginUserValidationSchema>
