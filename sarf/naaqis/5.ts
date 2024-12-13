import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'naaqis/5',
  type: {
    arabic: 'ناقص',
    transliterated: 'naaqis',
  },
  form: {
    number: 5,
    roman: 'V',
    english: '5',
  },
  chapter: {
    arabic: 'تَفَعُّل',
    transliterated: "tafa'ul",
  },
  title: 'تَفَعَّى يَتَفَعَّى',
  root_letters: [
    {
      arabic: {
        ف: 'م',
        ع: 'ن',
        ل: 'و',
      },
      english: 'wish',
      transliterated: 'tamannaa',
    },
    {
      arabic: {
        ف: 'ج',
        ع: 'ل',
        ل: 'و',
      },
      english: 'manifest',
      transliterated: 'tajallaa',
    },
    {
      arabic: {
        ف: 'خ',
        ع: 'ط',
        ل: 'و',
      },
      english: {
        base: 'climb',
        specifically: 'over',
      },
      transliterated: 'takhattaa',
    },
  ],
  'صرف صغير': {
    مصدر: 'تَفَعِّيًا',
    معروف: {
      ماضي: 'تَفَعَّى',
      مضارع: 'يَتَفَعَّى',
      فاعل: 'فُتَفَعٍّ',
    },
    مجهول: {
      ماضي: 'تُفُعِّيَ',
      مضارع: 'يُتَفَعَّى',
      مفعول: 'فُتَفَعًّى',
    },
    أمر: 'تَفَعَّ',
    نهي: 'تَتَفَعَّ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'تَفَعَّى',
        هُمَا: {
          مُذَكَّر: 'تَفَعَّيَا',
          مُؤَنَّث: 'تَفَعَّتَا',
        },
        هُمْ: 'تَفَعَّوْا',
        هِيَ: 'تَفَعَّتْ',
        هُنَّ: 'تَفَعَّيْنَ',
        أَنْتَ: 'تَفَعَّيْتَ',
        أَنْتُمَا: 'تَفَعَّيْتُمَا',
        أَنْتُمْ: 'تَفَعَّيْتُمْ',
        أَنْتِ: 'تَفَعَّيْتِ',
        أَنْتُنَّ: 'تَفَعَّيْتُنَّ',
        أَنَا: 'تَفَعَّيْتُ',
        نَحْنُ: 'تَفَعَّيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يَتَفَعَّى',
          هُمَا: {
            مُذَكَّر: 'يَتَفَعَّيَانِ',
            مُؤَنَّث: 'تَتَفَعَّيَانِ',
          },
          هُمْ: 'يَتَفَعَّوْنَ',
          هِيَ: 'تَتَفَعَّى',
          هُنَّ: 'يَتَفَعَّيْنَ',
          أَنْتَ: 'تَتَفَعَّى',
          أَنْتُمَا: 'تَتَفَعَّيَانِ',
          أَنْتُمْ: 'تَتَفَعَّوْنَ',
          أَنْتِ: 'تَتَفَعَّيْنَ',
          أَنْتُنَّ: 'تَتَفَعَّيْنَ',
          أَنَا: 'أَتَفَعَّى',
          نَحْنُ: 'نَتَفَعَّى',
        },
        منصوب: {
          هُوَ: 'يَتَفَعَّى',
          هُمَا: {
            مُذَكَّر: 'يَتَفَعَّيَا',
            مُؤَنَّث: 'تَتَفَعَّيَا',
          },
          هُمْ: 'يَتَفَعَّوْا',
          هِيَ: 'تَتَفَعَّى',
          هُنَّ: 'يَتَفَعَّيْنَ',
          أَنْتَ: 'تَتَفَعَّى',
          أَنْتُمَا: 'تَتَفَعَّيَا',
          أَنْتُمْ: 'تَتَفَعَّوْا',
          أَنْتِ: 'تَتَفَعَّيْ',
          أَنْتُنَّ: 'تَتَفَعَّيْنَ',
          أَنَا: 'أَتَفَعَّى',
          نَحْنُ: 'نَتَفَعَّى',
        },
        مجزوم: {
          هُوَ: 'يَتَفَعَّ',
          هُمَا: {
            مُذَكَّر: 'يَتَفَعَّيَا',
            مُؤَنَّث: 'تَتَفَعَّيَا',
          },
          هُمْ: 'يَتَفَعَّوْا',
          هِيَ: 'تَتَفَعَّ',
          هُنَّ: 'يَتَفَعَّيْنَ',
          أَنْتَ: 'تَتَفَعَّ',
          أَنْتُمَا: 'تَتَفَعَّيَا',
          أَنْتُمْ: 'تَتَفَعَّوْا',
          أَنْتِ: 'تَتَفَعَّيْ',
          أَنْتُنَّ: 'تَتَفَعَّيْنَ',
          أَنَا: 'أَتَفَعَّ',
          نَحْنُ: 'نَتَفَعَّ',
        },
      },
      أمر: {
        أَنْتَ: 'تَفَعَّ',
        أَنْتُمَا: 'تَفَعَّيَا',
        أَنْتُمْ: 'تَفَعَّوْا',
        أَنْتِ: 'تَفَعَّيْ',
        أَنْتُنَّ: 'تَفَعَّيْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'تُفُعِّيَ',
        هُمَا: {
          مُذَكَّر: 'تُفُعِّيَا',
          مُؤَنَّث: 'تُفُعِّيَتَا',
        },
        هُمْ: 'تُفُعُّوْا',
        هِيَ: 'تُفُعِّيَتْ',
        هُنَّ: 'تُفُعِّيْنَ',
        أَنْتَ: 'تُفُعِّيْتَ',
        أَنْتُمَا: 'تُفُعِّيْتُمَا',
        أَنْتُمْ: 'تُفُعِّيْتُمْ',
        أَنْتِ: 'تُفُعِّيْتِ',
        أَنْتُنَّ: 'تُفُعِّيْتُنَّ',
        أَنَا: 'تُفُعِّيْتُ',
        نَحْنُ: 'تُفُعِّيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُتَفَعَّى',
          هُمَا: {
            مُذَكَّر: 'يُتَفَعَّيَانِ',
            مُؤَنَّث: 'تُتَفَعَّيَانِ',
          },
          هُمْ: 'يُتَفَعَّوْنَ',
          هِيَ: 'تُتَفَعَّى',
          هُنَّ: 'يُتَفَعَّيْنَ',
          أَنْتَ: 'تُتَفَعَّى',
          أَنْتُمَا: 'تُتَفَعَّيَانِ',
          أَنْتُمْ: 'تُتَفَعَّوْنَ',
          أَنْتِ: 'تُتَفَعَّيْنَ',
          أَنْتُنَّ: 'تُتَفَعَّيْنَ',
          أَنَا: 'أُتَفَعَّى',
          نَحْنُ: 'نُتَفَعَّى',
        },
        منصوب: {
          هُوَ: 'يُتَفَعَّى',
          هُمَا: {
            مُذَكَّر: 'يُتَفَعَّيَا',
            مُؤَنَّث: 'تُتَفَعَّيَا',
          },
          هُمْ: 'يُتَفَعَّوْا',
          هِيَ: 'تُتَفَعَّى',
          هُنَّ: 'يُتَفَعَّيْنَ',
          أَنْتَ: 'تُتَفَعَّى',
          أَنْتُمَا: 'تُتَفَعَّيَا',
          أَنْتُمْ: 'تُتَفَعَّوْا',
          أَنْتِ: 'تُتَفَعَّيْ',
          أَنْتُنَّ: 'تُتَفَعَّيْنَ',
          أَنَا: 'أُتَفَعَّى',
          نَحْنُ: 'نُتَفَعَّى',
        },
        مجزوم: {
          هُوَ: 'يُتَفَعَّ',
          هُمَا: {
            مُذَكَّر: 'يُتَفَعَّيَا',
            مُؤَنَّث: 'تُتَفَعَّيَا',
          },
          هُمْ: 'يُتَفَعَّوْا',
          هِيَ: 'تُتَفَعَّ',
          هُنَّ: 'يُتَفَعَّيْنَ',
          أَنْتَ: 'تُتَفَعَّ',
          أَنْتُمَا: 'تُتَفَعَّيَا',
          أَنْتُمْ: 'تُتَفَعَّوْا',
          أَنْتِ: 'تُتَفَعَّيْ',
          أَنْتُنَّ: 'تُتَفَعَّيْنَ',
          أَنَا: 'أُتَفَعَّ',
          نَحْنُ: 'نُتَفَعَّ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['تَفَعِّيًا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'فُتَفَعٍّ',
        مُثَنَّى: 'فُتَفَعَّانِ',
        جَمْع: 'فُتَفَعُّوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'فُتَفَعَّةٌ',
        مُثَنَّى: 'فُتَفَعَّتَانِ',
        جَمْع: 'فُتَفَعَّاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'فُتَفَعًّى',
        مُثَنَّى: 'فُتَفَعًَّانِ',
        جَمْع: 'فُتَفَعًُّوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'فُتَفَعًَّةٌ',
        مُثَنَّى: 'فُتَفَعًَّتَانِ',
        جَمْع: 'فُتَفَعًَّاتٌ',
      },
    },
  },
}

export default chapter
