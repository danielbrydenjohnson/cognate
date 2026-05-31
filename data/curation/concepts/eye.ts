// data/curation/concepts/eye.ts

import type { CognateConcept } from "@/data/concepts/types";

export const eyeConcept = {
  id: "eye",
  label: "EYE",
  definition: "The organ used for seeing.",
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
    "Cognate shows EYE as a deep shared root where Germanic eye forms and Romance oculus forms look different but reach back to the same old Indo-European idea of seeing.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "eye-germanic",
      title: "Germanic eye forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *augô",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "eye",
          ipa: "/aɪ/",
          note: "English eye continues Old English ēage and belongs to the Germanic eye family.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Auge",
          ipa: "/ˈaʊɡə/",
          note: "German Auge preserves the older Germanic shape more visibly than modern English eye.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "oog",
          ipa: "/oːx/",
          note: "Dutch oog is a close Germanic relative and makes the old vowel shape easier to see.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "öga",
          ipa: "/ˈøːɡa/",
          note: "Swedish öga keeps the inherited Germanic eye word in a form close to German Auge.",
        },
      ],
    },
    {
      id: "eye-romance",
      title: "Romance oculus forms",
      family: "Romance",
      ancestor: "Latin oculus",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "œil",
          ipa: "/œj/",
          note: "French œil descends from Latin oculus, but French sound change has reduced the form heavily.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "ojo",
          ipa: "/ˈoxo/",
          note: "Spanish ojo continues the Latin oculus family in a compact Romance form.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "occhio",
          ipa: "/ˈɔk.kjo/",
          note: "Italian occhio is the clearest Romance anchor for the Latin oculus connection.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "ochi",
          ipa: "/okʲ/",
          note: "Romanian ochi is Romance and keeps the oculus family in an eastern Romance shape.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The eye root hiding under different faces.",
    paragraphs: [
      "English eye has become extremely short, while German Auge, Dutch oog, and Swedish öga preserve more of the older Germanic shape. The relationship is real, but it is not equally obvious in every form.",
      "The Romance side comes from Latin oculus. Italian occhio is the easiest anchor, while Spanish ojo, Romanian ochi, and French œil show different degrees of reduction and sound change.",
      "Underneath the Germanic and Romance clusters is a deeper Indo-European root connected with seeing and the eye. The modern words look different on the surface, but some of them are wearing very old historical disguises.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic eye group with the Romance oculus group.",
    },
    {
      name: "Learn",
      text: "See how different-looking words for eye can preserve the same ancient root.",
    },
    {
      name: "Test",
      text: "Check whether you can connect eye, Auge, occhio, ojo, and œil without relying only on surface similarity.",
    },
    {
      name: "Review",
      text: "Save this concept to remember the Germanic eye forms and the Romance oculus family.",
    },
    {
      name: "Bridge",
      text: "Use Italian occhio or German Auge as anchors for French œil, Spanish ojo, and Romanian ochi.",
    },
  ],
} satisfies CognateConcept;