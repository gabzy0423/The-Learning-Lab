import { notFound } from "next/navigation";
import { getProgram, programs } from "@/content/programs";

export const instant = false;

export function generateStaticParams() {
  return programs.map((program) => ({ category: program.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const program = getProgram(category);

  if (!program) notFound();

  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-bold text-brand-cyan-blue">Program category</p>
      <h1 className="mt-3 text-5xl font-bold">{program.name}</h1>
    </main>
  );
}
