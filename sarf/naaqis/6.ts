import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'naaqis/6',
  type: {
    arabic: 'ناقص',
    transliterated: 'naaqis',
  },
  form: {
    number: 6,
    roman: 'VI',
    english: '6',
  },
  chapter: {
    arabic: 'تَفَاعُل',
    transliterated: "tafaa'ul",
  },
  title: 'تَفَاعَى يَتَفَاعَى',
  root_letters: [
    {
      arabic: {
        ف: 'ه',
        ع: 'د',
        ل: 'ي',
      },
      english: {
        base: 'exchange',
        specifically: 'gifts',
      },
      transliterated: 'tahaadaa',
    },
    {
      arabic: {
        ف: 'ب',
        ع: 'ك',
        ل: 'ي',
      },
      english: {
        base: 'feign',
        specifically: 'crying',
      },
      transliterated: 'tabaakaa',
    },
    {
      arabic: {
        ف: 'ر',
        ع: 'ض',
        ل: 'ي',
      },
      english: {
        base: 'agree',
      },
      transliterated: 'taraadaa',
    },
  ],
  'صرف صغير': {
    مصدر: 'تَفَاعِيًا',
    معروف: {
      ماضي: 'تَفَاعَى',
      مضارع: 'يَتَفَاعَى',
      فاعل: 'مُتَفَاعٍ',
    },
    مجهول: {
      ماضي: 'تُفُوْعِيَ',
      مضارع: 'يُتَفَاعَى',
      مفعول: 'مُتَفَاعًا',
    },
    أمر: 'تَفَاعَ',
    نهي: 'تَتَفَاعَ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'تَفَاعَى',
        هُمَا_مُذَكَّر: 'تَفَاعَيَا',
        هُمَا_مُؤَنَّث: 'تَفَاعَتَا',
        هُمْ: 'تَفَاعَوْا',
        هِيَ: 'تَفَاعَتْ',
        هُنَّ: 'تَفَاعَيْنَ',
        أَنْتَ: 'تَفَاعَيْتَ',
        أَنْتُمَا: 'تَفَاعَيْتُمَا',
        أَنْتُمْ: 'تَفَاعَيْتُمْ',
        أَنْتِ: 'تَفَاعَيْتِ',
        أَنْتُنَّ: 'تَفَاعَيْتُنَّ',
        أَنَا: 'تَفَاعَيْتُ',
        نَحْنُ: 'تَفَاعَيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يَتَفَاعَى',
          هُمَا_مُذَكَّر: 'يَتَفَاعَيَانِ',
          هُمَا_مُؤَنَّث: 'تَتَفَاعَيَانِ',
          هُمْ: 'يَتَفَاعَوْنَ',
          هِيَ: 'تَتَفَاعَى',
          هُنَّ: 'يَتَفَاعَيْنَ',
          أَنْتَ: 'تَتَفَاعَى',
          أَنْتُمَا: 'تَتَفَاعَيَانِ',
          أَنْتُمْ: 'تَتَفَاعَوْنَ',
          أَنْتِ: 'تَتَفَاعَيْنَ',
          أَنْتُنَّ: 'تَتَفَاعَيْنَ',
          أَنَا: 'أَتَفَاعَى',
          نَحْنُ: 'نَتَفَاعَى',
        },
        منصوب: {
          هُوَ: 'يَتَفَاعَى',
          هُمَا_مُذَكَّر: 'يَتَفَاعَيَا',
          هُمَا_مُؤَنَّث: 'تَتَفَاعَيَا',
          هُمْ: 'يَتَفَاعَوْا',
          هِيَ: 'تَتَفَاعَى',
          هُنَّ: 'تَتَفَاعَيْنَ',
          أَنْتَ: 'تَتَفَاعَى',
          أَنْتُمَا: 'تَتَفَاعَيَا',
          أَنْتُمْ: 'تَتَفَاعَوْا',
          أَنْتِ: 'تَتَفَاعَيْ',
          أَنْتُنَّ: 'تَتَفَاعَيْنَ',
          أَنَا: 'أَتَفَاعَى',
          نَحْنُ: 'نَتَفَاعَى',
        },
        مجزوم: {
          هُوَ: 'يَتَفَاعَ',
          هُمَا_مُذَكَّر: 'يَتَفَاعَيَا',
          هُمَا_مُؤَنَّث: 'تَتَفَاعَيَا',
          هُمْ: 'يَتَفَاعَوْا',
          هِيَ: 'تَتَفَاعَ',
          هُنَّ: 'يَتَفَاعَيْنَ',
          أَنْتَ: 'تَتَفَاعَ',
          أَنْتُمَا: 'تَتَفَاعَيَا',
          أَنْتُمْ: 'تَتَفَاعَوْا',
          أَنْتِ: 'تَتَفَاعَيْ',
          أَنْتُنَّ: 'تَتَفَاعَيْنَ',
          أَنَا: 'أَتَفَاعَ',
          نَحْنُ: 'نَتَفَاعَ',
        },
      },
      أمر: {
        أَنْتَ: 'تَفَاعَ',
        أَنْتُمَا: 'تَفَاعَيَا',
        أَنْتُمْ: 'تَفَاعَوْا',
        أَنْتِ: 'تَفَاعَيْ',
        أَنْتُنَّ: 'تَفَاعَيْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'تُفُوْعِيَ',
        هُمَا_مُذَكَّر: 'تُفُوْعِيَا',
        هُمَا_مُؤَنَّث: 'تُفُوْعِيَتَا',
        هُمْ: 'تُفُوْعُوْا',
        هِيَ: 'تُفُوْعِيَتْ',
        هُنَّ: 'تُفُوْعِيْنَ',
        أَنْتَ: 'تُفُوْعِيْتَ',
        أَنْتُمَا: 'تُفُوْعِيْتُمَا',
        أَنْتُمْ: 'تُفُوْعِيْتُمْ',
        أَنْتِ: 'تُفُوْعِيْتِ',
        أَنْتُنَّ: 'تُفُوْعِيْتُنَّ',
        أَنَا: 'تُفُوْعِيْتُ',
        نَحْنُ: 'تُفُوْعِيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُتَفَاعَى',
          هُمَا_مُذَكَّر: 'يُتَفَاعَيَانِ',
          هُمَا_مُؤَنَّث: 'تُتَفَاعَيَانِ',
          هُمْ: 'يُتَفَاعَوْنَ',
          هِيَ: 'تُتَفَاعَى',
          هُنَّ: 'يُتَفَاعَيْنَ',
          أَنْتَ: 'تُتَفَاعَى',
          أَنْتُمَا: 'تُتَفَاعَيَانِ',
          أَنْتُمْ: 'تُتَفَاعَوْنَ',
          أَنْتِ: 'تُتَفَاعَيْنَ',
          أَنْتُنَّ: 'تُتَفَاعَيْنَ',
          أَنَا: 'أُتَفَاعَى',
          نَحْنُ: 'نُتَفَاعَى',
        },
        منصوب: {
          هُوَ: 'يُتَفَاعَى',
          هُمَا_مُذَكَّر: 'يُتَفَاعَيَا',
          هُمَا_مُؤَنَّث: 'تُتَفَاعَيَا',
          هُمْ: 'يُتَفَاعَوْا',
          هِيَ: 'تُتَفَاعَى',
          هُنَّ: 'تُتَفَاعَيْنَ',
          أَنْتَ: 'تُتَفَاعَى',
          أَنْتُمَا: 'تُتَفَاعَيَا',
          أَنْتُمْ: 'تُتَفَاعَوْا',
          أَنْتِ: 'تُتَفَاعَيْ',
          أَنْتُنَّ: 'تُتَفَاعَيْنَ',
          أَنَا: 'أُتَفَاعَى',
          نَحْنُ: 'نُتَفَاعَى',
        },
        مجزوم: {
          هُوَ: 'يُتَفَاعَ',
          هُمَا_مُذَكَّر: 'يُتَفَاعَيَا',
          هُمَا_مُؤَنَّث: 'تُتَفَاعَيَا',
          هُمْ: 'يُتَفَاعَوْا',
          هِيَ: 'تُتَفَاعَ',
          هُنَّ: 'يُتَفَاعَيْنَ',
          أَنْتَ: 'تُتَفَاعَ',
          أَنْتُمَا: 'تُتَفَاعَيَا',
          أَنْتُمْ: 'تُتَفَاعَوْا',
          أَنْتِ: 'تُتَفَاعَيْ',
          أَنْتُنَّ: 'تُتَفَاعَيْنَ',
          أَنَا: 'أُتَفَاعَ',
          نَحْنُ: 'نُتَفَاعَ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['تَفَاعِيًا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُتَفَاعٍ',
        مُثَنَّى: 'مُتَفَاعَانِ',
        جَمْع: 'مُتَفَاعُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُتَفَاعَةٌ',
        مُثَنَّى: 'مُتَفَاعَتَانِ',
        جَمْع: 'مُتَفَاعَاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُتَفَاعًا',
        مُثَنَّى: 'مُتَفَاعًَانِ',
        جَمْع: 'مُتَفَاعًُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُتَفَاعًَةٌ',
        مُثَنَّى: 'مُتَفَاعًَتَانِ',
        جَمْع: 'مُتَفَاعًَاتٌ',
      },
    },
  },
}

export default chapter
