PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS concept_modes;
DROP TABLE IF EXISTS concept_learn_paragraphs;
DROP TABLE IF EXISTS concept_learn_sections;
DROP TABLE IF EXISTS word_cognate_sets;
DROP TABLE IF EXISTS cognate_sets;
DROP TABLE IF EXISTS words;
DROP TABLE IF EXISTS concepts;

CREATE TABLE concepts (
  id TEXT PRIMARY KEY,
  concepticon_id TEXT,
  label TEXT NOT NULL,
  definition TEXT NOT NULL,
  part_of_speech TEXT NOT NULL,
  category TEXT,
  difficulty TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'manual_demo_seed',
  reviewed_status TEXT NOT NULL,
  summary TEXT NOT NULL,
  source_note TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE words (
  id TEXT PRIMARY KEY,
  concept_id TEXT NOT NULL,
  language_code TEXT NOT NULL,
  language_name TEXT NOT NULL,
  form TEXT NOT NULL,
  lemma TEXT,
  ipa TEXT NOT NULL,
  gloss TEXT,
  notes TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'manual_demo_seed',
  reviewed_status TEXT NOT NULL DEFAULT 'demo',
  FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE
);

CREATE TABLE cognate_sets (
  id TEXT PRIMARY KEY,
  concept_id TEXT NOT NULL,
  label TEXT NOT NULL,
  ancestor_form TEXT NOT NULL,
  ancestor_language TEXT,
  language_family TEXT NOT NULL,
  notes TEXT,
  source TEXT NOT NULL DEFAULT 'manual_demo_seed',
  reviewed_status TEXT NOT NULL DEFAULT 'demo',
  FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE
);

CREATE TABLE word_cognate_sets (
  word_id TEXT NOT NULL,
  cognate_set_id TEXT NOT NULL,
  relationship_type TEXT NOT NULL DEFAULT 'cognate',
  confidence TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'manual_demo_seed',
  PRIMARY KEY (word_id, cognate_set_id),
  FOREIGN KEY (word_id) REFERENCES words(id) ON DELETE CASCADE,
  FOREIGN KEY (cognate_set_id) REFERENCES cognate_sets(id) ON DELETE CASCADE
);

CREATE TABLE concept_learn_sections (
  concept_id TEXT PRIMARY KEY,
  eyebrow TEXT NOT NULL,
  title TEXT NOT NULL,
  FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE
);

CREATE TABLE concept_learn_paragraphs (
  id TEXT PRIMARY KEY,
  concept_id TEXT NOT NULL,
  position INTEGER NOT NULL,
  paragraph TEXT NOT NULL,
  FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE
);

CREATE TABLE concept_modes (
  id TEXT PRIMARY KEY,
  concept_id TEXT NOT NULL,
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  position INTEGER NOT NULL,
  FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE
);

CREATE INDEX idx_words_concept_id ON words(concept_id);
CREATE INDEX idx_words_language_code ON words(language_code);
CREATE INDEX idx_cognate_sets_concept_id ON cognate_sets(concept_id);
CREATE INDEX idx_concept_modes_concept_id ON concept_modes(concept_id);
CREATE INDEX idx_concept_learn_paragraphs_concept_id ON concept_learn_paragraphs(concept_id);