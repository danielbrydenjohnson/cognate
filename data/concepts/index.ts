import { motherConcept } from "@/data/concepts/mother";
import { nightConcept } from "@/data/concepts/night";
import type { CognateConcept } from "@/data/concepts/night";

export const concepts = [nightConcept, motherConcept] satisfies CognateConcept[];

export const conceptById = {
  [nightConcept.id]: nightConcept,
  [motherConcept.id]: motherConcept,
} satisfies Record<string, CognateConcept>;