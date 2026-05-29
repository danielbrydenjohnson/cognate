import { motherConcept } from "@/data/concepts/mother";
import { nightConcept } from "@/data/concepts/night";
import { waterConcept } from "@/data/concepts/water";
import type { CognateConcept } from "@/data/concepts/types";

export const concepts = [
  nightConcept,
  motherConcept,
  waterConcept,
] satisfies CognateConcept[];

export const conceptById = {
  [nightConcept.id]: nightConcept,
  [motherConcept.id]: motherConcept,
  [waterConcept.id]: waterConcept,
} satisfies Record<string, CognateConcept>;

export function getDailyConcept(date = new Date()): CognateConcept {
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