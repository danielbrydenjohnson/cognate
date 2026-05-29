import Database from "better-sqlite3";
import path from "node:path";

import type {
  CognateClusterData,
  CognateConcept,
  ConceptFamily,
  ConceptWord,
  CurationConfidence,
  ProductMode,
} from "@/data/concepts/night";

type ConceptRow = {
  id: string;
  label: string;
  definition: string;
  part_of_speech: string;
  difficulty: string;
  source: string;
  reviewed_status: string;
  summary: string;
  source_note: string;
};

type CognateSetRow = {
  id: string;
  label: string;
  ancestor_form: string;
  ancestor_language: string | null;
  language_family: string;
  notes: string | null;
  source: string;
  reviewed_status: string;
};

type WordRow = {
  cognate_set_id: string;
  language_code: string;
  language_name: string;
  form: string;
  ipa: string;
  notes: string;
  source: string;
  reviewed_status: string;
  relationship_confidence: CurationConfidence;
  relationship_source: string;
};

type LearnSectionRow = {
  eyebrow: string;
  title: string;
};

type LearnParagraphRow = {
  paragraph: string;
};

type ConceptModeRow = {
  name: ProductMode["name"];
  text: string;
};

type FalseFriendRow = {
  id: string;
  concept_id: string | null;
  word_a_language_code: string;
  word_a_form: string;
  word_b_language_code: string;
  word_b_form: string;
  warning: string;
  severity: FalseFriendSeverity;
  source: string;
  reviewed_status: string;
};

export type FalseFriendSeverity = "low" | "medium" | "high";

export type FalseFriend = {
  id: string;
  conceptId: string | null;
  wordA: {
    languageCode: string;
    form: string;
  };
  wordB: {
    languageCode: string;
    form: string;
  };
  warning: string;
  severity: FalseFriendSeverity;
  source: string;
  reviewedStatus: string;
};

export type ConceptCurationChecklistItem = {
  id: string;
  label: string;
  passed: boolean;
  detail: string;
};

export type ConceptCurationReport = {
  conceptId: string;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  isComplete: boolean;
  nextAction: string;
  items: ConceptCurationChecklistItem[];
};

export type AdminConceptSummary = {
  id: string;
  label: string;
  definition: string;
  partOfSpeech: string;
  difficulty: string;
  reviewedStatus: string;
  clusterCount: number;
  wordCount: number;
  languageCount: number;
  curationReport: ConceptCurationReport;
};

const databasePath = path.join(process.cwd(), "db", "cognate.sqlite");

function getDatabase() {
  return new Database(databasePath, {
    readonly: true,
    fileMustExist: true,
  });
}

function getConceptRows(db: Database.Database): ConceptRow[] {
  return db
    .prepare(
      `
      SELECT
        id,
        label,
        definition,
        part_of_speech,
        difficulty,
        source,
        reviewed_status,
        summary,
        source_note
      FROM concepts
      ORDER BY label ASC
    `,
    )
    .all() as ConceptRow[];
}

function getConceptRowById(
  db: Database.Database,
  id: string,
): ConceptRow | undefined {
  return db
    .prepare(
      `
      SELECT
        id,
        label,
        definition,
        part_of_speech,
        difficulty,
        source,
        reviewed_status,
        summary,
        source_note
      FROM concepts
      WHERE id = ?
    `,
    )
    .get(id) as ConceptRow | undefined;
}

function getCognateSetRows(
  db: Database.Database,
  conceptId: string,
): CognateSetRow[] {
  return db
    .prepare(
      `
      SELECT
        id,
        label,
        ancestor_form,
        ancestor_language,
        language_family,
        notes,
        source,
        reviewed_status
      FROM cognate_sets
      WHERE concept_id = ?
      ORDER BY id ASC
    `,
    )
    .all(conceptId) as CognateSetRow[];
}

