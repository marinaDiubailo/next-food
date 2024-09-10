'use client'
import { ImagePicker } from '../ImagePicker/ImagePicker'

import s from './AddMealForm.module.scss'

import { AppLoader, Button, ControlledTextField, ControlledTextArea } from '@/shared/ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  AddMealFormValues,
  addMealValidationSchema,
} from '../../model/schemas/addMealValidationSchema'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'

import { saveMeal } from '../../api/saveMeal'

export const AddMealForm = () => {
  const {
    control,
    formState: { isValid, isSubmitting, errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<AddMealFormValues>({
    defaultValues: {
      title: '',
      summary: '',
      instructions: '',
      image: undefined,
    },
    mode: 'onChange',
    resolver: zodResolver(addMealValidationSchema),
  })

  const { data: session } = useSession()

  const onSubmit: SubmitHandler<AddMealFormValues> = async data => {
    if (isValid) {
      const user = {
        email: session?.user?.email as string,
        firstName: session?.user?.firstName as string,
        lastName: session?.user?.lastName as string,
      }

      try {
        await saveMeal(data, user)
        reset()
      } catch (error) {
        // TODO: add error handling
        console.log(error)
      }
    } else {
      return
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField label={'Название блюда'} name={'title'} control={control} />
      <ControlledTextArea label={'Краткое описание'} name={'summary'} control={control} />
      <ControlledTextArea
        label={'Способ приготовления:'}
        name={'instructions'}
        rows={10}
        control={control}
      />
      <div className={s.actions}>
        <ImagePicker control={control} />
        {errors.image?.message && (
          <p aria-live={'polite'} className={s.alert} role={'alert'}>
            {errors.image?.message}
          </p>
        )}
        <Button type={'submit'} disabled={isSubmitting || !isValid} className={s.button}>
          {isSubmitting ? <AppLoader style={{ height: '22px' }} /> : 'Поделиться'}
        </Button>
      </div>
    </form>
  )
}
