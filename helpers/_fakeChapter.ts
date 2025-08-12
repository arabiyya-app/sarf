import type { Chapter, ChapterId, SarfChapter, SarfForm, SarfType } from '../types'

const _fakeChapter = (params: { id: ChapterId; type: SarfType; form: SarfForm; chapter: SarfChapter }): Chapter<false> => ({
  ...params,
  exists: false,
  title: null,
  root_letters: null,
  'صرف صغير': null,
  'صرف كبير': null,
  مشتق: null,
})

export default _fakeChapter
