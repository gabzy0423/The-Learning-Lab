import Image from "next/image";
import Link from "next/link";
import { AcademicCapIcon, BriefcaseIcon, ChartBarIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { programs } from "@/content/programs";

const programDescriptions = [
  "Build confidence, self-awareness, and a growth mindset. Develop practical habits that support continued progress.",
  "Work with focus, clarity, and confidence. Strengthen everyday practices that help people prioritize, plan, and deliver.",
  "Strengthen connection, communication, and trust. Navigate collaboration and relationships with greater awareness.",
  "Lead people with clarity, empathy, and purpose. Build practical capability to support teams and move work forward.",
  "Turn priorities into meaningful direction and action. Connect strategic thinking with decisions that create impact.",
];

const programImages = [
  "/assets/courses/personal.png",
  "/assets/courses/managing_work.png",
  "/assets/courses/managing_relationship.png",
  "/assets/courses/leadership.png",
  "/assets/courses/strategy.png",
];

const programAlternateImages = [
  "/assets/courses/alt_personal.png",
  "/assets/courses/alt_managing_work.png",
  "/assets/courses/alt_managing_relationship.png",
  "/assets/courses/alt_leadership.png",
  "/assets/courses/alt_strategy.png",
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-brand-white text-brand-charcoal">
      <section className="overflow-hidden bg-brand-white" aria-label="Hero">
      {/* Desktop navbar occupies 4rem plus its 1px bottom border. */}
      <div className="mx-auto grid min-h-0 w-full max-w-[80rem] grid-cols-1 items-start gap-8 px-7 py-10 sm:px-10 sm:py-12 lg:min-h-[calc(100dvh-4rem-1px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-0">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
            The Learning Lab
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[clamp(3rem,4.7vw,4rem)]">
            <span className="sm:block">Learning that </span>
            <span className="text-brand-mint-green sm:block">moves people </span>
            <span className="sm:block">forward.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-brand-charcoal/80 sm:text-lg sm:leading-8 lg:text-xl">
            Meaningful development experiences for teams, leaders, and
            organizations. Discover practical programs designed to turn new
            knowledge into real-world impact.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:[&>a]:min-h-13 lg:[&>a]:px-6 lg:[&>a]:text-base">
            <Link
              href="/programs"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand-charcoal px-5 text-sm font-extrabold text-brand-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-charcoal/90 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transition-none"
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
          <ul className="mt-7 flex w-full flex-wrap items-center justify-between gap-x-2 gap-y-2 text-[10px] font-semibold text-brand-charcoal sm:text-xs lg:text-sm">
            <li className="flex items-center gap-2 sm:pr-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Practical programs</li>
            <li className="flex items-center gap-2 sm:border-l sm:border-brand-charcoal/15 sm:px-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Teams &amp; leaders</li>
            <li className="flex items-center gap-2 sm:border-l sm:border-brand-charcoal/15 sm:pl-5"><span aria-hidden="true" className="size-2 rounded-full bg-brand-mint-green" />Real-world impact</li>
          </ul>
        </div>
        <div className="relative isolate order-2 flex w-full justify-center lg:order-none lg:justify-end lg:[&>span:not([aria-hidden])]:text-base lg:[&>span:not([aria-hidden])]:px-6">
          <span aria-hidden="true" className="pointer-events-none absolute -top-8 left-1/4 size-44 rotate-12 rounded-[62%_38%_48%_52%] bg-brand-mint-green/20 blur-sm lg:size-56" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-8 right-12 size-40 -rotate-12 rounded-[38%_62%_57%_43%] bg-brand-turquoise/20 blur-sm lg:size-52" />
          <Image
            src="/assets/hero/Collaborative%20Learning%20Photo%20Collage.png"
            alt="A collage of a group workshop and people learning with laptops"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
            className="relative z-10 block h-auto w-full lg:w-[108%] lg:max-w-none lg:shrink-0 lg:translate-x-[4%]"
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
      </section>
      <LogoMarquee />
      <section className="bg-brand-charcoal/[0.03]" aria-labelledby="programs-heading">
        <div className="mx-auto max-w-[80rem] px-7 pb-14 pt-16 sm:px-10 lg:px-0">
        <div className="grid items-start gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Signature learning portfolio
            </p>
            <h2 id="programs-heading" className="mt-4 max-w-4xl text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Programs built around <span className="text-brand-mint-green">what matters</span> at work.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 lg:pt-8">
            Focused learning experiences that help people grow, collaborate better, and create greater impact.
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {programs.map((program, index) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group relative flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transform-none motion-reduce:transition-none lg:col-span-2"
            >
              <span className="inline-flex text-brand-cyan-blue">
                {index === 0 && <AcademicCapIcon className="size-9" aria-hidden="true" />}
                {index === 1 && <BriefcaseIcon className="size-9" aria-hidden="true" />}
                {index === 2 && <UserGroupIcon className="size-9" aria-hidden="true" />}
                {index === 3 && <UserIcon className="size-9" aria-hidden="true" />}
                {index === 4 && <ChartBarIcon className="size-9" aria-hidden="true" />}
              </span>
              <div className="mt-4">
                <h3 className="font-heading text-xl font-bold leading-snug">{program.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{programDescriptions[index]}</p>
              </div>
              <div className="relative mt-6 h-40 overflow-hidden rounded-md bg-brand-charcoal/5 after:absolute after:inset-0 after:bg-brand-charcoal/15 sm:h-44">
                <Image src={programImages[index]} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                <Image src={programAlternateImages[index]} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-focus-visible:scale-105 group-focus-visible:opacity-100 motion-reduce:transform-none motion-reduce:transition-none" />
              </div>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-bold text-brand-charcoal transition-colors group-hover:text-brand-cyan-blue">
                Explore Program
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </span>
            </Link>
          ))}
          <Link
            href="/contact?interest=consultation"
            className="group hidden min-h-[29rem] flex-col justify-between rounded-lg border border-brand-mint-green/30 bg-gradient-to-br from-brand-mint-green via-brand-white to-brand-cyan-blue/30 p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue motion-reduce:transform-none motion-reduce:transition-none lg:col-span-2 lg:flex"
          >
            <div>
              <p className="text-sm font-bold text-brand-charcoal/65">Tailored learning</p>
              <h3 className="mt-4 max-w-xs font-heading text-2xl font-extrabold leading-tight">
                Need a learning solution for your team?
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-charcoal/75">
                Explore the full range of practical learning programs designed to support personal growth, stronger collaboration, confident leadership, and strategic impact. Find the path that best fits your team&apos;s needs and goals.
              </p>
            </div>
            <span className="inline-flex min-h-11 w-fit items-center gap-2 rounded-xl bg-brand-charcoal px-5 text-sm font-bold text-brand-white transition-colors group-hover:bg-brand-charcoal/90">
              Explore All Programs
              <span aria-hidden="true" className="text-base leading-none">→</span>
            </span>
          </Link>
        </div>
        </div>
      </section>
      <section className="border-b border-brand-charcoal/10 bg-brand-white" aria-labelledby="services-heading">
        <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
          <div className="grid items-end gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
                <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                Our Services
              </p>
              <h2 id="services-heading" className="mt-4 max-w-3xl text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Solutions that support <span className="text-brand-mint-green">better work.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 lg:pb-1">
              Explore proposed digital solutions that can support the way people, capability, and work come together.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ["Custom Human Resource Information System (HRIS)", "Explore the proposed direction for a custom HRIS solution; detailed capabilities will be added as the offering is finalized.", "/solutions/hris", BriefcaseIcon],
              ["Competency Platform", "Explore the proposed direction for a competency platform; detailed capabilities will be added as the offering is finalized.", "/solutions/competency-platform", ChartBarIcon],
              ["Learning Management Platform", "Explore the proposed direction for a learning management platform; detailed capabilities will be added as the offering is finalized.", "/solutions/learning-management-platform", AcademicCapIcon],
            ].map(([title, description, href, Icon], index) => (
              <Link
                key={href as string}
                href={href as string}
                className="group flex min-h-[27rem] flex-col rounded-2xl border border-brand-charcoal/15 bg-brand-white p-7 text-brand-charcoal shadow-[0_8px_24px_rgba(41,41,41,0.05)] transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue sm:p-8 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-md border border-brand-charcoal/10 bg-brand-charcoal/[0.03] px-2.5 py-1 text-xs font-extrabold text-brand-charcoal/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex rounded-xl border border-brand-mint-green/30 bg-brand-mint-green/10 p-3 text-brand-cyan-blue">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 max-w-xl font-heading text-2xl font-extrabold leading-tight tracking-tight">{title as string}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-charcoal/70">{description as string}</p>
                <span className="mt-auto inline-flex items-center gap-2 border-t border-brand-charcoal/10 pt-5 text-sm font-bold text-brand-charcoal transition-colors group-hover:text-brand-cyan-blue">
                  Learn more
                  <span aria-hidden="true" className="text-base leading-none">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-brand-charcoal/10 bg-brand-white" aria-labelledby="methodology-heading">
        <div className="mx-auto grid max-w-[80rem] items-center gap-10 px-7 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-0">
          <div className="overflow-hidden rounded-lg border border-brand-charcoal/10 bg-brand-charcoal shadow-[0_16px_40px_rgba(41,41,41,0.12)]">
            <Image
              src="/assets/hero/learning.png"
              alt="People learning together across in-person and digital settings"
              width={768}
              height={512}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div>
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              A practical path forward
            </p>
            <h2 id="methodology-heading" className="mt-4 max-w-3xl text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              How learning <span className="text-brand-mint-green">moves forward.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/70">
              A practical approach to turning learning into everyday progress.
            </p>
            <div className="mt-8 border-t border-brand-charcoal/15 pt-6">
              <ol className="space-y-5">
                {[
                  ["Understand the need", "Start with the people, context, and priorities that shape the learning experience."],
                  ["Build practical capability", "Focus on relevant knowledge, skills, and conversations people can use at work."],
                  ["Apply learning at work", "Create space to connect new learning with everyday decisions, collaboration, and impact."],
                ].map(([title, description]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan-blue/15 text-brand-cyan-blue">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/70">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8">
            <Link
              href="/contact?interest=program-information"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-charcoal px-5 text-sm font-bold text-brand-white transition-colors hover:bg-brand-charcoal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue"
            >
              Talk to us about your learning needs
              <span aria-hidden="true">→</span>
            </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-charcoal/[0.03]" aria-labelledby="about-preview-heading">
        <div className="mx-auto grid max-w-[80rem] items-stretch gap-10 px-7 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-0">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              About The Learning Lab
            </p>
            <h2 id="about-preview-heading" className="mt-4 max-w-xl text-balance font-heading text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              Learning with a <span className="text-brand-mint-green">human point of view.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-charcoal/70">
              Explore the story, perspective, and approach behind The Learning Lab through this short introduction.
            </p>
            <ul className="mt-8 space-y-5 border-t border-brand-charcoal/15 pt-6 text-sm font-semibold text-brand-charcoal/80">
              {[
                ["Human-centered perspective", "Start with people, context, and priorities."],
                ["Practical learning approach", "Focus on relevant ideas, skills, and conversations people can use."],
                ["Progress people can carry into work", "Turn learning into everyday decisions, collaboration, and impact."],
              ].map(([title, description]) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan-blue/15 text-brand-cyan-blue">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-brand-charcoal">{title}</h3>
                    <p className="mt-1 text-sm font-normal leading-relaxed text-brand-charcoal/70">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-charcoal px-5 text-sm font-extrabold text-brand-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-brand-charcoal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue"
            >
              Learn More About Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="relative isolate h-full">
            <span aria-hidden="true" className="pointer-events-none absolute -right-5 -top-6 z-0 size-28 rotate-12 rounded-[42%_58%_55%_45%] bg-brand-mint-green/85 blur-[1px] sm:size-36" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-6 -left-6 z-0 size-24 -rotate-12 rounded-[58%_42%_45%_55%] bg-brand-cyan-blue/55 blur-[1px] sm:size-32" />
            <div className="relative z-10 h-full overflow-hidden rounded-lg border border-brand-charcoal/10 bg-brand-charcoal shadow-[0_16px_40px_rgba(41,41,41,0.12)]">
              <video
                className="h-auto aspect-[3/2] w-full object-contain lg:h-full lg:aspect-auto"
                controls
                preload="metadata"
                aria-label="About The Learning Lab video"
              >
                <source src="/assets/mp4/About%20the%20Learning%20Lab.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-brand-charcoal/10 bg-brand-white text-brand-charcoal" aria-labelledby="contact-cta-heading">
        <div className="mx-auto max-w-[80rem] px-7 py-12 sm:px-10 lg:px-0 lg:py-14">
          <div className="relative isolate grid overflow-hidden rounded-2xl bg-brand-charcoal p-6 text-brand-white sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div className="relative z-10 max-w-2xl">
              <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
                <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                Start a conversation
              </p>
              <h2 id="contact-cta-heading" className="mt-4 max-w-3xl text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to <span className="text-brand-mint-green">explore a learning need?</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-white/70">
                Tell us what you&apos;re working on, and let&apos;s explore how learning can support your goals.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact?interest=program-information"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6M8 13h8M8 17h6" />
                  </svg>
                  Request Program Information
                </Link>
                <Link
                  href="/contact?interest=consultation"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-white px-5 text-sm font-bold text-brand-white transition-colors hover:bg-brand-white hover:text-brand-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Book a Consultation
                </Link>
              </div>
            </div>
            <div className="relative z-10 mt-6 min-h-64 translate-y-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[36%] lg:translate-y-0">
              <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 z-0 size-40 rounded-full bg-brand-mint-green/25 blur-2xl lg:size-56" />
              <span aria-hidden="true" className="pointer-events-none absolute right-1/3 top-8 z-0 size-32 rounded-full bg-brand-cyan-blue/20 blur-2xl lg:size-44" />
              <Image
                src="/assets/hero/cta_hero.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="relative z-10 origin-bottom-right object-contain object-bottom lg:scale-100"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
