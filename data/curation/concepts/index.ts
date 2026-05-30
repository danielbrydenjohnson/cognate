import { motherConcept } from "@/data/concepts/mother";
import { waterConcept } from "@/data/concepts/water";
import { nightConcept } from "@/data/curation/concepts/night";
import type { CognateConcept } from "@/data/concepts/types";

export const curatedConcepts = [
  nightConcept,
  motherConcept,
  waterConcept,
] satisfies CognateConcept[];