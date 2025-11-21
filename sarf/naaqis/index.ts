// import-sort-ignore
import { SARF_CHAPTERS, SARF_FORMS, SARF_TYPES } from '../../constants'

import type { Chapter } from '../../types'
import _fakeChapter from '../../helpers/_fakeChapter'

import naaqisDaaa from './nasara'
import naaqisRamaa from './daraba'
import naaqisRadiya from "./sami'a"
import naaqisNahaa from './fataha'
import naaqisForm2 from './2'
import naaqisForm3 from './3'
import naaqisForm4 from './4'
import naaqisForm5 from './5'
import naaqisForm6 from './6'
import naaqisForm7 from './7'
import naaqisForm8 from './8'
import naaqisForm10 from './10'

const naaqis = new Map<string, Chapter<boolean>>([
  ['nasara', naaqisDaaa],
  ['daraba', naaqisRamaa],
  ["sami'a", naaqisRadiya],
  ['fataha', naaqisNahaa],
  ['hasiba', _fakeChapter({ id: 'naaqis/hasiba', type: SARF_TYPES['naaqis'], form: SARF_FORMS['1e'], chapter: SARF_CHAPTERS['hasiba'] })],
  ['karuma', _fakeChapter({ id: 'naaqis/karuma', type: SARF_TYPES['naaqis'], form: SARF_FORMS['1f'], chapter: SARF_CHAPTERS['karuma'] })],
  ['2', naaqisForm2],
  ['3', naaqisForm3],
  ['4', naaqisForm4],
  ['5', naaqisForm5],
  ['6', naaqisForm6],
  ['7', naaqisForm7],
  ['8', naaqisForm8],
  ['9', _fakeChapter({ id: 'naaqis/9', type: SARF_TYPES['naaqis'], form: SARF_FORMS['9'], chapter: SARF_CHAPTERS["if'ilaal"] })],
  ['10', naaqisForm10],
])

export default naaqis
