'use client'

import { useRef, useState } from 'react'
import clsx from 'clsx'
import s from './ImagePicker.module.scss'
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { type Control, Controller } from 'react-hook-form'
import { AddMealFormValues } from '../../model/schemas/addMealValidationSchema'

type Props = {
  control: Control<AddMealFormValues>
}

export const ImagePicker: React.FC<Props> = ({ control }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    imageInputRef.current?.click()
  }

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File | null) => void
  ) => {
    const file = event.target.files?.[0]
    if (!file) {
      setPickedImage(null)
      onChange(null)
      return
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string)
      onChange(file)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <div className={clsx(s.picker)}>
      <label htmlFor={'image'}></label>
      <div className={s.controls}>
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              type={'file'}
              id={'image'}
              accept={'.jpeg, .jpg, .png'}
              ref={imageInputRef}
              className={s.input}
              onChange={event => handleImageChange(event, onChange)}
              required
            />
          )}
        />
        <Button variant={'secondary'} type={'button'} onClick={handleButtonClick}>
          Выберите фото
        </Button>
        <div className={s.preview}>
          {pickedImage ? (
            <Image
              className={s.preview}
              src={pickedImage}
              fill
              alt={'Фото, выбранное пользователем'}
            />
          ) : (
            <p>Файл не выбран</p>
          )}
        </div>
      </div>
    </div>
  )
}
