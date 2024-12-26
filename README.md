# @arabiyya/sarf

A library of Arabic morphology patterns for verbs and derived nouns.

- [Installation](#installation)
- [Usage](#usage)
  - [TypeScript/JavaScript Import](#typescriptjavascript-import)
  - [Using JSON Files via JSDelivr](#using-json-files-via-jsdelivr)
- [API Reference](#api-reference)
  - [`sarf`](#sarf)
  - [`sarfHelpers`](#sarfhelpers)

## Installation

```bash
npm install @arabiyya/sarf
# or
yarn add @arabiyya/sarf
# or
bun add @arabiyya/sarf
```

## Usage

### TypeScript/JavaScript Import

```typescript
import { sarf, sarfHelpers } from '@arabiyya/sarf'

// Get a specific chapter
const chapter = sarf.sahih.nasara
console.log(chapter.title) // فَعَلَ يَفْعُلُ

// Replace the root letters
const nasara = sarfHelpers.replaceRoots(chapter)
console.log(nasara.title) // نَصَرَ يَنْصُرُ
```

### Using JSON Files via JSDelivr

You can directly load the JSON files from JSDelivr for client-side or static usage:

```
# Standard JSON (using ف, ع, ل roots)
https://cdn.jsdelivr.net/npm/@arabiyya/sarf@latest/dist/sarf.json

# Archetype JSON (using default root letters for each chapter)
https://cdn.jsdelivr.net/npm/@arabiyya/sarf@latest/dist/sarf-archetypes.json
```

The JSON files will have the following structure:

```
{
  "sahih": {
    "nasara": { ... },
    "daraba": { ... },
    "2": { ... },
    "3": { ... },
    "4": { ... },
    // ...
  },
  "ajwaf": { ... },
  "naaqis": { ... },
  // etc...
}
```

## API Reference

### `sarf`

A JSON object with the following structure:

- Top-level keys: Verb types (e.g. sahih, ajwaf, naaqis)
- Second-level keys: Chapters (e.g. nasara, daraba, 2, 3, 4, etc...)
- Values: Detailed Chapter objects

Each chapter has the following structure:

| Key            | Description                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`           | The chapter ID                                                                                                                   | `sahih/nasara`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `type`         | Details about the chapter's type                                                                                                 | <pre dir="ltr">{<br>&nbsp;&nbsp;"arabic":&nbsp;&nbsp;"صحيح",<br>&nbsp;&nbsp;"transliterated":&nbsp;&nbsp;"sahih",<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `form`         | Details about the chapter's form                                                                                                 | <pre dir="ltr">{<br>&nbsp;&nbsp;"number":&nbsp;&nbsp;1,<br>&nbsp;&nbsp;"roman":&nbsp;&nbsp;"I",<br>&nbsp;&nbsp;"english":&nbsp;&nbsp;"1a",<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `chapter`      | Details about the chapter                                                                                                        | <pre dir="ltr">{<br>&nbsp;&nbsp;"arabic":&nbsp;&nbsp;"نَصَرَ",<br>&nbsp;&nbsp;"transliterated":&nbsp;&nbsp;"nasara",<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `title`        | The chapter title in the form "past present" / "ماضي مضارع"                                                                      | `فَعَلَ يَفْعُلُ`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `root_letters` | An list of root letters that are derived from this chapter.<br>The first entry will always be the root letters for the archetype | <pre dir="ltr">{<br>&nbsp;&nbsp;"arabic":&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"ف":&nbsp;&nbsp;"ن",<br>&nbsp;&nbsp;&nbsp;&nbsp;"ع":&nbsp;&nbsp;"ص",<br>&nbsp;&nbsp;&nbsp;&nbsp;"ل":&nbsp;&nbsp;"ر",<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"english":&nbsp;&nbsp;"help",<br>&nbsp;&nbsp;"transliterated":&nbsp;&nbsp;"nasara",<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `صرف صغير`     | A simplified structure for the chapter's core parts                                                                              | <pre dir="ltr">{<br>&nbsp;&nbsp;"مصدر":&nbsp;&nbsp;"فَعْلًا",<br>&nbsp;&nbsp;"معروف":&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"ماضي":&nbsp;&nbsp;"فَعَلَ",<br>&nbsp;&nbsp;&nbsp;&nbsp;"مضارع":&nbsp;&nbsp;"يَفْعُلُ",<br>&nbsp;&nbsp;&nbsp;&nbsp;"فاعل":&nbsp;&nbsp;"فَاعِلٌ",<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"مجهول":&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"ماضي":&nbsp;&nbsp;"فُعِلَ",<br>&nbsp;&nbsp;&nbsp;&nbsp;"مضارع":&nbsp;&nbsp;"يُفْعَلُ",<br>&nbsp;&nbsp;&nbsp;&nbsp;"مفعول":&nbsp;&nbsp;"مَفْعُوْلٌ",<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"أمر":&nbsp;&nbsp;"افْعُلْ",<br>&nbsp;&nbsp;"نهي":&nbsp;&nbsp;"تَفْعُلْ",<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `صرف كبير`     | The full verb conjugations for this chapter                                                                                      | <pre dir="ltr">{<br>&nbsp;معروف: {<br>&nbsp;&nbsp;ماضي: {<br>&nbsp;&nbsp;&nbsp;هُوَ: "فَعَلَ",<br>&nbsp;&nbsp;&nbsp;هُمَا_مُذَكَّر: "فَعَلَا",<br>&nbsp;&nbsp;&nbsp;هُمَا_مُؤَنَّث: "فَعَلَتَا",<br>&nbsp;&nbsp;&nbsp;هُمْ: "فَعَلُوْا",<br>&nbsp;&nbsp;&nbsp;هِيَ: "فَعَلَتْ",<br>&nbsp;&nbsp;&nbsp;هُنَّ: "فَعَلْنَ",<br>&nbsp;&nbsp;&nbsp;أَنْتَ: "فَعَلْتَ",<br>&nbsp;&nbsp;&nbsp;أَنْتُمَا: "فَعَلْتُمَا",<br>&nbsp;&nbsp;&nbsp;أَنْتُمْ: "فَعَلْتُمْ",<br>&nbsp;&nbsp;&nbsp;أَنْتِ: "فَعَلْتِ",<br>&nbsp;&nbsp;&nbsp;أَنْتُنَّ: "فَعَلْتُنَّ",<br>&nbsp;&nbsp;&nbsp;أَنَا: "فَعَلْتُ",<br>&nbsp;&nbsp;&nbsp;نَحْنُ: "فَعَلْنَا",<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;مضارع: {<br>&nbsp;&nbsp;&nbsp;مرفوع: { هُوَ: "يَفْعُلُ", etc...},<br>&nbsp;&nbsp;&nbsp;منصوب: { ... },<br>&nbsp;&nbsp;&nbsp;مجزوم: { ... },<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;أمر: {<br>&nbsp;&nbsp;&nbsp;أَنْتَ: "افْعُلْ",<br>&nbsp;&nbsp;&nbsp;أَنْتُمَا: "افْعُلَا",<br>&nbsp;&nbsp;&nbsp;أَنْتُمْ: "افْعُلُوْا",<br>&nbsp;&nbsp;&nbsp;أَنْتِ: "افْعُلِيْ",<br>&nbsp;&nbsp;&nbsp;أَنْتُنَّ: "افْعُلْنَ",<br>&nbsp;&nbsp;},<br>&nbsp;},<br>&nbsp;مجهول: {<br>&nbsp;&nbsp;ماضي: { ... },<br>&nbsp;&nbsp;مضارع: { ... },<br>&nbsp;} \| null,<br>}</pre> |
| `مشتق`         | Derived nouns from this chapter                                                                                                  | <pre dir="ltr">{<br>&nbsp;مصدر: ["فَعْلًا"],<br>&nbsp;فاعل: {<br>&nbsp;&nbsp;مُذَكَّر: {<br>&nbsp;&nbsp;&nbsp;مُفْرَد: "فَاعِلٌ",<br>&nbsp;&nbsp;&nbsp;مُثَنَّى: "فَاعِلَانِ",<br>&nbsp;&nbsp;&nbsp;جَمْع: "فَاعِلُوْنَ",<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;مُؤَنَّث: {<br>&nbsp;&nbsp;&nbsp;مُفْرَد: "فَاعِلَةٌ",<br>&nbsp;&nbsp;&nbsp;مُثَنَّى: "فَاعِلَتَانِ",<br>&nbsp;&nbsp;&nbsp;جَمْع: "فَاعِلَاتٌ",<br>&nbsp;&nbsp;},<br>&nbsp;},<br>&nbsp;مفعول: {<br>&nbsp;&nbsp;مُذَكَّر: { ... },<br>&nbsp;&nbsp;مُؤَنَّث: { ... },<br>&nbsp;} \| null,<br>}</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### `sarfHelpers`

A set of helper functions for working with the `sarf` data.

| Key                                                                                            | Description                                                                                                                       | Example                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :--------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getChapterById(chapterId: string): Chapter \| null`                                           | Retrieves a chapter by its unique identifier                                                                                      | `sarfHelpers.getChapterById('sahih/nasara')`                                                                                                                                                                                                                                                                                                                                                                                                   |
| `hasMajhool(chapter: Chapter): boolean`                                                        | Checks if a given chapter has a passive voice (مجهول) conjugation                                                                 | `sarfHelpers.hasMajhool(sarf.sahih.nasara) // true`                                                                                                                                                                                                                                                                                                                                                                                            |
| `isMazeedFih(chapter: Chapter): boolean`                                                       | Determines if the chapter is mazeed fih (i.e. not form 1)                                                                         | `sarfHelpers.isMazeedFih(sarf.sahih.nasara) // false`                                                                                                                                                                                                                                                                                                                                                                                          |
| `isMujarrad(chapter: Chapter): boolean`                                                        | Determines if the chapter is mujarrad (i.e. form 1)                                                                               | `sarfHelpers.isMujarrad(sarf.sahih.nasara) // true`                                                                                                                                                                                                                                                                                                                                                                                            |
| `replaceRoots(chapter: Chapter, rootLetters?: { ف?: string; ع?: string; ل?: string }): string` | Replaces the root letters of a given chapter<br>If no root letters are provided, it defaults to `chapter.root_letters[0].arabic`. | <pre>const original = sarf.sahih.nasara<br>console.log(original.title) // فَعَلَ يَفْعُلُ<br><br>// Use default root letters<br>const nasara = sarfHelpers.replaceRoots(sarf.sahih.nasara)<br>console.log(nasara.title) // نَصَرَ يَنْصُرُ<br><br>// Specify custom root letter replacements<br>const dakhala = sarfHelpers.replaceRoots(sarf.sahih.nasara, { ف: 'د', ع: 'خ', ل: 'ل' })<br>console.log(dakhala.title) // دَخَلَ يَدْخُلُ</pre> |
