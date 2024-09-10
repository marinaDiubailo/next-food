import { AddMealForm } from '@/features/addMeal'
import { Page, PageHeader } from '@/shared/ui'
import s from './SharePage.module.scss'

export const SharePage = () => {
  return (
    <Page>
      <PageHeader
        title=" Поделитесь своим"
        highlight="любимым блюдом"
        text="или любым другим блюдом!"
      />

      <section className={s.section}>
        <AddMealForm />
      </section>
    </Page>
  )
}
