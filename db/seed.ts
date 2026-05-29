import Database from "better-sqlite3";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

import { concepts } from "@/data/concepts";

const dbDir = path.join(process.cwd(), "db");
const dbPath = path.join(dbDir, "cognate.sqlite");
const schemaPath = path.join(dbDir, "schema.sql");

mkdirSync(dbDir, { recursive: true });

const db = new Database(dbPath);
const schema = readFileSync(schemaPath, "utf8");

db.exec(schema);

const falseFriends = [
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

const insertConcept = db.prepare(`
  INSERT INTO concepts (
    id,
    concepticon_id,
    label,
    definition,
    part_of_speech,
    category,
    difficulty,
    source,
    reviewed_status,
    summary,
    source_note
  ) VALUES (
    @id,
    @concepticon_id,
    @label,
    @definition,
    @part_of_speech,
    @category,
    @difficulty,
    @source,
    @reviewed_status,
    @summary,
    @source_note
  )
`);

const insertWord = db.prepare(`
  INSERT INTO words (
    id,
    concept_id,
    language_code,
    language_name,
    form,
    lemma,
    ipa,
    gloss,
    notes,
    source,
    reviewed_status
  ) VALUES (
    @id,
    @concept_id,
    @language_code,
    @language_name,
    @form,
    @lemma,
    @ipa,
    @gloss,
    @notes,
    @source,
    @reviewed_status
  )
`);

const insertCognateSet = db.prepare(`
  INSERT INTO cognate_sets (
    id,
    concept_id,
    label,
    ancestor_form,
    ancestor_language,
    language_family,
    notes,
    source,
    reviewed_status
  ) VALUES (
    @id,
    @concept_id,
    @label,
    @ancestor_form,
    @ancestor_language,
    @family,
    @notes,
    @source,
    @reviewed_status
  )
`);

const insertWordCognateSet = db.prepare(`
  INSERT INTO word_cognate_sets (
    word_id,
    cognate_set_id,
    relationship_type,
    confidence,
    source
  ) VALUES (
    @word_id,
    @cognate_set_id,
    @relationship_type,
    @confidence,
    @source
  )
`);

const insertFalseFriend = db.prepare(`
  INSERT INTO false_friends (
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
  ) VALUES (
    @id,
    @concept_id,
    @word_a_language_code,
    @word_a_form,
    @word_b_language_code,
    @word_b_form,
    @warning,
    @severity,
    @source,
    @reviewed_status
  )
`);

const insertLearnSection = db.prepare(`
  INSERT INTO concept_learn_sections (
    concept_id,
    eyebrow,
    title
  ) VALUES (
    @concept_id,
    @eyebrow,
    @title
  )
`);

const insertLearnParagraph = db.prepare(`
  INSERT INTO concept_learn_paragraphs (
    id,
    concept_id,
    position,
    paragraph
  ) VALUES (
    @id,
    @concept_id,
    @position,
    @paragraph
  )
`);

const insertConceptMode = db.prepare(`
  INSERT INTO concept_modes (
    id,
    concept_id,
    name,
    text,
    position
  ) VALUES (
    @id,
    @concept_id,
    @name,
    @text,
    @position
  )
`);

const seed = db.transaction(() => {
  for (const concept of concepts) {
    insertConcept.run({
      id: concept.id,
      concepticon_id: null,
      label: concept.label,
      definition: concept.definition,
      part_of_speech: concept.partOfSpeech,
      category: null,
      difficulty: concept.difficulty,
      source: "manual_demo_seed",
      reviewed_status: concept.reviewedStatus,
      summary: concept.summary,
      source_note: concept.sourceNote,
    });

    insertLearnSection.run({
      concept_id: concept.id,
      eyebrow: concept.learn.eyebrow,
      title: concept.learn.title,
    });

    concept.learn.paragraphs.forEach((paragraph, paragraphIndex) => {
      insertLearnParagraph.run({
        id: `${concept.id}-learn-${paragraphIndex + 1}`,
        concept_id: concept.id,
        position: paragraphIndex + 1,
        paragraph,
      });
    });

    concept.modes.forEach((mode, modeIndex) => {
      insertConceptMode.run({
        id: `${concept.id}-mode-${modeIndex + 1}`,
        concept_id: concept.id,
        name: mode.name,
        text: mode.text,
        position: modeIndex + 1,
      });
    });

    for (const cluster of concept.clusters) {
      const cognateSetId = `${concept.id}-${cluster.id}`;

      insertCognateSet.run({
        id: cognateSetId,
        concept_id: concept.id,
        label: cluster.title,
        ancestor_form: cluster.ancestor,
        ancestor_language: null,
        family: cluster.family,
        notes: null,
        source: "manual_demo_seed",
        reviewed_status: concept.reviewedStatus,
      });

      for (const word of cluster.words) {
        const wordId = `${concept.id}-${word.languageCode}`;

        insertWord.run({
          id: wordId,
          concept_id: concept.id,
          language_code: word.languageCode,
          language_name: word.language,
          form: word.form,
          lemma: word.form,
          ipa: word.ipa,
          gloss: concept.definition,
          notes: word.note,
          source: "manual_demo_seed",
          reviewed_status: concept.reviewedStatus,
        });

        insertWordCognateSet.run({
          word_id: wordId,
          cognate_set_id: cognateSetId,
          relationship_type: "cognate",
          confidence: cluster.confidence,
          source: "manual_demo_seed",
        });
      }
    }
  }

  for (const falseFriend of falseFriends) {
    insertFalseFriend.run(falseFriend);
  }
});

seed();

const conceptCount = db.prepare("SELECT COUNT(*) AS count FROM concepts").get() as {
  count: number;
};

const wordCount = db.prepare("SELECT COUNT(*) AS count FROM words").get() as {
  count: number;
};

const cognateSetCount = db
  .prepare("SELECT COUNT(*) AS count FROM cognate_sets")
  .get() as {
  count: number;
};

const falseFriendCount = db
  .prepare("SELECT COUNT(*) AS count FROM false_friends")
  .get() as {
  count: number;
};

db.close();

console.log("Seeded Cognate database:");
console.log(`- ${conceptCount.count} concepts`);
console.log(`- ${wordCount.count} words`);
console.log(`- ${cognateSetCount.count} cognate sets`);
console.log(`- ${falseFriendCount.count} false friends`);
console.log(`Database written to ${dbPath}`);