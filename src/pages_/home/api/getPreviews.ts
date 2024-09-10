import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { imageStorage } from '@/shared/firebase/storage'

export const getPreviews = async () => {
  const imageRef = ref(imageStorage, 'previews/')

  try {
    const images = await listAll(imageRef)
    const urls = await Promise.all(images.items.map(async item => await getDownloadURL(item)))
    console.log(urls)
    return urls
  } catch (error) {
    return {
      error: true,
      message: 'Не удалось загрузить изображения.',
    }
  }
}
