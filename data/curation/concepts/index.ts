import { nightConcept } from "@/data/curation/concepts/night";
import { motherConcept } from "@/data/curation/concepts/mother";
import { waterConcept } from "@/data/curation/concepts/water";
import { sunConcept } from "@/data/curation/concepts/sun";
import { moonConcept } from "@/data/curation/concepts/moon";
import { starConcept } from "@/data/curation/concepts/star";
import { fireConcept } from "@/data/curation/concepts/fire";
import { nameConcept } from "@/data/curation/concepts/name";
import { heartConcept } from "@/data/curation/concepts/heart";
import { handConcept } from "@/data/curation/concepts/hand";
import type { CognateConcept } from "@/data/concepts/types";

export const curatedConcepts = [
  nightConcept,
  motherConcept,
  waterConcept,
  sunConcept,
  moonConcept,
  starConcept,
  fireConcept,
  nameConcept,
  heartConcept,
  handConcept,
] satisfies CognateConcept[];