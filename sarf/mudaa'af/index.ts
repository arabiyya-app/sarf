// import-sort-ignore
import { SARF_CHAPTERS, SARF_TYPES } from '../../constants'

import type { Chapter } from '../../types'
import _fakeChapter from '../../helpers/_fakeChapter'

import mudaaafNasara from './nasara'
import mudaaafDaraba from './daraba'
import mudaaafFataha from './fataha'
import mudaaafForm2 from './2'
import mudaaafForm3 from './3'
import mudaaafForm4 from './4'
import mudaaafForm5 from './5'
import mudaaafForm6 from './6'
import mudaaafForm7 from './7'
import mudaaafForm8 from './8'
import mudaaafForm10 from './10'

const mudaaaf = new Map<string, Chapter<boolean>>([
  ['nasara', mudaaafNasara],
  ['daraba', mudaaafDaraba],
  ['fataha', mudaaafFataha],
  ["sami'a", _fakeChapter({ id: "mudaa'af/sami'a", type: SARF_TYPES["mudaa'af"], chapter: SARF_CHAPTERS["sami'a"] })],
  ['hasiba', _fakeChapter({ id: "mudaa'af/hasiba", type: SARF_TYPES["mudaa'af"], chapter: SARF_CHAPTERS['hasiba'] })],
  ['karuma', _fakeChapter({ id: "mudaa'af/karuma", type: SARF_TYPES["mudaa'af"], chapter: SARF_CHAPTERS['karuma'] })],
  ['2', mudaaafForm2],
  ['3', mudaaafForm3],
  ['4', mudaaafForm4],
  ['5', mudaaafForm5],
  ['6', mudaaafForm6],
  ['7', mudaaafForm7],
  ['8', mudaaafForm8],
  ['9', _fakeChapter({ id: "mudaa'af/9", type: SARF_TYPES["mudaa'af"], chapter: SARF_CHAPTERS["if'ilaal"] })],
  ['10', mudaaafForm10],
])

export default mudaaaf
