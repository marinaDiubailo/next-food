import s from './PageHeader.module.scss'
type Props = {
  title: string
  highlight: string
  text: string
  addon?: React.ReactNode
} & React.ComponentProps<'header'>

export const PageHeader: React.FC<Props> = props => {
  const { addon, title, highlight, text, className, ...rest } = props
  return (
    <header className={s.header} {...rest}>
      <h1 className={s.title}>
        {title} <span className={s.highlight}>{highlight}</span>
      </h1>
      <p>{text}</p>
      {addon ? <p>{addon}</p> : null}
    </header>
  )
}
