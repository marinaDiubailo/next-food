import clsx from 'clsx'
import s from './ErrorMessage.module.scss'

type Props = {
  title: string
  text: string
} & React.ComponentProps<'div'>
export const ErrorMessage: React.FC<Props> = ({ title, text, className, ...props }) => {
  return (
    <div role={'alert'} className={clsx(s.alert, className)} {...props}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}>{text}</p>
    </div>
  )
}
