// data/curation/concepts/moon.ts

import type { CognateConcept } from "@/data/concepts/types";

export const moonConcept = {
  id: "moon",
  label: "MOON",
  definition: "The natural satellite of Earth, visible in the night sky by reflected sunlight.",
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
    "Cognate shows MOON as a clean split between Germanic moon forms and Romance luna forms, with the Germanic side also preserving the old link between moon and month.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "moon-germanic",
      title: "Germanic moon forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *mēnô",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "moon",
          ipa: "/muːn/",
          note: "English moon continues Old English mōna and keeps the inherited Germanic shape clearly.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Mond",
          ipa: "/moːnt/",
          note: "German Mond belongs to the same Germanic family, though the final consonant makes it look less transparent beside English moon.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "maan",
          ipa: "/maːn/",
          note: "Dutch maan is a close relative of English moon and shows the same broad shape with a different vowel.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "måne",
          ipa: "/ˈmoːnɛ/",
          note: "Swedish måne keeps the older Germanic moon word especially visibly.",
        },
      ],
    },
    {
      id: "moon-romance",
      title: "Romance moon forms",
      family: "Romance",
      ancestor: "Latin lūna",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "lune",
          ipa: "/lyn/",
          note: "French lune descends from Latin lūna, with the vowel and final sound developing in the normal French direction.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "luna",
          ipa: "/ˈluna/",
          note: "Spanish luna preserves the Latin form almost unchanged.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "luna",
          ipa: "/ˈlu.na/",
          note: "Italian luna is another very transparent continuation of Latin lūna.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "lună",
          ipa: "/ˈlunə/",
          note: "Romanian lună keeps the Latin luna shape, though the final vowel has developed differently.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "Moon, month, and borrowed light.",
    paragraphs: [
      "English moon, German Mond, Dutch maan, and Swedish måne all belong to the Germanic side. The forms are not identical, but the family resemblance is strong.",
      "The Romance forms tell a different story. French lune, Spanish luna, Italian luna, and Romanian lună come from Latin lūna. Spanish and Italian are especially transparent, while French and Romanian drift just enough to make the pattern less immediate.",
      "The Germanic moon word is historically connected with the idea of the month, because lunar phases were a natural way to measure time. The Romance word points instead toward brightness. Same object in the sky, different inherited story.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic moon group with the Romance luna group.",
    },
    {
      name: "Learn",
      text: "See how moon and month preserve an old timekeeping connection on the Germanic side.",
    },
    {
      name: "Test",
      text: "Check whether you can separate same-meaning words from true cognate clusters.",
    },
    {
      name: "Review",
      text: "Save this concept to remember the moon/month pattern and the Latin luna family.",
    },
    {
      name: "Bridge",
      text: "Use Spanish luna or Italian luna as anchors for French lune and Romanian lună.",
    },
  ],
} satisfies CognateConcept;