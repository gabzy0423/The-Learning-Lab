import Image from "next/image";
import Link from "next/link";
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

const managingWorkCards = [
  {
    image: "/assets/pages/programs/managing1.png",
    title: "Complete Staff Work",
    description: "Build a structured approach to preparing complete recommendations, coordinating details, and helping teams make informed decisions.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/managing2.png",
    title: "Practical Project Management",
    description: "Strengthen the planning, coordination, and delivery habits needed to move projects forward with clarity and confidence.",
    accent: "text-brand-cyan-blue",
  },
  {
    image: "/assets/pages/programs/managing3.png",
    title: "Innovation & Design Thinking",
    description: "Explore practical ways to understand challenges, generate ideas, and shape solutions around real needs.",
    accent: "text-brand-turquoise",
  },
  {
    image: "/assets/pages/programs/managing4.png",
    title: "The Problem-Solving Toolkit",
    description: "Use practical tools to break down complex challenges, evaluate options, and move toward workable solutions.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/managing5.png",
    title: "Managing Meetings",
    description: "Plan and facilitate focused meetings that encourage participation, clarify decisions, and end with clear next steps.",
    accent: "text-brand-cyan-blue",
  },
];

const managingRelationshipsCards = [
  {
    image: "/assets/pages/programs/rs1.png",
    title: "Emotional Intelligence at Work",
    description: "Build awareness of emotions, improve self-management, and strengthen workplace relationships through practical emotional intelligence skills.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/rs2.png",
    title: "Managing Conflict",
    description: "Develop practical approaches to understand differences, navigate difficult conversations, and move toward constructive outcomes.",
    accent: "text-brand-cyan-blue",
  },
  {
    image: "/assets/pages/programs/rs3.png",
    title: "Essential Selling Skills",
    description: "Strengthen the communication and relationship skills needed to understand customer needs and present value with confidence.",
    accent: "text-brand-turquoise",
  },
  {
    image: "/assets/pages/programs/rs4.png",
    title: "Managing Up",
    description: "Build practical skills for communicating with managers, aligning expectations, and working effectively across priorities.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/rs5.png",
    title: "World Class Service",
    description: "Strengthen service habits that help teams understand needs, respond thoughtfully, and create consistent customer experiences.",
    accent: "text-brand-cyan-blue",
  },
];

const leadershipManagementCards = [
  {
    image: "/assets/pages/programs/leader1.png",
    title: "Coaching & Developing Your Team",
    description: "Build practical coaching habits that help leaders support growth, improve performance, and create stronger team relationships.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/leader2.png",
    title: "Leadership 2.0",
    description: "Strengthen modern leadership skills for guiding people, navigating change, and creating meaningful progress at work.",
    accent: "text-brand-cyan-blue",
  },
  {
    image: "/assets/pages/programs/leader3.png",
    title: "Leading with Emotional Intelligence",
    description: "Develop the self-awareness, empathy, and communication skills needed to lead people with clarity and trust.",
    accent: "text-brand-turquoise",
  },
  {
    image: "/assets/pages/programs/leader4.png",
    title: "Leading Change",
    description: "Help people move through change with clearer direction, constructive communication, and practical leadership support.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/leader5.png",
    title: "Managing Millennials",
    description: "Build a more inclusive approach to understanding, engaging, and developing a multigenerational workforce.",
    accent: "text-brand-cyan-blue",
  },
  {
    image: "/assets/pages/programs/leader6.png",
    title: "Management Essentials",
    description: "Strengthen the everyday management skills needed to set expectations, support performance, and lead with consistency.",
    accent: "text-brand-turquoise",
  },
];

