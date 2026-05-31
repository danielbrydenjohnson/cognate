// data/curation/concepts/tooth.ts

import type { CognateConcept } from "@/data/concepts/types";

export const toothConcept = {
  id: "tooth",
  label: "TOOTH",
  definition: "One of the hard white structures in the mouth used for biting and chewing.",
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
    "Cognate shows TOOTH as a classic sound-change lesson: the Germanic forms begin with t or shifted German z, while the Romance forms preserve the Latin dent family.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "tooth-germanic",
      title: "Germanic tooth forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *tanþs",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "tooth",
          ipa: "/tuːθ/",
          note: "English tooth continues Old English tōþ and preserves the Germanic t form clearly.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Zahn",
          ipa: "/tsaːn/",
          note: "German Zahn belongs to the same Germanic tooth family, with the initial sound shifted to z in spelling and /ts/ in pronunciation.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "tand",
          ipa: "/tɑnt/",
          note: "Dutch tand keeps the inherited Germanic tooth word with the t still visible.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "tand",
          ipa: "/tanːd/",
          note: "Swedish tand is a close match to Dutch tand and belongs to the same Germanic cluster.",
        },
      ],
    },
    {
      id: "tooth-romance",
      title: "Romance dent forms",
      family: "Romance",
      ancestor: "Latin dens, dentis",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "dent",
          ipa: "/dɑ̃/",
          note: "French dent descends from the Latin dent family and preserves the spelling clearly, even though the final consonant is silent.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "diente",
          ipa: "/ˈdjente/",
          note: "Spanish diente continues the Latin dent form with normal Romance development.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "dente",
          ipa: "/ˈdɛn.te/",
          note: "Italian dente is one of the clearest Romance descendants of Latin dens, dentis.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "dinte",
          ipa: "/ˈdinte/",
          note: "Romanian dinte keeps the same Latin dental root in an eastern Romance form.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "A clean sound-change lesson with teeth.",
    paragraphs: [
      "TOOTH is one of the best beginner concepts because the pattern teaches real historical linguistics without making the learner suffer for it. English tooth, Dutch tand, and Swedish tand preserve the Germanic t shape. German Zahn belongs with them too, but later German sound change pushed the initial sound toward /ts/.",
      "The Romance side is the dental family: French dent, Spanish diente, Italian dente, and Romanian dinte. This is the same root family English learners already know from dentist, dental, and orthodontist.",
      "The deeper lesson is Grimm's Law in miniature. The older Indo-European d seen in the Latin dent family corresponds to Germanic t in tooth and tand. That kind of pattern is exactly what Cognate should make memorable.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic tooth group with the Romance dent group.",
    },
    {
      name: "Learn",
      text: "See how the dental root connects dent, diente, dente, and dinte, while Germanic shifts toward tooth and tand.",
    },
    {
      name: "Test",
      text: "Check whether you can spot the d to t pattern across the two branches.",
    },
    {
      name: "Review",
      text: "Save this concept to remember tooth, Zahn, tand, dent, diente, dente, and dinte.",
    },
    {
      name: "Bridge",
      text: "Use the English technical words dental and dentist as anchors for the Romance dent family.",
    },
  ],
} satisfies CognateConcept;