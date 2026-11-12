import Image from "next/image";
import Link from "next/link";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { programs } from "@/content/programs";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-brand-white text-brand-charcoal">
      <div className="mx-auto grid min-h-[70vh] w-full max-w-[88rem] grid-cols-1 items-start gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-4 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="max-w-2xl lg:pt-6">
          <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
            The Learning Lab
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl xl:text-[4rem] 2xl:text-7xl">
            <span className="sm:block">Learning that </span>
            <span className="text-brand-mint-green sm:block">moves people </span>
            <span className="sm:block">forward.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-brand-charcoal/80 sm:text-xl sm:leading-9">
            Meaningful development experiences for teams, leaders, and
            organizations. Discover practical programs designed to turn new
            knowledge into real-world impact.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-6 font-extrabold text-brand-charcoal transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transition-none"
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
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-charcoal bg-white px-6 font-extrabold text-brand-charcoal shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-white hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transition-none"
            >
              Book a Consultation
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-brand-charcoal sm:gap-x-0">
            <li className="flex items-center gap-2 sm:pr-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Practical programs</li>
            <li className="flex items-center gap-2 sm:border-l sm:border-brand-charcoal/15 sm:px-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Teams &amp; leaders</li>
            <li className="flex items-center gap-2 sm:border-l sm:border-brand-charcoal/15 sm:pl-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Real-world impact</li>
          </ul>
        </div>
        <div className="relative isolate order-2 flex w-full justify-center lg:order-none lg:justify-end">
          <span aria-hidden="true" className="pointer-events-none absolute -top-8 left-1/4 size-44 rotate-12 rounded-[62%_38%_48%_52%] bg-brand-mint-green/20 blur-sm lg:size-56" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-8 right-12 size-40 -rotate-12 rounded-[38%_62%_57%_43%] bg-brand-turquoise/20 blur-sm lg:size-52" />
          <Image
            src="/assets/hero/Collaborative%20Learning%20Photo%20Collage.png"
            alt="A collage of a group workshop and people learning with laptops"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
            className="relative z-10 block h-auto w-full lg:translate-x-[6%]"
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
      <section className="mx-auto max-w-[88rem] px-4 pb-16 pt-24 sm:px-6 lg:px-4" aria-labelledby="programs-heading">
        <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          Signature learning portfolio
        </p>
        <h2 id="programs-heading" className="mt-4 max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Programs built around what matters at work.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {programs.map((program, index) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className={`group relative isolate flex min-h-56 flex-col justify-end overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transform-none motion-reduce:transition-none lg:col-span-2 ${index === 0 ? "text-white" : ""} ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""}`}
            >
              {index === 0 && (
                <>
                  <Image src="/assets/courses/personal.png" alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-[center_25%] transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-0 bg-brand-charcoal/45" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center bg-brand-charcoal/65 px-6 text-center font-heading text-lg font-bold text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                    Explore Personal Development
                  </span>
                </>
              )}
              <span className="absolute left-4 top-4 z-10 inline-flex size-6 items-center justify-center rounded-full bg-brand-charcoal text-[10px] font-bold text-brand-white transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative z-10 font-heading text-xl font-bold leading-snug transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none">{program.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