const impactingStrategyCards = [
  {
    image: "/assets/pages/programs/impact1.png",
    title: "Competency Based Talent Management",
    description: "Build a practical approach to connecting workforce capabilities with organizational priorities and long-term performance.",
    accent: "text-brand-mint-green",
  },
  {
    image: "/assets/pages/programs/impact2.png",
    title: "Strategic Planning with the Balanced Scorecard",
    description: "Translate strategy into clear priorities, measures, and coordinated action using the Balanced Scorecard approach.",
    accent: "text-brand-cyan-blue",
  },
  {
    image: "/assets/pages/programs/impact3.png",
    title: "Succession Planning & Management",
    description: "Strengthen continuity by preparing future leaders and managing key transitions with greater clarity.",
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

        <section id="personal-development-courses" aria-labelledby="personal-development-programs-heading">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <div className="grid items-start gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
              <h2 id="personal-development-programs-heading" className="max-w-3xl text-balance font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Explore our <span className="text-brand-mint-green">Personal Development programs</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 lg:pt-2">
                Explore practical learning experiences designed to build confidence, strengthen everyday capability, and support positive progress at work.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <section aria-labelledby="personal-development-cta-heading">
          <div className="mx-auto max-w-[80rem] px-7 pb-16 sm:px-10 lg:px-0 lg:pb-20">
            <div className="relative isolate grid overflow-hidden rounded-2xl bg-brand-charcoal p-7 text-brand-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="relative z-10 max-w-2xl">
                <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
                  <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                  Start a conversation
                </p>
                <h2 id="personal-development-cta-heading" className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Not sure <span className="text-brand-mint-green">where to start?</span>
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-white/70">
                  Tell us what you&apos;re working toward, and we&apos;ll help you find the right learning direction.
                </p>
              </div>
              <Link
                href="/contact?interest=program-information"
                className="mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue lg:col-start-1"
              >
                Talk to us
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </Link>
              <div className="relative z-10 mt-6 min-h-56 translate-y-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[34%] lg:translate-y-0">
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 z-0 size-40 rounded-full bg-brand-mint-green/25 blur-2xl lg:size-52" />
                <Image src="/assets/hero/cta_hero.png" alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="relative z-10 object-contain object-bottom" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (program.slug === "managing-work") {
    return (
      <main className="min-h-[70vh] bg-brand-white text-brand-charcoal">
        <section className="relative isolate overflow-hidden border-b border-brand-charcoal/10 text-brand-white">
          <Image
            src="/assets/pages/programs/managing-work-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-20 size-full object-cover object-[center_70%] opacity-40"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-brand-charcoal/85 sm:bg-brand-charcoal/80 lg:bg-brand-charcoal/70" />
          <div className="relative z-10 mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Plan . Focus . Deliver
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Managing <span className="text-brand-mint-green">Work</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
              Work with focus, clarity, and confidence. Strengthen everyday practices that help people prioritize, plan, and deliver.
            </p>
          </div>
        </section>
        <section aria-labelledby="managing-work-programs-heading">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <div className="grid items-start gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
              <h2 id="managing-work-programs-heading" className="max-w-3xl text-balance font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Explore our <span className="text-brand-mint-green">Managing Work programs</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 lg:pt-2">
                Explore practical learning experiences designed to help people prioritize, plan, and deliver with greater clarity.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {managingWorkCards.map((card, index) => (
                <article
                  key={card.title}
                  className="group flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <p className={`text-sm font-extrabold ${card.accent}`}>{String(index + 1).padStart(2, "0")}</p>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-md border border-brand-charcoal/10 bg-brand-charcoal/[0.03]">
                    <Image
                      src={card.image}
                      alt={`${card.title} course visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-extrabold leading-tight tracking-tight">{card.title}</h3>
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
        <section aria-labelledby="managing-work-cta-heading">
          <div className="mx-auto max-w-[80rem] px-7 pb-16 sm:px-10 lg:px-0 lg:pb-20">
            <div className="relative isolate grid overflow-hidden rounded-2xl bg-brand-charcoal p-7 text-brand-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="relative z-10 max-w-2xl">
                <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
                  <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                  Start a conversation
                </p>
                <h2 id="managing-work-cta-heading" className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Not sure <span className="text-brand-mint-green">where to start?</span>
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-white/70">
                  Tell us what you&apos;re working toward, and we&apos;ll help you find the right learning direction.
                </p>
              </div>
              <Link
                href="/contact?interest=program-information"
                className="mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue lg:col-start-1"
              >
                Talk to us
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </Link>
              <div className="relative z-10 mt-6 min-h-56 translate-y-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[34%] lg:translate-y-0">
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 z-0 size-40 rounded-full bg-brand-mint-green/25 blur-2xl lg:size-52" />
                <Image src="/assets/hero/cta_hero.png" alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="relative z-10 object-contain object-bottom" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (program.slug === "managing-relationships") {
    return (
      <main className="min-h-[70vh] bg-brand-white text-brand-charcoal">
        <section className="relative isolate overflow-hidden border-b border-brand-charcoal/10 text-brand-white">
          <Image
            src="/assets/pages/programs/managing-relationships-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-40"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-brand-charcoal/85 sm:bg-brand-charcoal/80 lg:bg-brand-charcoal/70" />
          <div className="relative z-10 mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Program category
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Managing <span className="text-brand-mint-green">Relationships</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
              Strengthen connection, communication, and trust. Navigate collaboration and relationships with greater awareness.
            </p>
          </div>
        </section>

        <section aria-labelledby="managing-relationships-programs-heading">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <div className="grid items-start gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
              <h2 id="managing-relationships-programs-heading" className="max-w-3xl text-balance font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Explore our <span className="text-brand-mint-green">Managing Relationships programs</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 lg:pt-2">
                Explore practical learning experiences designed to strengthen communication, collaboration, and trust at work.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {managingRelationshipsCards.map((card, index) => (
                <article
                  key={card.title}
                  className="group flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <p className={`text-sm font-extrabold ${card.accent}`}>{String(index + 1).padStart(2, "0")}</p>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-md border border-brand-charcoal/10 bg-brand-charcoal/[0.03]">
                    <Image
                      src={card.image}
                      alt={`${card.title} course visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-extrabold leading-tight tracking-tight">{card.title}</h3>
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
        <section aria-labelledby="managing-relationships-cta-heading">
          <div className="mx-auto max-w-[80rem] px-7 pb-16 sm:px-10 lg:px-0 lg:pb-20">
            <div className="relative isolate grid overflow-hidden rounded-2xl bg-brand-charcoal p-7 text-brand-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="relative z-10 max-w-2xl">
                <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
                  <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                  Start a conversation
                </p>
                <h2 id="managing-relationships-cta-heading" className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Not sure <span className="text-brand-mint-green">where to start?</span>
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-white/70">
                  Tell us what you&apos;re working toward, and we&apos;ll help you find the right learning direction.
                </p>
              </div>
              <Link
                href="/contact?interest=program-information"
                className="mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue lg:col-start-1"
              >
                Talk to us
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </Link>
              <div className="relative z-10 mt-6 min-h-56 translate-y-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[34%] lg:translate-y-0">
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 z-0 size-40 rounded-full bg-brand-mint-green/25 blur-2xl lg:size-52" />
                <Image src="/assets/hero/cta_hero.png" alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="relative z-10 object-contain object-bottom" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (program.slug === "leadership-management") {
    return (
      <main className="min-h-[70vh] bg-brand-white text-brand-charcoal">
        <section className="relative isolate overflow-hidden border-b border-brand-charcoal/10 text-brand-white">
          <Image
            src="/assets/pages/programs/leadership-management-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-40"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-brand-charcoal/85 sm:bg-brand-charcoal/80 lg:bg-brand-charcoal/70" />
          <div className="relative z-10 mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Lead . Align . Grow
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Leadership &amp; <span className="text-brand-mint-green">Management</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
              Build the confidence, awareness, and practical leadership habits needed to guide people and move work forward.
            </p>
          </div>
        </section>

        <section aria-labelledby="leadership-management-programs-heading">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <div className="grid items-start gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
              <h2 id="leadership-management-programs-heading" className="max-w-3xl text-balance font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Explore our <span className="text-brand-mint-green">Leadership &amp; Management programs</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 lg:pt-2">
                Explore practical learning experiences designed to strengthen leadership, people management, and confident decision-making at work.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {leadershipManagementCards.map((card, index) => (
                <article
                  key={card.title}
                  className="group flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <p className={`text-sm font-extrabold ${card.accent}`}>{String(index + 1).padStart(2, "0")}</p>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-md border border-brand-charcoal/10 bg-brand-charcoal/[0.03]">
                    <Image
                      src={card.image}
                      alt={`${card.title} course visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-extrabold leading-tight tracking-tight">{card.title}</h3>
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
        <section aria-labelledby="leadership-management-cta-heading">
          <div className="mx-auto max-w-[80rem] px-7 pb-16 sm:px-10 lg:px-0 lg:pb-20">
            <div className="relative isolate grid overflow-hidden rounded-2xl bg-brand-charcoal p-7 text-brand-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="relative z-10 max-w-2xl">
                <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
                  <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                  Start a conversation
                </p>
                <h2 id="leadership-management-cta-heading" className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Not sure <span className="text-brand-mint-green">where to start?</span>
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-white/70">
                  Tell us what you&apos;re working toward, and we&apos;ll help you find the right learning direction.
                </p>
              </div>
              <Link
                href="/contact?interest=program-information"
                className="mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue lg:col-start-1"
              >
                Talk to us
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </Link>
              <div className="relative z-10 mt-6 min-h-56 translate-y-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[34%] lg:translate-y-0">
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 z-0 size-40 rounded-full bg-brand-mint-green/25 blur-2xl lg:size-52" />
                <Image src="/assets/hero/cta_hero.png" alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="relative z-10 object-contain object-bottom" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (program.slug === "impacting-strategy") {
    return (
      <main className="min-h-[70vh] bg-brand-white text-brand-charcoal">
        <section className="border-b border-brand-charcoal/10 bg-brand-charcoal text-brand-white">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Plan . Align . Impact
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Impacting <span className="text-brand-mint-green">Strategy</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
              Connect people, priorities, and practical strategy to help organizations move forward with purpose.
            </p>
          </div>
        </section>

        <section aria-labelledby="impacting-strategy-programs-heading">
          <div className="mx-auto max-w-[80rem] px-7 py-16 sm:px-10 lg:px-0 lg:py-20">
            <div className="grid items-start gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
              <h2 id="impacting-strategy-programs-heading" className="max-w-3xl text-balance font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Explore our <span className="text-brand-mint-green">Impacting Strategy programs</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 lg:pt-2">
                Explore practical learning experiences designed to connect strategic priorities, organizational capability, and long-term progress.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {impactingStrategyCards.map((card, index) => (
                <article
                  key={card.title}
                  className="group flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-brand-turquoise hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <p className={`text-sm font-extrabold ${card.accent}`}>{String(index + 1).padStart(2, "0")}</p>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-md border border-brand-charcoal/10 bg-brand-charcoal/[0.03]">
                    <Image
                      src={card.image}
                      alt={`${card.title} course visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-extrabold leading-tight tracking-tight">{card.title}</h3>
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
        <section aria-labelledby="impacting-strategy-cta-heading">
          <div className="mx-auto max-w-[80rem] px-7 pb-16 sm:px-10 lg:px-0 lg:pb-20">
            <div className="relative isolate grid overflow-hidden rounded-2xl bg-brand-charcoal p-7 text-brand-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="relative z-10 max-w-2xl">
                <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
                  <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
                  Start a conversation
                </p>
                <h2 id="impacting-strategy-cta-heading" className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Not sure <span className="text-brand-mint-green">where to start?</span>
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-white/70">
                  Tell us what you&apos;re working toward, and we&apos;ll help you find the right learning direction.
                </p>
              </div>
              <Link
                href="/contact?interest=program-information"
                className="mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue lg:col-start-1"
              >
                Talk to us
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </Link>
              <div className="relative z-10 mt-6 min-h-56 translate-y-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[34%] lg:translate-y-0">
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 z-0 size-40 rounded-full bg-brand-mint-green/25 blur-2xl lg:size-52" />
                <Image src="/assets/hero/cta_hero.png" alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="relative z-10 object-contain object-bottom" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  notFound();
}
