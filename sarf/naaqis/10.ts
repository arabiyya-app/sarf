import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'naaqis/10',
  type: {
    arabic: 'ناقص',
    transliterated: 'naaqis',
  },
  form: {
    number: 10,
    roman: 'X',
    english: '10',
  },
  chapter: {
    arabic: 'اسْتِفْعَال',
    transliterated: "istif'aal",
  },
  title: 'اسْتَفْعَى يَسْتَفْعِيْ',
  root_letters: [
    {
      arabic: {
        ف: 'غ',
        ع: 'ن',
        ل: 'ي',
      },
      english: {
        base: 'self-sufficient',
        prefixToBe: true,
      },
      transliterated: 'istaghnaa',
    },
    {
      arabic: {
        ف: 'ل',
        ع: 'ق',
        ل: 'ي',
      },
      english: {
        base: 'lie',
        presentContinuous: 'lying',
        passive: 'lain',
        specifically: 'down',
      },
      transliterated: 'istalqaa',
    },
  ],
  'صرف صغير': {
    مصدر: 'اسْتِفْعَاءً',
    معروف: {
      ماضي: 'اسْتَفْعَى',
      مضارع: 'يَسْتَفْعِيْ',
      فاعل: 'مُسْتَفْعٍ',
    },
    مجهول: {
      ماضي: 'اسْتُفْعِيَ',
      مضارع: 'يُسْتَفْعَى',
      مفعول: 'مُسْتَفْعًى',
    },
    أمر: 'اسْتَفْعِ',
    نهي: 'تَسْتَفْعِ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'اسْتَفْعَى',
        هُمَا: {
          مُذَكَّر: 'اسْتَفْعَيَا',
          مُؤَنَّث: 'اسْتَفْعَتَا',
        },
        هُمْ: 'اسْتَفْعَوْا',
        هِيَ: 'اسْتَفْعَتْ',
        هُنَّ: 'اسْتَفْعَيْنَ',
        أَنْتَ: 'اسْتَفْعَيْتَ',
        أَنْتُمَا: 'اسْتَفْعَيْتُمَا',
        أَنْتُمْ: 'اسْتَفْعَيْتُمْ',
        أَنْتِ: 'اسْتَفْعَيْتِ',
        أَنْتُنَّ: 'اسْتَفْعَيْتُنَّ',
        أَنَا: 'اسْتَفْعَيْتُ',
        نَحْنُ: 'اسْتَفْعَيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يَسْتَفْعِيْ',
          هُمَا: {
            مُذَكَّر: 'يَسْتَفْعِيَانِ',
            مُؤَنَّث: 'تَسْتَفْعِيَانِ',
          },
          هُمْ: 'يَسْتَفْعُوْنَ',
          هِيَ: 'تَسْتَفْعِيْ',
          هُنَّ: 'يَسْتَفْعِيْنَ',
          أَنْتَ: 'تَسْتَفْعِيْ',
          أَنْتُمَا: 'تَسْتَفْعِيَانِ',
          أَنْتُمْ: 'تَسْتَفْعُوْنَ',
          أَنْتِ: 'تَسْتَفْعِيْنَ',
          أَنْتُنَّ: 'تَسْتَفْعِيْنَ',
          أَنَا: 'أَسْتَفْعِيْ',
          نَحْنُ: 'نَسْتَفْعِيْ',
        },
        منصوب: {
          هُوَ: 'يَسْتَفْعِيَ',
          هُمَا: {
            مُذَكَّر: 'يَسْتَفْعِيَا',
            مُؤَنَّث: 'تَسْتَفْعِيَا',
          },
          هُمْ: 'يَسْتَفْعُوْا',
          هِيَ: 'تَسْتَفْعِيَ',
          هُنَّ: 'يَسْتَفْعِيْنَ',
          أَنْتَ: 'تَسْتَفْعِيَ',
          أَنْتُمَا: 'تَسْتَفْعِيَا',
          أَنْتُمْ: 'تَسْتَفْعُوْا',
          أَنْتِ: 'تَسْتَفْعِيْ',
          أَنْتُنَّ: 'تَسْتَفْعِيْنَ',
          أَنَا: 'أَسْتَفْعِيَ',
          نَحْنُ: 'نَسْتَفْعِيَ',
        },
        مجزوم: {
          هُوَ: 'يَسْتَفْعِ',
          هُمَا: {
            مُذَكَّر: 'يَسْتَفْعِيَا',
            مُؤَنَّث: 'تَسْتَفْعِيَا',
          },
          هُمْ: 'يَسْتَفْعُوْا',
          هِيَ: 'تَسْتَفْعِ',
          هُنَّ: 'يَسْتَفْعِيْنَ',
          أَنْتَ: 'تَسْتَفْعِ',
          أَنْتُمَا: 'تَسْتَفْعِيَا',
          أَنْتُمْ: 'تَسْتَفْعُوْا',
          أَنْتِ: 'تَسْتَفْعِيْ',
          أَنْتُنَّ: 'تَسْتَفْعِيْنَ',
          أَنَا: 'أَسْتَفْعِ',
          نَحْنُ: 'نَسْتَفْعِ',
        },
      },
      أمر: {
        أَنْتَ: 'اسْتَفْعِ',
        أَنْتُمَا: 'اسْتَفْعِيَا',
        أَنْتُمْ: 'اسْتَفْعُوْا',
        أَنْتِ: 'اسْتَفْعِيْ',
        أَنْتُنَّ: 'اسْتَفْعِيْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'اسْتُفْعِيَ',
        هُمَا: {
          مُذَكَّر: 'اسْتُفْعِيَا',
          مُؤَنَّث: 'اسْتُفْعِيَتَا',
        },
        هُمْ: 'اسْتُفْعُوْا',
        هِيَ: 'اسْتُفْعِيَتْ',
        هُنَّ: 'اسْتُفْعِيْنَ',
        أَنْتَ: 'اسْتُفْعِيْتَ',
        أَنْتُمَا: 'اسْتُفْعِيْتُمَا',
        أَنْتُمْ: 'اسْتُفْعِيْتُمْ',
        أَنْتِ: 'اسْتُفْعِيْتِ',
        أَنْتُنَّ: 'اسْتُفْعِيْتُنَّ',
        أَنَا: 'اسْتُفْعِيْتُ',
        نَحْنُ: 'اسْتُفْعِيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُسْتَفْعَى',
          هُمَا: {
            مُذَكَّر: 'يُسْتَفْعَيَانِ',
            مُؤَنَّث: 'تُسْتَفْعَيَانِ',
          },
          هُمْ: 'يُسْتَفْعَوْنَ',
          هِيَ: 'تُسْتَفْعَيْ',
          هُنَّ: 'يُسْتَفْعَيْنَ',
          أَنْتَ: 'تُسْتَفْعَى',
          أَنْتُمَا: 'تُسْتَفْعَيَانِ',
          أَنْتُمْ: 'تُسْتَفْعَوْنَ',
          أَنْتِ: 'تُسْتَفْعَيْنَ',
          أَنْتُنَّ: 'تُسْتَفْعَيْنَ',
          أَنَا: 'أُسْتَفْعَى',
          نَحْنُ: 'نُسْتَفْعَى',
        },
        منصوب: {
          هُوَ: 'يُسْتَفْعَى',
          هُمَا: {
            مُذَكَّر: 'يُسْتَفْعَيَا',
            مُؤَنَّث: 'تُسْتَفْعَيَا',
          },
          هُمْ: 'يُسْتَفْعَوْا',
          هِيَ: 'تُسْتَفْعَى',
          هُنَّ: 'يُسْتَفْعَيْنَ',
          أَنْتَ: 'تُسْتَفْعَى',
          أَنْتُمَا: 'تُسْتَفْعَيَا',
          أَنْتُمْ: 'تُسْتَفْعَوْا',
          أَنْتِ: 'تُسْتَفْعَيْ',
          أَنْتُنَّ: 'تُسْتَفْعَيْنَ',
          أَنَا: 'أُسْتَفْعَى',
          نَحْنُ: 'نُسْتَفْعَى',
        },
        مجزوم: {
          هُوَ: 'يُسْتَفْعَ',
          هُمَا: {
            مُذَكَّر: 'يُسْتَفْعَيَا',
            مُؤَنَّث: 'تُسْتَفْعَيَا',
          },
          هُمْ: 'يُسْتَفْعَوْا',
          هِيَ: 'تُسْتَفْعَ',
          هُنَّ: 'يُسْتَفْعَيْنَ',
          أَنْتَ: 'تُسْتَفْعَ',
          أَنْتُمَا: 'تُسْتَفْعَيَا',
          أَنْتُمْ: 'تُسْتَفْعَوْا',
          أَنْتِ: 'تُسْتَفْعَيْ',
          أَنْتُنَّ: 'تُسْتَفْعَيْنَ',
          أَنَا: 'أُسْتَفْعَ',
          نَحْنُ: 'نُسْتَفْعَ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['اسْتِفْعَاءً'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُسْتَفْعٍ',
        مُثَنَّى: 'مُسْتَفْعَانِ',
        جَمْع: 'مُسْتَفْعُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُسْتَفْعَةٌ',
        مُثَنَّى: 'مُسْتَفْعَتَانِ',
        جَمْع: 'مُسْتَفْعَاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُسْتَفْعًى',
        مُثَنَّى: 'مُسْتَفْعًَانِ',
        جَمْع: 'مُسْتَفْعًُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُسْتَفْعًَةٌ',
        مُثَنَّى: 'مُسْتَفْعًَتَانِ',
        جَمْع: 'مُسْتَفْعًَاتٌ',
      },
    },
  },
}

export default chapter