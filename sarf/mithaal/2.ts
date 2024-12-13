import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'mithaal/2',
  type: {
    arabic: 'مثال',
    transliterated: 'mithaal',
  },
  form: {
    number: 2,
    roman: 'II',
    english: '2',
  },
  chapter: {
    arabic: 'تَفْعِيْل',
    transliterated: "taf'eel",
  },
  title: 'فَعَّلَ يُفَعِّلُ',
  root_letters: [
    {
      arabic: {
        ف: 'و',
        ع: 'ح',
        ل: 'د',
      },
      english: 'unite',
      transliterated: 'wahhada',
    },
  ],
  'صرف صغير': {
    مصدر: 'تَفْعِيْلًا',
    معروف: {
      ماضي: 'فَعَّلَ',
      مضارع: 'يُفَعِّلُ',
      فاعل: 'مُفَعِّلٌ',
    },
    مجهول: {
      ماضي: 'فُعِّلَ',
      مضارع: 'يُفَعَّلُ',
      مفعول: 'مُفَعَّلٌ',
    },
    أمر: 'فَعِّلْ',
    نهي: 'تُفَعِّلْ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'فَعَّلَ',
        هُمَا: {
          مُذَكَّر: 'فَعَّلَا',
          مُؤَنَّث: 'فَعَّلَتَا',
        },
        هُمْ: 'فَعَّلُوْا',
        هِيَ: 'فَعَّلَتْ',
        هُنَّ: 'فَعَّلْنَ',
        أَنْتَ: 'فَعَّلْتَ',
        أَنْتُمَا: 'فَعَّلْتُمَا',
        أَنْتُمْ: 'فَعَّلْتُمْ',
        أَنْتِ: 'فَعَّلْتِ',
        أَنْتُنَّ: 'فَعَّلْتُنَّ',
        أَنَا: 'فَعَّلْتُ',
        نَحْنُ: 'فَعَّلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفَعِّلُ',
          هُمَا: {
            مُذَكَّر: 'يُفَعِّلَانِ',
            مُؤَنَّث: 'تُفَعِّلَانِ',
          },
          هُمْ: 'يُفَعِّلُوْنَ',
          هِيَ: 'تُفَعِّلُ',
          هُنَّ: 'يُفَعِّلْنَ',
          أَنْتَ: 'تُفَعِّلُ',
          أَنْتُمَا: 'تُفَعِّلَانِ',
          أَنْتُمْ: 'تُفَعِّلُوْنَ',
          أَنْتِ: 'تُفَعِّلِيْنَ',
          أَنْتُنَّ: 'تُفَعِّلْنَ',
          أَنَا: 'أُفَعِّلُ',
          نَحْنُ: 'نُفَعِّلُ',
        },
        منصوب: {
          هُوَ: 'يُفَعِّلَ',
          هُمَا: {
            مُذَكَّر: 'يُفَعِّلَا',
            مُؤَنَّث: 'تُفَعِّلَا',
          },
          هُمْ: 'يُفَعِّلُوْا',
          هِيَ: 'تُفَعِّلَ',
          هُنَّ: 'يُفَعِّلْنَ',
          أَنْتَ: 'تُفَعِّلَ',
          أَنْتُمَا: 'تُفَعِّلَا',
          أَنْتُمْ: 'تُفَعِّلُوْا',
          أَنْتِ: 'تُفَعِّلِيْ',
          أَنْتُنَّ: 'تُفَعِّلْنَ',
          أَنَا: 'أُفَعِّلَ',
          نَحْنُ: 'نُفَعِّلَ',
        },
        مجزوم: {
          هُوَ: 'يُفَعِّلْ',
          هُمَا: {
            مُذَكَّر: 'يُفَعِّلَا',
            مُؤَنَّث: 'تُفَعِّلَا',
          },
          هُمْ: 'يُفَعِّلُوْا',
          هِيَ: 'تُفَعِّلْ',
          هُنَّ: 'يُفَعِّلْنَ',
          أَنْتَ: 'تُفَعِّلْ',
          أَنْتُمَا: 'تُفَعِّلَا',
          أَنْتُمْ: 'تُفَعِّلُوْا',
          أَنْتِ: 'تُفَعِّلِيْ',
          أَنْتُنَّ: 'تُفَعِّلْنَ',
          أَنَا: 'أُفَعِّلْ',
          نَحْنُ: 'نُفَعِّلْ',
        },
      },
      أمر: {
        أَنْتَ: 'فَعِّلْ',
        أَنْتُمَا: 'فَعِّلَا',
        أَنْتُمْ: 'فَعِّلُوا',
        أَنْتِ: 'فَعِّلِيْ',
        أَنْتُنَّ: 'فَعِّلْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'فُعِّلَ',
        هُمَا: {
          مُذَكَّر: 'فُعِّلَا',
          مُؤَنَّث: 'فُعِّلَتَا',
        },
        هُمْ: 'فُعِّلُوْا',
        هِيَ: 'فُعِّلَتْ',
        هُنَّ: 'فُعِّلْنَ',
        أَنْتَ: 'فُعِّلْتَ',
        أَنْتُمَا: 'فُعِّلْتُمَا',
        أَنْتُمْ: 'فُعِّلْتُمْ',
        أَنْتِ: 'فُعِّلْتِ',
        أَنْتُنَّ: 'فُعِّلْتُنَّ',
        أَنَا: 'فُعِّلْتُ',
        نَحْنُ: 'فُعِّلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفَعَّلُ',
          هُمَا: {
            مُذَكَّر: 'يُفَعَّلَانِ',
            مُؤَنَّث: 'تُفَعَّلَانِ',
          },
          هُمْ: 'يُفَعَّلُوْنَ',
          هِيَ: 'تُفَعَّلُ',
          هُنَّ: 'يُفَعَّلْنَ',
          أَنْتَ: 'تُفَعَّلُ',
          أَنْتُمَا: 'تُفَعَّلَانِ',
          أَنْتُمْ: 'تُفَعَّلُوْنَ',
          أَنْتِ: 'تُفَعَّلِيْنَ',
          أَنْتُنَّ: 'تُفَعَّلْنَ',
          أَنَا: 'أُفَعَّلُ',
          نَحْنُ: 'نُفَعَّلُ',
        },
        منصوب: {
          هُوَ: 'يُفَعَّلَ',
          هُمَا: {
            مُذَكَّر: 'يُفَعَّلَا',
            مُؤَنَّث: 'تُفَعَّلَا',
          },
          هُمْ: 'يُفَعَّلُوْا',
          هِيَ: 'تُفَعَّلَ',
          هُنَّ: 'يُفَعَّلْنَ',
          أَنْتَ: 'تُفَعَّلَ',
          أَنْتُمَا: 'تُفَعَّلَا',
          أَنْتُمْ: 'تُفَعَّلُوْا',
          أَنْتِ: 'تُفَعَّلِيْ',
          أَنْتُنَّ: 'تُفَعَّلْنَ',
          أَنَا: 'أُفَعَّلَ',
          نَحْنُ: 'نُفَعَّلَ',
        },
        مجزوم: {
          هُوَ: 'يُفَعَّلْ',
          هُمَا: {
            مُذَكَّر: 'يُفَعَّلَا',
            مُؤَنَّث: 'تُفَعَّلَا',
          },
          هُمْ: 'يُفَعَّلُوْا',
          هِيَ: 'تُفَعَّلْ',
          هُنَّ: 'يُفَعَّلْنَ',
          أَنْتَ: 'تُفَعَّلْ',
          أَنْتُمَا: 'تُفَعَّلَا',
          أَنْتُمْ: 'تُفَعَّلُوْا',
          أَنْتِ: 'تُفَعَّلِيْ',
          أَنْتُنَّ: 'تُفَعَّلْنَ',
          أَنَا: 'أُفَعَّلْ',
          نَحْنُ: 'نُفَعَّلْ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['تَفْعِيْلًا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُفَعِّلٌ',
        مُثَنَّى: 'مُفَعِّلَانِ',
        جَمْع: 'مُفَعِّلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفَعِّلَةٌ',
        مُثَنَّى: 'مُفَعِّلَتَانِ',
        جَمْع: 'مُفَعِّلَاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُفَعَّلٌ',
        مُثَنَّى: 'مُفَعَّلَانِ',
        جَمْع: 'مُفَعَّلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفَعَّلَةٌ',
        مُثَنَّى: 'مُفَعَّلَتَانِ',
        جَمْع: 'مُفَعَّلَاتٌ',
      },
    },
  },
}

export default chapter
