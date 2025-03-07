import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'naaqis/3',
  type: {
    arabic: 'ناقص',
    transliterated: 'naaqis',
  },
  form: {
    number: 3,
    roman: 'III',
    english: '3',
  },
  chapter: {
    arabic: 'مُفَاعَلَة',
    transliterated: "mufaa'ala",
  },
  title: 'فَاعَى يُفَاعِيْ',
  root_letters: [
    {
      arabic: {
        ف: 'ن',
        ع: 'د',
        ل: 'و',
      },
      english: 'call',
      transliterated: 'naadaa',
    },
    {
      arabic: {
        ف: 'ن',
        ع: 'ج',
        ل: 'و',
      },
      english: 'whisper',
      transliterated: 'naajaa',
    },
  ],
  'صرف صغير': {
    مصدر: 'مُفَاعَاةً',
    معروف: {
      ماضي: 'فَاعَى',
      مضارع: 'يُفَاعِيْ',
      فاعل: 'مُفَاعٍ',
    },
    مجهول: {
      ماضي: 'فُوْعِيَ',
      مضارع: 'يُفَاعَى',
      مفعول: 'مُفَاعًى',
    },
    أمر: 'فَاعِ',
    نهي: 'تُفَاعِ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'فَاعَى',
        هُمَا_مُذَكَّر: 'فَاعَيَا',
        هُمْ: 'فَاعَوْا',
        هِيَ: 'فَاعَتْ',
        هُمَا_مُؤَنَّث: 'فَاعَتَا',
        هُنَّ: 'فَاعَيْنَ',
        أَنْتَ: 'فَاعَيْتَ',
        أَنْتُمَا: 'فَاعَيْتُمَا',
        أَنْتُمْ: 'فَاعَيْتُمْ',
        أَنْتِ: 'فَاعَيْتِ',
        أَنْتُنَّ: 'فَاعَيْتُنَّ',
        أَنَا: 'فَاعَيْتُ',
        نَحْنُ: 'فَاعَيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفَاعِيْ',
          هُمَا_مُذَكَّر: 'يُفَاعِيَانِ',
          هُمْ: 'يُفَاعُوْنَ',
          هِيَ: 'تُفَاعِيْ',
          هُمَا_مُؤَنَّث: 'تُفَاعِيَانَ',
          هُنَّ: 'يُفَاعِيْنَ',
          أَنْتَ: 'تُفَاعِيْ',
          أَنْتُمَا: 'تُفَاعِيَانِ',
          أَنْتُمْ: 'تُفَاعُوْنَ',
          أَنْتِ: 'تُفَاعِيْنَ',
          أَنْتُنَّ: 'تُفَاعِيْنَ',
          أَنَا: 'أُفَاعِيْ',
          نَحْنُ: 'نُفَاعِيْ',
        },
        منصوب: {
          هُوَ: 'يُفَاعِيَ',
          هُمَا_مُذَكَّر: 'يُفَاعِيَا',
          هُمْ: 'يُفَاعُوْا',
          هِيَ: 'تُفَاعِيَ',
          هُمَا_مُؤَنَّث: 'تُفَاعِيَا',
          هُنَّ: 'يُفَاعِيْنَ',
          أَنْتَ: 'تُفَاعِيَ',
          أَنْتُمَا: 'تُفَاعِيَا',
          أَنْتُمْ: 'تُفَاعُوْا',
          أَنْتِ: 'تُفَاعِيْ',
          أَنْتُنَّ: 'تُفَاعِيْنَ',
          أَنَا: 'أُفَاعِيَ',
          نَحْنُ: 'نُفَاعِيَ',
        },
        مجزوم: {
          هُوَ: 'يُفَاعِ',
          هُمَا_مُذَكَّر: 'يُفَاعِيَا',
          هُمْ: 'يُفَاعُوْا',
          هِيَ: 'تُفَاعِ',
          هُمَا_مُؤَنَّث: 'تُفَاعِيَا',
          هُنَّ: 'يُفَاعِيْنَ',
          أَنْتَ: 'تُفَاعِ',
          أَنْتُمَا: 'تُفَاعِيَا',
          أَنْتُمْ: 'تُفَاعُوْا',
          أَنْتِ: 'تُفَاعِيْ',
          أَنْتُنَّ: 'تُفَاعِيْنَ',
          أَنَا: 'أُفَاعِ',
          نَحْنُ: 'نُفَاعِ',
        },
      },
      أمر: {
        أَنْتَ: 'فَاعِ',
        أَنْتُمَا: 'فَاعِيَا',
        أَنْتُمْ: 'فَاعُوْا',
        أَنْتِ: 'فَاعِيْ',
        أَنْتُنَّ: 'فَاعِيْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'فُوْعِيَ',
        هُمَا_مُذَكَّر: 'فُوْعِيَا',
        هُمْ: 'فُوْعُوْا',
        هِيَ: 'فُوْعِيَتْ',
        هُمَا_مُؤَنَّث: 'فُوْعِيَتَا',
        هُنَّ: 'فُوْعِيْنَ',
        أَنْتَ: 'فُوْعِيْتَ',
        أَنْتُمَا: 'فُوْعِيْتُمَا',
        أَنْتُمْ: 'فُوْعِيْتُمْ',
        أَنْتِ: 'فُوْعِيْتِ',
        أَنْتُنَّ: 'فُوْعِيْتُنَّ',
        أَنَا: 'فُوْعِيْتُ',
        نَحْنُ: 'فُوْعِيْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفَاعَى',
          هُمَا_مُذَكَّر: 'يُفَاعَيَانِ',
          هُمْ: 'يُفَاعَوْنَ',
          هِيَ: 'تُفَاعَى',
          هُمَا_مُؤَنَّث: 'تُفَاعَيَانَ',
          هُنَّ: 'يُفَاعَيْنَ',
          أَنْتَ: 'تُفَاعَى',
          أَنْتُمَا: 'تُفَاعَيَانِ',
          أَنْتُمْ: 'تُفَاعَوْنَ',
          أَنْتِ: 'تُفَاعَيْنَ',
          أَنْتُنَّ: 'تُفَاعَيْنَ',
          أَنَا: 'أُفَاعَى',
          نَحْنُ: 'نُفَاعَى',
        },
        منصوب: {
          هُوَ: 'يُفَاعَى',
          هُمَا_مُذَكَّر: 'يُفَاعَيَا',
          هُمْ: 'يُفَاعَوْا',
          هِيَ: 'تُفَاعَى',
          هُمَا_مُؤَنَّث: 'تُفَاعَيَا',
          هُنَّ: 'يُفَاعَيْنَ',
          أَنْتَ: 'تُفَاعَى',
          أَنْتُمَا: 'تُفَاعَيَا',
          أَنْتُمْ: 'تُفَاعَوْا',
          أَنْتِ: 'تُفَاعَيْ',
          أَنْتُنَّ: 'تُفَاعَيْنَ',
          أَنَا: 'أُفَاعَى',
          نَحْنُ: 'نُفَاعَى',
        },
        مجزوم: {
          هُوَ: 'يُفَاعَ',
          هُمَا_مُذَكَّر: 'يُفَاعَيَا',
          هُمْ: 'يُفَاعَوْا',
          هِيَ: 'تُفَاعَ',
          هُمَا_مُؤَنَّث: 'تُفَاعَيَا',
          هُنَّ: 'يُفَاعَيْنَ',
          أَنْتَ: 'تُفَاعَ',
          أَنْتُمَا: 'تُفَاعَيَا',
          أَنْتُمْ: 'تُفَاعَوْا',
          أَنْتِ: 'تُفَاعَيْ',
          أَنْتُنَّ: 'تُفَاعَيْنَ',
          أَنَا: 'أُفَاعَ',
          نَحْنُ: 'نُفَاعَ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['مُفَاعَاةً'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُفَاعٍ',
        مُثَنَّى: 'مُفَاعَانِ',
        جَمْع: 'مُفَاعُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفَاعَةٌ',
        مُثَنَّى: 'مُفَاعَتَانِ',
        جَمْع: 'مُفَاعَاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُفَاعًى',
        مُثَنَّى: 'مُفَاعًَانِ',
        جَمْع: 'مُفَاعًُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفَاعًَةٌ',
        مُثَنَّى: 'مُفَاعًَتَانِ',
        جَمْع: 'مُفَاعًَاتٌ',
      },
    },
  },
}

export default chapter
