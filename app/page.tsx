import Image from "next/image";
import Link from "next/link";
import { AcademicCapIcon, BriefcaseIcon, ChartBarIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { programs } from "@/content/programs";

const programDescriptions = [
  "Build confidence, skills, and a growth mindset.",
  "Work with focus, clarity, and confidence.",
  "Strengthen connection, communication, and trust.",
  "Lead people with clarity, empathy, and purpose.",
  "Turn priorities into meaningful direction and action.",
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-brand-white text-brand-charcoal">
      <section className="overflow-hidden bg-brand-white" aria-label="Hero and organization overview">
      <div className="mx-auto grid min-h-0 w-full max-w-[74rem] grid-cols-1 items-start gap-8 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-14 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="max-w-2xl lg:-translate-y-2 lg:scale-[1.04] lg:origin-left lg:pt-6">
          <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
            The Learning Lab
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl xl:text-[3.25rem] 2xl:text-5xl">
            <span className="sm:block">Learning that </span>
            <span className="text-brand-mint-green sm:block">moves people </span>
            <span className="sm:block">forward.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-brand-charcoal/80 sm:text-lg sm:leading-8">
            Meaningful development experiences for teams, leaders, and
            organizations. Discover practical programs designed to turn new
            knowledge into real-world impact.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand-mint-green px-5 text-sm font-extrabold text-brand-charcoal transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transition-none"
            >
              Explore Programs
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15 15 5M7 5h8v8" />
              </svg>
            </Link>
            <Link
              href="/contact?interest=consultation"
              className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-brand-charcoal bg-white px-5 text-sm font-extrabold text-brand-charcoal shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-white hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transition-none"
            >
              Book a Consultation
            </Link>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-brand-charcoal sm:gap-x-0 lg:flex-nowrap lg:whitespace-nowrap">
            <li className="flex items-center gap-2 sm:pr-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Practical programs</li>
            <li className="flex items-center gap-2 sm:border-l sm:border-brand-charcoal/15 sm:px-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Teams &amp; leaders</li>
            <li className="flex items-center gap-2 sm:border-l sm:border-brand-charcoal/15 sm:pl-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Real-world impact</li>
          </ul>
        </div>
        <div className="relative isolate order-2 flex w-full justify-center lg:order-none lg:translate-y-2 lg:justify-end">
          <span aria-hidden="true" className="pointer-events-none absolute -top-8 left-1/4 size-44 rotate-12 rounded-[62%_38%_48%_52%] bg-brand-mint-green/20 blur-sm lg:size-56" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-8 right-12 size-40 -rotate-12 rounded-[38%_62%_57%_43%] bg-brand-turquoise/20 blur-sm lg:size-52" />
          <Image
            src="/assets/hero/Collaborative%20Learning%20Photo%20Collage.png"
            alt="A collage of a group workshop and people learning with laptops"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
            className="relative z-10 block h-auto w-full lg:translate-x-[4%]"
          />
          <span className="pointer-events-none absolute left-[6%] top-[11%] z-20 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold text-brand-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.16)] sm:gap-3 sm:px-5 sm:py-4 sm:text-sm">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-brand-turquoise sm:size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6" /></svg>
            Learn with purpose
          </span>
          <span className="pointer-events-none absolute bottom-[10%] left-[12%] z-20 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold text-brand-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.16)] sm:left-[23%] sm:gap-3 sm:px-5 sm:py-4 sm:text-sm">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-brand-turquoise sm:size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 20v-6h4v6M10 20V9h4v11M16 20V4h4v16" /></svg>
            Develop with confidence
          </span>
          <span aria-hidden="true" className="hero-dot-grid pointer-events-none absolute right-1 top-2 z-20 size-20 opacity-45 lg:size-24" />
          <span aria-hidden="true" className="hero-dot-grid pointer-events-none absolute -left-4 bottom-2 z-20 size-16 opacity-35 lg:size-20" />
        </div>
      </div>
      <LogoMarquee />
      </section>
      <section className="mx-auto max-w-[74rem] px-7 pb-14 pt-16 sm:px-10 lg:px-14" aria-labelledby="programs-heading">
        <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          Signature learning portfolio
        </p>
        <h2 id="programs-heading" className="mt-4 max-w-4xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Programs built around <span className="text-brand-mint-green">what matters</span> at work.
        </h2>
        <p className="mt-4 max-w-none whitespace-nowrap text-base leading-relaxed text-brand-charcoal/70">
          Focused learning experiences that help people grow, collaborate better, and create greater impact.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {programs.map((program, index) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className={`group relative isolate flex min-h-52 flex-col justify-end overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-5 transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transform-none motion-reduce:transition-none lg:col-span-2 ${index < 5 ? "text-white" : ""} ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""}`}
            >
              {index === 0 && (
                <>
                  <Image src="/assets/courses/personal.png" alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-[center_25%] transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/25 to-brand-charcoal/20" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center bg-brand-charcoal/65 px-6 text-center font-heading text-lg font-bold text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                    Explore Personal Development
                  </span>
                </>
              )}
              {index === 1 && (
                <>
                  <Image src="/assets/courses/managing_work.png" alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-0 bg-brand-charcoal/45" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center bg-brand-mint-green/90 px-6 text-center font-heading text-lg font-bold text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                    Explore Managing Work
                  </span>
                </>
              )}
              {index === 2 && (
                <>
                  <Image src="/assets/courses/managing_relationship.png" alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-0 bg-brand-charcoal/45" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center bg-brand-charcoal/65 px-6 text-center font-heading text-lg font-bold text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                    Explore Managing Relationships
                  </span>
                </>
              )}
              {index === 3 && (
                <>
                  <Image src="/assets/courses/leadership.png" alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-0 bg-brand-charcoal/45" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center bg-brand-mint-green/90 px-6 text-center font-heading text-lg font-bold text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                    Explore Leadership &amp; Management
                  </span>
                </>
              )}
              {index === 4 && (
                <>
                  <Image src="/assets/courses/strategy.png" alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-0 bg-brand-charcoal/45" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center bg-brand-charcoal/65 px-6 text-center font-heading text-lg font-bold text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                    Explore Impacting Strategy
                  </span>
                </>
              )}
              <span className="absolute left-4 top-4 z-10 inline-flex size-7 items-center justify-center rounded-full bg-brand-charcoal text-brand-white transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none">
                {index === 0 && <AcademicCapIcon className="size-4" aria-hidden="true" />}
                {index === 1 && <BriefcaseIcon className="size-4" aria-hidden="true" />}
                {index === 2 && <UserGroupIcon className="size-4" aria-hidden="true" />}
                {index === 3 && <UserIcon className="size-4" aria-hidden="true" />}
                {index === 4 && <ChartBarIcon className="size-4" aria-hidden="true" />}
              </span>
              <div className="relative z-10 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none">
                <h3 className="font-heading text-xl font-bold leading-snug">{program.name}</h3>
                <p className="mt-2 max-w-xs text-sm leading-snug text-current/85">{programDescriptions[index]}</p>
              </div>
              <span aria-hidden="true" className="absolute bottom-5 right-5 z-10 inline-flex size-6 items-center justify-center rounded-full bg-brand-charcoal text-sm font-bold text-brand-white transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none">→</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-b border-brand-charcoal/10 bg-brand-charcoal/[0.03]" aria-labelledby="methodology-heading">
        <div className="mx-auto max-w-[74rem] px-7 py-16 sm:px-10 lg:px-14">
          <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
            A practical path forward
          </p>
          <h2 id="methodology-heading" className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            How learning moves forward.
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [UserGroupIcon, "Understand the need", "Start with the people, context, and priorities that shape the learning experience."],
              [AcademicCapIcon, "Build practical capability", "Focus on relevant knowledge, skills, and conversations people can use at work."],
              [ChartBarIcon, "Apply learning at work", "Create space to connect new learning with everyday decisions, collaboration, and impact."],
            ].map(([Icon, title, description], index) => (
              <li key={title as string} className="rounded-lg border border-brand-charcoal/10 bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-charcoal text-brand-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold text-brand-charcoal/45">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-heading text-xl font-bold">{title as string}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{description as string}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
