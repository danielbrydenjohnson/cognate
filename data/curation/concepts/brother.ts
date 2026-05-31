// data/curation/concepts/brother.ts

import type { CognateConcept } from "@/data/concepts/types";

export const brotherConcept = {
  id: "brother",
  label: "BROTHER",
  definition: "A male sibling.",
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
    "Cognate shows BROTHER as a deep Indo-European kinship word, with a Germanic brother cluster, a Romance frater cluster, and Spanish hermano as a memorable Romance outlier.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "brother-germanic",
      title: "Germanic brother forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *brōþēr",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "brother",
          ipa: "/ˈbrʌðər/",
          note: "English brother continues Old English brōþor and belongs to the inherited Germanic kinship family.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Bruder",
          ipa: "/ˈbruːdɐ/",
          note: "German Bruder is a close relative of English brother, with the d reflecting later development from the older Germanic sound.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "broer",
          ipa: "/bruːr/",
          note: "Dutch broer is the common everyday form and belongs to the same Germanic brother family.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "bror",
          ipa: "/bruːr/",
          note: "Swedish bror is short, but it clearly belongs with the Germanic brother forms.",
        },
      ],
    },
    {
      id: "brother-romance-frater",
      title: "Romance frater forms",
      family: "Romance",
      ancestor: "Latin frāter",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "frère",
          ipa: "/fʁɛʁ/",
          note: "French frère descends from Latin frāter and preserves the Romance brother line in a reduced French shape.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "fratello",
          ipa: "/fraˈtɛl.lo/",
          note: "Italian fratello comes from a diminutive of Latin frāter, making the relationship visible but slightly expanded.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "frate",
          ipa: "/ˈfrate/",
          note: "Romanian frate is a clear eastern Romance continuation of Latin frāter.",
        },
      ],
    },
    {
      id: "brother-spanish-germanus",
      title: "Spanish germanus form",
      family: "Romance",
      ancestor: "Latin germānus",
      confidence: "approved",
      words: [
        {
          language: "Spanish",
          languageCode: "es",
          form: "hermano",
          ipa: "/eɾˈmano/",
          note: "Spanish hermano means brother, but it comes from Latin germānus, originally meaning full or genuine. It belongs on the BROTHER page, but not inside the frater cluster.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "Brother, frater, and the Spanish detour.",
    paragraphs: [
      "BROTHER continues the kinship pattern started by MOTHER and FATHER. English brother, German Bruder, Dutch broer, and Swedish bror all belong to the Germanic brother cluster, reaching back to an old Indo-European kinship word.",
      "French frère, Italian fratello, and Romanian frate come through Latin frāter. Italian adds a diminutive ending, which is why fratello looks fuller than French frère or Romanian frate.",
      "Spanish is the memorable outlier. Hermano comes from Latin germānus, a word meaning full or genuine, used in the sense of a full sibling. That is not a bug in the concept page. It is exactly the kind of detour that makes the page worth reading.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic brother group, the Romance frater group, and Spanish hermano as a separate path.",
    },
    {
      name: "Learn",
      text: "See why hermano belongs to the BROTHER concept but not to the frater cluster.",
    },
    {
      name: "Test",
      text: "Check whether you can separate concept matches from direct cognates.",
    },
    {
      name: "Review",
      text: "Save this concept to remember brother, Bruder, broer, bror, frère, fratello, frate, and hermano.",
    },
    {
      name: "Bridge",
      text: "Use French frère, Italian fratello, and Romanian frate as anchors, while treating Spanish hermano as the outlier.",
    },
  ],
} satisfies CognateConcept;