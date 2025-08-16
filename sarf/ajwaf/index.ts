// import-sort-ignore
import { SARF_CHAPTERS, SARF_TYPES } from '../../constants'

import type { Chapter } from '../../types'
import _fakeChapter from '../../helpers/_fakeChapter'

import ajwafNasara from './nasara'
import ajwafDaraba from './daraba'
import ajwafSamia from "./sami'a"
import ajwafForm2 from './2'
import ajwafForm3 from './3'
import ajwafForm4 from './4'
import ajwafForm5 from './5'
import ajwafForm6 from './6'
import ajwafForm7 from './7'
import ajwafForm8 from './8'
import ajwafForm9 from './9'
import ajwafForm10 from './10'

const ajwaf = new Map<string, Chapter<boolean>>([
  ['nasara', ajwafNasara],
  ['daraba', ajwafDaraba],
  ['fataha', _fakeChapter({ id: 'ajwaf/fataha', type: SARF_TYPES['ajwaf'], chapter: SARF_CHAPTERS['fataha'] })],
  ["sami'a", ajwafSamia],
  ['hasiba', _fakeChapter({ id: 'ajwaf/hasiba', type: SARF_TYPES['ajwaf'], chapter: SARF_CHAPTERS['hasiba'] })],
  ['karuma', _fakeChapter({ id: 'ajwaf/karuma', type: SARF_TYPES['ajwaf'], chapter: SARF_CHAPTERS['karuma'] })],
  ['2', ajwafForm2],
  ['3', ajwafForm3],
  ['4', ajwafForm4],
  ['5', ajwafForm5],
  ['6', ajwafForm6],
  ['7', ajwafForm7],
  ['8', ajwafForm8],
  ['9', ajwafForm9],
  ['10', ajwafForm10],
])

export default ajwaf
