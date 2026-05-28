type IPAProps = {
  children: string;
  className?: string;
};

export function IPA({ children, className = "" }: IPAProps) {
  return (
    <span
      className={["font-ipa text-18 leading-snug text-ink", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}