import { getStorage } from 'firebase/storage'
import { app } from './config'

export const imageStorage = getStorage(app)
