export type CuratedFalseFriend = {
  id: string;
  concept_id: string | null;
  word_a_language_code: string;
  word_a_form: string;
  word_b_language_code: string;
  word_b_form: string;
  warning: string;
  severity: "low" | "medium" | "high";
  source: string;
  reviewed_status: "demo" | "draft" | "reviewed" | "approved";
};

export const falseFriends: CuratedFalseFriend[] = [
  {
    id: "gift-en-de",
    concept_id: null,
    word_a_language_code: "en",
    word_a_form: "gift",
    word_b_language_code: "de",
    word_b_form: "Gift",
    warning: "German Gift means poison, not a present.",
    severity: "high",
    source: "manual_demo_seed",
    reviewed_status: "demo",
  },
  {
    id: "actual-en-fr",
    concept_id: null,
    word_a_language_code: "en",
    word_a_form: "actual",
    word_b_language_code: "fr",
    word_b_form: "actuel",
    warning:
      "French actuel usually means current or present, not actual in the English sense.",
    severity: "medium",
    source: "manual_demo_seed",
    reviewed_status: "demo",
  },
  {
    id: "library-en-fr",
    concept_id: null,
    word_a_language_code: "en",
    word_a_form: "library",
    word_b_language_code: "fr",
    word_b_form: "librairie",
    warning: "French librairie means bookshop, not library.",
    severity: "medium",
    source: "manual_demo_seed",
    reviewed_status: "demo",
  },
  {
    id: "embarrassed-en-es",
    concept_id: null,
    word_a_language_code: "en",
    word_a_form: "embarrassed",
    word_b_language_code: "es",
    word_b_form: "embarazada",
    warning: "Spanish embarazada means pregnant, not embarrassed.",
    severity: "high",
    source: "manual_demo_seed",
    reviewed_status: "demo",
  },
  {
    id: "camera-en-it",
    concept_id: null,
    word_a_language_code: "en",
    word_a_form: "camera",
    word_b_language_code: "it",
    word_b_form: "camera",
    warning:
      "Italian camera usually means room or chamber. It does not primarily mean a camera device.",
    severity: "medium",
    source: "manual_demo_seed",
    reviewed_status: "demo",
  },
];
