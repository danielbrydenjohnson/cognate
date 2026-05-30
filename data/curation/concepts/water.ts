import type { CognateConcept } from "@/data/concepts/types";

export const waterConcept = {
  id: "water",
  label: "WATER",
  definition: "The clear liquid that forms rivers, lakes, rain, and the sea.",
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
    "Cognate shows WATER as a concept first, then separates the Germanic water forms from the Romance forms that descend from Latin aqua.",
  sourceNote:
    "Demo content only. Later this should be replaced by reviewed records from the Cognate database.",
  clusters: [
    {
      id: "water-germanic",
      title: "Germanic water forms",
      family: "Germanic",
      ancestor: "Proto-Germanic *watōr",
      confidence: "approved",
      words: [
        {
          language: "English",
          languageCode: "en",
          form: "water",
          ipa: "/ˈwɔːtər/",
          note: "Modern English water continues Old English wæter.",
        },
        {
          language: "German",
          languageCode: "de",
          form: "Wasser",
          ipa: "/ˈvasɐ/",
          note: "German keeps the same broad shape, with its own consonant development.",
        },
        {
          language: "Dutch",
          languageCode: "nl",
          form: "water",
          ipa: "/ˈʋaːtər/",
          note: "Dutch water is especially transparent beside English water.",
        },
        {
          language: "Swedish",
          languageCode: "sv",
          form: "vatten",
          ipa: "/ˈvatːɛn/",
          note: "Swedish vatten keeps the family resemblance, though the ending has shifted.",
        },
      ],
    },
    {
      id: "water-romance",
      title: "Romance water forms",
      family: "Romance",
      ancestor: "Latin aqua",
      confidence: "approved",
      words: [
        {
          language: "French",
          languageCode: "fr",
          form: "eau",
          ipa: "/o/",
          note: "French eau looks wildly different because the Latin form was heavily reduced over time.",
        },
        {
          language: "Spanish",
          languageCode: "es",
          form: "agua",
          ipa: "/ˈaɣwa/",
          note: "Spanish agua preserves the Latin aqua shape clearly.",
        },
        {
          language: "Italian",
          languageCode: "it",
          form: "acqua",
          ipa: "/ˈakkwa/",
          note: "Italian acqua is very close to Latin aqua, with spelling that still exposes the older form.",
        },
        {
          language: "Romanian",
          languageCode: "ro",
          form: "apă",
          ipa: "/ˈapə/",
          note: "Romanian apă is Romance, but it does not look as immediately transparent as Spanish or Italian.",
        },
      ],
    },
  ],
  learn: {
    eyebrow: "Learn",
    title: "The easy side and the deceptive side.",
    paragraphs: [
      "The Germanic water words are satisfying because the pattern is obvious: English water, German Wasser, Dutch water, and Swedish vatten all keep enough of the old shape for the relationship to feel visible.",
      "The Romance forms are a better test of Cognate. Spanish agua and Italian acqua make the Latin aqua connection easy. French eau and Romanian apă are less obvious, which is exactly where a concept-first view helps. The page can show the relationship without relying on surface similarity alone.",
      "This matters because cognates are not just words that look alike. Sometimes history is visible at a glance. Sometimes it has to be explained. WATER gives both kinds of learning in one concept.",
    ],
  },
  modes: [
    {
      name: "Explore",
      text: "Compare transparent and less obvious forms attached to the same basic concept.",
    },
    {
      name: "Learn",
      text: "See how Latin aqua can lead to forms as different-looking as eau, agua, acqua, and apă.",
    },
    {
      name: "Test",
      text: "Check whether you can recognise cognates that no longer look obvious.",
    },
    {
      name: "Review",
      text: "Save this family to remember both the Germanic and Romance water patterns.",
    },
    {
      name: "Bridge",
      text: "Use Spanish or Italian as clearer anchors for French and Romanian.",
    },
  ],
} satisfies CognateConcept;
