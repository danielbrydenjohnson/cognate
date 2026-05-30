import Database from "better-sqlite3";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

import { curatedConcepts } from "@/data/curation/concepts";
import { falseFriends } from "@/data/curation/false-friends";

const dbDir = path.join(process.cwd(), "db");
const dbPath = path.join(dbDir, "cognate.sqlite");
const schemaPath = path.join(dbDir, "schema.sql");

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getNonEmptyString(value: unknown, pathLabel: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid seed data: ${pathLabel} must be a non-empty string.`);
  }

  return value;
}

function getOptionalNullableString(
  value: unknown,
  pathLabel: string,
): string | null | undefined {
  if (value === null || value === undefined) {
    return value;
  }

  return getNonEmptyString(value, pathLabel);
}

function getArray(value: unknown, pathLabel: string): unknown[] {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid seed data: ${pathLabel} must be an array.`);
  }

  return value;
}

function validateWord(
  value: unknown,
  conceptId: string,
  clusterId: string,
  wordIndex: number,
): void {
  const pathLabel = `concept "${conceptId}" cluster "${clusterId}" word ${wordIndex + 1}`;

  if (!isObject(value)) {
    throw new Error(`Invalid seed data: ${pathLabel} must be an object.`);
  }

  getNonEmptyString(value.language, `${pathLabel}.language`);
  getNonEmptyString(value.languageCode, `${pathLabel}.languageCode`);
  getNonEmptyString(value.form, `${pathLabel}.form`);
  getNonEmptyString(value.ipa, `${pathLabel}.ipa`);
  getNonEmptyString(value.note, `${pathLabel}.note`);

  getOptionalNullableString(value.source, `${pathLabel}.source`);
  getOptionalNullableString(value.reviewedStatus, `${pathLabel}.reviewedStatus`);
  getOptionalNullableString(
    value.relationshipConfidence,
    `${pathLabel}.relationshipConfidence`,
  );
  getOptionalNullableString(value.relationshipSource, `${pathLabel}.relationshipSource`);
}

function validateCluster(
  value: unknown,
  conceptId: string,
  clusterIndex: number,
  seenClusterIds: Set<string>,
): void {
  const pathLabel = `concept "${conceptId}" cluster ${clusterIndex + 1}`;

  if (!isObject(value)) {
    throw new Error(`Invalid seed data: ${pathLabel} must be an object.`);
  }

  const clusterId = getNonEmptyString(value.id, `${pathLabel}.id`);

  if (seenClusterIds.has(clusterId)) {
    throw new Error(
      `Invalid seed data: duplicate cluster id "${clusterId}" in concept "${conceptId}".`,
    );
  }

  seenClusterIds.add(clusterId);

  getNonEmptyString(value.title, `${pathLabel}.title`);
  getNonEmptyString(value.family, `${pathLabel}.family`);
  getNonEmptyString(value.ancestor, `${pathLabel}.ancestor`);
  getNonEmptyString(value.confidence, `${pathLabel}.confidence`);
  getOptionalNullableString(value.ancestorLanguage, `${pathLabel}.ancestorLanguage`);
  getOptionalNullableString(value.note, `${pathLabel}.note`);
  getOptionalNullableString(value.source, `${pathLabel}.source`);
  getOptionalNullableString(value.reviewedStatus, `${pathLabel}.reviewedStatus`);

  const words = getArray(value.words, `${pathLabel}.words`);

  if (words.length === 0) {
    throw new Error(`Invalid seed data: ${pathLabel}.words must not be empty.`);
  }

  words.forEach((word, wordIndex) => {
    validateWord(word, conceptId, clusterId, wordIndex);
  });
}

function validateProductMode(
  value: unknown,
  conceptId: string,
  modeIndex: number,
): void {
  const pathLabel = `concept "${conceptId}" mode ${modeIndex + 1}`;

  if (!isObject(value)) {
    throw new Error(`Invalid seed data: ${pathLabel} must be an object.`);
  }

  const modeName = getNonEmptyString(value.name, `${pathLabel}.name`);

  const allowedModes = new Set(["Explore", "Learn", "Test", "Review", "Bridge"]);

  if (!allowedModes.has(modeName)) {
    throw new Error(
      `Invalid seed data: ${pathLabel}.name must be one of Explore, Learn, Test, Review, Bridge.`,
    );
  }

  getNonEmptyString(value.text, `${pathLabel}.text`);
}

