import type { ReactNode } from "react";

type PageShellVariant = "reading" | "instrument";

type PageShellProps = {
  children: ReactNode;
  variant?: PageShellVariant;
  className?: string;
};

const variantClasses: Record<PageShellVariant, string> = {
  reading: "max-w-reading",
  instrument: "max-w-graph",
};

export function PageShell({
  children,
  variant = "reading",
  className = "",
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div
        className={[
          "mx-auto w-full px-6 py-16 sm:px-8 lg:py-24",
          variantClasses[variant],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </main>
  );
}