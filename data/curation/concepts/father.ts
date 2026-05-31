// data/curation/concepts/father.ts

import type { CognateConcept } from "@/data/concepts/types";

export const fatherConcept = {
  id: "father",
  label: "FATHER",
  definition: "A male parent.",
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
    "Cognate shows FATHER as a strong Indo-European family term with a Germanic father cluster, a Romance pater cluster, and Romanian tată following a different Latin nursery word.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "father-germanic",
      title: "Germanic father forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *fadēr",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "father",
          ipa: "/ˈfɑːðər/",
          note: "English father continues Old English fæder and preserves the old Germanic family word clearly.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Vater",
          ipa: "/ˈfaːtɐ/",
          note: "German Vater belongs to the same inherited family as English father. The spelling looks different, but the relationship is direct.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "vader",
          ipa: "/ˈvaːdər/",
          note: "Dutch vader keeps the old father word in a form that bridges English father and German Vater.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "far",
          ipa: "/fɑːr/",
          note: "Swedish far is shorter, but it belongs to the same inherited Germanic father family.",
        },
      ],
    },
    {
      id: "father-romance-pater",
      title: "Romance pater forms",
      family: "Romance",
      ancestor: "Latin pater",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "père",
          ipa: "/pɛʁ/",
          note: "French père descends from Latin pater, with the older form heavily reduced by French sound change.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "padre",
          ipa: "/ˈpaðɾe/",
          note: "Spanish padre preserves the Latin pater family in a very recognisable Romance form.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "padre",
          ipa: "/ˈpa.dre/",
          note: "Italian padre is another clear descendant of the Latin pater line.",
        },
      ],
    },
    {
      id: "father-romanian-tata",
      title: "Romanian tata form",
      family: "Romance",
      ancestor: "Latin tata",
      confidence: "approved",
      words: [
        {
          language: "Romanian",
          languageCode: "ro",
          form: "tată",
          ipa: "/ˈtatə/",
          note: "Romanian tată is the everyday word for father, but it comes from Latin tata, a nursery word. It belongs on the FATHER concept page, but not inside the pater cluster.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "Father, pater, and the nursery word.",
    paragraphs: [
      "English father, German Vater, Dutch vader, and Swedish far all belong to the Germanic father cluster. The forms are close enough to feel familiar, but different enough to show real sound change.",
      "The Romance pater line gives French père, Spanish padre, and Italian padre. Germanic father and Latin pater are not random similarities. They are ancient relatives that changed in different directions.",
      "Romanian adds a useful complication. The everyday word tată comes from Latin tata, a nursery word, not from Latin pater. It belongs to the FATHER concept, but it needs its own path through the history.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic father group, the Romance pater group, and Romanian tată as a separate path.",
    },
    {
      name: "Learn",
      text: "See how father and pater preserve a deep Indo-European relationship while Romanian tată follows a different Latin word.",
    },
    {
      name: "Test",
      text: "Check whether you can separate concept matches from direct cognate clusters.",
    },
    {
      name: "Review",
      text: "Save this concept to remember father, Vater, vader, far, père, padre, and tată.",
    },
    {
      name: "Bridge",
      text: "Use Spanish padre or Italian padre as anchors for French père, while treating Romanian tată separately.",
    },
  ],
} satisfies CognateConcept;