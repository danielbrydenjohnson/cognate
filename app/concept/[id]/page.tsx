import { notFound } from "next/navigation";
import { ConceptPage } from "@/components/concept/ConceptPage";
import { conceptById, concepts } from "@/data/concepts";

type ConceptRouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return concepts.map((concept) => ({
    id: concept.id,
  }));
}

export default async function ConceptRoute({ params }: ConceptRouteProps) {
  const { id } = await params;
  const concept = conceptById[id];

  if (!concept) {
    notFound();
  }

  return <ConceptPage concept={concept} />;
}