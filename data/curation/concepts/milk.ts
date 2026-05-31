// data/curation/concepts/milk.ts

import type { CognateConcept } from "@/data/concepts/types";

export const milkConcept = {
  id: "milk",
  label: "MILK",
  definition: "The white liquid produced by mammals to feed their young, commonly used as food and drink.",
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
    "Cognate shows MILK as two clean clusters: Germanic milk forms and Romance lac or lactis forms, with the Romance side connecting to English scientific words like lactose and lactate.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "milk-germanic",
      title: "Germanic milk forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *meluks",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "milk",
          ipa: "/mɪlk/",
          note: "English milk continues the inherited Germanic milk word.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Milch",
          ipa: "/mɪlç/",
          note: "German Milch is a close relative of English milk, with the final sound shifted in German.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "melk",
          ipa: "/mɛlk/",
          note: "Dutch melk keeps the Germanic milk form very transparently.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "mjölk",
          ipa: "/mjœlk/",
          note: "Swedish mjölk belongs to the same Germanic cluster, though the spelling makes the relationship look less immediate.",
        },
      ],
    },
    {
      id: "milk-romance",
      title: "Romance lactis forms",
      family: "Romance",
      ancestor: "Latin lac, lactis",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "lait",
          ipa: "/lɛ/",
          note: "French lait descends from the Latin milk family, with heavy reduction in the modern form.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "leche",
          ipa: "/ˈletʃe/",
          note: "Spanish leche looks less like Latin lac, but it belongs to the same Romance milk family.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "latte",
          ipa: "/ˈlat.te/",
          note: "Italian latte is a very clear Romance descendant of the Latin lactis family.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "lapte",
          ipa: "/ˈlapte/",
          note: "Romanian lapte keeps the Latin lactis family in a distinct eastern Romance shape.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "Milk, lactose, and the root you already know.",
    paragraphs: [
      "English milk, German Milch, Dutch melk, and Swedish mjölk form the Germanic cluster. The forms are close, but Swedish and German add enough sound change to make the comparison interesting.",
      "The Romance side comes from Latin lac and lactis: French lait, Spanish leche, Italian latte, and Romanian lapte. Italian latte and Romanian lapte keep more of the older shape visible.",
      "English also borrowed this Latin root into scientific vocabulary: lactose, lactate, and related words. So the everyday English word is Germanic, while the Latin root survives in more technical clothing. Very respectable. Slightly lab coated.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic milk group with the Romance lac and lactis family.",
    },
    {
      name: "Learn",
      text: "See how latte, leche, lait, and lapte connect to the lact root in English scientific vocabulary.",
    },
    {
      name: "Test",
      text: "Check whether you can connect Romance milk words even when they no longer look identical.",
    },
    {
      name: "Review",
      text: "Save this concept to remember milk, Milch, melk, mjölk, lait, leche, latte, and lapte.",
    },
    {
      name: "Bridge",
      text: "Use Italian latte and Romanian lapte as anchors for French lait and Spanish leche.",
    },
  ],
} satisfies CognateConcept;