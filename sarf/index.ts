import type { Chapter } from '../types'
import ajwaf from './ajwaf'
import mithaal from './mithaal'
import mudaaaf from "./mudaa'af"
import naaqis from './naaqis'
import sahih from './sahih'

const sarf = {
  sahih,
  ajwaf,
  naaqis,
  mithaal,
  "mudaa'af": mudaaaf,
} satisfies Record<string, Record<string, Chapter | null>>

export default sarf
