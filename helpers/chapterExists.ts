import type { Chapter } from '../types'

const chapterExists = (chapter: Chapter<boolean> | null): chapter is Chapter<true> => chapter?.exists === true

export default chapterExists
