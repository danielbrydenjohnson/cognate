import Link from "next/link";
import { getAdminConceptSummaries } from "@/lib/concepts";

function SourceBadge({ source }: { source: string }) {
  const isDemoSource = source === "manual_demo_seed";
  const isMissing = !source.trim() || source === "Missing";

  return (
    <div>
      <span
        className={`inline-block border px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] ${
          isMissing
            ? "border-rule text-ink-muted"
            : isDemoSource
              ? "border-rule text-ink-muted"
              : "border-accent text-accent"
        }`}
      >
        {isMissing ? "Missing" : isDemoSource ? "Demo seed" : "Sourced"}
      </span>

      <p className="mt-2 break-words font-sans text-13 leading-body text-ink-muted">
        {source}
      </p>
    </div>
  );
}

export default function AdminConceptsPage() {
  const concepts = getAdminConceptSummaries();

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link
            href="/admin"
            className="font-serif text-28 leading-tight text-ink"
          >
            Cognate Admin
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/" className="hover:text-accent">
              Public app
            </Link>
            <Link href="/concept" className="hover:text-accent">
              Public concepts
            </Link>
            <Link href="/admin/false-friends" className="hover:text-accent">
              False friends
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
          <div className="overflow-x-auto border border-rule">
            <div className="min-w-[1120px]">
              <div className="grid grid-cols-[1.2fr_0.75fr_1fr_1.45fr_0.65fr_0.55fr_0.55fr_0.65fr] gap-px bg-rule font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
                <div className="bg-bg p-3">Concept</div>
                <div className="bg-bg p-3">Status</div>
                <div className="bg-bg p-3">Source</div>
                <div className="bg-bg p-3">Curation</div>
                <div className="bg-bg p-3">Difficulty</div>
                <div className="bg-bg p-3">Clusters</div>
                <div className="bg-bg p-3">Words</div>
                <div className="bg-bg p-3">Languages</div>
              </div>

              {concepts.map((concept) => (
                <Link
                  key={concept.id}
                  href={`/admin/concepts/${concept.id}`}
                  className="grid grid-cols-[1.2fr_0.75fr_1fr_1.45fr_0.65fr_0.55fr_0.55fr_0.65fr] gap-px bg-rule transition hover:bg-accent"
                >
                  <div className="bg-surface p-3">
                    <p className="font-serif text-24 leading-tight text-ink">
                      {concept.label}
                    </p>
                    <p className="mt-1 font-sans text-13 text-ink-muted">
                      {concept.id} · {concept.partOfSpeech}
                    </p>
                  </div>

                  <div className="bg-surface p-3">
                    <span className="inline-block border border-rule px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                      {concept.reviewedStatus}
                    </span>
                  </div>

                  <div className="bg-surface p-3">
                    <SourceBadge source={concept.source} />
                  </div>

                  <div className="bg-surface p-3">
                    <p className="font-sans text-13 text-ink-muted">
                      {concept.curationReport.passedChecks}/
                      {concept.curationReport.totalChecks} checks
                    </p>

                    <span
                      className={`mt-2 inline-block border px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] ${
                        concept.curationReport.isComplete
                          ? "border-accent text-accent"
                          : "border-rule text-ink-muted"
                      }`}
                    >
                      {concept.curationReport.isComplete
                        ? "Ready"
                        : `${concept.curationReport.failedChecks} issue${
                            concept.curationReport.failedChecks === 1
                              ? ""
                              : "s"
                          }`}
                    </span>

                    <p className="mt-3 text-13 leading-body text-ink-muted">
                      Next: {concept.curationReport.nextAction}
                    </p>
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
          </div>
        </section>
      </div>
    </main>
  );
}