import type { CognateConcept } from "@/data/concepts/types";

export const nightConcept = {
  id: "night",
  label: "NIGHT",
  definition: "The period of darkness between sunset and sunrise.",
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
    "Cognate shows NIGHT as a concept first, then separates the language forms into clusters by shared ancestry.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "night-germanic",
      title: "Germanic night forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *nahts",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "night",
          ipa: "/naɪt/",
          note: "Modern English form from Old English niht.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Nacht",
          ipa: "/naxt/",
          note: "The final consonant keeps the older guttural sound more visibly.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "nacht",
          ipa: "/nɑxt/",
          note: "Very close to German Nacht in spelling and sound.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "natt",
          ipa: "/nat/",
          note: "The older cluster simplified into a shorter modern form.",
        },
      ],
    },
    {
      id: "night-romance",
      title: "Romance night forms",
      family: "Romance",
      ancestor: "Latin nox / noctis",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "nuit",
          ipa: "/nɥi/",
          note: "Looks different because French sound change did what French sound change does.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "noche",
          ipa: "/ˈnotʃe/",
          note: "The Latin ct path developed into ch.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "notte",
          ipa: "/ˈnɔtte/",
          note: "Keeps a clear trace of Latin noctis through consonant change.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "noapte",
          ipa: "/ˈno̯apte/",
          note: "A Romance form with its own very Romanian-looking development.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "One concept, two visible histories.",
    paragraphs: [
      "The Germanic words are easy to spot once they are placed together: English night, German Nacht, Dutch nacht, and Swedish natt all preserve a similar shape. The pattern is visible almost immediately.",
      "The Romance words look more varied, but they also share a common Latin source. Spanish noche, Italian notte, French nuit, and Romanian noapte show how sound change can stretch one ancestor in several directions while keeping the historical relationship intact.",
      "NIGHT is a clean example of why concepts matter. The meaning stays fixed, while the word histories separate into visible clusters. Start with the concept and the comparison stays sharp.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Follow the word family and recenter on related concepts.",
    },
    {
      name: "Learn",
      text: "Read the short root story and sound-pattern explanation.",
    },
    {
      name: "Test",
      text: "Check whether you can recognise the true cognates.",
    },
    {
      name: "Review",
      text: "Save this family for later spaced review.",
    },
    {
      name: "Bridge",
      text: "Use French, Spanish, or German as anchors for another language.",
    },
  ],
} satisfies CognateConcept;