function validateConcept(
  value: unknown,
  conceptIndex: number,
  seenConceptIds: Set<string>,
): void {
  const pathLabel = `concept ${conceptIndex + 1}`;

  if (!isObject(value)) {
    throw new Error(
      `Invalid seed data: ${pathLabel} must be an object. Got ${String(value)}.`,
    );
  }

  const conceptId = getNonEmptyString(value.id, `${pathLabel}.id`);

  if (seenConceptIds.has(conceptId)) {
    throw new Error(`Invalid seed data: duplicate concept id "${conceptId}".`);
  }

  seenConceptIds.add(conceptId);

  getNonEmptyString(value.label, `concept "${conceptId}".label`);
  getNonEmptyString(value.definition, `concept "${conceptId}".definition`);
  getNonEmptyString(value.partOfSpeech, `concept "${conceptId}".partOfSpeech`);
  getNonEmptyString(value.difficulty, `concept "${conceptId}".difficulty`);
  getOptionalNullableString(value.source, `concept "${conceptId}".source`);
  getNonEmptyString(value.reviewedStatus, `concept "${conceptId}".reviewedStatus`);
  getNonEmptyString(value.summary, `concept "${conceptId}".summary`);
  getNonEmptyString(value.sourceNote, `concept "${conceptId}".sourceNote`);

  const languages = getArray(value.languages, `concept "${conceptId}".languages`);

  if (languages.length === 0) {
    throw new Error(
      `Invalid seed data: concept "${conceptId}".languages must not be empty.`,
    );
  }

  languages.forEach((language, languageIndex) => {
    getNonEmptyString(language, `concept "${conceptId}".languages[${languageIndex}]`);
  });

  if (!isObject(value.learn)) {
    throw new Error(`Invalid seed data: concept "${conceptId}".learn must be an object.`);
  }

  getNonEmptyString(value.learn.eyebrow, `concept "${conceptId}".learn.eyebrow`);
  getNonEmptyString(value.learn.title, `concept "${conceptId}".learn.title`);

  const paragraphs = getArray(
    value.learn.paragraphs,
    `concept "${conceptId}".learn.paragraphs`,
  );

  if (paragraphs.length === 0) {
    throw new Error(
      `Invalid seed data: concept "${conceptId}".learn.paragraphs must not be empty.`,
    );
  }

  paragraphs.forEach((paragraph, paragraphIndex) => {
    getNonEmptyString(
      paragraph,
      `concept "${conceptId}".learn.paragraphs[${paragraphIndex}]`,
    );
  });

  const modes = getArray(value.modes, `concept "${conceptId}".modes`);

  if (modes.length === 0) {
    throw new Error(`Invalid seed data: concept "${conceptId}".modes must not be empty.`);
  }

  modes.forEach((mode, modeIndex) => {
    validateProductMode(mode, conceptId, modeIndex);
  });

  const clusters = getArray(value.clusters, `concept "${conceptId}".clusters`);

  if (clusters.length === 0) {
    throw new Error(
      `Invalid seed data: concept "${conceptId}".clusters must not be empty.`,
    );
  }

  const seenClusterIds = new Set<string>();

  clusters.forEach((cluster, clusterIndex) => {
    validateCluster(cluster, conceptId, clusterIndex, seenClusterIds);
  });
}

function validateCuratedConcepts(values: readonly unknown[]): void {
  if (!Array.isArray(values)) {
    throw new Error("Invalid seed data: curatedConcepts must be an array.");
  }

  if (values.length === 0) {
    throw new Error("Invalid seed data: curatedConcepts must not be empty.");
  }

  const seenConceptIds = new Set<string>();

  values.forEach((concept, conceptIndex) => {
    validateConcept(concept, conceptIndex, seenConceptIds);
  });
}

function validateFalseFriend(
  value: unknown,
  falseFriendIndex: number,
  seenFalseFriendIds: Set<string>,
): void {
  const pathLabel = `false friend ${falseFriendIndex + 1}`;

  if (!isObject(value)) {
    throw new Error(`Invalid seed data: ${pathLabel} must be an object.`);
  }

  const falseFriendId = getNonEmptyString(value.id, `${pathLabel}.id`);

  if (seenFalseFriendIds.has(falseFriendId)) {
    throw new Error(`Invalid seed data: duplicate false friend id "${falseFriendId}".`);
  }

  seenFalseFriendIds.add(falseFriendId);

  getOptionalNullableString(value.concept_id, `${pathLabel}.concept_id`);
  getNonEmptyString(value.word_a_language_code, `${pathLabel}.word_a_language_code`);
  getNonEmptyString(value.word_a_form, `${pathLabel}.word_a_form`);
  getNonEmptyString(value.word_b_language_code, `${pathLabel}.word_b_language_code`);
  getNonEmptyString(value.word_b_form, `${pathLabel}.word_b_form`);
  getNonEmptyString(value.warning, `${pathLabel}.warning`);

  const severity = getNonEmptyString(value.severity, `${pathLabel}.severity`);
  const allowedSeverities = new Set(["low", "medium", "high"]);

  if (!allowedSeverities.has(severity)) {
    throw new Error(
      `Invalid seed data: ${pathLabel}.severity must be one of low, medium, high.`,
    );
  }

  getNonEmptyString(value.source, `${pathLabel}.source`);
  getNonEmptyString(value.reviewed_status, `${pathLabel}.reviewed_status`);
}

function validateFalseFriends(values: readonly unknown[]): void {
  if (!Array.isArray(values)) {
    throw new Error("Invalid seed data: falseFriends must be an array.");
  }

  const seenFalseFriendIds = new Set<string>();

  values.forEach((falseFriend, falseFriendIndex) => {
    validateFalseFriend(falseFriend, falseFriendIndex, seenFalseFriendIds);
  });
}

validateCuratedConcepts(curatedConcepts);
validateFalseFriends(falseFriends);

mkdirSync(dbDir, { recursive: true });

const db = new Database(dbPath);
const schema = readFileSync(schemaPath, "utf8");

db.exec(schema);

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
  for (const concept of curatedConcepts) {
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