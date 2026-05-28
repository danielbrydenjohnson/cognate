import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { IPA } from "@/components/ui/IPA";
import { LanguageTag } from "@/components/ui/LanguageTag";
import { PageShell } from "@/components/ui/PageShell";
import { Tag } from "@/components/ui/Tag";

const palette = [
  { name: "Background", token: "--bg", className: "swatch-bg" },
  { name: "Surface", token: "--surface", className: "swatch-surface" },
  { name: "Ink", token: "--ink", className: "swatch-ink" },
  { name: "Rule", token: "--rule", className: "swatch-rule" },
  { name: "Oxblood", token: "--accent", className: "swatch-accent" },
  { name: "Forest", token: "--accent-soft", className: "swatch-forest" },
  { name: "Amber", token: "--warn", className: "swatch-warn" },
  { name: "Proto", token: "--family-proto", className: "swatch-proto" },
];

export default function Home() {
  return (
    <PageShell variant="instrument">
      <header className="mb-16 grid gap-10 border-b border-rule pb-10 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="mb-4 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            Cognate UI system
          </p>

          <h1 className="max-w-3xl font-serif text-48 leading-tight text-ink">
            A warm, document-led interface for exploring word ancestry.
          </h1>

          <p className="mt-6 max-w-reading text-18 leading-body text-ink-muted">
            This is a design-system review page. It exists to prove the visual
            language before we build real product pages.
          </p>
        </div>

        <aside className="border-l border-rule pl-6">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Direction
          </p>
          <p className="mt-3 text-18 leading-body text-ink">
            Document voice for reading. Instrument voice for controls and
            navigation. Same palette, different rhythm.
          </p>
        </aside>
      </header>

      <section className="mb-14">
        <div className="mb-5 flex items-end justify-between gap-6">
          <div>
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Token check
            </p>
            <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
              Palette
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((item) => (
            <div key={item.token} className="bg-surface p-4">
              <div
                className={[
                  "mb-4 h-14 w-full border border-rule",
                  item.className,
                ].join(" ")}
              />
              <p className="font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink">
                {item.name}
              </p>
              <p className="mt-1 font-cognate-mono text-13 text-ink-muted">
                {item.token}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider className="my-14" />

      <section className="mb-14 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Instrument controls
          </p>

          <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
            Search and actions
          </h2>

          <div className="mt-6 border border-rule bg-surface p-5">
            <label
              htmlFor="concept-search"
              className="mb-2 block font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted"
            >
              Search a concept
            </label>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                id="concept-search"
                type="search"
                placeholder="Try night, mother, eat..."
                className="w-full rounded-cognate border border-rule bg-bg px-4 py-2 font-sans text-15 text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent"
              />
              <Button>Explore</Button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
            <Button variant="ghost">Ghost action</Button>
          </div>
        </div>

        <aside className="border-l border-rule pl-6">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Rule
          </p>
          <p className="mt-3 text-18 leading-body text-ink-muted">
            Buttons and search use the sans UI voice. Reading content stays
            serif-led and more generous.
          </p>
        </aside>
      </section>

      <Divider className="my-14" />

      <section className="mb-14 grid gap-6 lg:grid-cols-2">
        <Card title="Document voice" eyebrow="Learn mode">
          <p>
            English <em>night</em>, German <em>Nacht</em>, Dutch{" "}
            <em>nacht</em>, and Swedish <em>natt</em> belong to a shared
            Germanic family. The value is not just seeing a translation, but
            seeing the historical relationship between the words.
          </p>
        </Card>

        <Card title="False-friend warning" eyebrow="Context marker">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="warning">False friend</Badge>
            <Badge variant="attested">Attested</Badge>
            <Badge variant="probable">Probable</Badge>
            <Badge variant="speculative">Speculative</Badge>
          </div>

          <p>
            German <em>Gift</em> does not mean a present. It means poison. The
            graph should flag this in context, before the learner confidently
            poisons a birthday card.
          </p>
        </Card>
      </section>

      <Divider className="my-14" />

      <section className="mb-14">
        <div className="mb-5">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Family-aware tags
          </p>
          <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
            Language tags
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <LanguageTag code="EN" name="English" family="germanic" />
          <LanguageTag code="DE" name="German" family="germanic" />
          <LanguageTag code="NL" name="Dutch" family="germanic" />
          <LanguageTag code="SV" name="Swedish" family="germanic" />
          <LanguageTag code="FR" name="French" family="romance" />
          <LanguageTag code="ES" name="Spanish" family="romance" />
          <LanguageTag code="IT" name="Italian" family="romance" />
          <LanguageTag code="RO" name="Romanian" family="romance" />
          <LanguageTag code="PGMC" name="Proto-Germanic" family="proto" />
        </div>
      </section>

      <Divider className="my-14" />

      <section className="mb-14 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Cluster preview
          </p>
          <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
            Graph styling
          </h2>

          <div className="mt-6 border border-rule bg-surface p-6">
            <div className="grid min-h-[420px] place-items-center border border-dashed border-rule bg-bg">
              <div className="relative h-[330px] w-full max-w-[660px]">
                <GraphEdge
                  className="left-[18%] top-[45%] w-[24%] rotate-[-22deg]"
                  variant="attested"
                />
                <GraphEdge
                  className="left-[38%] top-[49%] w-[22%]"
                  variant="attested"
                />
                <GraphEdge
                  className="left-[56%] top-[43%] w-[23%] rotate-[24deg]"
                  variant="attested"
                />

                <GraphEdge
                  className="left-[43%] top-[72%] w-[24%] rotate-[18deg]"
                  variant="speculative"
                />

                <GraphNode
                  className="graph-node-germanic left-[5%] top-[38%]"
                  label="night"
                  sublabel="EN"
                />
                <GraphNode
                  className="graph-node-germanic left-[32%] top-[16%]"
                  label="Nacht"
                  sublabel="DE"
                />
                <GraphNode
                  className="graph-node-germanic left-[56%] top-[38%]"
                  label="nacht"
                  sublabel="NL"
                  active
                />
                <GraphNode
                  className="graph-node-germanic left-[78%] top-[17%]"
                  label="natt"
                  sublabel="SV"
                />

                <GraphNode
                  className="graph-node-proto left-[42%] top-[68%]"
                  label="*nahts"
                  sublabel="PGMC"
                  proto
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="border-l border-rule pl-6">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Graph rules
          </p>

          <ul className="mt-4 space-y-3 text-18 leading-body text-ink-muted">
            <li>Family colour fill at low opacity.</li>
            <li>Full-ink serif text inside nodes.</li>
            <li>Oxblood ring for active node.</li>
            <li>Solid edge for attested relationship.</li>
            <li>Dashed edge for speculative relationship.</li>
          </ul>
        </aside>
      </section>

      <Divider className="my-14" />

      <section className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Linguistic typography
          </p>
          <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
            IPA and reconstructed forms
          </h2>

          <Card className="mt-6">
            <div className="space-y-5">
              <div>
                <Tag>IPA</Tag>
                <p className="mt-3">
                  German <em>Nacht</em> is rendered as{" "}
                  <IPA>/naxt/</IPA>. German <em>essen</em> is rendered as{" "}
                  <IPA>/ˈɛsən/</IPA>. This component uses the{" "}
                  <span className="font-ipa">Gentium Plus</span> font loaded in{" "}
                  <span className="font-cognate-mono text-15">
                    app/layout.tsx
                  </span>
                  .
                </p>
              </div>

              <div>
                <Tag>Reconstructed</Tag>
                <p className="mt-3">
                  Reconstructed forms use the mono style for clarity:{" "}
                  <span className="font-cognate-mono text-15 text-family-proto">
                    *nahts
                  </span>{" "}
                  and{" "}
                  <span className="font-cognate-mono text-15 text-family-proto">
                    *etaną
                  </span>
                  .
                </p>
              </div>
            </div>
          </Card>
        </div>

        <aside className="border-l border-rule pl-6">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Why it matters
          </p>
          <p className="mt-3 text-18 leading-body text-ink-muted">
            Generic fonts render IPA badly. For this audience, that is not a
            detail. It signals whether the app respects language data or is just
            cosplaying as a linguistics tool.
          </p>
        </aside>
      </section>
    </PageShell>
  );
}

function GraphNode({
  label,
  sublabel,
  className,
  active = false,
  proto = false,
}: {
  label: string;
  sublabel: string;
  className: string;
  active?: boolean;
  proto?: boolean;
}) {
  return (
    <div
      className={[
        "absolute flex h-28 w-28 flex-col items-center justify-center rounded-full border text-center",
        active ? "border-2 border-accent" : "border-rule",
        className,
      ].join(" ")}
    >
      <span
        className={[
          "font-serif text-18 leading-tight text-ink",
          proto ? "font-cognate-mono text-15 text-family-proto" : "",
        ].join(" ")}
      >
        {label}
      </span>
      <span className="mt-1 font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
        {sublabel}
      </span>
    </div>
  );
}

function GraphEdge({
  className,
  variant,
}: {
  className: string;
  variant: "attested" | "speculative";
}) {
  return (
    <div
      aria-hidden="true"
      className={[
        "absolute origin-left",
        variant === "attested"
          ? "graph-edge-attested"
          : "graph-edge-speculative",
        className,
      ].join(" ")}
    />
  );
}