import {
  BridgeClient,
  type BridgeConcept,
} from "@/components/bridge/BridgeClient";
import { getConcepts } from "@/lib/concepts";

function getBridgeConcepts(): BridgeConcept[] {
  return getConcepts().map((concept) => ({
    id: concept.id,
    label: concept.label,
    definition: concept.definition,
    clusters: concept.clusters.map((cluster) => ({
      family: cluster.family,
      words: cluster.words.map((word) => ({
        language: word.language,
        languageCode: word.languageCode,
        form: word.form,
        ipa: word.ipa,
      })),
    })),
  }));
}

export default function BridgePage() {
  const concepts = getBridgeConcepts();

  return <BridgeClient concepts={concepts} />;
}