// data/curation/concepts/two.ts

import type { CognateConcept } from "@/data/concepts/types";

export const twoConcept = {
  id: "two",
  label: "TWO",
  definition: "The number after one and before three.",
  partOfSpeech: "numeral",
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
    "Cognate shows TWO as a basic number where Germanic and Romance forms look different but preserve descendants of the same ancient Indo-European numeral.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "two-germanic",
      title: "Germanic two forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *twai",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "two",
          ipa: "/tuː/",
          note: "English two continues the old Germanic numeral, even though the spelling keeps a silent w.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "zwei",
          ipa: "/tsvaɪ/",
          note: "German zwei belongs to the same Germanic numeral family, with the initial sound shifted in German.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "twee",
          ipa: "/tʋeː/",
          note: "Dutch twee is very transparent beside English two.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "två",
          ipa: "/tvoː/",
          note: "Swedish två keeps the old t-v shape especially clearly.",
        },
      ],
    },
    {
      id: "two-romance",
      title: "Romance duo forms",
      family: "Romance",
      ancestor: "Latin duo",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "deux",
          ipa: "/dø/",
          note: "French deux descends from the Latin duo family, reduced into a compact modern form.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "dos",
          ipa: "/dos/",
          note: "Spanish dos is a clear Romance descendant of Latin duo.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "due",
          ipa: "/ˈdu.e/",
          note: "Italian due preserves the Latin duo pattern very visibly.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "doi",
          ipa: "/doj/",
          note: "Romanian doi is Romance and continues the same old two numeral in its own eastern Romance form.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "A number that survived almost everything.",
    paragraphs: [
      "English two, German zwei, Dutch twee, and Swedish två are all Germanic descendants of the old two numeral. The forms are compact, old, and still recognisably related.",
      "The Romance forms descend from Latin duo: French deux, Spanish dos, Italian due, and Romanian doi. Italian is the clearest anchor, French is the most compressed, and Romanian keeps the family shape with its own ending.",
      "Germanic two and Romance duo are not separate accidents. They both go back to a much older Indo-European numeral. Numbers are stubborn little fossils, which is rude but helpful.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic two group with the Romance duo group.",
    },
    {
      name: "Learn",
      text: "See how a basic number survives across branches while changing shape.",
    },
    {
      name: "Test",
      text: "Check whether you can recognise the old two pattern across Germanic and Romance forms.",
    },
    {
      name: "Review",
      text: "Save this concept to remember two, zwei, twee, två, deux, dos, due, and doi.",
    },
    {
      name: "Bridge",
      text: "Use Italian due and Spanish dos as anchors for French deux and Romanian doi.",
    },
  ],
} satisfies CognateConcept;