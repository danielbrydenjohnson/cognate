import Link from "next/link";
import { getAdminConceptSummaries, getFalseFriends } from "@/lib/concepts";

export default function AdminPage() {
  const concepts = getAdminConceptSummaries();
  const falseFriends = getFalseFriends();

  const totalWords = concepts.reduce(
    (total, concept) => total + concept.wordCount,
    0,
  );

  const totalClusters = concepts.reduce(
    (total, concept) => total + concept.clusterCount,
    0,
  );

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/" className="font-serif text-28 leading-tight text-ink">
            Cognate
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/concept" className="hover:text-accent">
              Public concepts
            </Link>
            <Link href="/admin/concepts" className="hover:text-accent">
              Admin concepts
            </Link>
          </nav>
        </header>

        <section className="border-b border-rule py-14">
          <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            Internal review
          </p>

          <h1 className="max-w-4xl font-serif text-48 leading-tight text-ink">
            Cognate admin
          </h1>

          <p className="mt-5 max-w-[760px] text-18 leading-body text-ink-muted">
            Read-only content review for the current Cognate database. This is
            not a public feature and not a CMS yet. It exists so the content
            model can scale without hand-editing scattered files forever.
          </p>
        </section>

        <section className="grid gap-px border border-rule bg-rule py-0 md:grid-cols-4">
          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Concepts
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {concepts.length}
            </p>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Cognate clusters
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {totalClusters}
            </p>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Words
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {totalWords}
            </p>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              False friends
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {falseFriends.length}
            </p>
          </div>
        </section>

        <section className="grid gap-5 py-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Link
              href="/admin/concepts"
              className="inline-flex border border-accent bg-accent px-5 py-3 font-sans text-15 font-medium text-white transition hover:bg-ink"
            >
              Review concepts
            </Link>

            <p className="mt-5 max-w-[680px] text-15 leading-body text-ink-muted">
              Next step later: editing. Not now. Read-only first keeps this
              from turning into a half-built CMS with a superiority complex.
            </p>
          </div>

          <div id="false-friends" className="border border-rule bg-surface p-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-accent">
                  False-friend review
                </p>
                <h2 className="mt-3 font-serif text-32 leading-tight text-ink">
                  Demo warnings
                </h2>
              </div>

              <span className="border border-rule px-3 py-1 font-sans text-13 text-ink-muted">
                {falseFriends.length} total
              </span>
            </div>

            <div className="mt-6 divide-y divide-rule border-y border-rule">
              {falseFriends.map((falseFriend) => (
                <article key={falseFriend.id} className="py-4">
                  <div className="flex flex-wrap items-center gap-2 font-sans text-13">
                    <span className="font-medium uppercase tracking-[0.14em] text-ink-muted">
                      {falseFriend.wordA.languageCode}
                    </span>
                    <span className="font-serif text-24 leading-none text-ink">
                      {falseFriend.wordA.form}
                    </span>
                    <span className="text-ink-muted">vs</span>
                    <span className="font-medium uppercase tracking-[0.14em] text-ink-muted">
                      {falseFriend.wordB.languageCode}
                    </span>
                    <span className="font-serif text-24 leading-none text-ink">
                      {falseFriend.wordB.form}
                    </span>
                    <span className="ml-auto border border-rule px-2 py-1 text-12 uppercase tracking-[0.14em] text-ink-muted">
                      {falseFriend.severity}
                    </span>
                  </div>

                  <p className="mt-2 text-15 leading-body text-ink-muted">
                    {falseFriend.warning}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-5 text-13 leading-body text-ink-muted">
              These warnings are database-backed but not yet linked to public
              concept pages. That is intentional. We inspect the data before
              decorating the public UI with it.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}