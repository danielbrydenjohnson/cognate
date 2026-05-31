// data/curation/concepts/heart.ts

import type { CognateConcept } from "@/data/concepts/types";

export const heartConcept = {
  id: "heart",
  label: "HEART",
  definition: "The organ that pumps blood through the body, also used as a symbol of feeling, courage, and love.",
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
    "Cognate shows HEART as a deep inherited concept with a strong Germanic cluster, a Latin cor cluster in much of Romance, and Romanian using a different everyday word from Latin anima.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "heart-germanic",
      title: "Germanic heart forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *hertô",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "heart",
          ipa: "/hɑːrt/",
          note: "English heart continues Old English heorte and belongs to the old Germanic heart family.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Herz",
          ipa: "/hɛʁts/",
          note: "German Herz is a close relative of English heart, though the final sound has developed differently.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "hart",
          ipa: "/ɦɑrt/",
          note: "Dutch hart is very transparent beside English heart.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "hjärta",
          ipa: "/ˈjæʈːa/",
          note: "Swedish hjärta belongs to the same Germanic family, with spelling and sound changes that make the relationship less immediate.",
        },
      ],
    },
    {
      id: "heart-romance-cor",
      title: "Romance cor forms",
      family: "Romance",
      ancestor: "Latin cor",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "cœur",
          ipa: "/kœʁ/",
          note: "French cœur descends from Latin cor and preserves the older heart root in a compact form.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "corazón",
          ipa: "/koɾaˈθon/",
          note: "Spanish corazón is related to the Latin cor family, though the modern form is expanded and less direct.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "cuore",
          ipa: "/ˈkwɔ.re/",
          note: "Italian cuore is a clear Romance descendant of the Latin heart word.",
        },
      ],
    },
    {
      id: "heart-romanian-anima",
      title: "Romanian anima form",
      family: "Romance",
      ancestor: "Latin anima",
      confidence: "approved",
      words: [
        {
          language: "Romanian",
          languageCode: "ro",
          form: "inimă",
          ipa: "/ˈinimə/",
          note: "Romanian inimă is the everyday word for heart, but it comes from Latin anima, meaning soul. This makes it a concept match, not a cognate match with cœur, corazón, and cuore.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The heart is not always from the heart root.",
    paragraphs: [
      "English heart, German Herz, Dutch hart, and Swedish hjärta all descend from the same old Germanic heart word. The forms are different enough to show sound change, but similar enough for the relationship to remain visible.",
      "Much of the Romance side points back to Latin cor. French cœur, Spanish corazón, and Italian cuore belong together, even though Spanish has grown into a much fuller-looking form.",
      "Romanian is the complication. The common word inimă means heart, but it comes from Latin anima, meaning soul. It belongs to the HEART concept, but not to the same immediate cognate cluster as the cor forms.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic heart cluster, the Romance cor cluster, and Romanian inimă as a separate concept match.",
    },
    {
      name: "Learn",
      text: "See why Romanian inimă belongs on the HEART page but not inside the cor cluster.",
    },
    {
      name: "Test",
      text: "Check whether you can separate concept matches from true cognates.",
    },
    {
      name: "Review",
      text: "Save this concept to remember heart, Herz, hart, hjärta, cœur, corazón, cuore, and inimă.",
    },
    {
      name: "Bridge",
      text: "Use French cœur or Italian cuore as anchors for the Latin cor family, while treating Romanian inimă as its own path.",
    },
  ],
} satisfies CognateConcept;