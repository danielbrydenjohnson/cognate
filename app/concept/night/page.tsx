import { ConceptPage } from "@/components/concept/ConceptPage";
import { nightConcept } from "@/data/concepts/night";

export default function NightConceptRoute() {
  return <ConceptPage concept={nightConcept} />;
}