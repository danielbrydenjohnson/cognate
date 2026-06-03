import Link from "next/link";
import { getFalseFriends } from "@/lib/concepts";

function getSeverityCopy(severity: string) {
  if (severity === "high") {
    return "Easy trap";
  }

  if (severity === "medium") {
    return "Watch out";
  }

  return "Note";
}

function getSeverityClass(severity: string) {
  if (severity === "high") {
    return "border-accent text-accent";
  }

  if (severity === "medium") {
    return "border-warn text-warn";
  }

  return "border-rule text-ink-muted";
}

export default function FalseFriendsPage() {
  const falseFriends = getFalseFriends();

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/" className="font-serif text-28 leading-tight text-ink">
            Cognate
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/" className="pb-1 hover:text-accent">
              Home
            </Link>
            <Link href="/concept" className="pb-1 hover:text-accent">
              Concepts
            </Link>
            <Link href="/bridge" className="pb-1 hover:text-accent">
              Bridge
            </Link>
            <Link
              href="/false-friends"
              className="border-b border-accent pb-1 text-accent"
            >
              False Friends
            </Link>
          </nav>
        </header>

        <section className="border-b border-rule py-14">
          <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            False friends
          </p>

          <h1 className="max-w-4xl font-serif text-48 leading-tight text-ink">
            Words that look friendly, then betray you.
          </h1>

          <p className="mt-5 max-w-[760px] text-18 leading-body text-ink-muted">
            False friends are words that look familiar across languages but
            mean something different. They expose where pattern recognition
            helps, and where it gets you quietly mugged in an alley by
            vocabulary.
          </p>
        </section>

        <section className="grid gap-px border border-rule bg-rule py-0 md:grid-cols-3">
          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Current warnings
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {falseFriends.length}
            </p>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Languages covered
            </p>
            <p className="mt-3 font-serif text-48 leading-tight text-ink">
              {
                new Set(
                  falseFriends.flatMap((falseFriend) => [
                    falseFriend.wordA.languageCode,
                    falseFriend.wordB.languageCode,
                  ]),
                ).size
              }
            </p>
          </div>

          <div className="bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Learning focus
            </p>
            <p className="mt-5 font-sans text-15 leading-body text-ink-muted">
              Meaning traps across familiar-looking words
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="grid gap-5">
            {falseFriends.map((falseFriend) => (
              <article
                key={falseFriend.id}
                className="border border-rule bg-surface p-5"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-rule pb-5 md:flex-row md:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
                        {falseFriend.wordA.languageCode}
                      </span>

                      <span className="font-serif text-36 leading-none text-ink">
                        {falseFriend.wordA.form}
                      </span>

                      <span className="font-sans text-13 uppercase tracking-[0.14em] text-ink-muted">
                        vs
                      </span>

                      <span className="font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
                        {falseFriend.wordB.languageCode}
                      </span>

                      <span className="font-serif text-36 leading-none text-ink">
                        {falseFriend.wordB.form}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-fit border px-3 py-1 font-sans text-12 font-medium uppercase tracking-[0.14em] ${getSeverityClass(
                      falseFriend.severity,
                    )}`}
                  >
                    {getSeverityCopy(falseFriend.severity)}
                  </span>
                </div>

                <p className="mt-5 max-w-[760px] text-18 leading-body text-ink-muted">
                  {falseFriend.warning}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}