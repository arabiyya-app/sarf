import type { Chapter } from '../types'

/**
 * Determines if the chapter is mujarrad (i.e. form 1).
 *
 * @param chapter - The chapter object to check
 * @returns A boolean indicating whether the chapter is mujarrad
 * @example
 * ```typescript
 * const isNasaraMujarrad = sarfHelpers.isMujarrad(sarf.sahih.nasara) // true
 * const isForm2Mujarrad = sarfHelpers.isMujarrad(sarf.sahih['2']) // false
 * ```
 */
const isMujarrad = (chapter: Chapter<boolean>): boolean => {
  return chapter.form.number === 1
}

export default isMujarrad
