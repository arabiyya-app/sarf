import type { Chapter } from '../types'
import sarf from '../sarf'

const getChapterById = (chapterId: string): Chapter | null => {
  const [type] = chapterId.split('/')

  if (type in sarf) {
    const verbType = type as keyof typeof sarf
    const chapters = Object.values(sarf[verbType])
    return chapters.find((chapter) => chapter?.id === chapterId) || null
  }

  return null
}

export default getChapterById
