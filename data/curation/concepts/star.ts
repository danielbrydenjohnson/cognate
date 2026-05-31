// data/curation/concepts/star.ts

import type { CognateConcept } from "@/data/concepts/types";

export const starConcept = {
  id: "star",
  label: "STAR",
  definition: "A bright point of light in the night sky, usually a distant sun.",
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
    "Cognate shows STAR as a deep inherited concept where the Germanic and Romance forms look different but still reach back to the same older Indo-European star root.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "star-germanic",
      title: "Germanic star forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *sternô",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "star",
          ipa: "/stɑːr/",
          note: "English star continues Old English steorra and keeps the inherited Germanic root very visibly.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Stern",
          ipa: "/ʃtɛʁn/",
          note: "German Stern belongs to the same Germanic star family, with the initial sound showing normal German pronunciation.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "ster",
          ipa: "/stɛr/",
          note: "Dutch ster is almost a bridge form between English star and German Stern.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "stjärna",
          ipa: "/ˈɧæːɳa/",
          note: "Swedish stjärna is less transparent to English eyes, but it belongs to the same inherited Germanic star group.",
        },
      ],
    },
    {
      id: "star-romance",
      title: "Romance star forms",
      family: "Romance",
      ancestor: "Latin stella",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "étoile",
          ipa: "/e.twal/",
          note: "French étoile descends from Latin stella, but centuries of sound change have disguised the connection heavily.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "estrella",
          ipa: "/esˈtɾeʝa/",
          note: "Spanish estrella keeps the Latin stella relationship more visibly than French.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "stella",
          ipa: "/ˈstɛl.la/",
          note: "Italian stella is the most transparent Romance form, very close to Latin stella.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "stea",
          ipa: "/ste̯a/",
          note: "Romanian stea is Romance and continues the same Latin star word, though the ending has reduced sharply.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The star root hiding in plain sight.",
    paragraphs: [
      "English star, German Stern, Dutch ster, and Swedish stjärna are all Germanic relatives. Some are obvious. Swedish makes the reader work a little harder, because apparently even stars enjoy being dramatic.",
      "The Romance side comes from Latin stella. Italian stella is almost unchanged. Spanish estrella is still visible. Romanian stea is compressed. French étoile looks less obvious, but it also belongs to this family.",
      "The Germanic and Romance branches are not random lookalikes. They both reach back to an older Indo-European star root. The modern clusters are separate, while the deeper connection sits underneath them.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic star group with the Romance forms from Latin stella.",
    },
    {
      name: "Learn",
      text: "See why French étoile is related to Italian stella even though it no longer looks obvious.",
    },
    {
      name: "Test",
      text: "Check whether you can identify deep cognates after heavy sound change.",
    },
    {
      name: "Review",
      text: "Save this concept to remember the star/Stern/ster cluster and the stella family.",
    },
    {
      name: "Bridge",
      text: "Use Italian stella or Spanish estrella as anchors for French étoile and Romanian stea.",
    },
  ],
} satisfies CognateConcept;