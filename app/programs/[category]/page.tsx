import { notFound } from "next/navigation";
import Image from "next/image";
import { getProgram, programs } from "@/content/programs";

export const instant = false;

const personalDevelopmentCards = [
  {
    image: "/assets/pages/programs/perso1.png",
    description: "Build confidence, authority, and tact in discussions through assertive communication techniques for working effectively with different people and situations.",
  },
  {
    image: "/assets/pages/programs/perso2.png",
    description: "Discover better ways to work in a technology-driven workplace by learning how to leverage technology for yourself and your team.",
  },
  {
    image: "/assets/pages/programs/perso3.png",
    description: "Develop practical presentation skills through application, feedback, and coaching to communicate ideas clearly and achieve stronger outcomes.",
  },
  {
    image: "/assets/pages/programs/perso4.png",
    description: "Build a professional image that strengthens confidence, credibility, and working relationships across generations in today’s workplace.",
  },
  {
    image: "/assets/pages/programs/perso5.png",
    description: "Learn practical strategies to manage stress, support wellbeing, and improve productivity at work and in personal life using the Six Dimensions framework.",
  },
  {
    image: "/assets/pages/programs/perso6.png",
    description: "Learn how to recognize when you or your employees may be struggling, support open workplace dialogue, and develop a growth mindset that strengthens your Adversity Quotient.",
  },
];

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

  if (program.slug === "personal-development") {
    return (
      <main className="min-h-[70vh] bg-brand-white text-brand-charcoal">
        <section className="relative isolate overflow-hidden border-b border-brand-charcoal/10 text-brand-white">
          <Image
            src="/assets/pages/programs/personal-development-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-40"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-brand-charcoal/85 sm:bg-brand-charcoal/80 lg:bg-brand-charcoal/70" />
          <div className="relative z-10 mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Personal Development
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {program.name}
            </h1>
          </div>
        </section>

        <section aria-label="Personal Development courses">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {personalDevelopmentCards.map((card, index) => (
                <article
                  key={card.image}
                  className="group flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <p className="text-sm font-extrabold text-brand-cyan-blue">{String(index + 1).padStart(2, "0")}</p>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-md bg-brand-charcoal/5">
                    <Image
                      src={card.image}
                      alt={`Personal Development course visual ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-charcoal/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-sm font-bold text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
                      Learn more
                    </span>
                  </div>
                  <div className="mt-5 border-t border-brand-charcoal/10 pt-5">
                    <p className="text-base leading-relaxed text-brand-charcoal/70">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-bold text-brand-cyan-blue">Program category</p>
      <h1 className="mt-3 text-5xl font-bold">{program.name}</h1>
    </main>
  );
}
