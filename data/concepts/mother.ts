import type { CognateConcept } from "@/data/concepts/types";

export const motherConcept = {
  id: "mother",
  label: "MOTHER",
  definition: "A female parent.",
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
    "Cognate shows MOTHER as a concept first, then compares the inherited Germanic and Romance forms attached to the same human relationship.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "mother-germanic",
      title: "Germanic mother forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *mōdēr",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "mother",
          ipa: "/ˈmʌðər/",
          note: "Modern English mother continues Old English mōdor.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Mutter",
          ipa: "/ˈmʊtɐ/",
          note: "The form is visibly close, but German sound history gives it a different consonant shape.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "moeder",
          ipa: "/ˈmudər/",
          note: "Dutch preserves a form that looks especially close to the older Germanic shape.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "moder",
          ipa: "/ˈmuːdɛr/",
          note: "Moder is the formal or older Swedish form. Everyday Swedish usually uses mamma.",
        },
      ],
    },
    {
      id: "mother-romance",
      title: "Romance mother forms",
      family: "Romance",
      ancestor: "Latin māter",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "mère",
          ipa: "/mɛʁ/",
          note: "A short modern form that hides much of the older Latin shape.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "madre",
          ipa: "/ˈmaðɾe/",
          note: "Clearly preserves the m-d-r outline from Latin māter through Romance development.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "madre",
          ipa: "/ˈmadre/",
          note: "Very transparent beside Spanish madre and the Latin ancestor.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "mamă",
          ipa: "/ˈmamə/",
          note: "Romanian commonly uses mamă. It is the natural everyday form, even though the inherited learned comparison is less tidy.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "A basic human concept with messy real-world edges.",
    paragraphs: [
      "MOTHER is useful because it feels simple, but the forms are not perfectly neat. English mother, German Mutter, Dutch moeder, and Swedish moder clearly belong together, but everyday usage can drift. Swedish speakers usually say mamma, even though moder preserves the formal inherited comparison.",
      "The Romance side is also not a perfect classroom poster. Spanish madre and Italian madre are beautifully obvious. French mère is shorter and more eroded. Romanian commonly uses mamă, which is exactly the kind of thing Cognate needs to handle honestly rather than forcing every language into a fake symmetrical pattern.",
      "That makes MOTHER a better test than NIGHT. NIGHT was clean. MOTHER exposes the real product challenge: cognate learning only works if the app can show patterns without pretending language history is tidier than it is.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare inherited forms and everyday forms across the same family concept.",
    },
    {
      name: "Learn",
      text: "See how a basic human relationship preserves old patterns while usage changes.",
    },
    {
      name: "Test",
      text: "Check whether you can separate obvious cognates from everyday replacements.",
    },
    {
      name: "Review",
      text: "Save this family to remember the Germanic and Romance patterns.",
    },
    {
      name: "Bridge",
      text: "Use Spanish, Italian, or German as anchors when approaching another language.",
    },
  ],
} satisfies CognateConcept;