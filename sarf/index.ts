import type { Sarf } from '../types'
import ajwaf from './ajwaf'
import mithaal from './mithaal'
import mudaaaf from "./mudaa'af"
import naaqis from './naaqis'
import sahih from './sahih'

const sarf: Sarf = new Map([
  ['sahih', sahih],
  ['ajwaf', ajwaf],
  ['naaqis', naaqis],
  ['mithaal', mithaal],
  ["mudaa'af", mudaaaf],
])

export default sarf
