'use client'

import { forwardRef, useState } from 'react'
import s from './TextField.module.scss'
import clsx from 'clsx'
import { Eye, EyeOff } from 'lucide-react'

export type TextFieldProps = {
  label: string
  errorMessage?: string
} & React.ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  const { errorMessage, label, className, type = 'text', ...rest } = props
  const showError = !!errorMessage && errorMessage.length > 0

  const isPassword = type === 'password'
  const finalType = getFinalType(type, showPassword)

  return (
    <fieldset className={clsx(s.fieldset, showError && s.error, className)}>
      <legend>{label}</legend>
      <div className={s.inputWrapper}>
        <input
          type={finalType}
          required
          className={clsx(s.input, showError && s.error, isPassword && s.password)}
          ref={ref}
          {...rest}
        />

        {isPassword && (
          <button
            className={s.passwordButton}
            type={'button'}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye aria-label="Скрыть пароль" />
            ) : (
              <EyeOff aria-label="Показать пароль" />
            )}
          </button>
        )}
      </div>

      {showError && <p className={s.errorText}>{errorMessage}</p>}
    </fieldset>
  )
})

function getFinalType(
  type: React.ComponentProps<'input'>['type'],
  showPassword: boolean
): React.ComponentProps<'input'>['type'] {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
