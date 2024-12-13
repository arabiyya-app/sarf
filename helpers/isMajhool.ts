import type { Chapter, MajhoolChapter } from '../types'

const hasMajhool = (chapter: Chapter): chapter is MajhoolChapter => {
  return chapter['صرف صغير']['مجهول'] !== null
}

export default hasMajhool
