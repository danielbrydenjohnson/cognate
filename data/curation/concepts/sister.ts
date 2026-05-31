// data/curation/concepts/sister.ts

import type { CognateConcept } from "@/data/concepts/types";

export const sisterConcept = {
  id: "sister",
  label: "SISTER",
  definition: "A female sibling.",
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
    "Cognate shows SISTER as the natural partner to BROTHER, with Germanic sister forms, Romance soror forms, and Spanish hermana following the same germanus outlier pattern as hermano.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "sister-germanic",
      title: "Germanic sister forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *swestēr",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "sister",
          ipa: "/ˈsɪstər/",
          note: "English sister continues Old English sweostor and belongs to the inherited Germanic sister family.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Schwester",
          ipa: "/ˈʃvɛstɐ/",
          note: "German Schwester preserves the older sw shape more visibly than English sister.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "zus",
          ipa: "/zʏs/",
          note: "Dutch zus is the common everyday form for sister, shortened from the same family as zuster.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "syster",
          ipa: "/ˈsʏ̌sːtɛr/",
          note: "Swedish syster keeps the inherited sister form clearly enough to connect with English sister.",
        },
      ],
    },
    {
      id: "sister-romance-soror",
      title: "Romance soror forms",
      family: "Romance",
      ancestor: "Latin soror",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "sœur",
          ipa: "/sœʁ/",
          note: "French sœur descends from Latin soror, with the modern form heavily reduced.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "sorella",
          ipa: "/soˈrɛl.la/",
          note: "Italian sorella comes from the Latin soror family through a diminutive form.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "soră",
          ipa: "/ˈsorə/",
          note: "Romanian soră is a clear eastern Romance continuation of Latin soror.",
        },
      ],
    },
    {
      id: "sister-spanish-germana",
      title: "Spanish germana form",
      family: "Romance",
      ancestor: "Latin germāna",
      confidence: "approved",
      words: [
        {
          language: "Spanish",
          languageCode: "es",
          form: "hermana",
          ipa: "/eɾˈmana/",
          note: "Spanish hermana follows the same route as hermano, from Latin germāna. It belongs on the SISTER concept page, but not inside the soror cluster.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The sister page explains the brother page again.",
    paragraphs: [
      "SISTER is valuable because it pairs with BROTHER and reinforces the same structural lesson. English sister, German Schwester, Dutch zus, and Swedish syster all belong to the Germanic sister family, even though Dutch uses a shortened everyday form.",
      "French sœur, Italian sorella, and Romanian soră come through Latin soror. French compresses the form heavily. Italian expands it with a diminutive. Romanian keeps it beautifully direct.",
      "Spanish hermana mirrors Spanish hermano. It comes from Latin germāna, not from the soror line. That repeated outlier pattern is useful because learners remember stories better than tidy tables, and Spanish has decided to be narratively inconvenient. Very inconsiderate, but good for the product.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic sister group, the Romance soror group, and Spanish hermana as a separate path.",
    },
    {
      name: "Learn",
      text: "See how hermana repeats the same Spanish outlier pattern as hermano.",
    },
    {
      name: "Test",
      text: "Check whether you can recognise when an outlier belongs to the concept but not the main cognate cluster.",
    },
    {
      name: "Review",
      text: "Save this concept to remember sister, Schwester, zus, syster, sœur, sorella, soră, and hermana.",
    },
    {
      name: "Bridge",
      text: "Use Romanian soră and Italian sorella as anchors for French sœur, while treating Spanish hermana separately.",
    },
  ],
} satisfies CognateConcept;