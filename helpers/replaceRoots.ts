import type { Chapter, RootLetters } from '../types'

const replaceRoots = (
  chapter: Chapter,
  rootLetters?: Partial<RootLetters['arabic']> | null,
): Chapter => {
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
