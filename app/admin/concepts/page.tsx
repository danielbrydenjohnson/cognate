import Link from "next/link";
import { getAdminConceptSummaries } from "@/lib/concepts";

export default function AdminConceptsPage() {
  const concepts = getAdminConceptSummaries();

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/admin" className="font-serif text-28 leading-tight text-ink">
            Cognate Admin
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/" className="hover:text-accent">
              Public app
            </Link>
            <Link href="/concept" className="hover:text-accent">
              Public concepts
            </Link>
          </nav>
        </header>

        <section className="border-b border-rule py-14">
          <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            Concept review
          </p>

          <h1 className="max-w-4xl font-serif text-48 leading-tight text-ink">
            Admin concepts
          </h1>

          <p className="mt-5 max-w-[760px] text-18 leading-body text-ink-muted">
            Database-backed review list. This is the internal view for spotting
            weak metadata, demo-only content, missing sources, and concepts that
            need editorial work.
          </p>
        </section>

        <section className="py-10">
          <div className="overflow-hidden border border-rule">
            <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr_0.7fr_0.7fr] gap-px bg-rule font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
              <div className="bg-bg p-3">Concept</div>
              <div className="bg-bg p-3">Status</div>
              <div className="bg-bg p-3">Difficulty</div>
              <div className="bg-bg p-3">Clusters</div>
              <div className="bg-bg p-3">Words</div>
              <div className="bg-bg p-3">Languages</div>
            </div>

            {concepts.map((concept) => (
              <Link
                key={concept.id}
                href={`/admin/concepts/${concept.id}`}
                className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr_0.7fr_0.7fr] gap-px bg-rule transition hover:bg-accent"
              >
                <div className="bg-surface p-3">
                  <p className="font-serif text-24 leading-tight text-ink">
                    {concept.label}
                  </p>
                  <p className="mt-1 font-sans text-13 text-ink-muted">
                    {concept.id} · {concept.partOfSpeech}
                  </p>
                </div>

                <div className="bg-surface p-3 font-sans text-13 text-ink-muted">
                  {concept.reviewedStatus}
                </div>

                <div className="bg-surface p-3 font-sans text-13 text-ink-muted">
                  {concept.difficulty}
                </div>

                <div className="bg-surface p-3 font-sans text-13 text-ink-muted">
                  {concept.clusterCount}
                </div>

                <div className="bg-surface p-3 font-sans text-13 text-ink-muted">
                  {concept.wordCount}
                </div>

                <div className="bg-surface p-3 font-sans text-13 text-ink-muted">
                  {concept.languageCount}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}