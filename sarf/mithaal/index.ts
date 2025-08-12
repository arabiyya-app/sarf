// import-sort-ignore
import { SARF_CHAPTERS, SARF_FORMS, SARF_TYPES } from '../../constants'

import type { Chapter } from '../../types'
import _fakeChapter from '../../helpers/_fakeChapter'

import mithaalDaraba from './daraba'
import mithaalFataha from './fataha'
import mithaalSamia from "./sami'a"
import mithaalForm2 from './2'
import mithaalForm3 from './3'
import mithaalForm4 from './4'
import mithaalForm5 from './5'
import mithaalForm6 from './6'
import mithaalForm8 from './8'
import mithaalForm10 from './10'

const mithaal = new Map<string, Chapter<boolean>>([
  ['nasara', _fakeChapter({ id: 'mithaal/nasara', type: SARF_TYPES['mithaal'], form: SARF_FORMS['1a'], chapter: SARF_CHAPTERS[0] })],
  ['daraba', mithaalDaraba],
  ['fataha', mithaalFataha],
  ["sami'a", mithaalSamia],
  ['hasiba', _fakeChapter({ id: 'mithaal/hasiba', type: SARF_TYPES['mithaal'], form: SARF_FORMS['1e'], chapter: SARF_CHAPTERS[4] })],
  ['karuma', _fakeChapter({ id: 'mithaal/karuma', type: SARF_TYPES['mithaal'], form: SARF_FORMS['1f'], chapter: SARF_CHAPTERS[5] })],
  ['2', mithaalForm2],
  ['3', mithaalForm3],
  ['4', mithaalForm4],
  ['5', mithaalForm5],
  ['6', mithaalForm6],
  ['7', _fakeChapter({ id: 'mithaal/7', type: SARF_TYPES['mithaal'], form: SARF_FORMS['7'], chapter: SARF_CHAPTERS[11] })],
  ['8', mithaalForm8],
  ['9', _fakeChapter({ id: 'mithaal/9', type: SARF_TYPES['mithaal'], form: SARF_FORMS['9'], chapter: SARF_CHAPTERS[13] })],
  ['10', mithaalForm10],
])

export default mithaal
