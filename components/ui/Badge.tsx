import type { ReactNode } from "react";

type BadgeVariant = "attested" | "probable" | "speculative" | "warning";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  attested:
    "border-accent-soft bg-surface text-accent-soft",
  probable:
    "border-family-proto bg-surface text-ink-muted",
  speculative:
    "border-dashed border-family-proto bg-surface text-ink-muted",
  warning:
    "border-warn bg-[color-mix(in_srgb,var(--warn)_12%,var(--surface))] text-warn",
};

export function Badge({ children, variant = "attested" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 font-sans text-13 font-medium leading-tight",
        variantClasses[variant],
      ].join(" ")}
    >
      {children}
    </span>
  );
}