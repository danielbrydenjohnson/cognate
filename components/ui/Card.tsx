import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, eyebrow, children, className = "" }: CardProps) {
  return (
    <section
      className={["border border-rule bg-surface p-6", className]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? (
        <p className="mb-3 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted">
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <h2 className="mb-4 font-serif text-28 leading-snug text-ink">
          {title}
        </h2>
      ) : null}

      <div className="text-18 leading-body text-ink-muted">{children}</div>
    </section>
  );
}