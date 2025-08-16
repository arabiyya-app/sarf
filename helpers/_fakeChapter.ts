import type { Chapter, ChapterId, SarfChapter, SarfType } from '../types'

const _fakeChapter = (params: { id: ChapterId; type: SarfType; chapter: SarfChapter }): Chapter<false> => ({
  ...params,
  form: params.chapter.form,
  exists: false,
  title: null,
  root_letters: null,
  'صرف صغير': null,
  'صرف كبير': null,
  مشتق: null,
})

export default _fakeChapter
