import Database from "better-sqlite3";
import path from "node:path";

import type {
  CognateClusterData,
  CognateConcept,
  ConceptFamily,
  ConceptWord,
  ProductMode,
} from "@/data/concepts/night";

type ConceptRow = {
  id: string;
  label: string;
  definition: string;
  part_of_speech: string;
  difficulty: string;
  reviewed_status: string;
  summary: string;
  source_note: string;
};

type CognateSetRow = {
  id: string;
  label: string;
  ancestor_form: string;
  language_family: string;
  confidence: "approved" | "reviewed" | "speculative";
};

type WordRow = {
  cognate_set_id: string;
  language_code: string;
  language_name: string;
  form: string;
  ipa: string;
  notes: string;
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
        cs.id,
        cs.label,
        cs.ancestor_form,
        cs.language_family,
        MIN(wcs.confidence) AS confidence
      FROM cognate_sets cs
      JOIN word_cognate_sets wcs
        ON wcs.cognate_set_id = cs.id
      WHERE cs.concept_id = ?
      GROUP BY
        cs.id,
        cs.label,
        cs.ancestor_form,
        cs.language_family
      ORDER BY cs.id ASC
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
        w.notes
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
      }));

    return {
      id: setRow.id,
      title: setRow.label,
      family: setRow.language_family as ConceptFamily,
      ancestor: setRow.ancestor_form,
      confidence: setRow.confidence,
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