function getWordRows(db: Database.Database, conceptId: string): WordRow[] {
  return db
    .prepare(
      `
      SELECT
        wcs.cognate_set_id,
        w.language_code,
        w.language_name,
        w.form,
        w.ipa,
        w.notes,
        w.source,
        w.reviewed_status,
        wcs.confidence AS relationship_confidence,
        wcs.source AS relationship_source
      FROM words w
      JOIN word_cognate_sets wcs
        ON wcs.word_id = w.id
      WHERE w.concept_id = ?
      ORDER BY
        wcs.cognate_set_id ASC,
        CASE w.language_code
          WHEN 'en' THEN 1
          WHEN 'de' THEN 2
          WHEN 'nl' THEN 3
          WHEN 'sv' THEN 4
          WHEN 'fr' THEN 5
          WHEN 'es' THEN 6
          WHEN 'it' THEN 7
          WHEN 'ro' THEN 8
          ELSE 99
        END ASC
    `,
    )
    .all(conceptId) as WordRow[];
}

function getLearnSection(
  db: Database.Database,
  conceptId: string,
): LearnSectionRow {
  const section = db
    .prepare(
      `
      SELECT eyebrow, title
      FROM concept_learn_sections
      WHERE concept_id = ?
    `,
    )
    .get(conceptId) as LearnSectionRow | undefined;

  if (!section) {
    throw new Error(`Missing learn section for concept: ${conceptId}`);
  }

  return section;
}

function getLearnParagraphs(
  db: Database.Database,
  conceptId: string,
): string[] {
  const rows = db
    .prepare(
      `
      SELECT paragraph
      FROM concept_learn_paragraphs
      WHERE concept_id = ?
      ORDER BY position ASC
    `,
    )
    .all(conceptId) as LearnParagraphRow[];

  return rows.map((row) => row.paragraph);
}

function getConceptModes(
  db: Database.Database,
  conceptId: string,
): ProductMode[] {
  const rows = db
    .prepare(
      `
      SELECT name, text
      FROM concept_modes
      WHERE concept_id = ?
      ORDER BY position ASC
    `,
    )
    .all(conceptId) as ConceptModeRow[];

  return rows.map((row) => ({
    name: row.name,
    text: row.text,
  }));
}

function mapFalseFriendRow(row: FalseFriendRow): FalseFriend {
  return {
    id: row.id,
    conceptId: row.concept_id,
    wordA: {
      languageCode: row.word_a_language_code,
      form: row.word_a_form,
    },
    wordB: {
      languageCode: row.word_b_language_code,
      form: row.word_b_form,
    },
    warning: row.warning,
    severity: row.severity,
    source: row.source,
    reviewedStatus: row.reviewed_status,
  };
}

function getFalseFriendRows(db: Database.Database): FalseFriendRow[] {
  return db
    .prepare(
      `
      SELECT
        id,
        concept_id,
        word_a_language_code,
        word_a_form,
        word_b_language_code,
        word_b_form,
        warning,
        severity,
        source,
        reviewed_status
      FROM false_friends
      ORDER BY
        CASE severity
          WHEN 'high' THEN 1
          WHEN 'medium' THEN 2
          WHEN 'low' THEN 3
          ELSE 99
        END ASC,
        id ASC
    `,
    )
    .all() as FalseFriendRow[];
}

function getFalseFriendRowsByConceptId(
  db: Database.Database,
  conceptId: string,
): FalseFriendRow[] {
  return db
    .prepare(
      `
      SELECT
        id,
        concept_id,
        word_a_language_code,
        word_a_form,
        word_b_language_code,
        word_b_form,
        warning,
        severity,
        source,
        reviewed_status
      FROM false_friends
      WHERE concept_id = ?
      ORDER BY
        CASE severity
          WHEN 'high' THEN 1
          WHEN 'medium' THEN 2
          WHEN 'low' THEN 3
          ELSE 99
        END ASC,
        id ASC
    `,
    )
    .all(conceptId) as FalseFriendRow[];
}

function getClusterConfidence(words: ConceptWord[]): CurationConfidence {
  if (words.some((word) => word.relationshipConfidence === "speculative")) {
    return "speculative";
  }

  if (words.some((word) => word.relationshipConfidence === "reviewed")) {
    return "reviewed";
  }

  return "approved";
}

