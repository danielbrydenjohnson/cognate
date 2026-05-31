// data/curation/concepts/day.ts

import type { CognateConcept } from "@/data/concepts/types";

export const dayConcept = {
  id: "day",
  label: "DAY",
  definition: "A period of twenty-four hours, or the time when there is daylight.",
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
    "Cognate shows DAY as a time word with a clean Germanic cluster and a Romance side where Latin diēs and Late Latin diurnum took different routes.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "day-germanic",
      title: "Germanic day forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *dagaz",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "day",
          ipa: "/deɪ/",
          note: "English day continues Old English dæġ and belongs to the inherited Germanic day family.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Tag",
          ipa: "/taːk/",
          note: "German Tag is part of the same Germanic family, with its own regular sound development.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "dag",
          ipa: "/dɑx/",
          note: "Dutch dag keeps the Germanic day word in a compact and recognisable form.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "dag",
          ipa: "/dɑːɡ/",
          note: "Swedish dag is very close to Dutch dag and belongs to the same inherited cluster.",
        },
      ],
    },
    {
      id: "day-romance",
      title: "Romance day forms",
      family: "Romance",
      ancestor: "Latin diēs and Late Latin diurnum",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "jour",
          ipa: "/ʒuʁ/",
          note: "French jour comes through Late Latin diurnum, not as a simple direct-looking descendant of Latin diēs.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "día",
          ipa: "/ˈdia/",
          note: "Spanish día stays closer to Latin diēs and is the most transparent Romance anchor here.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "giorno",
          ipa: "/ˈdʒor.no/",
          note: "Italian giorno, like French jour, comes through Late Latin diurnum rather than the shorter diēs form.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "zi",
          ipa: "/zi/",
          note: "Romanian zi is Romance and continues the Latin day family in a short eastern Romance form.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The day word took more than one road.",
    paragraphs: [
      "DAY pairs naturally with NIGHT. English day, German Tag, Dutch dag, and Swedish dag form a clear Germanic cluster. The shapes differ, but the family resemblance is visible enough for learners to feel the pattern quickly.",
      "The Romance side is more interesting. Spanish día points fairly directly back to Latin diēs. French jour and Italian giorno instead come through Late Latin diurnum, a related form meaning daily or daytime. Romanian zi is compact, but it belongs in the same wider Latin day family.",
      "The lesson is that even within Romance, languages do not always take the same route from Latin to the modern word. Cognate should show that divergence clearly, because otherwise learners get a fake sense that language families are tidier than they are.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic day group with the Romance diēs and diurnum family.",
    },
    {
      name: "Learn",
      text: "See why French jour and Italian giorno are not simple lookalikes of Spanish día.",
    },
    {
      name: "Test",
      text: "Check whether you can spot when related words followed different historical routes.",
    },
    {
      name: "Review",
      text: "Save this concept to remember day, Tag, dag, jour, día, giorno, and zi.",
    },
    {
      name: "Bridge",
      text: "Use Spanish día as the clearest Romance anchor, then connect it to French jour and Italian giorno.",
    },
  ],
} satisfies CognateConcept;