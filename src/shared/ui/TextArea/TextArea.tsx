import { forwardRef } from 'react'
import s from '../TextField/TextField.module.scss'
import clsx from 'clsx'

export type TextAreaProps = {
  label: string
  errorMessage?: string
} & React.ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { className, errorMessage, label, rows = 3, ...rest } = props
  const showError = !!errorMessage && errorMessage.length > 0

  return (
    <fieldset className={clsx(s.fieldset, showError && s.error, className)}>
      <legend>{label}</legend>
      <textarea
        rows={rows}
        required
        className={clsx(s.input, showError && s.error)}
        ref={ref}
        {...rest}
      ></textarea>
      {showError && <p className={s.errorText}>{errorMessage}</p>}
    </fieldset>
  )
})
