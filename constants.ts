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
