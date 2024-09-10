import { clsx } from 'clsx'
import s from './Button.module.scss'

export type ButtonProps = {
  variant?: 'primary' | 'text' | 'secondary'
} & React.ComponentProps<'button'>

export const Button: React.FC<ButtonProps> = props => {
  const { variant = 'primary', children, className, ...rest } = props
  return (
    <button className={clsx(s.button, s[variant], className)} {...rest}>
      {children}
    </button>
  )
}
