"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CognateConcept } from "@/data/concepts/types";

type ConceptSearchGridProps = {
  concepts: CognateConcept[];
};

function getLargeScreenPlaceholderCount(itemCount: number) {
  return (3 - (itemCount % 3)) % 3;
}

export function ConceptSearchGrid({ concepts }: ConceptSearchGridProps) {
  const [query, setQuery] = useState("");

  const filteredConcepts = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();

    if (!normalisedQuery) {
      return concepts;
    }

    return concepts.filter((concept) => {
      const label = concept.label.toLowerCase();
      const definition = concept.definition.toLowerCase();

      return (
        label.includes(normalisedQuery) ||
        definition.includes(normalisedQuery)
      );
    });
  }, [concepts, query]);

  const largeScreenPlaceholderCount = getLargeScreenPlaceholderCount(
    filteredConcepts.length,
  );

  return (
    <section className="py-10">
      <div className="mb-6 max-w-[520px]">
        <label
          htmlFor="concept-search"
          className="block font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted"
        >
          Search concepts
        </label>

        <input
          id="concept-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by label or definition"
          className="mt-2 w-full border border-rule bg-bg px-3 py-3 font-sans text-15 text-ink"
        />

        <p className="mt-3 font-sans text-13 text-ink-muted">
          Showing {filteredConcepts.length} of {concepts.length} concepts
        </p>
      </div>

      {filteredConcepts.length > 0 ? (
        <div className="grid gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
          {filteredConcepts.map((concept) => (
            <Link
              key={concept.id}
              href={`/concept/${concept.id}`}
              className="bg-surface p-5 transition hover:bg-bg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-accent">
                    {concept.partOfSpeech}
                  </p>

                  <h2 className="mt-3 font-serif text-36 leading-tight text-ink">
                    {concept.label}
                  </h2>
                </div>

                <span className="border border-rule bg-bg px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  {concept.difficulty}
                </span>
              </div>

              <p className="mt-4 text-15 leading-body text-ink-muted">
                {concept.definition}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {concept.clusters.map((cluster) => (
                  <span
                    key={cluster.id}
                    className="border border-rule bg-bg px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted"
                  >
                    {cluster.family}
                  </span>
                ))}
              </div>
            </Link>
          ))}

          {Array.from({ length: largeScreenPlaceholderCount }).map(
            (_, index) => (
              <div
                key={`concept-placeholder-${index}`}
                className="hidden bg-surface p-5 lg:block"
              >
                <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
                  More concepts coming
                </p>

                <h2 className="mt-3 font-serif text-36 leading-tight text-ink">
                  The map is still growing.
                </h2>

                <p className="mt-4 text-15 leading-body text-ink-muted">
                  New curated concepts will be added as the dataset expands,
                  with the same reviewed cognate clusters and learning notes.
                </p>

                <p className="mt-5 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  Next curation sprint
                </p>
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="border border-rule bg-surface p-6">
          <h2 className="font-serif text-28 leading-tight text-ink">
            No concepts found.
          </h2>

          <p className="mt-3 max-w-[620px] text-15 leading-body text-ink-muted">
            Try a broader search. The current concept set is still small, so
            the app is not hiding a vast library from you. Yet.
          </p>
        </div>
      )}
    </section>
  );
}