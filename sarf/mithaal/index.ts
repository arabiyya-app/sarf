// import-sort-ignore
import type { Chapter } from '../../types'

import mithaalDaraba from './daraba'
import mithaalFataha from './fataha'
// import mithaalForm9 from './9'
import mithaalForm10 from './10'
import mithaalForm2 from './2'
import mithaalForm3 from './3'
import mithaalForm4 from './4'
import mithaalForm5 from './5'
import mithaalForm6 from './6'
// import mithaalForm7 from './7'
import mithaalForm8 from './8'
import mithaalSamia from "./sami'a"

const mithaal = {
  nasara: null,
  daraba: mithaalDaraba,
  fataha: mithaalFataha,
  "sami'a": mithaalSamia,
  hasiba: null,
  karuma: null,
  '2': mithaalForm2,
  '3': mithaalForm3,
  '4': mithaalForm4,
  '5': mithaalForm5,
  '6': mithaalForm6,
  '7': null,
  '8': mithaalForm8,
  '9': null,
  '10': mithaalForm10,
} satisfies Record<string, Chapter | null>

export default mithaal
