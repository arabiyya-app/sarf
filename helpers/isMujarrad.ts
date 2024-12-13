import type { Chapter } from '../types'

const isMujarrad = (chapter: Chapter): boolean => {
  return chapter.form.number === 1
}

export default isMujarrad
