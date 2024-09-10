export const USERNAME_PATTERN = /^[a-zA-Z0-9_-]*$/

export const PASSWORD_PATTERN =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~])[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]+$/

import { z } from 'zod'

export const registerUserValidationSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email({ message: 'Почта должна соответствовать формату example@example.com' }),

    password: z
      .string()
      .trim()
      .min(6, { message: 'Минимум 6 символов' })
      .max(20, { message: 'Максимум 20 символов' })
      .regex(PASSWORD_PATTERN, {
        message:
          'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
      }),
    passwordConfirmation: z.string().trim(),
    // displayName: z
    //   .string()
    //   .trim()
    //   .regex(USERNAME_PATTERN, {
    //     message:
    //       'Имя пользователя может содержать только буквы, цифры, символы подчеркивания _ и дефисы -',
    //   })
    //   .min(6, { message: 'Минимум 6 символов' })
    //   .max(30, { message: 'Максимум 30 символов' }),
    firstName: z
      .string()
      .trim()
      .min(1, { message: 'Обязательное поле' })
      .max(100, { message: 'Максимум 100 символов' }),
    lastName: z
      .string()
      .trim()

      .min(1, { message: 'Обязательное поле' })
      .max(100, { message: 'Максимум 100 символов' }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Пароли не совпадают',
        path: ['passwordConfirmation'],
      })
    }
  })

export type RegisterFormValues = z.infer<typeof registerUserValidationSchema>
