// data/curation/concepts/blood.ts

import type { CognateConcept } from "@/data/concepts/types";

export const bloodConcept = {
  id: "blood",
  label: "BLOOD",
  definition: "The red fluid that circulates in the body and carries oxygen and nutrients.",
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
    "Cognate shows BLOOD as two clean clusters: a Germanic blood group and a Romance sanguis group, teaching that basic vocabulary does not always share the same inherited root across branches.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "blood-germanic",
      title: "Germanic blood forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *blōþą",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "blood",
          ipa: "/blʌd/",
          note: "English blood continues Old English blōd and belongs to the Germanic blood family.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Blut",
          ipa: "/bluːt/",
          note: "German Blut is a close relative of English blood, with the final consonant devoiced in modern German.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "bloed",
          ipa: "/blut/",
          note: "Dutch bloed preserves the Germanic blood form very clearly.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "blod",
          ipa: "/bluːd/",
          note: "Swedish blod is another transparent member of the Germanic blood cluster.",
        },
      ],
    },
    {
      id: "blood-romance",
      title: "Romance sanguis forms",
      family: "Romance",
      ancestor: "Latin sanguis",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "sang",
          ipa: "/sɑ̃/",
          note: "French sang descends from Latin sanguis but has reduced heavily in modern French.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "sangre",
          ipa: "/ˈsaŋɡɾe/",
          note: "Spanish sangre keeps the Latin sanguis family in a visibly fuller Romance form.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "sangue",
          ipa: "/ˈsaŋ.ɡwe/",
          note: "Italian sangue is another clear descendant of the Latin blood word.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "sânge",
          ipa: "/ˈsɨnd͡ʒe/",
          note: "Romanian sânge keeps the same Romance blood root in an eastern Romance shape.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "Same blood, different roots.",
    paragraphs: [
      "English blood, German Blut, Dutch bloed, and Swedish blod form a clean Germanic cluster. The family resemblance is easy to see, especially once the words are placed side by side.",
      "The Romance forms come from Latin sanguis: French sang, Spanish sangre, Italian sangue, and Romanian sânge. English speakers may already know this root indirectly through words like sanguine and consanguinity, even if nobody says consanguinity unless they are a lawyer, a genealogist, or trapped in a gothic novel.",
      "BLOOD is a useful reminder that not every basic concept has one visible inherited root across Germanic and Romance. Sometimes the clearest lesson is the split itself: one meaning, two separate word families.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare the Germanic blood group with the Romance sanguis group.",
    },
    {
      name: "Learn",
      text: "See why blood and sang mean the same thing but belong to different inherited clusters.",
    },
    {
      name: "Test",
      text: "Check whether you can avoid assuming that every basic word has a shared visible root.",
    },
    {
      name: "Review",
      text: "Save this concept to remember the blood/Blut/bloed/blod group and the sang/sangre/sangue/sânge group.",
    },
    {
      name: "Bridge",
      text: "Use Spanish sangre and Italian sangue as anchors for French sang and Romanian sânge.",
    },
  ],
} satisfies CognateConcept;