import type { CognateConcept } from "@/data/concepts/types";

export function ConceptHero({ concept }: { concept: CognateConcept }) {
  return (
    <section className="grid gap-12 border-b border-rule py-14 lg:grid-cols-[1fr_360px] lg:py-16">
      <div>
        <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
          Concept
        </p>

        <h1 className="font-serif text-48 leading-tight text-ink">
          {concept.label}
        </h1>

        <p className="mt-5 max-w-[720px] text-18 leading-body text-ink-muted">
          {concept.definition} {concept.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {concept.languages.map((language) => (
            <span
              key={language}
              className="border border-rule bg-surface px-3 py-1 font-sans text-13 text-ink-muted"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      <aside className="border border-rule bg-surface p-5">
        <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
          Confidence
        </p>

        <h2 className="mt-3 font-serif text-28 leading-tight text-ink">
          High confidence clusters
        </h2>

        <p className="mt-3 text-15 leading-body text-ink-muted">
          The word groups are separated because they descend through different
          historical paths. {concept.sourceNote}
        </p>

        <div className="mt-5 grid gap-2 font-sans text-13">
          {concept.clusters.map((cluster) => {
            const confidenceClass =
              cluster.family === "Germanic"
                ? "text-family-germanic"
                : "text-family-romance";

            return (
              <div
                key={cluster.id}
                className="flex items-center justify-between border border-rule px-3 py-2"
              >
                <span>{cluster.family} cluster</span>
                <span className={confidenceClass}>{cluster.confidence}</span>
              </div>
            );
          })}
        </div>
      </aside>
    </section>
  );
}