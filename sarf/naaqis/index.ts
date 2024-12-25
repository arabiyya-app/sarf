// import-sort-ignore
import type { Chapter } from '../../types'

import naaqisNasara from './nasara'
import naaqisDaraba from './daraba'
import naaqisSamia from "./sami'a"
import naaqisFataha from './fataha'
import naaqisForm2 from './2'
import naaqisForm3 from './3'
import naaqisForm4 from './4'
import naaqisForm5 from './5'
import naaqisForm6 from './6'
import naaqisForm7 from './7'
import naaqisForm8 from './8'
// import naaqisForm9 from './9'
import naaqisForm10 from './10'

const naaqis = new Map<string, Chapter | null>([
  ['nasara', naaqisNasara],
  ['daraba', naaqisDaraba],
  ['fataha', naaqisFataha],
  ["sami'a", naaqisSamia],
  ['hasiba', null],
  ['karuma', null],
  ['2', naaqisForm2],
  ['3', naaqisForm3],
  ['4', naaqisForm4],
  ['5', naaqisForm5],
  ['6', naaqisForm6],
  ['7', naaqisForm7],
  ['8', naaqisForm8],
  ['9', null],
  ['10', naaqisForm10],
])

export default naaqis
