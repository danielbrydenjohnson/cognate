import { curatedConcepts } from "@/data/curation/concepts";
import type { CognateConcept } from "@/data/concepts/types";

export const concepts: CognateConcept[] = curatedConcepts;

export const conceptById = Object.fromEntries(
  concepts.map((concept) => [concept.id, concept]),
) as Record<string, CognateConcept>;

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