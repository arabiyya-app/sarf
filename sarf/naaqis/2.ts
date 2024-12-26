import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'naaqis/2',
  type: {
    arabic: 'ناقص',
    transliterated: 'naaqis',
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
  title: 'فَعَّى يُفَعِّيْ',
  root_letters: [
    {
      arabic: {
        ف: 'ص',
        ع: 'ل',
        ل: 'و',
      },
      english: 'pray',
      transliterated: 'salla',
    },
    {
      arabic: {
        ف: 'س',
        ع: 'م',
        ل: 'ي',
      },
      english: 'name',
      transliterated: 'samma',
    },
  ],
  'صرف صغير': {
    مصدر: 'تَفْعِيَةً',
    معروف: {
      ماضي: 'فَعَّى',
      مضارع: 'يُفَعِّيْ',
      فاعل: 'مُفَعٍّ',
    },
    مجهول: {
      ماضي: 'فُعِّيَ',
      مضارع: 'يُفَعَّى',
      مفعول: 'مُفَعًّى',
    },
    أمر: 'فَعِّ',
    نهي: 'تُفَعِّ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'فَعَّى',
        هُمَا_مُذَكَّر: 'فَعَّيَا',
        هُمَا_مُؤَنَّث: 'فَعَّتَا',
        هُمْ: 'فَعَّوْا',
        هِيَ: 'فَعَّتْ',
        هُنَّ: 'فَعَّيْنَ',
        أَنْتَ: 'فَعَّيْتَ',
        أَنْتُمَا: 'فَعَّيْتُمَا',
        أَنْتُمْ: 'فَعَّيْتُمْ',
        أَنْتِ: 'فَعَّيْتِ',
        أَنْتُنَّ: 'فَعَّيْتُنَّ',
        أَنَا: 'فَعَّيْتُ',
        نَحْنُ: 'فَعَّيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفَعِّيْ',
          هُمَا_مُذَكَّر: 'يُفَعِّيَانِ',
          هُمَا_مُؤَنَّث: 'تُفَعِّيَانِ',
          هُمْ: 'يُفَعُّوْنَ',
          هِيَ: 'تُفَعِّيْ',
          هُنَّ: 'يُفَعِّيْنَ',
          أَنْتَ: 'تُفَعِّيْ',
          أَنْتُمَا: 'تُفَعِّيَانِ',
          أَنْتُمْ: 'تُفَعُّوْنَ',
          أَنْتِ: 'تُفَعِّيْنَ',
          أَنْتُنَّ: 'تُفَعِّيْنَ',
          أَنَا: 'أُفَعِّيْ',
          نَحْنُ: 'نُفَعِّيْ',
        },
        منصوب: {
          هُوَ: 'يُفَعِّيَ',
          هُمَا_مُذَكَّر: 'يُفَعِّيَا',
          هُمَا_مُؤَنَّث: 'تُفَعِّيَا',
          هُمْ: 'يُفَعُّوْا',
          هِيَ: 'تُفَعِّيَ',
          هُنَّ: 'يُفَعِّيْنَ',
          أَنْتَ: 'تُفَعِّيَ',
          أَنْتُمَا: 'تُفَعِّيَا',
          أَنْتُمْ: 'تُفَعُّوْا',
          أَنْتِ: 'تُفَعِّيْ',
          أَنْتُنَّ: 'تُفَعِّيْنَ',
          أَنَا: 'أُفَعِّيَ',
          نَحْنُ: 'نُفَعِّيَ',
        },
        مجزوم: {
          هُوَ: 'يُفَعِّ',
          هُمَا_مُذَكَّر: 'يُفَعِّيَا',
          هُمَا_مُؤَنَّث: 'تُفَعِّيَا',
          هُمْ: 'يُفَعُّوْا',
          هِيَ: 'تُفَعِّ',
          هُنَّ: 'يُفَعِّيْنَ',
          أَنْتَ: 'تُفَعِّ',
          أَنْتُمَا: 'تُفَعِّيَا',
          أَنْتُمْ: 'تُفَعُّوْا',
          أَنْتِ: 'تُفَعِّيْ',
          أَنْتُنَّ: 'تُفَعِّيْنَ',
          أَنَا: 'أُفَعِّ',
          نَحْنُ: 'نُفَعِّ',
        },
      },
      أمر: {
        أَنْتَ: 'فَعِّ',
        أَنْتُمَا: 'فَعِّيَا',
        أَنْتُمْ: 'فَعُّوْا',
        أَنْتِ: 'فَعِّيْ',
        أَنْتُنَّ: 'فَعِّيْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'فُعِّيَ',
        هُمَا_مُذَكَّر: 'فُعِّيَا',
        هُمَا_مُؤَنَّث: 'فُعِّيَتَا',
        هُمْ: 'فُعُّوْا',
        هِيَ: 'فُعِّيَتْ',
        هُنَّ: 'فُعِّيْنَ',
        أَنْتَ: 'فُعِّيْتَ',
        أَنْتُمَا: 'فُعِّيْتُمَا',
        أَنْتُمْ: 'فُعِّيْتُمْ',
        أَنْتِ: 'فُعِّيْتِ',
        أَنْتُنَّ: 'فُعِّيْتُنَّ',
        أَنَا: 'فُعِّيْتُ',
        نَحْنُ: 'فُعِّيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفَعَّى',
          هُمَا_مُذَكَّر: 'يُفَعَّيَانِ',
          هُمَا_مُؤَنَّث: 'تُفَعَّيَانِ',
          هُمْ: 'يُفَعَّوْنَ',
          هِيَ: 'تُفَعَّى',
          هُنَّ: 'يُفَعَّيْنَ',
          أَنْتَ: 'تُفَعَّى',
          أَنْتُمَا: 'تُفَعَّيَانِ',
          أَنْتُمْ: 'تُفَعَّوْنَ',
          أَنْتِ: 'تُفَعَّيْنَ',
          أَنْتُنَّ: 'تُفَعَّيْنَ',
          أَنَا: 'أُفَعَّى',
          نَحْنُ: 'نُفَعَّى',
        },
        منصوب: {
          هُوَ: 'يُفَعَّى',
          هُمَا_مُذَكَّر: 'يُفَعَّيَا',
          هُمَا_مُؤَنَّث: 'تُفَعَّيَا',
          هُمْ: 'يُفَعَّوْا',
          هِيَ: 'تُفَعَّى',
          هُنَّ: 'يُفَعَّيْنَ',
          أَنْتَ: 'تُفَعَّى',
          أَنْتُمَا: 'تُفَعَّيَا',
          أَنْتُمْ: 'تُفَعَّوْا',
          أَنْتِ: 'تُفَعَّيْ',
          أَنْتُنَّ: 'تُفَعَّيْنَ',
          أَنَا: 'أُفَعَّى',
          نَحْنُ: 'نُفَعَّى',
        },
        مجزوم: {
          هُوَ: 'يُفَعَّ',
          هُمَا_مُذَكَّر: 'يُفَعَّيَا',
          هُمَا_مُؤَنَّث: 'تُفَعَّيَا',
          هُمْ: 'يُفَعَّوْا',
          هِيَ: 'تُفَعَّ',
          هُنَّ: 'يُفَعَّيْنَ',
          أَنْتَ: 'تُفَعَّ',
          أَنْتُمَا: 'تُفَعَّيَا',
          أَنْتُمْ: 'تُفَعَّوْا',
          أَنْتِ: 'تُفَعَّيْ',
          أَنْتُنَّ: 'تُفَعَّيْنَ',
          أَنَا: 'أُفَعَّ',
          نَحْنُ: 'نُفَعَّ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['تَفْعِيَةً'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُفَعٍّ',
        مُثَنَّى: 'مُفَعَّانِ',
        جَمْع: 'مُفَعُّوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفَعَّةٌ',
        مُثَنَّى: 'مُفَعَّتَانِ',
        جَمْع: 'مُفَعَّاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُفَعًّى',
        مُثَنَّى: 'مُفَعَّانِ',
        جَمْع: 'مُفَعُّوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفَعَّةٌ',
        مُثَنَّى: 'مُفَعَّتَانِ',
        جَمْع: 'مُفَعَّاتٌ',
      },
    },
  },
}

export default chapter
