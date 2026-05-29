import Link from "next/link";
import { notFound } from "next/navigation";
import { getConceptById, getConcepts } from "@/lib/concepts";

type AdminConceptRouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return getConcepts().map((concept) => ({
    id: concept.id,
  }));
}

export default async function AdminConceptDetailPage({
  params,
}: AdminConceptRouteProps) {
  const { id } = await params;
  const concept = getConceptById(id);

  if (!concept) {
    notFound();
  }

  const wordCount = concept.clusters.reduce(
    (total, cluster) => total + cluster.words.length,
    0,
  );

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link
            href="/admin/concepts"
            className="font-serif text-28 leading-tight text-ink"
          >
            Cognate Admin
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href={`/concept/${concept.id}`} className="hover:text-accent">
              Public page
            </Link>
            <Link href="/admin/concepts" className="hover:text-accent">
              All concepts
            </Link>
          </nav>
        </header>

        <section className="border-b border-rule py-14">
          <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            Concept review
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-serif text-48 leading-tight text-ink">
                {concept.label}
              </h1>

              <p className="mt-4 max-w-[760px] text-18 leading-body text-ink-muted">
                {concept.definition}
              </p>
            </div>

            <div className="grid min-w-[320px] grid-cols-3 gap-px border border-rule bg-rule">
              <div className="bg-surface p-3">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  Clusters
                </p>
                <p className="mt-1 font-serif text-28 text-ink">
                  {concept.clusters.length}
                </p>
              </div>

              <div className="bg-surface p-3">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  Words
                </p>
                <p className="mt-1 font-serif text-28 text-ink">{wordCount}</p>
              </div>

              <div className="bg-surface p-3">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  Status
                </p>
                <p className="mt-2 font-sans text-13 text-ink">
                  {concept.reviewedStatus}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-px border border-rule bg-rule md:grid-cols-2">
          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Metadata
            </p>

            <dl className="mt-5 grid gap-3 text-15 leading-body">
              <div>
                <dt className="font-sans text-13 uppercase tracking-[0.14em] text-ink-muted">
                  ID
                </dt>
                <dd className="mt-1 font-mono text-14 text-ink">{concept.id}</dd>
              </div>

              <div>
                <dt className="font-sans text-13 uppercase tracking-[0.14em] text-ink-muted">
                  Part of speech
                </dt>
                <dd className="mt-1 text-ink">{concept.partOfSpeech}</dd>
              </div>

              <div>
                <dt className="font-sans text-13 uppercase tracking-[0.14em] text-ink-muted">
                  Difficulty
                </dt>
                <dd className="mt-1 text-ink">{concept.difficulty}</dd>
              </div>

              <div>
                <dt className="font-sans text-13 uppercase tracking-[0.14em] text-ink-muted">
                  Languages
                </dt>
                <dd className="mt-1 text-ink">
                  {concept.languages.join(", ")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Source note
            </p>

            <p className="mt-5 text-15 leading-body text-ink-muted">
              {concept.sourceNote}
            </p>

            <p className="mt-6 font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Summary
            </p>

            <p className="mt-3 text-15 leading-body text-ink-muted">
              {concept.summary}
            </p>
          </div>
        </section>

        <section className="border-b border-rule py-10">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Learn section
          </p>

          <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
            {concept.learn.title}
          </h2>

          <div className="mt-5 grid gap-4">
            {concept.learn.paragraphs.map((paragraph, index) => (
              <div key={paragraph} className="border border-rule bg-surface p-5">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-accent">
                  Paragraph {index + 1}
                </p>

                <p className="mt-3 text-15 leading-body text-ink-muted">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Cognate clusters
          </p>

          <div className="mt-5 grid gap-5">
            {concept.clusters.map((cluster) => (
              <article key={cluster.id} className="border border-rule bg-surface p-5">
                <div className="flex flex-col justify-between gap-3 border-b border-rule pb-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-accent">
                      {cluster.family}
                    </p>

                    <h3 className="mt-2 font-serif text-28 leading-tight text-ink">
                      {cluster.title}
                    </h3>

                    <p className="mt-2 text-15 leading-body text-ink-muted">
                      Ancestor: {cluster.ancestor}
                    </p>
                  </div>

                  <span className="w-fit border border-rule bg-bg px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                    {cluster.confidence}
                  </span>
                </div>

                <div className="mt-5 grid gap-px border border-rule bg-rule md:grid-cols-2">
                  {cluster.words.map((word) => (
                    <div key={word.languageCode} className="bg-surface p-4">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
                          {word.language}
                        </p>

                        <p className="font-ipa text-13 text-ink-muted">
                          {word.ipa}
                        </p>
                      </div>

                      <p className="mt-2 font-serif text-28 leading-tight text-ink">
                        {word.form}
                      </p>

                      <p className="mt-3 text-15 leading-body text-ink-muted">
                        {word.note}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}