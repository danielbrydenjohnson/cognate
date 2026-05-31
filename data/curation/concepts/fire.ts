// data/curation/concepts/fire.ts

import type { CognateConcept } from "@/data/concepts/types";

export const fireConcept = {
  id: "fire",
  label: "FIRE",
  definition: "The visible heat and light produced by burning.",
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
    "Cognate shows FIRE as a useful warning against lazy visual matching: English fire, German Feuer, French feu, and Spanish fuego look similar, but they do not all belong to the same cluster.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "fire-west-germanic",
      title: "West Germanic fire forms",
      family: "Germanic",
      ancestor: "Proto-West Germanic *fuir",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "fire",
          ipa: "/faɪər/",
          note: "English fire continues Old English fȳr and belongs with the West Germanic fire forms.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Feuer",
          ipa: "/ˈfɔʏɐ/",
          note: "German Feuer looks temptingly close to Romance feu, but it belongs to the Germanic fire group, not the Latin focus group.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "vuur",
          ipa: "/vyːr/",
          note: "Dutch vuur is another West Germanic form and sits with English fire and German Feuer.",
        },
      ],
    },
    {
      id: "fire-north-germanic",
      title: "North Germanic eld form",
      family: "Germanic",
      ancestor: "Old Norse eldr, from Proto-Germanic *ailidaz",
      confidence: "approved",
      words: [
        {
          language: "Swedish",
          languageCode: "sv",
          form: "eld",
          ipa: "/ɛld/",
          note: "Swedish eld is Germanic, but it is not part of the same immediate fire/Feuer/vuur cluster. This is useful because one language can use a different inherited word for the same concept.",
        },
      ],
    },
    {
      id: "fire-romance",
      title: "Romance focus forms",
      family: "Romance",
      ancestor: "Latin focus",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "feu",
          ipa: "/fø/",
          note: "French feu comes from Latin focus, originally meaning hearth or fireplace.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "fuego",
          ipa: "/ˈfweɣo/",
          note: "Spanish fuego comes from Latin focus through the Romance development of the word for hearth into the normal word for fire.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "fuoco",
          ipa: "/ˈfwɔ.ko/",
          note: "Italian fuoco is a clear Romance continuation of Latin focus.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "foc",
          ipa: "/fok/",
          note: "Romanian foc preserves the Latin focus shape more compactly than the western Romance forms.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The dangerous lookalike.",
    paragraphs: [
      "English fire, German Feuer, Dutch vuur, French feu, Spanish fuego, Italian fuoco, and Romanian foc look as if they might all belong together. They do not. This is where surface similarity starts handing out forged documents.",
      "English fire, German Feuer, and Dutch vuur form a West Germanic cluster. Swedish eld is also Germanic, but it comes from a different inherited fire word. Even inside one language family, not every language chooses the same inherited form.",
      "The Romance forms come from Latin focus, originally hearth or fireplace. French feu, Spanish fuego, Italian fuoco, and Romanian foc are true relatives of each other, but not close relatives of German Feuer. Visual similarity is evidence, not proof.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the West Germanic fire forms, Swedish eld, and the Romance focus family.",
    },
    {
      name: "Learn",
      text: "See why German Feuer and French feu look related but belong to different clusters.",
    },
    {
      name: "Test",
      text: "Check whether you can avoid the tempting but wrong fire/feu shortcut.",
    },
    {
      name: "Review",
      text: "Save this concept to remember the split between Germanic fire forms and Romance focus forms.",
    },
    {
      name: "Bridge",
      text: "Use Italian fuoco and Spanish fuego as anchors for French feu and Romanian foc.",
    },
  ],
} satisfies CognateConcept;