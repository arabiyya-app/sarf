import type { Chapter } from '../types'
import isMujarrad from './isMujarrad'

/**
 * Determines if the chapter is mazeed fih (i.e. not form 1).
 *
 * @param chapter - The chapter object to check
 * @returns A boolean indicating whether the chapter is mazeed fih
 * @example
 * ```typescript
 * const isNasaraMazeedFih = sarfHelpers.isMazeedFih(sarf.sahih.nasara) // false
 * const isForm2MazeedFih = sarfHelpers.isMazeedFih(sarf.sahih['2']) // true
 * ```
 */
const isMazeedFih = (chapter: Chapter<boolean>): boolean => {
  return !isMujarrad(chapter)
}

export default isMazeedFih
