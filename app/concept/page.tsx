import Link from "next/link";
import { getConcepts } from "@/lib/concepts";

export default function ConceptIndexPage() {
  const concepts = getConcepts();

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/" className="font-serif text-28 leading-tight text-ink">
            Cognate
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <Link href="/bridge" className="hover:text-accent">
              Bridge
            </Link>
            <Link href="/false-friends" className="hover:text-accent">
              False friends
            </Link>
            <Link href="/design-system" className="hover:text-accent">
              Design system
            </Link>
          </nav>
        </header>

        <section className="border-b border-rule py-14">
          <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            Concept index
          </p>

          <h1 className="max-w-4xl font-serif text-48 leading-tight text-ink">
            Browse concepts
          </h1>

          <p className="mt-5 max-w-[720px] text-18 leading-body text-ink-muted">
            Cognate starts with meanings, then shows the language-specific words
            attached to each concept. This is the spine of the app.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/bridge"
              className="inline-flex items-center justify-center border border-accent bg-accent px-5 py-3 font-sans text-15 font-medium text-white transition hover:bg-ink"
            >
              Try Bridge mode
            </Link>

            <Link
              href="/false-friends"
              className="inline-flex items-center justify-center border border-rule bg-surface px-5 py-3 font-sans text-15 font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              Study false friends
            </Link>
          </div>
        </section>

        <section className="py-10">
          <div className="grid gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
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
          </div>
        </section>
      </div>
    </main>
  );
}