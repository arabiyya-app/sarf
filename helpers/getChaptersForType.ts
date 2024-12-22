import type { Chapter } from '../types'
import sarf from '../sarf'

type AnyString = string & {}

/**
 * Retrieves all chapters for a given type
 *
 * @param type - Verb type, e.g. "sahih"
 * @returns Array of chapters for the given type
 * @example
 * ```typescript
 * const chapters = sarfHelpers.getChaptersForType('sahih')
 * ```
 */
const getChaptersForType = (
  type: keyof typeof sarf | AnyString,
): (Chapter | null)[] => {
  if (type in sarf) {
    const verbType = type as keyof typeof sarf
    const chapters = Object.values(sarf[verbType])
    return chapters
  }

  return []
}

export default getChaptersForType
