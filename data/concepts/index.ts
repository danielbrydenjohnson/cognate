import { nightConcept } from "@/data/concepts/night";
import type { CognateConcept } from "@/data/concepts/night";

export const concepts = [nightConcept] satisfies CognateConcept[];

export const conceptById = {
  [nightConcept.id]: nightConcept,
} satisfies Record<string, CognateConcept>;