// data/curation/concepts/sun.ts

import type { CognateConcept } from "@/data/concepts/types";

export const sunConcept = {
  id: "sun",
  label: "SUN",
  definition: "The star at the centre of the Solar System, seen from Earth as the main source of daylight and warmth.",
  partOfSpeech: "noun",
  difficulty: "beginner",
  reviewedStatus: "demo",
  languages: [
    "English",
    "German",
    "Dutch",
    "Swedish",
    "French",
    "Spanish",
    "Italian",
    "Romanian",
  ],
  summary:
    "Cognate shows SUN as two visible branches: Germanic forms built around sun-like shapes, and Romance forms descended from Latin sōl, with a deeper Indo-European relationship behind both.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "sun-germanic",
      title: "Germanic sun forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *sunnǭ",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "sun",
          ipa: "/sʌn/",
          note: "English sun continues Old English sunne, keeping the old Germanic shape very clearly.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Sonne",
          ipa: "/ˈzɔnə/",
          note: "German Sonne is a close relative of English sun, with the initial sound shifted in the modern language.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "zon",
          ipa: "/zɔn/",
          note: "Dutch zon shows the same inherited Germanic word, but with a spelling that hides the relationship slightly from English speakers.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "sol",
          ipa: "/suːl/",
          note: "Swedish sol is Germanic, but it follows a different inherited solar form than English sun, German Sonne, and Dutch zon.",
        },
      ],
    },
    {
      id: "sun-romance",
      title: "Romance sun forms",
      family: "Romance",
      ancestor: "Latin sōl, with French soleil from Vulgar Latin *sōliculus",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "soleil",
          ipa: "/sɔ.lɛj/",
          note: "French soleil does not descend directly as a plain sol form. It comes through a Vulgar Latin diminutive, which became the normal word.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "sol",
          ipa: "/sol/",
          note: "Spanish sol preserves the Latin form almost transparently.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "sole",
          ipa: "/ˈso.le/",
          note: "Italian sole is another clear continuation of Latin sōl.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "soare",
          ipa: "/ˈso̯are/",
          note: "Romanian soare is Romance and continues the same Latin solar root, though the ending has developed differently.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "Two branches, one very old sun.",
    paragraphs: [
      "English sun, German Sonne, and Dutch zon sit together comfortably as Germanic relatives. The resemblance is visible enough that the pattern does not need much explanation.",
      "The Romance side is also fairly transparent. Spanish sol and Italian sole point straight back to Latin sōl. Romanian soare is less obvious but belongs to the same inherited Romance story. French soleil is the troublemaker because it comes through a Vulgar Latin diminutive form rather than staying as a plain sol shape.",
      "Surface similarity is only the first layer. Germanic and Romance forms can sit in separate clusters while still sharing deeper Indo-European ancestry. The sun, as usual, has been around longer than everyone's filing system.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic sun forms with the Romance forms from Latin sōl.",
    },
    {
      name: "Learn",
      text: "See how French soleil complicates an otherwise clean Romance pattern.",
    },
    {
      name: "Test",
      text: "Check whether you can spot the deeper relationship behind different-looking forms.",
    },
    {
      name: "Review",
      text: "Save this concept to remember the Germanic sun group and the Romance sol group.",
    },
    {
      name: "Bridge",
      text: "Use Spanish sol or Italian sole as anchors when learning French soleil or Romanian soare.",
    },
  ],
} satisfies CognateConcept;