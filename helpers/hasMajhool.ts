import type { Chapter, MajhoolChapter } from '../types'

/**
 * Checks if a given chapter has a passive voice (مجهول) conjugation.
 *
 * @param chapter - The chapter object to check
 * @returns A boolean indicating whether the chapter has a passive voice
 * @example
 * ```typescript
 * const nasaraHasPassiveVoice = sarfHelpers.hasMajhool(sarf.sahih.nasara) // true
 * const sahihForm7HasPassiveVoice = sarfHelpers.hasMajhool(sarf.sahih[7]) // false
 * ```
 */
const hasMajhool = (chapter: Chapter): chapter is MajhoolChapter<true> => {
  return chapter['صرف صغير']['مجهول'] !== null
}

export default hasMajhool
