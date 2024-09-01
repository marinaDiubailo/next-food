'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { images } from '../../model/consts/images'
import s from './ImageSlideshow.module.scss'
import clsx from 'clsx'

export const ImageSlideshow = () => {
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
          src={image.image}
          className={clsx(idx === currentImageIndex && s.active)}
          alt={image.alt}
        />
      ))}
    </div>
  )
}
