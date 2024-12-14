import type { Chapter } from '../types'
import sarf from '../sarf'
/**
 * Retrieves a chapter by its unique identifier.
 *
 * @param chapterId - The unique chapter identifier
 * @returns Chapter object if found, or null if no matching chapter exists
 * @example
 * ```typescript
 * const chapter = sarfHelpers.getChapterById('sahih/nasara')
 * ```
 */

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
