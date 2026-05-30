// data/curation/concepts/name.ts

import type { CognateConcept } from "@/data/concepts/types";

export const nameConcept = {
  id: "name",
  label: "NAME",
  definition: "A word or phrase by which a person, place, thing, or concept is known.",
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
    "Cognate shows NAME as a deep inherited word where both the Germanic and Romance branches preserve descendants of the same old Indo-European naming root.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "name-germanic",
      title: "Germanic name forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *namô",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "name",
          ipa: "/neɪm/",
          note: "English name continues Old English nama and keeps the inherited Germanic form clearly.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Name",
          ipa: "/ˈnaːmə/",
          note: "German Name is a very transparent relative of English name.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "naam",
          ipa: "/naːm/",
          note: "Dutch naam keeps the same Germanic word with a long vowel.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "namn",
          ipa: "/namn/",
          note: "Swedish namn keeps the old n-m-n shape that makes the wider pattern easier to see.",
        },
      ],
    },
    {
      id: "name-romance",
      title: "Romance nomen forms",
      family: "Romance",
      ancestor: "Latin nōmen",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "nom",
          ipa: "/nɔ̃/",
          note: "French nom descends from Latin nōmen, heavily reduced but still recognisable through the n-m pattern.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "nombre",
          ipa: "/ˈnombɾe/",
          note: "Spanish nombre comes from Latin nōmen through a developed Romance form that added extra consonant material.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "nome",
          ipa: "/ˈno.me/",
          note: "Italian nome is one of the clearest Romance continuations of Latin nōmen.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "nume",
          ipa: "/ˈnume/",
          note: "Romanian nume is Romance and keeps the same inherited naming root in a compact form.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The old word for what a word is called.",
    paragraphs: [
      "NAME is one of the cleanest deep-cognate concepts in the sprint. English name, German Name, Dutch naam, and Swedish namn all sit together as Germanic relatives. The family resemblance is obvious enough that learners can feel the pattern before they analyse it.",
      "The Romance side comes from Latin nōmen: French nom, Spanish nombre, Italian nome, and Romanian nume. Spanish nombre looks busier, French nom looks reduced, but the old n-m skeleton is still doing the work.",
      "The useful lesson is that Germanic and Romance do not always form unrelated islands. Both branches preserve descendants of a very old Indo-European word for name. This is the kind of concept where Cognate can show modern clusters separately while still pointing to a deeper shared root underneath.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic name forms with the Romance forms from Latin nōmen.",
    },
    {
      name: "Learn",
      text: "See how the same old naming root survives across both language families.",
    },
    {
      name: "Test",
      text: "Check whether you can recognise the n-m pattern across reduced and expanded forms.",
    },
    {
      name: "Review",
      text: "Save this concept to remember name, Name, naam, namn, nom, nombre, nome, and nume.",
    },
    {
      name: "Bridge",
      text: "Use English name or Italian nome as anchors for French nom, Spanish nombre, and Romanian nume.",
    },
  ],
} satisfies CognateConcept;