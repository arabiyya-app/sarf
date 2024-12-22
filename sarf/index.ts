import type { Sarf } from '../types'
import ajwaf from './ajwaf'
import mithaal from './mithaal'
import mudaaaf from "./mudaa'af"
import naaqis from './naaqis'
import sahih from './sahih'

const sarf: Sarf = {
  sahih,
  ajwaf,
  naaqis,
  mithaal,
  "mudaa'af": mudaaaf,
}

export default sarf
