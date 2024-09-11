'use client'

import { type Control, type FieldPath, type FieldValues, useController } from 'react-hook-form'

import { Select, SelectProps } from '../Select/Select'

export type ControlledSelectProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
} & Omit<SelectProps, 'onValueChange' | 'value'>

export const ControlledSelect = <TFieldValues extends FieldValues>(
  props: ControlledSelectProps<TFieldValues>
) => {
  const {
    field: { onChange, value },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <Select {...props} onValueChange={onChange} value={value} />
}
