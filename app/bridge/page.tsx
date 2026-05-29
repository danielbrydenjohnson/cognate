import Link from "next/link";
import { getConcepts } from "@/lib/concepts";

type BridgePageProps = {
  searchParams?: Promise<{
    known?: string;
    target?: string;
  }>;
};

type BridgeMatch = {
  conceptId: string;
  conceptLabel: string;
  definition: string;
  family: string;
  knownWord: {
    language: string;
    form: string;
    ipa: string;
  };
  targetWord: {
    language: string;
    form: string;
    ipa: string;
  };
};

const languageOptions = [
  { code: "en", label: "English" },
  { code: "de", label: "German" },
  { code: "nl", label: "Dutch" },
  { code: "sv", label: "Swedish" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "it", label: "Italian" },
  { code: "ro", label: "Romanian" },
];

function findBridgeMatches(
  knownCode: string,
  targetCode: string,
): BridgeMatch[] {
  const concepts = getConcepts();

  return concepts.flatMap((concept) =>
    concept.clusters.flatMap((cluster) => {
      const knownWord = cluster.words.find(
        (word) => word.languageCode === knownCode,
      );
      const targetWord = cluster.words.find(
        (word) => word.languageCode === targetCode,
      );

      if (!knownWord || !targetWord) {
        return [];
      }

      return [
        {
          conceptId: concept.id,
          conceptLabel: concept.label,
          definition: concept.definition,
          family: cluster.family,
          knownWord: {
            language: knownWord.language,
            form: knownWord.form,
            ipa: knownWord.ipa,
          },
          targetWord: {
            language: targetWord.language,
            form: targetWord.form,
            ipa: targetWord.ipa,
          },
        },
      ];
    }),
  );
}

export default async function BridgePage({ searchParams }: BridgePageProps) {
  const params = await searchParams;
  const knownCode = params?.known ?? "fr";
  const targetCode = params?.target ?? "ro";
  const matches = findBridgeMatches(knownCode, targetCode);

  const knownLanguage =
    languageOptions.find((language) => language.code === knownCode)?.label ??
    "French";

  const targetLanguage =
    languageOptions.find((language) => language.code === targetCode)?.label ??
    "Romanian";

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
            <Link href="/concept" className="hover:text-accent">
              Concepts
            </Link>
            <Link href="/false-friends" className="hover:text-accent">
              False friends
            </Link>
            <Link href="/design-system" className="hover:text-accent">
              Design system
            </Link>
          </nav>
        </header>

        <section className="grid gap-10 border-b border-rule py-14 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="mb-5 font-sans text-13 font-medium uppercase tracking-[0.2em] text-accent">
              Bridge mode
            </p>

            <h1 className="max-w-4xl font-serif text-48 leading-tight text-ink">
              Use what you already know to approach a new language.
            </h1>

            <p className="mt-5 max-w-[760px] text-18 leading-body text-ink-muted">
              Choose a language you know and a language you want to learn.
              Cognate then surfaces concepts where both languages share a
              cognate cluster, giving you a faster mental bridge into the target
              vocabulary.
            </p>

            <div className="mt-8 border border-rule bg-surface p-5">
              <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-accent">
                Avoid the traps
              </p>

              <h2 className="mt-3 font-serif text-28 leading-tight text-ink">
                Not every familiar-looking word is your friend.
              </h2>

              <p className="mt-3 max-w-[680px] text-15 leading-body text-ink-muted">
                Bridge mode shows useful shared roots. False friends show where
                similarity misleads you. Both matter if the goal is learning
                faster without confidently learning nonsense.
              </p>

              <Link
                href="/false-friends"
                className="mt-5 inline-block font-sans text-13 font-medium uppercase tracking-[0.16em] text-accent hover:text-ink"
              >
                Study false friends
              </Link>
            </div>
          </div>

          <form action="/bridge" className="border border-rule bg-surface p-5">
            <label className="block font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted">
              I know
            </label>

            <select
              name="known"
              defaultValue={knownCode}
              className="mt-2 w-full border border-rule bg-bg px-3 py-3 font-sans text-15 text-ink"
            >
              {languageOptions.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.label}
                </option>
              ))}
            </select>

            <label className="mt-5 block font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted">
              I want to learn
            </label>

            <select
              name="target"
              defaultValue={targetCode}
              className="mt-2 w-full border border-rule bg-bg px-3 py-3 font-sans text-15 text-ink"
            >
              {languageOptions.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="mt-6 w-full border border-accent bg-accent px-5 py-3 font-sans text-15 font-medium text-white transition hover:bg-ink"
            >
              Build bridge
            </button>
          </form>
        </section>

        <section className="py-10">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-rule pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-ink-muted">
                Current bridge
              </p>

              <h2 className="mt-2 font-serif text-36 leading-tight text-ink">
                {knownLanguage} to {targetLanguage}
              </h2>
            </div>

            <p className="max-w-[420px] text-15 leading-body text-ink-muted">
              Showing concepts where both languages appear in the same cognate
              cluster. This is demo logic, not final reviewed ranking.
            </p>
          </div>

          {matches.length > 0 ? (
            <div className="grid gap-px border border-rule bg-rule md:grid-cols-2">
              {matches.map((match) => (
                <Link
                  key={`${match.conceptId}-${match.family}`}
                  href={`/concept/${match.conceptId}`}
                  className="bg-surface p-5 transition hover:bg-bg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-sans text-13 font-medium uppercase tracking-[0.18em] text-accent">
                        {match.family}
                      </p>

                      <h3 className="mt-3 font-serif text-36 leading-tight text-ink">
                        {match.conceptLabel}
                      </h3>
                    </div>

                    <span className="border border-rule bg-bg px-2 py-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                      bridge
                    </span>
                  </div>

                  <p className="mt-4 text-15 leading-body text-ink-muted">
                    {match.definition}
                  </p>

                  <div className="mt-6 grid gap-px border border-rule bg-rule">
                    <div className="grid grid-cols-[100px_1fr_90px] items-center gap-3 bg-surface px-3 py-2">
                      <span className="font-sans text-13 text-ink-muted">
                        {match.knownWord.language}
                      </span>

                      <span className="font-serif text-20 text-ink">
                        {match.knownWord.form}
                      </span>

                      <span className="text-right font-ipa text-13 text-ink-muted">
                        {match.knownWord.ipa}
                      </span>
                    </div>

                    <div className="grid grid-cols-[100px_1fr_90px] items-center gap-3 bg-surface px-3 py-2">
                      <span className="font-sans text-13 text-ink-muted">
                        {match.targetWord.language}
                      </span>

                      <span className="font-serif text-20 text-ink">
                        {match.targetWord.form}
                      </span>

                      <span className="text-right font-ipa text-13 text-ink-muted">
                        {match.targetWord.ipa}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 font-sans text-13 font-medium uppercase tracking-[0.16em] text-accent">
                    Open concept
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-rule bg-surface p-6">
              <h3 className="font-serif text-28 leading-tight text-ink">
                No bridge found yet.
              </h3>

              <p className="mt-3 max-w-[620px] text-15 leading-body text-ink-muted">
                That does not mean the languages are unrelated. It only means
                the current demo dataset does not yet have an approved concept
                where both selected languages appear in the same cluster.
              </p>

              <Link
                href="/false-friends"
                className="mt-5 inline-block font-sans text-13 font-medium uppercase tracking-[0.16em] text-accent hover:text-ink"
              >
                Study false friends instead
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}