import type { Chapter, RootLetters } from '../types'

import chapterExists from './chapterExists'

/**
 * Replaces the root letters of a given chapter.
 *
 * @param chapter - The chapter object
 * @param rootLetters - Optional object specifying replacement letters for ف (first), ع (middle), and ل (last) root letters
 * @returns A new chapter object with replaced root letters
 * @remarks If no root letters are provided, it defaults to `chapter.root_letters[0].arabic`.
 * @example
 * ```typescript
 * const original = sarf.sahih.nasara
 * console.log(original.title) // فَعَلَ يَفْعُلُ
 *
 * // Use default root letters
 * const nasara = sarfHelpers.replaceRoots(sarf.sahih.nasara)
 * console.log(nasara.title) // نَصَرَ يَنْصُرُ
 *
 * // Specify custom root letter replacements
 * const dakhala = sarfHelpers.replaceRoots(sarf.sahih.nasara, { ف: 'د', ع: 'خ', ل: 'ل' })
 * console.log(dakhala.title) // دَخَلَ يَدْخُلُ
 * ```
 */
const replaceRoots = <T extends Chapter<boolean>>(
  chapter: T,
  rootLetters?: Partial<RootLetters['arabic']> | null,
): T => {
  if (chapterExists(chapter) === false) {
    return chapter
  }

  if (!rootLetters) {
    rootLetters = chapter.root_letters[0].arabic
  }

  const replaced = replace(chapter, /[فعل]/g, rootLetters)

  replaced.id = chapter.id
  replaced.type = chapter.type
  replaced.form = chapter.form
  replaced.chapter = chapter.chapter
  replaced.root_letters = chapter.root_letters

  return replaced
}

export default replaceRoots

const replace = <T extends object>(
  obj: T,
  searchValue: string | RegExp,
  replaceValue: Record<string, string | undefined>,
) => {
  // Deep clone
  const ret = JSON.parse(JSON.stringify(obj)) as T

  for (const $key of Object.keys(ret)) {
    const key = $key as keyof T

    const value = ret[key]

    if (!value) continue

    if (typeof value === 'string') {
      ret[key] = value.replace(
        searchValue,
        (character) => replaceValue[character] || character,
      ) as T[keyof T]
      continue
    }

    if (typeof value === 'object') {
      ret[key] = replace(value, searchValue, replaceValue)
    }

    if (Array.isArray(value)) {
      ret[key] = value.map((item: unknown) => {
        if (typeof item === 'string') {
          return item.replace(
            searchValue,
            (character) => replaceValue[character] || character,
          )
        }

        if (typeof item === 'object' && item) {
          return replace(item, searchValue, replaceValue)
        }

        return item
      }) as T[keyof T]
      continue
    }
  }

  return ret
}
