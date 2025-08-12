// import-sort-ignore
import type { Chapter } from '../../types'

import sahihNasara from './nasara'
import sahihDaraba from './daraba'
import sahihFataha from './fataha'
import sahihSamia from "./sami'a"
import sahihHasiba from './hasiba'
import sahihKaruma from './karuma'
import sahihForm2 from './2'
import sahihForm3 from './3'
import sahihForm4 from './4'
import sahihForm5 from './5'
import sahihForm6 from './6'
import sahihForm7 from './7'
import sahihForm8 from './8'
import sahihForm9 from './9'
import sahihForm10 from './10'

const sahih = new Map<string, Chapter<boolean>>([
  ['nasara', sahihNasara],
  ['daraba', sahihDaraba],
  ['fataha', sahihFataha],
  ["sami'a", sahihSamia],
  ['hasiba', sahihHasiba],
  ['karuma', sahihKaruma],
  ['2', sahihForm2],
  ['3', sahihForm3],
  ['4', sahihForm4],
  ['5', sahihForm5],
  ['6', sahihForm6],
  ['7', sahihForm7],
  ['8', sahihForm8],
  ['9', sahihForm9],
  ['10', sahihForm10],
])

export default sahih
