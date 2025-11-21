export const ARABIC_PRONOUNS = [
  'هُوَ',
  'هُمَا_مُذَكَّر',
  'هُمْ',
  'هِيَ',
  'هُمَا_مُؤَنَّث',
  'هُنَّ',
  'أَنْتَ',
  'أَنْتُمَا',
  'أَنْتُمْ',
  'أَنْتِ',
  'أَنْتُمَا',
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

export const SARF_CHAPTERS = {
  nasara: { arabic: 'نَصَرَ', transliterated: 'nasara' },
  daraba: { arabic: 'ضَرَبَ', transliterated: 'daraba' },
  fataha: { arabic: 'فَتَحَ', transliterated: 'fataha' },
  "sami'a": { arabic: 'سَمِعَ', transliterated: "sami'a" },
  hasiba: { arabic: 'حَسِبَ', transliterated: 'hasiba' },
  karuma: { arabic: 'كَرُمَ', transliterated: 'karuma' },
  "taf'eel": { arabic: 'تَفْعِيْل', transliterated: "taf'eel" },
  "mufaa'ala": { arabic: 'مُفَاعَلَة', transliterated: "mufaa'ala" },
  "if'aal": { arabic: 'إِفْعَال', transliterated: "if'aal" },
  "tafa'ul": { arabic: 'تَفَعُّل', transliterated: "tafa'ul" },
  "tafaa'ul": { arabic: 'تَفَاعُل', transliterated: "tafaa'ul" },
  "infi'aal": { arabic: 'انْفِعَال', transliterated: "infi'aal" },
  "ifti'aal": { arabic: 'افْتِعَال', transliterated: "ifti'aal" },
  "if'ilaal": { arabic: 'افْعِلَال', transliterated: "if'ilaal" },
  "istif'aal": { arabic: 'اسْتِفْعَال', transliterated: "istif'aal" },
} as const

export const MUJARRAD_SARF_CHAPTERS: (typeof SARF_CHAPTERS)[keyof typeof SARF_CHAPTERS][] = [
  SARF_CHAPTERS['nasara'],
  SARF_CHAPTERS['daraba'],
  SARF_CHAPTERS['fataha'],
  SARF_CHAPTERS["sami'a"],
  SARF_CHAPTERS['hasiba'],
  SARF_CHAPTERS['karuma'],
]

export const MAZEED_FIHI_SARF_CHAPTERS: (typeof SARF_CHAPTERS)[keyof typeof SARF_CHAPTERS][] = [
  SARF_CHAPTERS["taf'eel"],
  SARF_CHAPTERS["mufaa'ala"],
  SARF_CHAPTERS["if'aal"],
  SARF_CHAPTERS["tafa'ul"],
  SARF_CHAPTERS["tafaa'ul"],
  SARF_CHAPTERS["infi'aal"],
  SARF_CHAPTERS["ifti'aal"],
  SARF_CHAPTERS["if'ilaal"],
  SARF_CHAPTERS["istif'aal"],
]