function buildConcept(
  db: Database.Database,
  conceptRow: ConceptRow,
): CognateConcept {
  const cognateSetRows = getCognateSetRows(db, conceptRow.id);
  const wordRows = getWordRows(db, conceptRow.id);
  const learnSection = getLearnSection(db, conceptRow.id);

  const clusters: CognateClusterData[] = cognateSetRows.map((setRow) => {
    const words: ConceptWord[] = wordRows
      .filter((wordRow) => wordRow.cognate_set_id === setRow.id)
      .map((wordRow) => ({
        language: wordRow.language_name,
        languageCode: wordRow.language_code,
        form: wordRow.form,
        ipa: wordRow.ipa,
        note: wordRow.notes,
        source: wordRow.source,
        reviewedStatus: wordRow.reviewed_status,
        relationshipConfidence: wordRow.relationship_confidence,
        relationshipSource: wordRow.relationship_source,
      }));

    return {
      id: setRow.id,
      title: setRow.label,
      family: setRow.language_family as ConceptFamily,
      ancestor: setRow.ancestor_form,
      ancestorLanguage: setRow.ancestor_language ?? undefined,
      confidence: getClusterConfidence(words),
      note: setRow.notes ?? undefined,
      source: setRow.source,
      reviewedStatus: setRow.reviewed_status,
      words,
    };
  });

  const languages = Array.from(
    new Set(
      clusters.flatMap((cluster) =>
        cluster.words.map((word) => word.language),
      ),
    ),
  );

  return {
    id: conceptRow.id,
    label: conceptRow.label,
    definition: conceptRow.definition,
    partOfSpeech: conceptRow.part_of_speech,
    difficulty: conceptRow.difficulty,
    source: conceptRow.source,
    reviewedStatus: conceptRow.reviewed_status,
    languages,
    summary: conceptRow.summary,
    sourceNote: conceptRow.source_note,
    clusters,
    learn: {
      eyebrow: learnSection.eyebrow,
      title: learnSection.title,
      paragraphs: getLearnParagraphs(db, conceptRow.id),
    },
    modes: getConceptModes(db, conceptRow.id),
  };
}

function getNextCurationAction(
  items: ConceptCurationChecklistItem[],
): string {
  const firstFailedItem = items.find((item) => !item.passed);

  if (!firstFailedItem) {
    return "Ready for review.";
  }

  return firstFailedItem.detail;
}

