export const ARABIC_PRONOUNS = [
  'هُوَ',
  'هُمَا_مُذَكَّر',
  'هُمَا_مُؤَنَّث',
  'هُمْ',
  'هِيَ',
  'هُنَّ',
  'أَنْتَ',
  'أَنْتُمَا',
  'أَنْتُمْ',
  'أَنْتِ',
  'أَنْتُنَّ',
  'أَنَا',
  'نَحْنُ',
] as const

export const SARF_TYPES = {
  sahih: { arabic: 'صحيح', transliterated: 'sahih' },
  ajwaf: { arabic: 'أجوف', transliterated: 'ajwaf' },
  naaqis: { arabic: 'ناقص', transliterated: 'naaqis' },
  mithaal: { arabic: 'مثال', transliterated: 'mithaal' },
  "mudaa'af": { arabic: 'مضاعف', transliterated: "mudaa'af" },
} as const

export const SARF_FORMS = {
  '1a': {
    number: 1,
    roman: 'I',
    english: '1a',
  },
  '1b': {
    number: 1,
    roman: 'I',
    english: '1b',
  },
  '1c': {
    number: 1,
    roman: 'I',
    english: '1c',
  },
  '1d': {
    number: 1,
    roman: 'I',
    english: '1d',
  },
  '1e': {
    number: 1,
    roman: 'I',
    english: '1e',
  },
  '1f': {
    number: 1,
    roman: 'I',
    english: '1f',
  },
  '2': {
    number: 2,
    roman: 'II',
    english: '2',
  },
  '3': {
    number: 3,
    roman: 'III',
    english: '3',
  },
  '4': {
    number: 4,
    roman: 'IV',
    english: '4',
  },
  '5': {
    number: 5,
    roman: 'V',
    english: '5',
  },
  '6': {
    number: 6,
    roman: 'VI',
    english: '6',
  },
  '7': {
    number: 7,
    roman: 'VII',
    english: '7',
  },
  '8': {
    number: 8,
    roman: 'VIII',
    english: '8',
  },
  '9': {
    number: 9,
    roman: 'IX',
    english: '9',
  },
  '10': {
    number: 10,
    roman: 'X',
    english: '10',
  },
} as const
