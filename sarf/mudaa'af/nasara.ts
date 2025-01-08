import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: "mudaa'af/madda",
  type: {
    arabic: 'مضاعف',
    transliterated: "mudaa'af",
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
  title: 'فَعَّ يَفُعُّ',
  root_letters: [
    {
      arabic: {
        ف: 'م',
        ع: 'د',
        ل: 'د',
      },
      english: 'extend',
      transliterated: 'madda',
    },
  ],
  'صرف صغير': {
    مصدر: 'فَعًّا',
    معروف: {
      ماضي: 'فَعَّ',
      مضارع: 'يَفُعُّ',
      فاعل: 'فَاعٌّ',
    },
    مجهول: {
      ماضي: 'فُعَّ',
      مضارع: 'يُفَعُّ',
      مفعول: 'مَفْعُوْلٌ',
    },
    أمر: 'فُعَّ',
    نهي: 'تَفُعَّ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'فَعَّ',
        هُمَا_مُذَكَّر: 'فَعَّا',
        هُمْ: 'فَعُّوْا',
        هِيَ: 'فَعَّتْ',
        هُمَا_مُؤَنَّث: 'فَعَّتَا',
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
          هُوَ: 'يَفُعُّ',
          هُمَا_مُذَكَّر: 'يَفُعَّانِ',
          هُمْ: 'يَفُعُّوْنَ',
          هِيَ: 'تَفُعُّ',
          هُمَا_مُؤَنَّث: 'تَفُعَّانِ',
          هُنَّ: 'يَفْعُلْنَ',
          أَنْتَ: 'تَفُعُّ',
          أَنْتُمَا: 'تَفُعَّانِ',
          أَنْتُمْ: 'تَفُعُّوْنَ',
          أَنْتِ: 'تَفُعِّيْنَ',
          أَنْتُنَّ: 'تَفْعُلْنَ',
          أَنَا: 'أَفُعُّ',
          نَحْنُ: 'نَفُعُّ',
        },
        منصوب: {
          هُوَ: 'يَفُعَّ',
          هُمَا_مُذَكَّر: 'يَفُعَّا',
          هُمْ: 'يَفُعُّوْا',
          هِيَ: 'تَفُعَّ',
          هُمَا_مُؤَنَّث: 'تَفُعَّا',
          هُنَّ: 'يَفْعُلْنَ',
          أَنْتَ: 'تَفُعَّ',
          أَنْتُمَا: 'تَفُعَّا',
          أَنْتُمْ: 'تَفُعُّوْا',
          أَنْتِ: 'تَفُعِّيْ',
          أَنْتُنَّ: 'تَفْعُلْنَ',
          أَنَا: 'أَفُعَّ',
          نَحْنُ: 'نَفُعَّ',
        },
        مجزوم: {
          هُوَ: 'يَفُعَّ',
          هُمَا_مُذَكَّر: 'يَفُعَّا',
          هُمْ: 'يَفُعُّوْا',
          هِيَ: 'تَفُعَّ',
          هُمَا_مُؤَنَّث: 'تَفُعَّا',
          هُنَّ: 'يَفْعُلْنَ',
          أَنْتَ: 'تَفُعَّ',
          أَنْتُمَا: 'تَفُعَّا',
          أَنْتُمْ: 'تَفُعُّوْا',
          أَنْتِ: 'تَفُعِّيْ',
          أَنْتُنَّ: 'تَفْعُلْنَ',
          أَنَا: 'أَفُعَّ',
          نَحْنُ: 'نَفُعَّ',
        },
      },
      أمر: {
        أَنْتَ: 'فُعَّ',
        أَنْتُمَا: 'فُعَّا',
        أَنْتُمْ: 'فُعُّوْا',
        أَنْتِ: 'فُعِّيْ',
        أَنْتُنَّ: 'افْعُلْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'فُعَّ',
        هُمَا_مُذَكَّر: 'فُعَّا',
        هُمْ: 'فُعُّوْا',
        هِيَ: 'فُعَّتْ',
        هُمَا_مُؤَنَّث: 'فُعَّتَا',
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
          هُوَ: 'يُفَعُّ',
          هُمَا_مُذَكَّر: 'يُفَعَّانِ',
          هُمْ: 'يُفَعُّوْنَ',
          هِيَ: 'تُفَعُّ',
          هُمَا_مُؤَنَّث: 'تُفَعَّانِ',
          هُنَّ: 'يُفْعَلْنَ',
          أَنْتَ: 'تُفَعُّ',
          أَنْتُمَا: 'تُفَعَّانِ',
          أَنْتُمْ: 'تُفَعُّوْنَ',
          أَنْتِ: 'تُفَعِّيْنَ',
          أَنْتُنَّ: 'تُفْعَلْنَ',
          أَنَا: 'أُفَعُّ',
          نَحْنُ: 'نُفَعُّ',
        },
        منصوب: {
          هُوَ: 'يُفَعَّ',
          هُمَا_مُذَكَّر: 'يُفَعَّا',
          هُمْ: 'يُفَعُّوْا',
          هِيَ: 'تُفَعَّ',
          هُمَا_مُؤَنَّث: 'تُفَعَّا',
          هُنَّ: 'يُفْعَلْنَ',
          أَنْتَ: 'تُفَعَّ',
          أَنْتُمَا: 'تُفَعَّا',
          أَنْتُمْ: 'تُفَعُّوْا',
          أَنْتِ: 'تُفَعِّيْ',
          أَنْتُنَّ: 'تُفْعَلْنَ',
          أَنَا: 'أُفَعَّ',
          نَحْنُ: 'نُفَعَّ',
        },
        مجزوم: {
          هُوَ: 'يُفَعَّ',
          هُمَا_مُذَكَّر: 'يُفَعَّا',
          هُمْ: 'يُفَعُّوْا',
          هِيَ: 'تُفَعَّ',
          هُمَا_مُؤَنَّث: 'تُفَعَّا',
          هُنَّ: 'يُفْعَلْنَ',
          أَنْتَ: 'تُفَعَّ',
          أَنْتُمَا: 'تُفَعَّا',
          أَنْتُمْ: 'تُفَعُّوْا',
          أَنْتِ: 'تُفَعِّيْ',
          أَنْتُنَّ: 'تُفْعَلْنَ',
          أَنَا: 'أُفَعَّ',
          نَحْنُ: 'نُفَعَّ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['فَعًّا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'فَاعٌّ',
        مُثَنَّى: 'فَاعَّانِ',
        جَمْع: 'فَاعُّوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'فَاعَّةٌ',
        مُثَنَّى: 'فَاعَّتَانِ',
        جَمْع: 'فَاعَّاتٌ',
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
