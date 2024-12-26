import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'sahih/karuma',
  type: {
    arabic: 'صحيح',
    transliterated: 'sahih',
  },
  form: {
    number: 1,
    roman: 'I',
    english: '1f',
  },
  chapter: {
    arabic: 'كَرُمَ',
    transliterated: 'karuma',
  },
  title: 'فَعُلَ يَفْعُلُ',
  root_letters: [
    {
      arabic: {
        ف: 'ك',
        ع: 'ر',
        ل: 'م',
      },
      english: {
        base: 'noble',
        prefixToBe: true,
      },
      transliterated: 'karuma',
    },
    {
      arabic: {
        ف: 'ق',
        ع: 'ر',
        ل: 'ب',
      },
      english: {
        base: 'near',
        prefixToBe: true,
      },
      transliterated: 'qaruba',
    },
  ],
  'صرف صغير': {
    مصدر: 'فَعَالَةً',
    معروف: {
      ماضي: 'فَعُلَ',
      مضارع: 'يَفْعُلُ',
      فاعل: 'فَعِيْلٌ',
    },
    مجهول: null,
    أمر: 'افْعُلْ',
    نهي: 'تَفْعُلْ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'فَعُلَ',
        هُمَا_مُذَكَّر: 'فَعُلَا',
        هُمَا_مُؤَنَّث: 'فَعُلَتَا',
        هُمْ: 'فَعُلُوْا',
        هِيَ: 'فَعُلَتْ',
        هُنَّ: 'فَعُلْنَ',
        أَنْتَ: 'فَعُلْتَ',
        أَنْتُمَا: 'فَعُلْتُمَا',
        أَنْتُمْ: 'فَعُلْتُمْ',
        أَنْتِ: 'فَعُلْتِ',
        أَنْتُنَّ: 'فَعُلْتُنَّ',
        أَنَا: 'فَعُلْتُ',
        نَحْنُ: 'فَعُلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يَفْعُلُ',
          هُمَا_مُذَكَّر: 'يَفْعُلَانِ',
          هُمَا_مُؤَنَّث: 'تَفْعُلَانِ',
          هُمْ: 'يَفْعُلُوْنَ',
          هِيَ: 'تَفْعُلُ',
          هُنَّ: 'يَفْعُلْنَ',
          أَنْتَ: 'تَفْعُلُ',
          أَنْتُمَا: 'تَفْعُلَانِ',
          أَنْتُمْ: 'تَفْعُلُوْنَ',
          أَنْتِ: 'تَفْعُلِيْنَ',
          أَنْتُنَّ: 'تَفْعُلْنَ',
          أَنَا: 'أَفْعُلُ',
          نَحْنُ: 'نَفْعُلُ',
        },
        منصوب: {
          هُوَ: 'يَفْعُلَ',
          هُمَا_مُذَكَّر: 'يَفْعُلَا',
          هُمَا_مُؤَنَّث: 'تَفْعُلَا',
          هُمْ: 'يَفْعُلُوْا',
          هِيَ: 'تَفْعُلَ',
          هُنَّ: 'يَفْعُلْنَ',
          أَنْتَ: 'تَفْعُلَ',
          أَنْتُمَا: 'تَفْعُلَا',
          أَنْتُمْ: 'تَفْعُلُوْا',
          أَنْتِ: 'تَفْعُلِيْ',
          أَنْتُنَّ: 'تَفْعُلْنَ',
          أَنَا: 'أَفْعُلَ',
          نَحْنُ: 'نَفْعُلَ',
        },
        مجزوم: {
          هُوَ: 'يَفْعُلْ',
          هُمَا_مُذَكَّر: 'يَفْعُلَا',
          هُمَا_مُؤَنَّث: 'تَفْعُلَا',
          هُمْ: 'يَفْعُلُوْا',
          هِيَ: 'تَفْعُلْ',
          هُنَّ: 'يَفْعُلْنَ',
          أَنْتَ: 'تَفْعُلْ',
          أَنْتُمَا: 'تَفْعُلَا',
          أَنْتُمْ: 'تَفْعُلُوْا',
          أَنْتِ: 'تَفْعُلِيْ',
          أَنْتُنَّ: 'تَفْعُلْنَ',
          أَنَا: 'أَفْعُلْ',
          نَحْنُ: 'نَفْعُلْ',
        },
      },
      أمر: {
        أَنْتَ: 'افْعُلْ',
        أَنْتُمَا: 'افْعُلَا',
        أَنْتُمْ: 'افْعُلُوْا',
        أَنْتِ: 'افْعُلِيْ',
        أَنْتُنَّ: 'افْعُلْنَ',
      },
    },
    مجهول: null,
  },
  مشتق: {
    مصدر: ['فَعَالَةً'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'فَعِيْلٌ',
        مُثَنَّى: 'فَعِيْلَانِ',
        جَمْع: 'فَعِيْلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'فَعِيْلَةٌ',
        مُثَنَّى: 'فَعِيْلَتَانِ',
        جَمْع: 'فَعِيْلَاتٌ',
      },
    },
    مفعول: null,
  },
}

export default chapter
