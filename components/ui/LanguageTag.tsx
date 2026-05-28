type LanguageFamily = "germanic" | "romance" | "slavic" | "proto" | "other";

type LanguageTagProps = {
  code: string;
  name?: string;
  family?: LanguageFamily;
};

const familyBorderClasses: Record<LanguageFamily, string> = {
  germanic: "border-l-family-germanic",
  romance: "border-l-family-romance",
  slavic: "border-l-family-slavic",
  proto: "border-l-family-proto",
  other: "border-l-rule",
};

const familyTextClasses: Record<LanguageFamily, string> = {
  germanic: "text-family-germanic",
  romance: "text-family-romance",
  slavic: "text-family-slavic",
  proto: "text-family-proto",
  other: "text-ink-muted",
};

export function LanguageTag({
  code,
  name,
  family = "other",
}: LanguageTagProps) {
  return (
    <span
      className={[
        "inline-flex items-center border border-l-2 border-rule bg-surface px-2.5 py-1 font-sans text-13 font-medium uppercase tracking-[0.12em]",
        familyBorderClasses[family],
        familyTextClasses[family],
      ].join(" ")}
      title={name}
    >
      {code}
    </span>
  );
}