import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { IPA } from "@/components/ui/IPA";
import { LanguageTag } from "@/components/ui/LanguageTag";
import { PageShell } from "@/components/ui/PageShell";
import { Tag } from "@/components/ui/Tag";

export default function Home() {
  return (
    <PageShell variant="instrument">
      <header className="mb-16 grid gap-8 border-b border-rule pb-10 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="mb-4 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
            Cognate UI system
          </p>

          <h1 className="max-w-3xl font-serif text-48 leading-tight text-ink">
            A warm, document-led interface for exploring word ancestry.
          </h1>

          <p className="mt-6 max-w-reading text-18 leading-body text-ink-muted">
            This page is a temporary design-system review. It shows the core
            visual components before any real product pages are built.
          </p>
        </div>

        <aside className="border-l border-rule pl-6">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            System rule
          </p>
          <p className="mt-3 text-18 leading-body text-ink">
            Serif for reading and graph language. Sans for controls. Hairlines
            over shadows. Clusters over visual noise.
          </p>
        </aside>
      </header>

      <section className="mb-14">
        <div className="mb-5 flex items-center justify-between gap-6">
          <h2 className="font-serif text-36 leading-tight text-ink">
            Buttons
          </h2>
          <Tag>Instrument voice</Tag>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
          <Button variant="ghost">Ghost action</Button>
        </div>
      </section>

      <Divider className="my-14" />

      <section className="mb-14 grid gap-6 lg:grid-cols-2">
        <Card title="Document card" eyebrow="Learn mode">
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
        <div className="mb-5 flex items-center justify-between gap-6">
          <h2 className="font-serif text-36 leading-tight text-ink">
            Language tags
          </h2>
          <Tag>Family colour</Tag>
        </div>

        <div className="flex flex-wrap gap-3">
          <LanguageTag code="EN" name="English" family="germanic" />
          <LanguageTag code="DE" name="German" family="germanic" />
          <LanguageTag code="NL" name="Dutch" family="germanic" />
          <LanguageTag code="FR" name="French" family="romance" />
          <LanguageTag code="ES" name="Spanish" family="romance" />
          <LanguageTag code="IT" name="Italian" family="romance" />
          <LanguageTag code="RO" name="Romanian" family="romance" />
          <LanguageTag code="PGmc" name="Proto-Germanic" family="proto" />
        </div>
      </section>

      <Divider className="my-14" />

      <section className="mb-14 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-5 flex items-center justify-between gap-6">
            <h2 className="font-serif text-36 leading-tight text-ink">
              Graph preview
            </h2>
            <Tag>Instrument voice</Tag>
          </div>

          <div className="border border-rule bg-surface p-6">
            <div className="grid min-h-[360px] place-items-center border border-dashed border-rule bg-bg">
              <div className="relative h-[280px] w-full max-w-[560px]">
                <div className="absolute left-[42%] top-[4%] h-px w-[28%] rotate-[36deg] bg-rule" />
                <div className="absolute left-[28%] top-[38%] h-px w-[35%] bg-rule" />
                <div className="absolute left-[42%] top-[72%] h-px w-[28%] -rotate-[36deg] bg-rule" />

                <GraphNode
                  className="graph-node-germanic left-[6%] top-[32%]"
                  label="night"
                  sublabel="EN"
                />
                <GraphNode
                  className="graph-node-germanic left-[42%] top-[0%]"
                  label="Nacht"
                  sublabel="DE"
                />
                <GraphNode
                  className="graph-node-germanic left-[54%] top-[34%]"
                  label="nacht"
                  sublabel="NL"
                  active
                />
                <GraphNode
                  className="graph-node-germanic left-[42%] top-[68%]"
                  label="natt"
                  sublabel="SV"
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="border-l border-rule pl-6">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Graph principles
          </p>

          <ul className="mt-4 space-y-3 text-18 leading-body text-ink-muted">
            <li>Soft filled nodes, never neon blobs.</li>
            <li>Warm grey edges.</li>
            <li>Oxblood ring for active state.</li>
            <li>Serif node text.</li>
            <li>No idle physics animation.</li>
          </ul>
        </aside>
      </section>

      <Divider className="my-14" />

      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="mb-5 font-serif text-36 leading-tight text-ink">
            Linguistic notation
          </h2>

          <Card>
            <div className="space-y-4">
              <p>
                IPA should use a proper linguistic font:{" "}
                <IPA>/ˈɛsən/</IPA>, <IPA>/naxt/</IPA>,{" "}
                <IPA>/nɔt.te/</IPA>.
              </p>

              <p>
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
          </Card>
        </div>

        <aside className="border-l border-rule pl-6">
          <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
            Reading width
          </p>
          <p className="mt-3 text-18 leading-body text-ink">
            Concept explanations should sit around 720px wide. Graph pages can
            expand to 1100px.
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
}: {
  label: string;
  sublabel: string;
  className: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "absolute flex h-24 w-24 flex-col items-center justify-center rounded-full border text-center",
        active ? "border-2 border-accent" : "border-rule",
        className,
      ].join(" ")}
    >
      <span className="font-serif text-18 leading-tight text-ink">{label}</span>
      <span className="mt-1 font-sans text-13 font-medium uppercase tracking-[0.14em] text-ink-muted">
        {sublabel}
      </span>
    </div>
  );
}