export function buildConceptCurationReport(
  concept: CognateConcept,
): ConceptCurationReport {
  const wordCount = concept.clusters.reduce(
    (total, cluster) => total + cluster.words.length,
    0,
  );

  const allClustersHaveAncestor = concept.clusters.every((cluster) =>
    Boolean(cluster.ancestor.trim()),
  );

  const allClustersHaveConfidence = concept.clusters.every((cluster) =>
    Boolean(cluster.confidence.trim()),
  );

  const allClustersHaveSources = concept.clusters.every((cluster) =>
    Boolean(cluster.source?.trim()),
  );

  const allClustersHaveReviewedStatus = concept.clusters.every((cluster) =>
    Boolean(cluster.reviewedStatus?.trim()),
  );

  const allClustersHaveWords = concept.clusters.every(
    (cluster) => cluster.words.length > 0,
  );

  const allWordsHaveIpa = concept.clusters.every((cluster) =>
    cluster.words.every((word) => Boolean(word.ipa.trim())),
  );

  const allWordsHaveNotes = concept.clusters.every((cluster) =>
    cluster.words.every((word) => Boolean(word.note.trim())),
  );

  const allWordsHaveSources = concept.clusters.every((cluster) =>
    cluster.words.every((word) => Boolean(word.source?.trim())),
  );

  const allWordsHaveReviewedStatus = concept.clusters.every((cluster) =>
    cluster.words.every((word) => Boolean(word.reviewedStatus?.trim())),
  );

  const allWordRelationshipsHaveConfidence = concept.clusters.every((cluster) =>
    cluster.words.every((word) => Boolean(word.relationshipConfidence?.trim())),
  );

  const allWordRelationshipsHaveSources = concept.clusters.every((cluster) =>
    cluster.words.every((word) => Boolean(word.relationshipSource?.trim())),
  );

  const items: ConceptCurationChecklistItem[] = [
    {
      id: "concept-definition",
      label: "Concept has definition",
      passed: Boolean(concept.definition.trim()),
      detail: concept.definition.trim()
        ? "Definition is present."
        : "Missing definition. This concept is not ready for review.",
    },
    {
      id: "concept-source",
      label: "Concept has source",
      passed: Boolean(concept.source?.trim()),
      detail: concept.source?.trim()
        ? `Concept source: ${concept.source}.`
        : "Missing concept source. This needs traceability before real curation.",
    },
    {
      id: "concept-source-note",
      label: "Concept has source note",
      passed: Boolean(concept.sourceNote.trim()),
      detail: concept.sourceNote.trim()
        ? "Source note is present."
        : "Missing source note. Etymology claims need traceability.",
    },
    {
      id: "concept-summary",
      label: "Concept has summary",
      passed: Boolean(concept.summary.trim()),
      detail: concept.summary.trim()
        ? "Summary is present."
        : "Missing summary. Public pages need a short concept overview.",
    },
    {
      id: "concept-learn-content",
      label: "Concept has learn paragraphs",
      passed:
        Boolean(concept.learn.title.trim()) &&
        concept.learn.paragraphs.length > 0 &&
        concept.learn.paragraphs.every((paragraph) =>
          Boolean(paragraph.trim()),
        ),
      detail:
        concept.learn.paragraphs.length > 0
          ? `${concept.learn.paragraphs.length} learn paragraph${
              concept.learn.paragraphs.length === 1 ? "" : "s"
            } present.`
          : "Missing learn content. This weakens the actual learning loop.",
    },
    {
      id: "cognate-clusters-exist",
      label: "At least one cognate cluster exists",
      passed: concept.clusters.length > 0,
      detail:
        concept.clusters.length > 0
          ? `${concept.clusters.length} cluster${
              concept.clusters.length === 1 ? "" : "s"
            } present.`
          : "No clusters found. This concept has no etymology product value yet.",
    },
    {
      id: "cluster-ancestor-forms",
      label: "All clusters have ancestor forms",
      passed: concept.clusters.length > 0 && allClustersHaveAncestor,
      detail: allClustersHaveAncestor
        ? "Every cluster has an ancestor form."
        : "One or more clusters are missing an ancestor form.",
    },
    {
      id: "cluster-confidence-labels",
      label: "All clusters have confidence labels",
      passed: concept.clusters.length > 0 && allClustersHaveConfidence,
      detail: allClustersHaveConfidence
        ? "Every cluster has a confidence label."
        : "One or more clusters are missing confidence labels.",
    },
    {
      id: "cluster-sources",
      label: "All clusters have sources",
      passed: concept.clusters.length > 0 && allClustersHaveSources,
      detail: allClustersHaveSources
        ? "Every cluster has a source."
        : "One or more clusters are missing sources.",
    },
    {
      id: "cluster-reviewed-status",
      label: "All clusters have reviewed status",
      passed: concept.clusters.length > 0 && allClustersHaveReviewedStatus,
      detail: allClustersHaveReviewedStatus
        ? "Every cluster has a reviewed status."
        : "One or more clusters are missing reviewed status.",
    },
    {
      id: "cluster-word-coverage",
      label: "All clusters contain words",
      passed: concept.clusters.length > 0 && allClustersHaveWords,
      detail: allClustersHaveWords
        ? "Every cluster contains at least one word."
        : "One or more clusters are empty.",
    },
    {
      id: "word-ipa-coverage",
      label: "All words have IPA",
      passed: wordCount > 0 && allWordsHaveIpa,
      detail: allWordsHaveIpa
        ? "Every word has IPA."
        : "One or more words are missing IPA.",
    },
    {
      id: "word-note-coverage",
      label: "All words have notes",
      passed: wordCount > 0 && allWordsHaveNotes,
      detail: allWordsHaveNotes
        ? "Every word has a note."
        : "One or more words are missing notes.",
    },
    {
      id: "word-sources",
      label: "All words have sources",
      passed: wordCount > 0 && allWordsHaveSources,
      detail: allWordsHaveSources
        ? "Every word has a source."
        : "One or more words are missing sources.",
    },
    {
      id: "word-reviewed-status",
      label: "All words have reviewed status",
      passed: wordCount > 0 && allWordsHaveReviewedStatus,
      detail: allWordsHaveReviewedStatus
        ? "Every word has a reviewed status."
        : "One or more words are missing reviewed status.",
    },
    {
      id: "word-relationship-confidence",
      label: "All word relationships have confidence",
      passed: wordCount > 0 && allWordRelationshipsHaveConfidence,
      detail: allWordRelationshipsHaveConfidence
        ? "Every word relationship has a confidence label."
        : "One or more word relationships are missing confidence labels.",
    },
    {
      id: "word-relationship-sources",
      label: "All word relationships have sources",
      passed: wordCount > 0 && allWordRelationshipsHaveSources,
      detail: allWordRelationshipsHaveSources
        ? "Every word relationship has a source."
        : "One or more word relationships are missing sources.",
    },
    {
      id: "concept-reviewed-status",
      label: "Concept has reviewed status",
      passed: Boolean(concept.reviewedStatus.trim()),
      detail: concept.reviewedStatus.trim()
        ? `Current status: ${concept.reviewedStatus}.`
        : "Missing reviewed status.",
    },
  ];

  const passedChecks = items.filter((item) => item.passed).length;
  const totalChecks = items.length;
  const failedChecks = totalChecks - passedChecks;

  return {
    conceptId: concept.id,
    totalChecks,
    passedChecks,
    failedChecks,
    isComplete: failedChecks === 0,
    nextAction: getNextCurationAction(items),
    items,
  };
}

