import type {
  ARABIC_PRONOUNS,
  SARF_CHAPTERS,
  SARF_FORMS,
  SARF_TYPES,
} from './constants'

export type Chapter = MajhoolChapter | NonMajhoolChapter

export type MajhoolChapter = BaseChapter<true>
export type NonMajhoolChapter = BaseChapter<false>

type BaseChapter<Majhool extends boolean = true> = {
  id: ChapterId
  type: SarfType
  form: SarfForm
  chapter: SarfChapter
  /** E.g. فَعَلَ يَفْعُلُ */
  title: string
  root_letters: RootLetters[]
  'صرف صغير': {
    مصدر: string
    معروف: { ماضي: string; مضارع: string; فاعل: string }
    مجهول: Majhool extends true
      ? { ماضي: string; مضارع: string; مفعول: string }
      : null
    أمر: string
    نهي: string
  }
  'صرف كبير': {
    معروف: {
      ماضي: Tasreef
      مضارع: { مرفوع: Tasreef; منصوب: Tasreef; مجزوم: Tasreef }
      أمر: AmrTasreef
    }
    مجهول: Majhool extends true
      ? {
          ماضي: Tasreef
          مضارع: { مرفوع: Tasreef; منصوب: Tasreef; مجزوم: Tasreef }
        }
      : null
  }
  مشتق: {
    مصدر: string[]
    فاعل: IsmFaail
    مفعول: Majhool extends true ? IsmMafool : null
  }
}

/** E.g. "sahih/nasara", "sahih/2", etc... */
export type ChapterId = `${keyof typeof SARF_TYPES}/${string}`

export type SarfType = (typeof SARF_TYPES)[keyof typeof SARF_TYPES]

export type SarfForm = (typeof SARF_FORMS)[keyof typeof SARF_FORMS]

export type SarfChapter = (typeof SARF_CHAPTERS)[number]

export type RootLetters = {
  arabic: { ف: string; ع: string; ل: string }
  /** E.g. "help", `{ "base": "sell", "past": "sold" }` */
  english: EnglishVerb
  /** E.g. "nasara", "baa'a" */
  transliterated: string
}

export type EnglishVerb =
  | string
  | {
      /** E.g. "help" */
      base: string
      /** E.g. `{ base: "sell", past: "sold" }`, default is `base` + "ed" */
      past?: string
      /** E.g. `{ base: "self-sufficient", prefixToBe: true }` */
      prefixToBe?: boolean
      /** E.g. `{ base: "hit", past: "hit", presentContinuous: "hitting" }`, default is `base` + "ing" */
      presentContinuous?: string
      /** E.g. `{ base: "throw", past: "threw", passive: "thrown" }`, defaults to `past` (e.g. "helped" => "[he was] helped") */
      passive?: string
      /**
       * E.g. `{ base: "exchange", specifically: "gifts" }`,
       *
       * or
       *
       * ```
       * {
       *  base: "make",
       *  past: "made",
       *  specifically: { base: "someone cry", passive: "to cry" }
       * }
       * ```
       *
       * where `specifically.base` reads like "[he] made someone cry" and `specifically.passive` reads like "[he was] made to cry"
       */
      specifically?:
        | string
        | {
            base: string
            passive: string
          }
    }

export type Tasreef = Record<(typeof ARABIC_PRONOUNS)[number], string>

export type AmrTasreef = Pick<
  Tasreef,
  'أَنْتَ' | 'أَنْتُمَا' | 'أَنْتُمْ' | 'أَنْتِ' | 'أَنْتُنَّ'
>

export type IsmFaail = {
  مُذَكَّر: {
    مُفْرَد: string
    مُثَنَّى: string
    جَمْع: string
  }
  مُؤَنَّث: {
    مُفْرَد: string
    مُثَنَّى: string
    جَمْع: string
  }
}

export type IsmMafool = {
  مُذَكَّر: {
    مُفْرَد: string
    مُثَنَّى: string
    جَمْع: string
  }
  مُؤَنَّث: {
    مُفْرَد: string
    مُثَنَّى: string
    جَمْع: string
  }
}

export type Sarf = Map<keyof typeof SARF_TYPES, Map<string, Chapter | null>>
