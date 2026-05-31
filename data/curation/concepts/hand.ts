// data/curation/concepts/hand.ts

import type { CognateConcept } from "@/data/concepts/types";

export const handConcept = {
  id: "hand",
  label: "HAND",
  definition: "The body part at the end of the arm, used for holding, touching, and making things.",
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
    "Cognate shows HAND as a clean contrast between a Germanic hand cluster and a Romance manus cluster, with Romanian mână preserving the Latin route in its own shape.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "hand-germanic",
      title: "Germanic hand forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *handuz",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "hand",
          ipa: "/hænd/",
          note: "English hand continues the inherited Germanic word very directly.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Hand",
          ipa: "/hant/",
          note: "German Hand is one of the clearest matches with English hand.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "hand",
          ipa: "/ɦɑnt/",
          note: "Dutch hand keeps the same Germanic form with a Dutch initial sound.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "hand",
          ipa: "/hand/",
          note: "Swedish hand also preserves the old Germanic word very clearly.",
        },
      ],
    },
    {
      id: "hand-romance",
      title: "Romance manus forms",
      family: "Romance",
      ancestor: "Latin manus",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "main",
          ipa: "/mɛ̃/",
          note: "French main descends from Latin manus, reduced heavily by French sound change.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "mano",
          ipa: "/ˈmano/",
          note: "Spanish mano is a clear Romance continuation of Latin manus.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "mano",
          ipa: "/ˈma.no/",
          note: "Italian mano is another transparent descendant of Latin manus.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "mână",
          ipa: "/ˈmɨnə/",
          note: "Romanian mână comes through Vulgar Latin and keeps the Latin manus family in a distinct eastern Romance shape.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "A clean split you can actually trust.",
    paragraphs: [
      "English hand, German Hand, Dutch hand, and Swedish hand are all Germanic and barely make the reader work. Sometimes the obvious pattern is actually true. A rare mercy from historical linguistics.",
      "The Romance side comes from Latin manus. Spanish mano and Italian mano are transparent. French main is more reduced, and Romanian mână shows its own eastern Romance development.",
      "HAND gives a clean split: one concept, two inherited families. The Germanic words belong together, the Romance words belong together, and the similarity between the two groups should not be forced.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic hand group with the Romance manus group.",
    },
    {
      name: "Learn",
      text: "See how French main and Romanian mână connect to the clearer Spanish and Italian mano forms.",
    },
    {
      name: "Test",
      text: "Check whether you can separate the hand cluster from the manus cluster.",
    },
    {
      name: "Review",
      text: "Save this concept to remember the clean Germanic and Romance split.",
    },
    {
      name: "Bridge",
      text: "Use Spanish mano or Italian mano as anchors for French main and Romanian mână.",
    },
  ],
} satisfies CognateConcept;