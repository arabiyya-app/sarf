import type { Chapter } from '../types'
import getChaptersForType from './getChaptersForType'

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
const getChapterById = (chapterId: string): Chapter<boolean> | null => {
  const [type] = chapterId.split('/')
  const chapters = getChaptersForType(type)
  return chapters.find((chapter) => chapter?.id === chapterId) || null
}

export default getChapterById
