type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function Divider({
  orientation = "horizontal",
  className = "",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={["h-full w-px bg-rule", className].filter(Boolean).join(" ")}
      />
    );
  }

  return (
    <hr
      className={["h-px w-full border-0 bg-rule", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}