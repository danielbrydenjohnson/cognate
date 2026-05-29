import Link from "next/link";
import type { CognateConcept } from "@/data/concepts/night";
import { CognateCluster } from "@/components/concept/CognateCluster";
import { ConceptClusterMap } from "@/components/concept/ConceptClusterMap";
import { ConceptHero } from "@/components/concept/ConceptHero";
import { ProductLoopPanel } from "@/components/concept/ProductLoopPanel";

export function ConceptPage({ concept }: { concept: CognateConcept }) {
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

            <Link href="/concept" className="hover:text-accent">
              Concepts
            </Link>

            <Link href="/bridge" className="hover:text-accent">
              Bridge
            </Link>

            <Link href="/design-system" className="hover:text-accent">
              Design system
            </Link>
          </nav>
        </header>

        <ConceptHero concept={concept} />

        <ConceptClusterMap clusters={concept.clusters} />

        <section className="grid gap-6 py-10">
          <div className="max-w-[720px]">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Word details
            </p>

            <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
              The modern forms
            </h2>

            <p className="mt-4 text-18 leading-body text-ink-muted">
              The map gives the relationship at a glance. These cards give the
              actual word forms, pronunciation, and notes that make the pattern
              usable.
            </p>
          </div>

          {concept.clusters.map((cluster) => (
            <CognateCluster key={cluster.id} cluster={cluster} />
          ))}
        </section>

        <section className="grid gap-8 border-y border-rule py-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              {concept.learn.eyebrow}
            </p>

            <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
              {concept.learn.title}
            </h2>
          </div>

          <div className="max-w-[720px] space-y-5 text-18 leading-body text-ink-muted">
            {concept.learn.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <ProductLoopPanel modes={concept.modes} />
      </div>
    </main>
  );
}