export function getConcepts(): CognateConcept[] {
  const db = getDatabase();

  try {
    return getConceptRows(db).map((conceptRow) => buildConcept(db, conceptRow));
  } finally {
    db.close();
  }
}

export function getConceptById(id: string): CognateConcept | undefined {
  const db = getDatabase();

  try {
    const conceptRow = getConceptRowById(db, id);

    if (!conceptRow) {
      return undefined;
    }

    return buildConcept(db, conceptRow);
  } finally {
    db.close();
  }
}

export function getConceptCurationReport(
  conceptId: string,
): ConceptCurationReport | undefined {
  const concept = getConceptById(conceptId);

  if (!concept) {
    return undefined;
  }

  return buildConceptCurationReport(concept);
}

export function getDailyConcept(date = new Date()): CognateConcept {
  const concepts = getConcepts();

  const startOfDayUtc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );

  const dayNumber = Math.floor(startOfDayUtc / 86_400_000);
  const conceptIndex = dayNumber % concepts.length;
  const concept = concepts.at(conceptIndex) ?? concepts.at(0);

  if (!concept) {
    throw new Error("No concepts are available for the daily cognate.");
  }

  return concept;
}

export function getFalseFriends(): FalseFriend[] {
  const db = getDatabase();

  try {
    return getFalseFriendRows(db).map(mapFalseFriendRow);
  } finally {
    db.close();
  }
}

export function getFalseFriendsByConceptId(conceptId: string): FalseFriend[] {
  const db = getDatabase();

  try {
    return getFalseFriendRowsByConceptId(db, conceptId).map(mapFalseFriendRow);
  } finally {
    db.close();
  }
}

export function getAdminConceptSummaries(): AdminConceptSummary[] {
  return getConcepts().map((concept) => {
    const wordCount = concept.clusters.reduce(
      (total, cluster) => total + cluster.words.length,
      0,
    );

    return {
      id: concept.id,
      label: concept.label,
      definition: concept.definition,
      partOfSpeech: concept.partOfSpeech,
      difficulty: concept.difficulty,
      reviewedStatus: concept.reviewedStatus,
      clusterCount: concept.clusters.length,
      wordCount,
      languageCount: concept.languages.length,
      curationReport: buildConceptCurationReport(concept),
    };
  });
}