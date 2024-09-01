import burgerImg from '@/shared/assets/images/burger.jpg'
import curryImg from '@/shared/assets/images/curry.jpg'
import dumplingsImg from '@/shared/assets/images/dumplings.jpg'
import macncheeseImg from '@/shared/assets/images/macncheese.jpg'
import pizzaImg from '@/shared/assets/images/pizza.jpg'
import schnitzelImg from '@/shared/assets/images/schnitzel.jpg'
import tomatoSaladImg from '@/shared/assets/images/tomato-salad.jpg'
import type { StaticImageData } from 'next/image'

export const images: { image: StaticImageData; alt: string }[] = [
  { image: burgerImg, alt: 'Вкусный, сочный бургер' },
  { image: curryImg, alt: 'Вкусное, острое карри' },
  { image: dumplingsImg, alt: 'Паровые пельмени' },
  { image: macncheeseImg, alt: 'Макароны с сыром' },
  { image: pizzaImg, alt: 'Вкусная пицца' },
  { image: schnitzelImg, alt: 'Вкусный шницель' },
  { image: tomatoSaladImg, alt: 'Вкусный томатный салат' },
]
