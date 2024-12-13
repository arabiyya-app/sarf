import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'sahih/nasara',
  type: {
    arabic: 'صحيح',
    transliterated: 'sahih',
  },
  form: {
    number: 1,
    roman: 'I',
    english: '1a',
  },
  chapter: {
    arabic: 'نَصَرَ',
    transliterated: 'nasara',
  },
  title: 'فَعَلَ يَفْعُلُ',
  root_letters: [
    {
      arabic: {
        ف: 'ن',
        ع: 'ص',
        ل: 'ر',
      },
      english: 'help',
      transliterated: 'nasara',
    },
    {
      arabic: {
        ف: 'د',
        ع: 'خ',
        ل: 'ل',
      },
      english: 'enter',
      transliterated: 'dakhala',
    },
  ],
  'صرف صغير': {
    مصدر: 'فَعْلًا',
    معروف: {
      ماضي: 'فَعَلَ',
      مضارع: 'يَفْعُلُ',
      فاعل: 'فَاعِلٌ',
    },
    مجهول: {
      ماضي: 'فُعِلَ',
      مضارع: 'يُفْعَلُ',
      مفعول: 'مَفْعُوْلٌ',
    },
    أمر: 'افْعُلْ',
    نهي: 'تَفْعُلْ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'فَعَلَ',
        هُمَا: {
          مُذَكَّر: 'فَعَلَا',
          مُؤَنَّث: 'فَعَلَتَا',
        },
        هُمْ: 'فَعَلُوْا',
        هِيَ: 'فَعَلَتْ',
        هُنَّ: 'فَعَلْنَ',
        أَنْتَ: 'فَعَلْتَ',
        أَنْتُمَا: 'فَعَلْتُمَا',
        أَنْتُمْ: 'فَعَلْتُمْ',
        أَنْتِ: 'فَعَلْتِ',
        أَنْتُنَّ: 'فَعَلْتُنَّ',
        أَنَا: 'فَعَلْتُ',
        نَحْنُ: 'فَعَلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يَفْعُلُ',
          هُمَا: {
            مُذَكَّر: 'يَفْعُلَانِ',
            مُؤَنَّث: 'تَفْعُلَانِ',
          },
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
          هُمَا: {
            مُذَكَّر: 'يَفْعُلَا',
            مُؤَنَّث: 'تَفْعُلَا',
          },
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
          هُمَا: {
            مُذَكَّر: 'يَفْعُلَا',
            مُؤَنَّث: 'تَفْعُلَا',
          },
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
    مجهول: {
      ماضي: {
        هُوَ: 'فُعِلَ',
        هُمَا: {
          مُذَكَّر: 'فُعِلَا',
          مُؤَنَّث: 'فُعِلَتَا',
        },
        هُمْ: 'فُعِلُوْا',
        هِيَ: 'فُعِلَتْ',
        هُنَّ: 'فُعِلْنَ',
        أَنْتَ: 'فُعِلْتَ',
        أَنْتُمَا: 'فُعِلْتُمَا',
        أَنْتُمْ: 'فُعِلْتُمْ',
        أَنْتِ: 'فُعِلْتِ',
        أَنْتُنَّ: 'فُعِلْتُنَّ',
        أَنَا: 'فُعِلْتُ',
        نَحْنُ: 'فُعِلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفْعَلُ',
          هُمَا: {
            مُذَكَّر: 'يُفْعَلَانِ',
            مُؤَنَّث: 'تُفْعَلَانِ',
          },
          هُمْ: 'يُفْعَلُوْنَ',
          هِيَ: 'تُفْعَلُ',
          هُنَّ: 'يُفْعَلْنَ',
          أَنْتَ: 'تُفْعَلُ',
          أَنْتُمَا: 'تُفْعَلَانِ',
          أَنْتُمْ: 'تُفْعَلُوْنَ',
          أَنْتِ: 'تُفْعَلِيْنَ',
          أَنْتُنَّ: 'تُفْعَلْنَ',
          أَنَا: 'أُفْعَلُ',
          نَحْنُ: 'نُفْعَلُ',
        },
        منصوب: {
          هُوَ: 'يُفْعَلَ',
          هُمَا: {
            مُذَكَّر: 'يُفْعَلَا',
            مُؤَنَّث: 'تُفْعَلَا',
          },
          هُمْ: 'يُفْعَلُوْا',
          هِيَ: 'تُفْعَلَ',
          هُنَّ: 'يُفْعَلْنَ',
          أَنْتَ: 'تُفْعَلَ',
          أَنْتُمَا: 'تُفْعَلَا',
          أَنْتُمْ: 'تُفْعَلُوْا',
          أَنْتِ: 'تُفْعَلِيْ',
          أَنْتُنَّ: 'تُفْعَلْنَ',
          أَنَا: 'أُفْعَلَ',
          نَحْنُ: 'نُفْعَلَ',
        },
        مجزوم: {
          هُوَ: 'يُفْعَلْ',
          هُمَا: {
            مُذَكَّر: 'يُفْعَلَا',
            مُؤَنَّث: 'تُفْعَلَا',
          },
          هُمْ: 'يُفْعَلُوْا',
          هِيَ: 'تُفْعَلْ',
          هُنَّ: 'يُفْعَلْنَ',
          أَنْتَ: 'تُفْعَلْ',
          أَنْتُمَا: 'تُفْعَلَا',
          أَنْتُمْ: 'تُفْعَلُوْا',
          أَنْتِ: 'تُفْعَلِيْ',
          أَنْتُنَّ: 'تُفْعَلْنَ',
          أَنَا: 'أُفْعَلْ',
          نَحْنُ: 'نُفْعَلْ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['فَعْلًا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'فَاعِلٌ',
        مُثَنَّى: 'فَاعِلَانِ',
        جَمْع: 'فَاعِلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'فَاعِلَةٌ',
        مُثَنَّى: 'فَاعِلَتَانِ',
        جَمْع: 'فَاعِلَاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مَفْعُوْلٌ',
        مُثَنَّى: 'مَفْعُوْلَانِ',
        جَمْع: 'مَفْعُوْلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مَفْعُوْلَةٌ',
        مُثَنَّى: 'مَفْعُوْلَتَانِ',
        جَمْع: 'مَفْعُوْلَاتٌ',
      },
    },
  },
}

export default chapter
