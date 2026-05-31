import type { ProductMode } from "@/data/concepts/types";

export function ProductLoopPanel({ modes }: { modes: ProductMode[] }) {
  return (
    <section className="py-12">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Next steps
          </p>

          <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
            What to explore next
          </h2>
        </div>

        <button className="border border-accent bg-accent px-5 py-3 font-sans text-15 font-medium text-white transition hover:bg-ink">
          Save family
        </button>
      </div>

      <div className="grid gap-px border border-rule bg-rule md:grid-cols-5">
        {modes.map((mode) => (
          <article key={mode.name} className="bg-surface p-4">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.16em] text-accent">
              {mode.name}
            </p>

            <p className="mt-3 text-15 leading-body text-ink-muted">
              {mode.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}