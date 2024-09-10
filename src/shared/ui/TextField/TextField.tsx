import { forwardRef } from 'react'
import s from './TextField.module.scss'
import clsx from 'clsx'

export type TextFieldProps = {
  label: string
  errorMessage?: string
} & React.ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { errorMessage, label, className, type = 'text', ...rest } = props
  const showError = !!errorMessage && errorMessage.length > 0

  return (
    <fieldset className={clsx(s.fieldset, showError && s.error, className)}>
      <legend>{label}</legend>
      <input
        type={type}
        required
        className={clsx(s.input, showError && s.error)}
        ref={ref}
        {...rest}
      />
      {showError && <p className={s.errorText}>{errorMessage}</p>}
    </fieldset>
  )
})
