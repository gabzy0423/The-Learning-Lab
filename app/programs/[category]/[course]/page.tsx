import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const instant = false;

const course = {
  category: "personal-development",
  categoryName: "Personal Development",
  slug: "communicate-with-impact",
  title: "Communicate with Impact",
  image: "/assets/pages/programs/perso1.png",
  lead: "Build confidence, authority, and tact in discussions through assertive communication techniques for working effectively with different people and situations.",
  overview:
    "Communicate with Impact is designed around the everyday conversations that shape how people work together. The course focuses on building the confidence, authority, and tact needed to direct discussions with greater clarity and purpose.",
  explore: [
    "Use assertive communication techniques to express ideas with confidence and respect.",
    "Approach discussions with greater authority, tact, and awareness of different perspectives.",
    "Adapt communication choices across different people, situations, and workplace conversations.",
  ],
  application:
    "The proposed course focus connects learning to real workplace situations where people need to guide discussions, respond thoughtfully, and work effectively with different people.",
};

export function generateStaticParams() {
  return [{ category: course.category, course: course.slug }];
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ category: string; course: string }>;
}) {
  const { category, course: courseSlug } = await params;

  if (category !== course.category || courseSlug !== course.slug) notFound();

  return (
    <main className="min-h-[70vh] bg-brand-white text-brand-charcoal">
      <section className="border-b border-brand-charcoal/10 bg-brand-charcoal text-brand-white">
        <div className="mx-auto max-w-[80rem] px-7 py-10 sm:px-10 lg:px-0 lg:py-14">
          <Link href="/programs/personal-development" className="text-sm font-bold text-brand-white/70 transition-colors hover:text-brand-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-blue">
            ← Back to Personal Development
          </Link>
          <p className="mt-12 flex items-center gap-3 text-sm font-bold text-brand-white">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
            {course.categoryName}
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {course.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-white/80 sm:text-xl">{course.lead}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[80rem] px-7 py-12 sm:px-10 lg:px-0 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-20">
          <article>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-brand-charcoal/[0.04]">
              <Image src={course.image} alt={`${course.title} course visual`} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-contain object-center" />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-brand-charcoal/50">Proposed Copy — for stakeholder review</p>

            <section className="mt-12" aria-labelledby="about-course-heading">
              <p className="text-sm font-bold text-brand-cyan-blue">About this course</p>
              <h2 id="about-course-heading" className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Make everyday conversations more purposeful.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-charcoal/70">{course.overview}</p>
            </section>

            <section className="mt-12 border-t border-brand-charcoal/10 pt-10" aria-labelledby="explore-course-heading">
              <p className="text-sm font-bold text-brand-cyan-blue">What you&apos;ll explore</p>
              <h2 id="explore-course-heading" className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Practical communication choices for real situations.
              </h2>
              <ul className="mt-6 space-y-5">
                {course.explore.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed text-brand-charcoal/70">
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand-mint-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12 border-t border-brand-charcoal/10 pt-10" aria-labelledby="application-heading">
              <p className="text-sm font-bold text-brand-cyan-blue">Applying the learning</p>
              <h2 id="application-heading" className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Bring stronger conversations into everyday work.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-charcoal/70">{course.application}</p>
            </section>
          </article>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl bg-brand-charcoal p-7 text-brand-white sm:p-8">
              <p className="flex items-center gap-3 text-sm font-bold">
                <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                Start a conversation
              </p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight">Want to explore this course?</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-white/70">Tell us what you&apos;re working toward and we&apos;ll help you find the right learning direction.</p>
              <Link href="/contact?interest=program-information" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue">
                Talk to us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
