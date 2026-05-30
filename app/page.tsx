import Link from "next/link";
import { getConcepts, getDailyConcept } from "@/lib/concepts";

export default function Home() {
  const concepts = getConcepts();
  const dailyConcept = getDailyConcept();

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/" className="font-serif text-28 leading-tight text-ink">
            Cognate
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/concept" className="hover:text-accent">
              Concepts
            </Link>
            <Link href="/bridge" className="hover:text-accent">
              Bridge
            </Link>
            <Link href="/false-friends" className="hover:text-accent">
              False friends
            </Link>
            <Link
              href={`/concept/${dailyConcept.id}`}
              className="hover:text-accent"
            >
              Explore
            </Link>
            <Link href="/design-system" className="hover:text-accent">
              Design system
            </Link>
          </nav>
        </header>

        <section className="grid gap-12 border-b border-rule py-16 lg:grid-cols-[1fr_360px] lg:py-20">
          <div>
            <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
              Concept-first etymology
            </p>

            <h1 className="max-w-4xl font-serif text-48 leading-tight text-ink">
              See how words connect across European languages.
            </h1>

            <p className="mt-6 max-w-[720px] text-18 leading-body text-ink-muted">
              Cognate helps language learners and word nerds explore vocabulary
              through shared roots, cognate clusters, false friends, and bridge
              paths between languages they already know and languages they want
              to learn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/concept/${dailyConcept.id}`}
                className="inline-flex items-center justify-center border border-accent bg-accent px-5 py-3 font-sans text-15 font-medium text-white transition hover:bg-ink"
              >
                Explore {dailyConcept.label}
              </Link>

              <Link
                href="/bridge"
                className="inline-flex items-center justify-center border border-rule bg-surface px-5 py-3 font-sans text-15 font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Try Bridge mode
              </Link>

              <Link
                href="/false-friends"
                className="inline-flex items-center justify-center border border-rule bg-surface px-5 py-3 font-sans text-15 font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Study false friends
              </Link>

              <Link
                href="/concept"
                className="inline-flex items-center justify-center border border-rule bg-surface px-5 py-3 font-sans text-15 font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Browse concepts
              </Link>
            </div>
          </div>

          <aside className="border border-rule bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Daily cognate
            </p>

            <h2 className="mt-3 font-serif text-36 leading-tight text-ink">
              {dailyConcept.label}
            </h2>

            <p className="mt-3 text-15 leading-body text-ink-muted">
              {dailyConcept.definition} {dailyConcept.summary}
            </p>

            <div className="mt-6 grid gap-px border border-rule bg-rule">
              {dailyConcept.clusters.flatMap((cluster) =>
                cluster.words.map((word) => (
                  <div
                    key={`${word.languageCode}-${word.form}`}
                    className="grid grid-cols-[90px_1fr_90px] items-center gap-3 bg-surface px-3 py-2"
                  >
                    <span className="font-sans text-13 text-ink-muted">
                      {word.language}
                    </span>
                    <span className="font-serif text-18 text-ink">
                      {word.form}
                    </span>
                    <span className="text-right font-sans text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
                      {cluster.family}
                    </span>
                  </div>
                )),
              )}
            </div>

            <Link
              href={`/concept/${dailyConcept.id}`}
              className="mt-5 inline-block font-sans text-13 font-medium uppercase tracking-[0.16em] text-accent hover:text-ink"
            >
              Open concept
            </Link>
          </aside>
        </section>

        <section id="featured" className="border-b border-rule py-14">
          <div className="mb-8 max-w-[720px]">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Featured concepts
            </p>

            <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
              Start with meanings, not dictionary entries.
            </h2>

            <p className="mt-4 text-18 leading-body text-ink-muted">
              This matters because words are messy. A concept page keeps the
              learner focused on one meaning, then shows which forms are related
              and which only look related.
            </p>
          </div>

          <div className="grid gap-px border border-rule bg-rule md:grid-cols-3">
            {concepts.map((concept) => (
              <Link
                key={concept.id}
                href={`/concept/${concept.id}`}
                className="bg-surface p-5 transition hover:bg-bg"
              >
                <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-accent">
                  Concept
                </p>
                <h3 className="mt-3 font-serif text-28 leading-tight text-ink">
                  {concept.label}
                </h3>
                <p className="mt-3 text-15 leading-body text-ink-muted">
                  {concept.definition}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-rule py-14 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              False friends
            </p>
            <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
              Some familiar words are traps.
            </h2>
          </div>

          <Link
            href="/false-friends"
            className="border border-rule bg-surface p-5 transition hover:border-accent hover:bg-bg"
          >
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-accent">
              New feature
            </p>

            <h3 className="mt-3 font-serif text-28 leading-tight text-ink">
              Explore words that look related but mean something else.
            </h3>

            <p className="mt-4 max-w-[720px] text-15 leading-body text-ink-muted">
              Cognates are useful, but pattern recognition can also betray you.
              The false-friends page collects warnings like English gift vs
              German Gift, where visual similarity leads learners straight into
              trouble.
            </p>

            <p className="mt-5 font-sans text-13 font-medium uppercase tracking-[0.16em] text-accent">
              Open false friends
            </p>
          </Link>
        </section>

        <section className="grid gap-10 py-14 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Product loop
            </p>
            <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
              Not just a pretty graph.
            </h2>
          </div>

          <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-5">
            {dailyConcept.modes.map((mode) => (
              <div key={mode.name} className="bg-surface p-4">
                <p className="font-sans text-13 font-medium uppercase tracking-[0.16em] text-accent">
                  {mode.name}
                </p>
                <p className="mt-3 text-15 leading-body text-ink-muted">
                  {mode.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}