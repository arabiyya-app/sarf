// import-sort-ignore
import { SARF_CHAPTERS, SARF_FORMS, SARF_TYPES } from '../../constants'

import type { Chapter } from '../../types'
import _fakeChapter from '../../helpers/_fakeChapter'

import mithaalWajada from './daraba'
import mithaalWahaba from './fataha'
import mithaalWajila from "./sami'a"
import mithaalWaritha from './hasiba'
import mithaalForm2 from './2'
import mithaalForm3 from './3'
import mithaalForm4 from './4'
import mithaalForm5 from './5'
import mithaalForm6 from './6'
import mithaalForm8 from './8'
import mithaalForm10 from './10'

const mithaal = new Map<string, Chapter<boolean>>([
  ['daraba', mithaalWajada],
  ["sami'a", mithaalWajila],
  ['fataha', mithaalWahaba],
  ['nasara', _fakeChapter({ id: 'mithaal/nasara', type: SARF_TYPES['mithaal'], form: SARF_FORMS['1d'], chapter: SARF_CHAPTERS['nasara'] })],
  ['hasiba', mithaalWaritha],
  ['karuma', _fakeChapter({ id: 'mithaal/karuma', type: SARF_TYPES['mithaal'], form: SARF_FORMS['1f'], chapter: SARF_CHAPTERS['karuma'] })],
  ['2', mithaalForm2],
  ['3', mithaalForm3],
  ['4', mithaalForm4],
  ['5', mithaalForm5],
  ['6', mithaalForm6],
  ['7', _fakeChapter({ id: 'mithaal/7', type: SARF_TYPES['mithaal'], form: SARF_FORMS['7'], chapter: SARF_CHAPTERS["infi'aal"] })],
  ['8', mithaalForm8],
  ['9', _fakeChapter({ id: 'mithaal/9', type: SARF_TYPES['mithaal'], form: SARF_FORMS['9'], chapter: SARF_CHAPTERS["if'ilaal"] })],
  ['10', mithaalForm10],
])

export default mithaal
