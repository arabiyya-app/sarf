import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'mithaal/4',
  type: {
    arabic: 'مثال',
    transliterated: 'mithaal',
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
        ف: 'و',
        ع: 'ر',
        ل: 'د',
      },
      english: {
        base: 'bring',
        past: 'brought',
      },
      transliterated: 'awrada',
    },
  ],
  'صرف صغير': {
    مصدر: 'إِيْعَالًا',
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
        هُمَا: {
          مُذَكَّر: 'أَفْعَلَا',
          مُؤَنَّث: 'أَفْعَلَتَا',
        },
        هُمْ: 'أَفْعَلُوْا',
        هِيَ: 'أَفْعَلَتْ',
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
          هُمَا: {
            مُذَكَّر: 'يُفْعِلَانِ',
            مُؤَنَّث: 'تُفْعِلَانِ',
          },
          هُمْ: 'يُفْعِلُوْنَ',
          هِيَ: 'تُفْعِلُ',
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
          هُمَا: {
            مُذَكَّر: 'يُفْعِلَا',
            مُؤَنَّث: 'تُفْعِلَا',
          },
          هُمْ: 'يُفْعِلُوْا',
          هِيَ: 'تُفْعِلَ',
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
          هُمَا: {
            مُذَكَّر: 'يُفْعِلَا',
            مُؤَنَّث: 'تُفْعِلَا',
          },
          هُمْ: 'يُفْعِلُوْا',
          هِيَ: 'تُفْعِلْ',
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
        هُمَا: {
          مُذَكَّر: 'أُفْعِلَا',
          مُؤَنَّث: 'أُفْعِلَتَا',
        },
        هُمْ: 'أُفْعِلُوْا',
        هِيَ: 'أُفْعِلَتْ',
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
    مصدر: ['إِيْعَالًا'],
    فاعل: {
      مُذَكَّر: {
        مُفْرَد: 'مُفْعِلٌ',
        مُثَنَّى: '',
        جَمْع: '',
      },
      مُؤَنَّث: {
        مُفْرَد: '',
        مُثَنَّى: '',
        جَمْع: '',
      },
    },
    مفعول: {
      مُذَكَّر: {
        مُفْرَد: 'مُفْعَلٌ',
        مُثَنَّى: '',
        جَمْع: '',
      },
      مُؤَنَّث: {
        مُفْرَد: '',
        مُثَنَّى: '',
        جَمْع: '',
      },
    },
  },
}

export default chapter