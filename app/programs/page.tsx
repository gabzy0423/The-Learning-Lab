import Link from "next/link";
import { programs } from "@/content/programs";

export default function ProgramsPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-bold text-brand-cyan-blue">Programs</p>
      <h1 className="mt-3 text-5xl font-bold">Explore our learning programs</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {programs.map((program) => (
          <Link
            key={program.slug}
            href={`/programs/${program.slug}`}
            className="rounded-2xl border border-brand-charcoal/10 bg-white p-6 text-lg font-bold transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-brand-cyan-blue"
          >
            {program.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
