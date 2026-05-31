import Link from "next/link";
import { ConceptSearchGrid } from "@/components/concept/ConceptSearchGrid";
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
            <Link href="/" className="pb-1 hover:text-accent">
              Home
            </Link>
            <Link
              href="/concept"
              className="border-b border-accent pb-1 text-accent"
            >
              Concepts
            </Link>
            <Link href="/bridge" className="pb-1 hover:text-accent">
              Bridge
            </Link>
            <Link href="/false-friends" className="pb-1 hover:text-accent">
              False Friends
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

        <ConceptSearchGrid concepts={concepts} />
      </div>
    </main>
  );
}