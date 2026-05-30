# Cognate Curation Data

This folder contains curated seed input for Cognate.

The database is generated from these files by `db/seed.ts`. The public app reads from SQLite through `lib/concepts.ts`.

The rule is simple:

```text
Curated files first.
SQLite second.
Public app last.
```

Do not turn `db/seed.ts` into a junk drawer.

## Folder structure

```text
data/curation/
  README.md
  false-friends.ts
  concepts/
    index.ts
    night.ts
    mother.ts
    water.ts
```

## What belongs here

Put curated, reviewable input data here:

```text
concept definitions
word forms
IPA
learn text
cognate clusters
ancestor labels
confidence labels
false friend warnings
source and review metadata
```

This is the bridge between rough source data and the final database.

## What does not belong here

Do not put runtime app logic here.

Do not call external APIs here.

Do not put UI components here.

Do not manually edit the SQLite database unless debugging something very specific.

Do not add a concept just because it feels fun. Add it when it helps the MVP move toward 300 reviewed concepts.

## How to add a new concept

Use this sequence:

```text
1. Create a new file in data/curation/concepts/
2. Export a concept object that satisfies CognateConcept
3. Add the concept to data/curation/concepts/index.ts
4. Run strict checks
5. Commit only after everything passes
```

Example:

```ts
import type { CognateConcept } from "@/data/concepts/types";

export const fireConcept = {
  id: "fire",
  label: "FIRE",
  definition: "Burning material that produces heat and light.",
  partOfSpeech: "noun",
  difficulty: "beginner",
  reviewedStatus: "demo",
  languages: [],
  summary: "",
  sourceNote: "",
  clusters: [],
  learn: {
    eyebrow: "Learn",
    title: "",
    paragraphs: [],
  },
  modes: [],
} satisfies CognateConcept;
```

Do not leave arrays empty in real seed data. The seed validator will reject incomplete records.

## Required concept fields

Each concept needs:

```text
id
label
definition
partOfSpeech
difficulty
reviewedStatus
languages
summary
sourceNote
clusters
learn
modes
```

Each cluster needs:

```text
id
title
family
ancestor
confidence
words
```

Each word needs:

```text
language
languageCode
form
ipa
note
```

## Review status

Current demo data can use:

```text
demo
```

Real curated data should eventually move toward:

```text
draft
reviewed
approved
```

Do not publish real user-facing entries without approved review status once the app starts moving beyond demo content.

## Sources

Every real concept should eventually have traceable sources.

Current demo data uses:

```text
manual_demo_seed
```

That is acceptable for scaffolding only. It is not good enough for the real 300 concept MVP.

The target source flow is:

```text
Concepticon for concept IDs and labels
etymology-db for relationship evidence
Wiktextract or Kaikki for IPA, pronunciation, examples, and definitions
manual curator notes for final judgement
```

## False friends

False friend seed data lives in:

```text
data/curation/false-friends.ts
```

Each false friend needs:

```text
id
concept_id
word_a_language_code
word_a_form
word_b_language_code
word_b_form
warning
severity
source
reviewed_status
```

Severity must be:

```text
low
medium
high
```

## Validation

`db/seed.ts` validates curated data before writing to SQLite.

This catches stupid failures early, such as:

```text
empty concept files
undefined imports
missing IDs
empty language arrays
empty clusters
empty word lists
duplicate concept IDs
duplicate cluster IDs within a concept
duplicate false friend IDs
invalid false friend severity
invalid product mode names
```

This exists because silent bad seed data is how a curation workflow becomes a swamp with a logo.

## Test before committing

Always run this before committing curation changes:

```bash
npx tsc --noEmit --incremental false
npm run lint
npm run build
git status
```

Expected demo seed output:

```text
Seeded Cognate database:
- 3 concepts
- 24 words
- 6 cognate sets
- 5 false friends
```

If the concept count, word count, cognate set count, or false friend count changes unexpectedly, stop and inspect the seed data.

## Git workflow

Use small commits.

Good:

```text
Move water concept data to curation layer
Validate curated seed data
Add fire concept seed data
```

Bad:

```text
Update stuff
Big refactor
More data
```

One concept. One test. One commit.

## Current status

The current demo concepts are:

```text
night
mother
water
```

The current false friends are:

```text
gift-en-de
actual-en-fr
library-en-fr
embarrassed-en-es
camera-en-it
```

## Strategic note

Cognate wins or dies on data quality and retention.

Pretty graphs are not enough. The curated data layer is part of the product moat. If this folder becomes messy, the product becomes untrustworthy.

Do not fake certainty. Use confidence labels. Keep sources visible. Make review status meaningful.