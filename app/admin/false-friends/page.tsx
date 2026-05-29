import Link from "next/link";
import { getFalseFriends } from "@/lib/concepts";

function getSeverityLabelClass(severity: string) {
  if (severity === "high") {
    return "border-accent text-accent";
  }

  if (severity === "medium") {
    return "border-warn text-warn";
  }

  return "border-rule text-ink-muted";
}

export default function AdminFalseFriendsPage() {
  const falseFriends = getFalseFriends();

  const highSeverityCount = falseFriends.filter(
    (falseFriend) => falseFriend.severity === "high",
  ).length;

  const mediumSeverityCount = falseFriends.filter(
    (falseFriend) => falseFriend.severity === "medium",
  ).length;

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/admin" className="font-serif text-28 leading-tight text-ink">
            Cognate Admin
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/admin/concepts" className="hover:text-accent">
              Concepts
            </Link>
            <Link href="/" className="hover:text-accent">
              Public app
            </Link>
          </nav>
        </header>

        <section className="border-b border-rule py-14">
          <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            False-friend review
          </p>

          <h1 className="max-w-4xl font-serif text-48 leading-tight text-ink">
            False friends
          </h1>

          <p className="mt-5 max-w-[760px] text-18 leading-body text-ink-muted">
            Review database-backed false-friend warnings before they are shown
            in the public product. These are currently demo entries, not a
            finished curated dataset.
          </p>
        </section>

        <section className="grid gap-px border border-rule bg-rule py-0 md:grid-cols-3">
          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Total warnings
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {falseFriends.length}
            </p>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              High severity
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {highSeverityCount}
            </p>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Medium severity
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {mediumSeverityCount}
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="overflow-hidden border border-rule">
            <div className="grid grid-cols-[0.7fr_1fr_1fr_0.7fr_1.8fr] gap-px bg-rule font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
              <div className="bg-bg p-3">Severity</div>
              <div className="bg-bg p-3">Word A</div>
              <div className="bg-bg p-3">Word B</div>
              <div className="bg-bg p-3">Status</div>
              <div className="bg-bg p-3">Warning</div>
            </div>

            {falseFriends.map((falseFriend) => (
              <article
                key={falseFriend.id}
                className="grid grid-cols-[0.7fr_1fr_1fr_0.7fr_1.8fr] gap-px bg-rule"
              >
                <div className="bg-surface p-3">
                  <span
                    className={`inline-flex border px-2 py-1 font-sans text-12 font-medium uppercase tracking-[0.14em] ${getSeverityLabelClass(
                      falseFriend.severity,
                    )}`}
                  >
                    {falseFriend.severity}
                  </span>
                </div>

                <div className="bg-surface p-3">
                  <p className="font-serif text-24 leading-tight text-ink">
                    {falseFriend.wordA.form}
                  </p>
                  <p className="mt-1 font-sans text-13 uppercase tracking-[0.14em] text-ink-muted">
                    {falseFriend.wordA.languageCode}
                  </p>
                </div>

                <div className="bg-surface p-3">
                  <p className="font-serif text-24 leading-tight text-ink">
                    {falseFriend.wordB.form}
                  </p>
                  <p className="mt-1 font-sans text-13 uppercase tracking-[0.14em] text-ink-muted">
                    {falseFriend.wordB.languageCode}
                  </p>
                </div>

                <div className="bg-surface p-3 font-sans text-13 text-ink-muted">
                  {falseFriend.reviewedStatus}
                </div>

                <div className="bg-surface p-3">
                  <p className="text-15 leading-body text-ink-muted">
                    {falseFriend.warning}
                  </p>
                  <p className="mt-2 font-sans text-12 uppercase tracking-[0.14em] text-ink-muted">
                    {falseFriend.id}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 max-w-[760px] text-15 leading-body text-ink-muted">
            Next later: link these warnings to relevant concepts or word records.
            For now, keeping them unlinked is more honest than forcing bad
            relationships into the current demo concepts.
          </p>
        </section>
      </div>
    </main>
  );
}