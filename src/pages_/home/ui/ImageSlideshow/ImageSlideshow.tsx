'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import s from './ImageSlideshow.module.scss'
import clsx from 'clsx'

type Props = {
  images: string[]
}

export const ImageSlideshow: React.FC<Props> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={s.slideshow}>
      {images.map((image, idx) => (
        <Image
          key={idx}
          src={image}
          fill
          priority
          placeholder="blur"
          blurDataURL="https://fakeimg.pl/600x400?text=Delicious+food"
          className={clsx(idx === currentImageIndex && s.active)}
          alt={'Slide ' + (idx + 1)}
        />
      ))}
    </div>
  )
}
