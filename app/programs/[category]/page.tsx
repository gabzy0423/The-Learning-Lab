import Image from "next/image";
import { notFound } from "next/navigation";
import { getProgram, programs } from "@/content/programs";

export const instant = false;

const personalDevelopmentCards = [
  {
    image: "/assets/pages/programs/perso1.png",
    title: "Communicate with Impact",
    description: "Build confidence, authority, and tact in discussions through assertive communication techniques for working effectively with different people and situations.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/perso2.png",
    title: "Developing Digital Savvy",
    description: "Discover better ways to work in a technology-driven workplace by learning how to leverage technology for yourself and your team.",
    accent: "text-brand-cyan-blue",
  },
  {
    image: "/assets/pages/programs/perso3.png",
    title: "Effective Presentation Skills",
    description: "Develop practical presentation skills through application, feedback, and coaching to communicate ideas clearly and achieve stronger outcomes.",
    accent: "text-brand-turquoise",
  },
  {
    image: "/assets/pages/programs/perso4.png",
    title: "High Performance Habits",
    description: "Build a professional image that strengthens confidence, credibility, and working relationships across generations in today’s workplace.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/perso5.png",
    title: "Stress & Time Management",
    description: "Learn practical strategies to manage stress, support wellbeing, and improve productivity at work and in personal life using the Six Dimensions framework.",
    accent: "text-brand-cyan-blue",
  },
  {
    image: "/assets/pages/programs/perso6.png",
    title: "Managing Your Mental Health",
    description: "Learn how to recognize when you or your employees may be struggling, support open workplace dialogue, and develop a growth mindset that strengthens your Adversity Quotient.",
    accent: "text-brand-turquoise",
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
              Learn . Grow . Achieve
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Personal <span className="text-brand-mint-green">Development</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
              Build new skills, unlock your potential, and take the next step toward a more fulfilling future.
            </p>
            <a
              href="#personal-development-courses"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue"
            >
              Start your journey
              <span aria-hidden="true" className="text-base leading-none">→</span>
            </a>
          </div>
        </section>

        <section id="personal-development-courses" aria-label="Personal Development courses">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {personalDevelopmentCards.map((card, index) => (
                <article
                  key={card.image}
                  className="group flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <p className={`text-sm font-extrabold ${card.accent}`}>{String(index + 1).padStart(2, "0")}</p>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-md bg-brand-charcoal/5">
                    <Image
                      src={card.image}
                      alt={`Personal Development course visual ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-extrabold leading-tight tracking-tight">{card.title}</h2>
                  <div className="mt-4 border-t border-brand-charcoal/10 pt-4">
                    <p className="text-base leading-relaxed text-brand-charcoal/70">{card.description}</p>
                  </div>
                  <span className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold ${card.accent}`}>
                    Learn more
                    <span aria-hidden="true" className="text-base leading-none">→</span>
                  </span>
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
