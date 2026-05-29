import type {
  CognateClusterData,
  ConceptFamily,
} from "@/data/concepts/night";

function getFamilyClasses(family: ConceptFamily) {
  if (family === "Germanic") {
    return {
      border: "border-family-germanic/40",
      background: "bg-family-germanic/5",
      text: "text-family-germanic",
      node: "border-family-germanic bg-family-germanic/10",
      line: "bg-family-germanic/30",
    };
  }

  return {
    border: "border-family-romance/40",
    background: "bg-family-romance/5",
    text: "text-family-romance",
    node: "border-family-romance bg-family-romance/10",
    line: "bg-family-romance/30",
  };
}

function ClusterMapCard({ cluster }: { cluster: CognateClusterData }) {
  const classes = getFamilyClasses(cluster.family);

  return (
    <article className={`border ${classes.border} ${classes.background} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            {cluster.family}
          </p>

          <h3 className="mt-2 font-serif text-28 leading-tight text-ink">
            {cluster.title}
          </h3>
        </div>

        <span className="border border-rule bg-surface px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
          {cluster.confidence}
        </span>
      </div>

      <div className="mt-6">
        <div
          className={`mx-auto flex min-h-24 w-full max-w-[260px] items-center justify-center border ${classes.node} px-4 py-5 text-center`}
        >
          <p className={`font-cognate-mono text-15 leading-body ${classes.text}`}>
            {cluster.ancestor}
          </p>
        </div>

        <div className="mx-auto grid max-w-[260px] grid-cols-2 gap-x-4">
          <div className={`mx-auto h-8 w-px ${classes.line}`} />
          <div className={`mx-auto h-8 w-px ${classes.line}`} />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {cluster.words.map((word) => (
            <div
              key={`${word.languageCode}-${word.form}`}
              className={`border ${classes.border} bg-surface px-3 py-3`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-serif text-22 leading-tight text-ink">
                  {word.form}
                </p>

                <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  {word.languageCode}
                </p>
              </div>

              <p className="mt-1 font-sans text-13 text-ink-muted">
                {word.language}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ConceptClusterMap({
  clusters,
}: {
  clusters: CognateClusterData[];
}) {
  return (
    <section className="border-b border-rule py-12">
      <div className="mb-8 grid gap-6 lg:grid-cols-[360px_1fr]">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Visual map
          </p>

          <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
            Cognate clusters, not word soup.
          </h2>
        </div>

        <p className="max-w-[720px] text-18 leading-body text-ink-muted">
          Each group starts from a shared ancestor and fans out into modern word
          forms. Separate clusters mean separate histories attached to the same
          concept.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {clusters.map((cluster) => (
          <ClusterMapCard key={cluster.id} cluster={cluster} />
        ))}
      </div>
    </section>
  );
}