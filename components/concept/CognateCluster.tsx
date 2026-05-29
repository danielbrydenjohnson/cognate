import type {
  CognateClusterData,
  ConceptFamily,
  ConceptWord,
} from "@/data/concepts/night";

function WordCard({
  word,
  family,
}: {
  word: ConceptWord;
  family: ConceptFamily;
}) {
  const familyClass =
    family === "Germanic"
      ? "border-family-germanic/30 bg-family-germanic/5"
      : "border-family-romance/30 bg-family-romance/5";

  return (
    <article className={`border ${familyClass} p-4`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted">
            {word.language}
          </p>

          <h3 className="mt-2 font-serif text-28 leading-tight text-ink">
            {word.form}
          </h3>
        </div>

        <span className="border border-rule bg-surface px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
          {family}
        </span>
      </div>

      <p className="mt-3 font-ipa text-18 text-ink-muted">{word.ipa}</p>
      <p className="mt-3 text-15 leading-body text-ink-muted">{word.note}</p>
    </article>
  );
}

export function CognateCluster({
  cluster,
}: {
  cluster: CognateClusterData;
}) {
  const accentClass =
    cluster.family === "Germanic"
      ? "text-family-germanic"
      : "text-family-romance";

  return (
    <section className="border border-rule bg-surface">
      <div className="border-b border-rule p-5">
        <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
          Cognate cluster
        </p>

        <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
          {cluster.title}
        </h2>

        <p className={`mt-3 font-cognate-mono text-15 ${accentClass}`}>
          {cluster.ancestor}
        </p>
      </div>

      <div className="grid gap-px bg-rule md:grid-cols-2">
        {cluster.words.map((word) => (
          <WordCard
            key={`${word.languageCode}-${word.form}`}
            word={word}
            family={cluster.family}
          />
        ))}
      </div>
    </section>
  );
}