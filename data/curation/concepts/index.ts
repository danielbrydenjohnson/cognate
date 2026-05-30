import { nightConcept } from "@/data/curation/concepts/night";
import { motherConcept } from "@/data/curation/concepts/mother";
import { waterConcept } from "@/data/curation/concepts/water";
import { sunConcept } from "@/data/curation/concepts/sun";
import { moonConcept } from "@/data/curation/concepts/moon";
import { starConcept } from "@/data/curation/concepts/star";
import { fireConcept } from "@/data/curation/concepts/fire";
import type { CognateConcept } from "@/data/concepts/types";

export const curatedConcepts = [
  nightConcept,
  motherConcept,
  waterConcept,
  sunConcept,
  moonConcept,
  starConcept,
  fireConcept,
] satisfies CognateConcept[];