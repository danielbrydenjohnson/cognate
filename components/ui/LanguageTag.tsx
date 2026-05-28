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

export function LanguageTag({
  code,
  name,
  family = "other",
}: LanguageTagProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 border border-l-2 border-rule bg-surface px-2 py-1 font-sans text-13 font-medium uppercase tracking-[0.12em] text-ink",
        familyBorderClasses[family],
      ].join(" ")}
      title={name}
    >
      {code}
    </span>
  );
}