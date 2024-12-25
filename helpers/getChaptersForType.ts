import type { Chapter } from '../types'
import sarf from '../sarf'

type AnyString = string & {}
type KeyOfMap<T> = T extends Map<infer K, unknown> ? K : never

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
  type: KeyOfMap<typeof sarf> | AnyString,
): (Chapter | null)[] => {
  const verbType = sarf.get(type as KeyOfMap<typeof sarf>)
  if (verbType) return Array.from(verbType.values())
  return []
}

export default getChaptersForType
