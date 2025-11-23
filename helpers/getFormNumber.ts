import { MAZEED_FIHI_SARF_CHAPTERS, MUJARRAD_SARF_CHAPTERS } from '../constants'
import type { SarfChapter } from '../types'

/**
 * Gets the form number of a given chapter.
 *
 * @param chapter - The chapter to check
 * @returns The form number of the chapter, or -1 if not found
 * @example
 * ```typescript
 * sarfHelpers.getFormNumber({ transliterated: 'nasara' }) // 1
 * sarfHelpers.getFormNumber({ arabic: 'مُفَاعَلَة' }) // 3
 * sarfHelpers.getFormNumber({ transliterated: 'invalid' }) // -1
 * ```
 */
const getFormNumber = (chapter: Partial<SarfChapter>): number => {
  const isMujarrad = !!MUJARRAD_SARF_CHAPTERS.find(
    ($chapter) => $chapter.arabic === chapter.arabic || $chapter.transliterated === chapter.transliterated,
  )

  if (isMujarrad) {
    return 1
  }

  const mazeedFihiIndex = MAZEED_FIHI_SARF_CHAPTERS.findIndex(
    ($chapter) => $chapter.arabic === chapter.arabic || $chapter.transliterated === chapter.transliterated,
  )

  if (mazeedFihiIndex === -1) {
    return -1
  }

  return mazeedFihiIndex + 2
}

export default getFormNumber

getFormNumber({ arabic: 'مُفَاعَلَة' })
