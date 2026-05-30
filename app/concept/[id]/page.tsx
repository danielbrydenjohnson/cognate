import { notFound } from "next/navigation";
import { ConceptPage } from "@/components/concept/ConceptPage";
import { getConceptById, getConcepts } from "@/lib/concepts";

type ConceptRouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getConcepts().map((concept) => ({
    id: concept.id,
  }));
}

export default async function ConceptRoute({ params }: ConceptRouteProps) {
  const { id } = await params;
  const concept = getConceptById(id);

  if (!concept) {
    notFound();
  }

  return <ConceptPage concept={concept} />;
}