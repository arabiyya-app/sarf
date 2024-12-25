// import-sort-ignore
import type { Chapter } from '../../types'

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
// import mudaaafForm9 from "./9"
import mudaaafForm10 from './10'

const mudaaaf = new Map<string, Chapter | null>([
  ['nasara', mudaaafNasara],
  ['daraba', mudaaafDaraba],
  ['fataha', mudaaafFataha],
  ["sami'a", null],
  ['hasiba', null],
  ['karuma', null],
  ['2', mudaaafForm2],
  ['3', mudaaafForm3],
  ['4', mudaaafForm4],
  ['5', mudaaafForm5],
  ['6', mudaaafForm6],
  ['7', mudaaafForm7],
  ['8', mudaaafForm8],
  ['9', null],
  ['10', mudaaafForm10],
])

export default mudaaaf
