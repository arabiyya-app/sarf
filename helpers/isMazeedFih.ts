import type { Chapter } from '../types'
import isMujarrad from './isMujarrad'

const isMazeedFih = (chapter: Chapter): boolean => {
  return !isMujarrad(chapter)
}

export default isMazeedFih
