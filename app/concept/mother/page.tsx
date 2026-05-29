import { ConceptPage } from "@/components/concept/ConceptPage";
import { motherConcept } from "@/data/concepts/mother";

export default function MotherConceptRoute() {
  return <ConceptPage concept={motherConcept} />;
}