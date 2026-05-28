import Link from "next/link";

const germanicWords = [
  {
    language: "English",
    form: "night",
    ipa: "/naɪt/",
    note: "Modern English form from Old English niht.",
  },
  {
    language: "German",
    form: "Nacht",
    ipa: "/naxt/",
    note: "The final consonant keeps the older guttural sound more visibly.",
  },
  {
    language: "Dutch",
    form: "nacht",
    ipa: "/nɑxt/",
    note: "Very close to German Nacht in spelling and sound.",
  },
  {
    language: "Swedish",
    form: "natt",
    ipa: "/nat/",
    note: "The older cluster simplified into a shorter modern form.",
  },
];

const romanceWords = [
  {
    language: "French",
    form: "nuit",
    ipa: "/nɥi/",
    note: "Looks different because French sound change did what French sound change does.",
  },
  {
    language: "Spanish",
    form: "noche",
    ipa: "/ˈnotʃe/",
    note: "The Latin ct path developed into ch.",
  },
  {
    language: "Italian",
    form: "notte",
    ipa: "/ˈnɔtte/",
    note: "Keeps a clear trace of Latin noctis through consonant change.",
  },
  {
    language: "Romanian",
    form: "noapte",
    ipa: "/ˈno̯apte/",
    note: "A Romance form with its own very Romanian-looking development.",
  },
];

const modes = [
  {
    name: "Explore",
    text: "Follow the word family and recenter on related concepts.",
  },
  {
    name: "Learn",
    text: "Read the short root story and sound-pattern explanation.",
  },
  {
    name: "Test",
    text: "Check whether you can recognise the true cognates.",
  },
  {
    name: "Review",
    text: "Save this family for later spaced review.",
  },
  {
    name: "Bridge",
    text: "Use French, Spanish, or German as anchors for another language.",
  },
];

function WordCard({
  word,
  family,
}: {
  word: {
    language: string;
    form: string;
    ipa: string;
    note: string;
  };
  family: "Germanic" | "Romance";
}) {
  const familyClass =
    family === "Germanic"
      ? "border-family-germanic/30 bg-family-germanic/5"
      : "border-family-romance/30 bg-family-romance/5";

  return (
    <article className={`border ${familyClass} p-4`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted">
            {word.language}
          </p>
          <h3 className="mt-2 font-serif text-28 leading-tight text-ink">
            {word.form}
          </h3>
        </div>

        <span className="border border-rule bg-surface px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
          {family}
        </span>
      </div>

      <p className="mt-3 font-ipa text-18 text-ink-muted">{word.ipa}</p>
      <p className="mt-3 text-15 leading-body text-ink-muted">{word.note}</p>
    </article>
  );
}

function ClusterPanel({
  title,
  ancestor,
  family,
  words,
}: {
  title: string;
  ancestor: string;
  family: "Germanic" | "Romance";
  words: typeof germanicWords;
}) {
  const accentClass =
    family === "Germanic" ? "text-family-germanic" : "text-family-romance";

  return (
    <section className="border border-rule bg-surface">
      <div className="border-b border-rule p-5">
        <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
          Cognate cluster
        </p>
        <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
          {title}
        </h2>
        <p className={`mt-3 font-cognate-mono text-15 ${accentClass}`}>
          {ancestor}
        </p>
      </div>

      <div className="grid gap-px bg-rule md:grid-cols-2">
        {words.map((word) => (
          <WordCard key={word.language} word={word} family={family} />
        ))}
      </div>
    </section>
  );
}

export default function NightConceptPage() {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/" className="font-serif text-28 leading-tight text-ink">
            Cognate
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <Link href="/design-system" className="hover:text-accent">
              Design system
            </Link>
          </nav>
        </header>

        <section className="grid gap-12 border-b border-rule py-14 lg:grid-cols-[1fr_360px] lg:py-16">
          <div>
            <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
              Concept
            </p>

            <h1 className="font-serif text-48 leading-tight text-ink">
              NIGHT
            </h1>

            <p className="mt-5 max-w-[720px] text-18 leading-body text-ink-muted">
              The period of darkness between sunset and sunrise. Cognate shows
              this as a concept first, then separates the language forms into
              clusters by shared ancestry.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "English",
                "German",
                "Dutch",
                "Swedish",
                "French",
                "Spanish",
                "Italian",
                "Romanian",
              ].map((language) => (
                <span
                  key={language}
                  className="border border-rule bg-surface px-3 py-1 font-sans text-13 text-ink-muted"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <aside className="border border-rule bg-surface p-5">
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Confidence
            </p>
            <h2 className="mt-3 font-serif text-28 leading-tight text-ink">
              High confidence clusters
            </h2>
            <p className="mt-3 text-15 leading-body text-ink-muted">
              The Germanic and Romance groups are separated because they descend
              through different historical paths. Later, this panel should cite
              reviewed source records rather than hardcoded notes.
            </p>

            <div className="mt-5 grid gap-2 font-sans text-13">
              <div className="flex items-center justify-between border border-rule px-3 py-2">
                <span>Germanic cluster</span>
                <span className="text-family-germanic">approved</span>
              </div>
              <div className="flex items-center justify-between border border-rule px-3 py-2">
                <span>Romance cluster</span>
                <span className="text-family-romance">approved</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 py-10">
          <ClusterPanel
            title="Germanic night forms"
            ancestor="Proto-Germanic *nahts"
            family="Germanic"
            words={germanicWords}
          />

          <ClusterPanel
            title="Romance night forms"
            ancestor="Latin nox / noctis"
            family="Romance"
            words={romanceWords}
          />
        </section>

        <section className="grid gap-8 border-y border-rule py-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
              Learn
            </p>
            <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
              One concept, two visible histories.
            </h2>
          </div>

          <div className="max-w-[720px] space-y-5 text-18 leading-body text-ink-muted">
            <p>
              The Germanic words are easy to spot once you see them together:
              night, Nacht, nacht, and natt all preserve a similar shape. That
              is the addictive bit. Your brain stops treating vocabulary as
              isolated debris and starts seeing reusable patterns.
            </p>

            <p>
              The Romance words look more varied, but they also share a common
              Latin source. Spanish noche, Italian notte, French nuit, and
              Romanian noapte show how sound change can stretch one ancestor in
              several directions while keeping the historical relationship.
            </p>

            <p>
              This is exactly why Cognate is concept-first. If you began with a
              single word, the page would become dictionary sludge. Starting
              with NIGHT keeps the comparison clean.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
                Product loop
              </p>
              <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
                What the user does next
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
      </div>
    </main>
  );
}