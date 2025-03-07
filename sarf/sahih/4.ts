import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'sahih/4',
  type: {
    arabic: 'صحيح',
    transliterated: 'sahih',
  },
  form: {
    number: 4,
    roman: 'IV',
    english: '4',
  },
  chapter: {
    arabic: 'إِفْعَال',
    transliterated: "if'aal",
  },
  title: 'أَفْعَلَ يُفْعِلُ',
  root_letters: [
    {
      arabic: {
        ف: 'ن',
        ع: 'ز',
        ل: 'ل',
      },
      english: 'reveal',
      transliterated: 'anzala',
    },
    {
      arabic: {
        ف: 'ر',
        ع: 'س',
        ل: 'ل',
      },
      english: {
        base: 'send',
        past: 'sent',
      },
      transliterated: 'arsala',
    },
    {
      arabic: {
        ف: 'ط',
        ع: 'ع',
        ل: 'م',
      },
      english: {
        base: 'feed',
        past: 'fed',
      },
      transliterated: "at'ama",
    },
  ],
  'صرف صغير': {
    مصدر: 'إِفْعَالًا',
    معروف: {
      ماضي: 'أَفْعَلَ',
      مضارع: 'يُفْعِلُ',
      فاعل: 'مُفْعِلٌ',
    },
    مجهول: {
      ماضي: 'أُفْعِلَ',
      مضارع: 'يُفْعَلُ',
      مفعول: 'مُفْعَلٌ',
    },
    أمر: 'أَفْعِلْ',
    نهي: 'تُفْعِلْ',
  },
  'صرف كبير': {
    معروف: {
      ماضي: {
        هُوَ: 'أَفْعَلَ',
        هُمَا_مُذَكَّر: 'أَفْعَلَا',
        هُمْ: 'أَفْعَلُوْا',
        هِيَ: 'أَفْعَلَتْ',
        هُمَا_مُؤَنَّث: 'أَفْعَلَتَا',
        هُنَّ: 'أَفْعَلْنَ',
        أَنْتَ: 'أَفْعَلْتَ',
        أَنْتُمَا: 'أَفْعَلْتُمَا',
        أَنْتُمْ: 'أَفْعَلْتُمْ',
        أَنْتِ: 'أَفْعَلْتِ',
        أَنْتُنَّ: 'أَفْعَلْتُنَّ',
        أَنَا: 'أَفْعَلْتُ',
        نَحْنُ: 'أَفْعَلْنَا',
      },
      مضارع: {
        مرفوع: {
          هُوَ: 'يُفْعِلُ',
          هُمَا_مُذَكَّر: 'يُفْعِلَانِ',
          هُمْ: 'يُفْعِلُوْنَ',
          هِيَ: 'تُفْعِلُ',
          هُمَا_مُؤَنَّث: 'تُفْعِلَانِ',
          هُنَّ: 'يُفْعِلْنَ',
          أَنْتَ: 'تُفْعِلُ',
          أَنْتُمَا: 'تُفْعِلَانِ',
          أَنْتُمْ: 'تُفْعِلُوْنَ',
          أَنْتِ: 'تُفْعِلِيْنَ',
          أَنْتُنَّ: 'تُفْعِلْنَ',
          أَنَا: 'أُفْعِلُ',
          نَحْنُ: 'نُفْعِلُ',
        },
        منصوب: {
          هُوَ: 'يُفْعِلَ',
          هُمَا_مُذَكَّر: 'يُفْعِلَا',
          هُمْ: 'يُفْعِلُوْا',
          هِيَ: 'تُفْعِلَ',
          هُمَا_مُؤَنَّث: 'تُفْعِلَا',
          هُنَّ: 'يُفْعِلْنَ',
          أَنْتَ: 'تُفْعِلَ',
          أَنْتُمَا: 'تُفْعِلَا',
          أَنْتُمْ: 'تُفْعِلُوْا',
          أَنْتِ: 'تُفْعِلِيْ',
          أَنْتُنَّ: 'تُفْعِلْنَ',
          أَنَا: 'أُفْعِلَ',
          نَحْنُ: 'نُفْعِلَ',
        },
        مجزوم: {
          هُوَ: 'يُفْعِلْ',
          هُمَا_مُذَكَّر: 'يُفْعِلَا',
          هُمْ: 'يُفْعِلُوْا',
          هِيَ: 'تُفْعِلْ',
          هُمَا_مُؤَنَّث: 'تُفْعِلَا',
          هُنَّ: 'يُفْعِلْنَ',
          أَنْتَ: 'تُفْعِلْ',
          أَنْتُمَا: 'تُفْعِلَا',
          أَنْتُمْ: 'تُفْعِلُوْا',
          أَنْتِ: 'تُفْعِلِيْ',
          أَنْتُنَّ: 'تُفْعِلْنَ',
          أَنَا: 'أُفْعِلْ',
          نَحْنُ: 'نُفْعِلْ',
        },
      },
      أمر: {
        أَنْتَ: 'أَفْعِلْ',
        أَنْتُمَا: 'أَفْعِلَا',
        أَنْتُمْ: 'أَفْعِلُوْا',
        أَنْتِ: 'أَفْعِلِيْ',
        أَنْتُنَّ: 'أَفْعِلْنَ',
      },
    },
    مجهول: {
      ماضي: {
        هُوَ: 'أُفْعِلَ',
        هُمَا_مُذَكَّر: 'أُفْعِلَا',
        هُمْ: 'أُفْعِلُوْا',
        هِيَ: 'أُفْعِلَتْ',
        هُمَا_مُؤَنَّث: 'أُفْعِلَتَا',
        هُنَّ: 'أُفْعِلْنَ',
        أَنْتَ: 'أُفْعِلْتَ',
        أَنْتُمَا: 'أُفْعِلْتُمَا',
        أَنْتُمْ: 'أُفْعِلْتُمْ',
        أَنْتِ: 'أُفْعِلْتِ',
        أَنْتُنَّ: 'أُفْعِلْتُنَّ',
        أَنَا: 'أُفْعِلْتُ',
        نَحْنُ: 'أُفْعِلْنَا',
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
    مصدر: ['إِفْعَالًا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُفْعِلٌ',
        مُثَنَّى: 'مُفْعِلَانِ',
        جَمْع: 'مُفْعِلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفْعِلَةٌ',
        مُثَنَّى: 'مُفْعِلَتَانِ',
        جَمْع: 'مُفْعِلَاتٌ',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُفْعَلٌ',
        مُثَنَّى: 'مُفْعَلَانِ',
        جَمْع: 'مُفْعَلُوْنَ',
      },
      مُؤَنَّث: {
        مُفْرَد: 'مُفْعَلَةٌ',
        مُثَنَّى: 'مُفْعَلَتَانِ',
        جَمْع: 'مُفْعَلَاتٌ',
      },
    },
  },
}

export default chapter
