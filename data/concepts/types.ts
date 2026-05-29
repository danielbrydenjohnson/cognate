export type ConceptFamily = "Germanic" | "Romance";

export type CurationConfidence = "approved" | "reviewed" | "speculative";

export type ConceptWord = {
  language: string;
  languageCode: string;
  form: string;
  ipa: string;
  note: string;
  source?: string;
  reviewedStatus?: string;
  relationshipConfidence?: CurationConfidence;
  relationshipSource?: string;
};

export type CognateClusterData = {
  id: string;
  title: string;
  family: ConceptFamily;
  ancestor: string;
  ancestorLanguage?: string;
  confidence: CurationConfidence;
  note?: string;
  source?: string;
  reviewedStatus?: string;
  words: ConceptWord[];
};

export type ProductMode = {
  name: "Explore" | "Learn" | "Test" | "Review" | "Bridge";
  text: string;
};

export type CognateConcept = {
  id: string;
  label: string;
  definition: string;
  partOfSpeech: string;
  difficulty: string;
  source?: string;
  reviewedStatus: string;
  languages: string[];
  summary: string;
  sourceNote: string;
  clusters: CognateClusterData[];
  learn: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  modes: ProductMode[];
};