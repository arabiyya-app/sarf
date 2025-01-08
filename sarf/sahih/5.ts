import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'sahih/5',
  type: {
    arabic: 'صحيح',
    transliterated: 'sahih',
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
  title: 'تَفَعَّلَ يَتَفَعَّلُ',
  root_letters: [
    {
      arabic: {
        ف: 'ذ',
        ع: 'ك',
        ل: 'ر',
      },
      english: 'remember',
      transliterated: 'tadhakkara',
    },
    {
      arabic: {
        ف: 'ح',
        ع: 'ر',
        ل: 'ك',
      },
      english: 'move',
      transliterated: 'taharraka',
    },
    {
      arabic: {
        ف: 'ق',
        ع: 'ب',
        ل: 'ل',
      },
      english: 'accept',
      transliterated: 'taqabbala',
    },
  ],
  'صرف صغير': {
    مصدر: 'تَفَعُّلًا',
    معروف: {
      ماضي: 'تَفَعَّلَ',
      مضارع: 'يَتَفَعَّلُ',
      فاعل: 'مُتَفَعِّلٌ',
    },
    مجهول: {
      ماضي: 'تُفُعِّلَ',
      مضارع: 'يُتَفَعَّلُ',
      مفعول: 'مُتَفَعَّلٌ',
    },
    أمر: 'تَفَعَّلْ',
    نهي: 'تَتَفَعَّلْ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'تَفَعَّلَ',
        هُمَا_مُذَكَّر: 'تَفَعَّلَا',
        هُمْ: 'تَفَعَّلُوْا',
        هِيَ: 'تَفَعَّلَتْ',
        هُمَا_مُؤَنَّث: 'تَفَعَّلَتَا',
        هُنَّ: 'تَفَعَّلْنَ',
        أَنْتَ: 'تَفَعَّلْتَ',
        أَنْتُمَا: 'تَفَعَّلْتُمَا',
        أَنْتُمْ: 'تَفَعَّلتُمْ',
        أَنْتِ: 'تَفَعَّلْتِ',
        أَنْتُنَّ: 'تَفَعَّلْتُنَّ',
        أَنَا: 'تَفَعَّلْتُ',
        نَحْنُ: 'تَفَعَّلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يَتَفَعَّلُ',
          هُمَا_مُذَكَّر: 'يَتَفَعَّلَانِ',
          هُمْ: 'يَتَفَعَّلُوْنَ',
          هِيَ: 'تَتَفَعَّلُ',
          هُمَا_مُؤَنَّث: 'تَتَفَعَّلَانِ',
          هُنَّ: 'يَتَفَعَّلْنَ',
          أَنْتَ: 'تَتَفَعَّلُ',
          أَنْتُمَا: 'تَتَفَعَّلَانِ',
          أَنْتُمْ: 'تَتَفَعَّلُوْنَ',
          أَنْتِ: 'تَتَفَعَّلِيْنَ',
          أَنْتُنَّ: 'تَتَفَعَّلْنَ',
          أَنَا: 'أَتَفَعَّلُ',
          نَحْنُ: 'نَتَفَعَّلُ',
        },
        منصوب: {
          هُوَ: 'يَتَفَعَّلَ',
          هُمَا_مُذَكَّر: 'يَتَفَعَّلَا',
          هُمْ: 'يَتَفَعَّلُوْا',
          هِيَ: 'تَتَفَعَّلَ',
          هُمَا_مُؤَنَّث: 'تَتَفَعَّلَا',
          هُنَّ: 'يَتَفَعَّلْنَ',
          أَنْتَ: 'تَتَفَعَّلَ',
          أَنْتُمَا: 'تَتَفَعَّلَا',
          أَنْتُمْ: 'تَتَفَعَّلُوْا',
          أَنْتِ: 'تَتَفَعَّلِيْ',
          أَنْتُنَّ: 'تَتَفَعَّلْنَ',
          أَنَا: 'أَتَفَعَّلَ',
          نَحْنُ: 'نَتَفَعَّلَ',
        },
        مجزوم: {
          هُوَ: 'يَتَفَعَّلْ',
          هُمَا_مُذَكَّر: 'يَتَفَعَّلَا',
          هُمْ: 'يَتَفَعَّلُوْا',
          هِيَ: 'تَتَفَعَّلْ',
          هُمَا_مُؤَنَّث: 'تَتَفَعَّلَا',
          هُنَّ: 'يَتَفَعَّلْنَ',
          أَنْتَ: 'تَتَفَعَّلْ',
          أَنْتُمَا: 'تَتَفَعَّلَا',
          أَنْتُمْ: 'تَتَفَعَّلُوْا',
          أَنْتِ: 'تَتَفَعَّلِيْ',
          أَنْتُنَّ: 'تَتَفَعَّلْنَ',
          أَنَا: 'أَتَفَعَّلْ',
          نَحْنُ: 'نَتَفَعَّلْ',
        },
      },
      أمر: {
        أَنْتَ: 'تَفَعَّلْ',
        أَنْتُمَا: 'تَفَعَّلَا',
        أَنْتُمْ: 'تَفَعَّلُوْا',
        أَنْتِ: 'تَفَعَّلِيْ',
        أَنْتُنَّ: 'تَفَعَّلْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'تُفُعِّلَ',
        هُمَا_مُذَكَّر: 'تُفُعِّلَا',
        هُمْ: 'تُفُعِّلُوْا',
        هِيَ: 'تُفُعِّلَتْ',
        هُمَا_مُؤَنَّث: 'تُفُعِّلَتَا',
        هُنَّ: 'تُفُعِّلْنَ',
        أَنْتَ: 'تُفُعِّلْتَ',
        أَنْتُمَا: 'تُفُعِّلْتُمَا',
        أَنْتُمْ: 'تُفُعِّلتُمْ',
        أَنْتِ: 'تُفُعِّلْتِ',
        أَنْتُنَّ: 'تُفُعِّلتُنَّ',
        أَنَا: 'تُفُعِّلْتُ',
        نَحْنُ: 'تُفُعِّلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُتَفَعَّلُ',
          هُمَا_مُذَكَّر: 'يُتَفَعَّلَانِ',
          هُمْ: 'يُتَفَعَّلُوْنَ',
          هِيَ: 'تُتَفَعَّلُ',
          هُمَا_مُؤَنَّث: 'تُتَفَعَّلَانِ',
          هُنَّ: 'يُتَفَعَّلْنَ',
          أَنْتَ: 'تُتَفَعَّلُ',
          أَنْتُمَا: 'تُتَفَعَّلَانِ',
          أَنْتُمْ: 'تُتَفَعَّلُوْنَ',
          أَنْتِ: 'تُتَفَعَّلِيْنَ',
          أَنْتُنَّ: 'تُتَفَعَّلْنَ',
          أَنَا: 'أُتَفَعَّلُ',
          نَحْنُ: 'نُتَفَعَّلُ',
        },
        منصوب: {
          هُوَ: 'يُتَفَعَّلَ',
          هُمَا_مُذَكَّر: 'يُتَفَعَّلَا',
          هُمْ: 'يُتَفَعَّلُوْا',
          هِيَ: 'تُتَفَعَّلَ',
          هُمَا_مُؤَنَّث: 'تُتَفَعَّلَا',
          هُنَّ: 'يُتَفَعَّلْنَ',
          أَنْتَ: 'تُتَفَعَّلَ',
          أَنْتُمَا: 'تُتَفَعَّلَا',
          أَنْتُمْ: 'تُتَفَعَّلُوْا',
          أَنْتِ: 'تُتَفَعَّلِيْ',
          أَنْتُنَّ: 'تُتَفَعَّلْنَ',
          أَنَا: 'أُتَفَعَّلَ',
          نَحْنُ: 'نُتَفَعَّلَ',
        },
        مجزوم: {
          هُوَ: 'يُتَفَعَّلْ',
          هُمَا_مُذَكَّر: 'يُتَفَعَّلَا',
          هُمْ: 'يُتَفَعَّلُوْا',
          هِيَ: 'تُتَفَعَّلْ',
          هُمَا_مُؤَنَّث: 'تُتَفَعَّلَا',
          هُنَّ: 'يُتَفَعَّلْنَ',
          أَنْتَ: 'تُتَفَعَّلْ',
          أَنْتُمَا: 'تُتَفَعَّلَا',
          أَنْتُمْ: 'تُتَفَعَّلُوْا',
          أَنْتِ: 'تُتَفَعَّلِيْ',
          أَنْتُنَّ: 'تُتَفَعَّلْنَ',
          أَنَا: 'أُتَفَعَّلْ',
          نَحْنُ: 'نُتَفَعَّلْ',
        },
      },
    },
  },
  مشتق: {
    مصدر: ['تَفَعُّلًا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُتَفَعِّلٌ',
        مُثَنَّى: 'مُتَفَعِّلَانِ',
        جَمْع: 'مُتَفَعِّلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُتَفَعِّلَةٌ',
        مُثَنَّى: 'مُتَفَعِّلَتَانِ',
        جَمْع: 'مُتَفَعِّلَاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُتَفَعَّلٌ',
        مُثَنَّى: 'مُتَفَعَّلَانِ',
        جَمْع: 'مُتَفَعَّلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُتَفَعَّلَةٌ',
        مُثَنَّى: 'مُتَفَعَّلَتَانِ',
        جَمْع: 'مُتَفَعَّلَاتٌ',
      },
    },
  },
}

export default chapter
