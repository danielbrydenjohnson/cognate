// data/curation/concepts/new.ts

import type { CognateConcept } from "@/data/concepts/types";

export const newConcept = {
  id: "new",
  label: "NEW",
  definition: "Recently made, discovered, created, or begun.",
  partOfSpeech: "adjective",
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
    "Cognate shows NEW as an adjective where both Germanic and Romance forms preserve descendants of the same old Indo-European new root.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "new-germanic",
      title: "Germanic new forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *newjaz",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "new",
          ipa: "/njuː/",
          note: "English new keeps the inherited Germanic adjective in a short, highly recognisable form.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "neu",
          ipa: "/nɔʏ/",
          note: "German neu is a close relative of English new, though the vowel has developed differently.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "nieuw",
          ipa: "/niu/",
          note: "Dutch nieuw sits very visibly between English new and German neu.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "ny",
          ipa: "/nyː/",
          note: "Swedish ny is short but belongs to the same inherited Germanic new family.",
        },
      ],
    },
    {
      id: "new-romance",
      title: "Romance novus forms",
      family: "Romance",
      ancestor: "Latin novus",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "nouveau",
          ipa: "/nu.vo/",
          note: "French nouveau descends from the Latin novus family, though the modern form is longer and less transparent.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "nuevo",
          ipa: "/ˈnweβo/",
          note: "Spanish nuevo is a clear Romance continuation of Latin novus.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "nuovo",
          ipa: "/ˈnwɔ.vo/",
          note: "Italian nuovo is another transparent descendant of Latin novus.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "nou",
          ipa: "/now/",
          note: "Romanian nou is compact, but it preserves the same Latin new root.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "An adjective without the grammar swamp.",
    paragraphs: [
      "NEW is handled through citation forms only: English new, German neu, Dutch nieuw, Swedish ny, French nouveau, Spanish nuevo, Italian nuovo, and Romanian nou. The inflected forms can wait. Nobody needs the grammar swamp before breakfast.",
      "The Germanic forms are easy to compare: English new, German neu, Dutch nieuw, and Swedish ny. They are short, close, and clearly inherited.",
      "The Romance forms come through Latin novus. Spanish nuevo and Italian nuovo make the connection obvious. French nouveau and Romanian nou show how the same root can stretch or compress across time. Germanic and Romance sit in separate modern clusters, but both point back to a much older Indo-European root.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic new group with the Romance novus group.",
    },
    {
      name: "Learn",
      text: "See how adjective citation forms can be compared without drowning the page in inflection tables.",
    },
    {
      name: "Test",
      text: "Check whether you can recognise the old new root across short and expanded forms.",
    },
    {
      name: "Review",
      text: "Save this concept to remember new, neu, nieuw, ny, nouveau, nuevo, nuovo, and nou.",
    },
    {
      name: "Bridge",
      text: "Use Spanish nuevo or Italian nuovo as anchors for French nouveau and Romanian nou.",
    },
  ],
} satisfies CognateConcept;