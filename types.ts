export const TYPES = {
  sahih: { arabic: 'صحيح', transliterated: 'sahih' },
  ajwaf: { arabic: 'أجوف', transliterated: 'ajwaf' },
  naaqis: { arabic: 'ناقص', transliterated: 'naaqis' },
  mithaal: { arabic: 'مثال', transliterated: 'mithaal' },
  "mudaa'af": { arabic: 'مضاعف', transliterated: "mudaa'af" },
} as const

export type Chapter = MajhoolChapter | NonMajhoolChapter

export type MajhoolChapter = BaseChapter<true>
export type NonMajhoolChapter = BaseChapter<false>

type BaseChapter<Majhool extends boolean = true> = {
  id: ChapterId
  type: Type
  form: { number: FormNumber; roman: RomanNumber; english: EnglishNumber }
  chapter: { arabic: ArabicChapter; transliterated: TransliteratedChapter }
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
export type ChapterId = `${keyof typeof TYPES}/${string}`

export type Type = (typeof TYPES)[keyof typeof TYPES]

export type FormNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type RomanNumber =
  | 'I'
  | 'II'
  | 'III'
  | 'IV'
  | 'V'
  | 'VI'
  | 'VII'
  | 'VIII'
  | 'IX'
  | 'X'

export type EnglishNumber =
  | '1a'
  | '1b'
  | '1c'
  | '1d'
  | '1e'
  | '1f'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'

export type ArabicChapter =
  | 'نَصَرَ'
  | 'ضَرَبَ'
  | 'فَتَحَ'
  | 'سَمِعَ'
  | 'حَسِبَ'
  | 'كَرُمَ'
  | 'تَفْعِيْل'
  | 'مُفَاعَلَة'
  | 'إِفْعَال'
  | 'تَفَعُّل'
  | 'تَفَاعُل'
  | 'انْفِعَال'
  | 'افْتِعَال'
  | 'افْعِلَال'
  | 'اسْتِفْعَال'

export type TransliteratedChapter =
  | 'nasara'
  | 'daraba'
  | 'fataha'
  | "sami'a"
  | 'hasiba'
  | 'karuma'
  | "taf'eel"
  | "mufaa'ala"
  | "if'aal"
  | "tafa'ul"
  | "tafaa'ul"
  | "infi'aal"
  | "ifti'aal"
  | "if'ilaal"
  | "istif'aal"

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

export type Tasreef = {
  هُوَ: string
  هُمَا: {
    مُذَكَّر: string
    مُؤَنَّث: string
  }
  هُمْ: string
  هِيَ: string
  هُنَّ: string
  أَنْتَ: string
  أَنْتُمَا: string
  أَنْتُمْ: string
  أَنْتِ: string
  أَنْتُنَّ: string
  أَنَا: string
  نَحْنُ: string
}

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
