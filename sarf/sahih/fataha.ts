import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'sahih/fataha',
  type: {
    arabic: 'صحيح',
    transliterated: 'sahih',
  },
  form: {
    number: 1,
    roman: 'I',
    english: '1c',
  },
  chapter: {
    arabic: 'فَتَحَ',
    transliterated: 'fataha',
  },
  title: 'فَعَلَ يَفْعَلُ',
  root_letters: [
    {
      arabic: {
        ف: 'ف',
        ع: 'ت',
        ل: 'ح',
      },
      english: 'open',
      transliterated: 'fataha',
    },
    {
      arabic: {
        ف: 'ن',
        ع: 'ص',
        ل: 'ح',
      },
      english: {
        base: 'give',
        past: 'gave',
        passive: 'given',
        specifically: 'sincere advice',
      },
      transliterated: 'nasaha',
    },
  ],
  'صرف صغير': {
    مصدر: 'فَعْلًا',
    معروف: {
      ماضي: 'فَعَلَ',
      مضارع: 'يَفْعَلُ',
      فاعل: 'فَاعِلٌ',
    },
    مجهول: {
      ماضي: 'فُعِلَ',
      مضارع: 'يُفْعَلُ',
      مفعول: 'مَفْعُوْلٌ',
    },
    أمر: 'افْعَلْ',
    نهي: 'تَفْعَلْ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'فَعَلَ',
        هُمَا_مُذَكَّر: 'فَعَلَا',
        هُمْ: 'فَعَلُوْا',
        هِيَ: 'فَعَلَتْ',
        هُمَا_مُؤَنَّث: 'فَعَلَتَا',
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
          هُوَ: 'يَفْعَلُ',
          هُمَا_مُذَكَّر: 'يَفْعَلَانِ',
          هُمْ: 'يَفْعَلُوْنَ',
          هِيَ: 'تَفْعَلُ',
          هُمَا_مُؤَنَّث: 'تَفْعَلَانِ',
          هُنَّ: 'يَفْعَلْنَ',
          أَنْتَ: 'تَفْعَلُ',
          أَنْتُمَا: 'تَفْعَلَانِ',
          أَنْتُمْ: 'تَفْعَلُوْنَ',
          أَنْتِ: 'تَفْعَلِيْنَ',
          أَنْتُنَّ: 'تَفْعَلْنَ',
          أَنَا: 'أَفْعَلُ',
          نَحْنُ: 'نَفْعَلُ',
        },
        منصوب: {
          هُوَ: 'يَفْعَلَ',
          هُمَا_مُذَكَّر: 'يَفْعَلَا',
          هُمْ: 'يَفْعَلُوْا',
          هِيَ: 'تَفْعَلَ',
          هُمَا_مُؤَنَّث: 'تَفْعَلَا',
          هُنَّ: 'يَفْعَلْنَ',
          أَنْتَ: 'تَفْعَلَ',
          أَنْتُمَا: 'تَفْعَلَا',
          أَنْتُمْ: 'تَفْعَلُوْا',
          أَنْتِ: 'تَفْعَلِيْ',
          أَنْتُنَّ: 'تَفْعَلْنَ',
          أَنَا: 'أَفْعَلَ',
          نَحْنُ: 'نَفْعَلَ',
        },
        مجزوم: {
          هُوَ: 'يَفْعَلْ',
          هُمَا_مُذَكَّر: 'يَفْعَلَا',
          هُمْ: 'يَفْعَلُوْا',
          هِيَ: 'تَفْعَلْ',
          هُمَا_مُؤَنَّث: 'تَفْعَلَا',
          هُنَّ: 'يَفْعَلْنَ',
          أَنْتَ: 'تَفْعَلْ',
          أَنْتُمَا: 'تَفْعَلَا',
          أَنْتُمْ: 'تَفْعَلُوْا',
          أَنْتِ: 'تَفْعَلِيْ',
          أَنْتُنَّ: 'تَفْعَلْنَ',
          أَنَا: 'أَفْعَلْ',
          نَحْنُ: 'نَفْعَلْ',
        },
      },
      أمر: {
        أَنْتَ: 'افْعَلْ',
        أَنْتُمَا: 'افْعَلَا',
        أَنْتُمْ: 'افْعَلُوْا',
        أَنْتِ: 'افْعَلِيْ',
        أَنْتُنَّ: 'افْعَلْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'فُعِلَ',
        هُمَا_مُذَكَّر: 'فُعِلَا',
        هُمْ: 'فُعِلُوْا',
        هِيَ: 'فُعِلَتْ',
        هُمَا_مُؤَنَّث: 'فُعِلَتَا',
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
          هُمَا_مُذَكَّر: 'يُفْعَلَانِ',
          هُمْ: 'يُفْعَلُوْنَ',
          هِيَ: 'تُفْعَلُ',
          هُمَا_مُؤَنَّث: 'تُفْعَلَانِ',
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
          هُمَا_مُذَكَّر: 'يُفْعَلَا',
          هُمْ: 'يُفْعَلُوْا',
          هِيَ: 'تُفْعَلَ',
          هُمَا_مُؤَنَّث: 'تُفْعَلَا',
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
          هُمَا_مُذَكَّر: 'يُفْعَلَا',
          هُمْ: 'يُفْعَلُوْا',
          هِيَ: 'تُفْعَلْ',
          هُمَا_مُؤَنَّث: 'تُفْعَلَا',
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
