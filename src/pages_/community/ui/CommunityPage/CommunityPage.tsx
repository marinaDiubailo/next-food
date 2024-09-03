import Image from 'next/image'

import mealIcon from '@/shared/assets/images/meal.png'
import communityIcon from '@/shared/assets/images/community.png'
import eventsIcon from '@/shared/assets/images/events.png'
import s from './CommunityPage.module.scss'
import { Page } from '@/shared/ui'

export const CommunityPage = () => {
  return (
    <Page>
      <header className={s.header}>
        <h1 className={s.title}>
          Одна общая страсть: <span className={s.highlight}>Еда</span>
        </h1>
        <p>Присоединяйтесь к нашему сообществу и делитесь своими любимыми рецептами!</p>
      </header>
      <article className={s.main}>
        <h2>Преимущества сообщества</h2>

        <ul className={s.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Делитесь и открывайте новые рецепты</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Находите новых друзей и единомышленников</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="A crowd of people at a cooking event" />
            <p>Участвуйте в эксклюзивных мероприятиях</p>
          </li>
        </ul>
      </article>
    </Page>
  )
}
