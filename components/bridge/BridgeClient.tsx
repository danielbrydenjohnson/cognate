"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useMemo, useSyncExternalStore } from "react";

export type BridgeConcept = {
  id: string;
  label: string;
  definition: string;
  clusters: {
    family: string;
    words: {
      language: string;
      languageCode: string;
      form: string;
      ipa: string;
    }[];
  }[];
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

type BridgeClientProps = {
  concepts: BridgeConcept[];
};

type BridgeSelection = {
  knownCode: string;
  targetCode: string;
};

const defaultKnownCode = "fr";
const defaultTargetCode = "ro";
const defaultSelectionKey = `${defaultKnownCode}|${defaultTargetCode}`;
const bridgeSelectionEventName = "cognate-bridge-selection-change";

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

function isKnownLanguageCode(code: string | null): code is string {
  return Boolean(
    code && languageOptions.some((language) => language.code === code),
  );
}

function getLanguageLabel(code: string, fallback: string) {
  return (
    languageOptions.find((language) => language.code === code)?.label ??
    fallback
  );
}

function getSelectionKeyFromWindow() {
  if (typeof window === "undefined") {
    return defaultSelectionKey;
  }

  const params = new URLSearchParams(window.location.search);
  const known = params.get("known");
  const target = params.get("target");

  const knownCode = isKnownLanguageCode(known) ? known : defaultKnownCode;
  const targetCode = isKnownLanguageCode(target) ? target : defaultTargetCode;

  return `${knownCode}|${targetCode}`;
}

function getDefaultSelectionKey() {
  return defaultSelectionKey;
}

function subscribeToBridgeSelection(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(bridgeSelectionEventName, callback);

  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(bridgeSelectionEventName, callback);
  };
}

function parseSelectionKey(selectionKey: string): BridgeSelection {
  const [known, target] = selectionKey.split("|");

  return {
    knownCode: isKnownLanguageCode(known) ? known : defaultKnownCode,
    targetCode: isKnownLanguageCode(target) ? target : defaultTargetCode,
  };
}

function updateBridgeUrl(knownCode: string, targetCode: string) {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams();
  params.set("known", knownCode);
  params.set("target", targetCode);

  window.history.pushState(null, "", `/bridge?${params.toString()}`);
  window.dispatchEvent(new Event(bridgeSelectionEventName));
}

function findBridgeMatches(
  concepts: BridgeConcept[],
  knownCode: string,
  targetCode: string,
): BridgeMatch[] {
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

export function BridgeClient({ concepts }: BridgeClientProps) {
  const selectionKey = useSyncExternalStore(
    subscribeToBridgeSelection,
    getSelectionKeyFromWindow,
    getDefaultSelectionKey,
  );

  const { knownCode, targetCode } = parseSelectionKey(selectionKey);

  const matches = useMemo(
    () => findBridgeMatches(concepts, knownCode, targetCode),
    [concepts, knownCode, targetCode],
  );

  const knownLanguage = getLanguageLabel(knownCode, "French");
  const targetLanguage = getLanguageLabel(targetCode, "Romanian");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const knownValue = formData.get("known");
    const targetValue = formData.get("target");

    const nextKnownCode =
      typeof knownValue === "string" && isKnownLanguageCode(knownValue)
        ? knownValue
        : knownCode;

    const nextTargetCode =
      typeof targetValue === "string" && isKnownLanguageCode(targetValue)
        ? targetValue
        : targetCode;

    updateBridgeUrl(nextKnownCode, nextTargetCode);
  }

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-center justify-between border-b border-rule pb-5">
          <Link href="/" className="font-serif text-28 leading-tight text-ink">
            Cognate
          </Link>

          <nav className="hidden items-center gap-6 font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted sm:flex">
            <Link href="/" className="pb-1 hover:text-accent">
              Home
            </Link>
            <Link href="/concept" className="pb-1 hover:text-accent">
              Concepts
            </Link>
            <Link
              href="/bridge"
              className="border-b border-accent pb-1 text-accent"
            >
              Bridge
            </Link>
            <Link href="/false-friends" className="pb-1 hover:text-accent">
              False Friends
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

          <form
            onSubmit={handleSubmit}
            className="border border-rule bg-surface p-5"
          >
            <label className="block font-sans text-13 font-medium uppercase tracking-[0.16em] text-ink-muted">
              I know
            </label>

            <select
              name="known"
              value={knownCode}
              onChange={(event) =>
                updateBridgeUrl(event.target.value, targetCode)
              }
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
              value={targetCode}
              onChange={(event) =>
                updateBridgeUrl(knownCode, event.target.value)
              }
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