import { SARF_TYPES } from '../constants'
import type { SarfType } from '../types'

type AnyString = string & {}

/**
 * Get the sarf type from either the arabic or transliterated name
 *
 * @param type - Verb type, e.g. "sahih"
 * @returns Details of the sarf type, or null if no matching type exists
 * @example
 * ```typescript
 * const sarfType = sarfHelpers.getSarfType('sahih')
 * ```
 */
const getSarfType = (type?: keyof typeof SARF_TYPES | AnyString | null): SarfType | null => {
  if (!type) return null

  for (const sarfType of Object.values(SARF_TYPES)) {
    if (sarfType.arabic === type || sarfType.transliterated === type) {
      return sarfType
    }
  }

  return null
}

export default getSarfType
