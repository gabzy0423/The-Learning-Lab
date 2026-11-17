import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 lg:px-0">
      <section className="relative isolate overflow-hidden rounded-2xl bg-brand-charcoal px-7 py-16 text-brand-white sm:px-10 sm:py-20 lg:px-0 lg:py-24" aria-labelledby="about-heading">
        <Image
          src="/assets/pages/about/about_us_banner.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-brand-charcoal/85 sm:bg-brand-charcoal/80 lg:bg-brand-charcoal/70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-bold text-brand-white">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          About The Learning Lab
          </p>
          <h1 id="about-heading" className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[clamp(3rem,4.7vw,4rem)]">
          Learning designed to move <span className="text-brand-mint-green">people forward.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
          A closer look at the purpose and direction behind The Learning Lab.
          </p>
        </div>
      </section>

      <section className="relative isolate mt-20 border-t border-brand-charcoal/10 pt-12 pb-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-brand-charcoal/[0.03] lg:mt-28 lg:pt-16 lg:pb-20" aria-labelledby="learner-centered-heading">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16 lg:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Who we are
            </p>
            <h2 id="learner-centered-heading" className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              The Learning Lab sets a new standard for <span className="text-brand-mint-green">learner-centered education.</span>
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-brand-charcoal/70 lg:col-start-2 lg:row-start-1">
            <p>
              To create world-class learning experiences, we commit to understanding you—the modern learner: how you think and retain information, how you absorb and engage with new knowledge, and what helps you commit to lasting change.
            </p>
            <p>
              That perspective shapes how we design every experience: practical, engaging, and connected to the way people learn and work today.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/[0.03] lg:col-start-1 lg:row-start-2">
            <Image
              src="/assets/pages/about/whoweare.png"
              alt="The Learning Lab team member working in a learning environment"
              width={807}
              height={503}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="h-full space-y-5 text-base leading-relaxed text-brand-charcoal/70 lg:col-start-2 lg:row-start-2">
            <p className="text-sm font-bold text-brand-cyan-blue">How we design learning</p>
            <Accordion className="border-t border-brand-charcoal/10 pt-2">
              <AccordionItem value="think-and-retain" className="border-brand-charcoal/10 py-2">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  <span className="mr-3 text-xs font-extrabold text-brand-mint-green">01</span>
                  How learners think and retain information
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We pay attention to how people process and retain information so each learning experience can meet learners where they are.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="absorb-and-engage" className="border-brand-charcoal/10 py-2">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  <span className="mr-3 text-xs font-extrabold text-brand-mint-green">02</span>
                  How learners absorb and engage with knowledge
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We shape learning around the ways people prefer to absorb, explore, and engage with new knowledge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="commit-to-change" className="border-brand-charcoal/10 py-2">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  <span className="mr-3 text-xs font-extrabold text-brand-mint-green">03</span>
                  What helps learners commit to lasting change
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We connect learning to the motivation and practical context that help people carry new understanding into lasting change.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="practical-and-engaging" className="border-brand-charcoal/10 py-2">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  <span className="mr-3 text-xs font-extrabold text-brand-mint-green">04</span>
                  How learning stays practical and engaging
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We blend theory with real-world practice so learning feels relevant, active, and connected to everyday work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="lasting-change" className="border-brand-charcoal/10 py-2">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  <span className="mr-3 text-xs font-extrabold text-brand-mint-green">05</span>
                  How learning supports lasting change
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We design experiences that help people move from new knowledge to the commitment and action needed for lasting change.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-28" aria-labelledby="mission-vision-heading">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Our direction
            </p>
            <h2 id="mission-vision-heading" className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              What guides our work
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-brand-charcoal/70">
            A clear purpose and shared direction shape how we design learning experiences.
          </p>
        </div>

        <div className="mt-10 space-y-8 lg:space-y-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="relative isolate">
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -left-2 z-0 size-20 rounded-[40%_60%_55%_45%] bg-brand-turquoise/25 blur-[1px] sm:size-28" />
              <div className="relative z-10 aspect-[16/9] overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/[0.03]">
                <Image src="/assets/pages/about/mission.png" alt="Colleagues learning and collaborating together" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="flex h-full flex-col justify-center text-brand-charcoal lg:order-2">
              <h3 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Mission</h3>
              <p className="mt-5 max-w-xl text-lg font-normal leading-relaxed text-brand-charcoal/80 sm:text-xl">
                To create practical, human-centered learning experiences that help people grow, work better together, and turn insight into action.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="relative isolate lg:order-2">
              <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-3 z-0 size-20 rounded-[55%_45%_40%_60%] bg-brand-mint-green/30 blur-[1px] sm:size-28" />
              <div className="relative z-10 aspect-[16/9] overflow-hidden rounded-2xl border border-brand-mint-green/30 bg-brand-mint-green">
                <Image src="/assets/pages/about/vision.png" alt="Learner working confidently in a modern workspace" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="flex h-full flex-col justify-center text-brand-charcoal lg:order-1">
              <h3 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Vision</h3>
              <p className="mt-5 max-w-xl text-lg font-normal leading-relaxed text-brand-charcoal/80 sm:text-xl">
                A workplace culture where learning moves people, teams, and organizations forward.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="relative isolate">
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -left-2 z-0 size-20 rounded-[45%_55%_60%_40%] bg-brand-turquoise/25 blur-[1px] sm:size-28" />
              <div className="relative z-10 aspect-[16/9] overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/[0.03]">
                <Image src="/assets/pages/about/commitment.png" alt="Colleagues celebrating a collaborative learning moment" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="flex h-full flex-col justify-center text-brand-charcoal lg:order-2">
              <h3 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Our Commitment</h3>
              <p className="mt-5 max-w-xl text-lg font-normal leading-relaxed text-brand-charcoal/80 sm:text-xl">
                To continually innovate, support lifelong learning, and create opportunities for a brighter, more inclusive future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate mt-20 border-t border-brand-charcoal/10 pt-12 pb-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-brand-charcoal/[0.03] lg:mt-28 lg:pt-16 lg:pb-20" aria-labelledby="learning-method-heading">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              The Learning Lab method
            </p>
            <h2 id="learning-method-heading" className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              Four core elements that make learning stick.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-brand-charcoal/70">
            Based on four core elements, The Learning Lab method combines the latest in cognitive learning science with proven teaching techniques.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="rounded-2xl border-brand-mint-green/40 bg-brand-mint-green/10 py-0">
            <CardContent className="p-7 sm:p-8">
              <p className="text-sm font-extrabold text-brand-cyan-blue">01</p>
              <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">Brain Engagers</h3>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/70">
                Our programs bring out people&apos;s natural curiosity through story hooks, analogies, and multi-sensory learning methods. We use a thoughtful blend of left- and right-brain approaches to help people connect ideas, create new insights, and stay energized.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-brand-cyan-blue/30 bg-brand-cyan-blue/10 py-0">
            <CardContent className="p-7 sm:p-8">
              <p className="text-sm font-extrabold text-brand-cyan-blue">02</p>
              <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">Co-Active Learning</h3>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/70">
                Modern learners are goal-oriented, collaborative, and sophisticated. We help trainees set clear learning goals and participate actively, learning from and teaching one another throughout the program.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-brand-charcoal/15 bg-brand-charcoal/[0.04] py-0">
            <CardContent className="p-7 sm:p-8">
              <p className="text-sm font-extrabold text-brand-cyan-blue">03</p>
              <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">Retrieval Practice</h3>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/70">
                We connect learning to real-world application through opportunities to retrieve new knowledge, practise skills, and complete practical missions that strengthen retention.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-brand-turquoise/40 bg-brand-turquoise/10 py-0">
            <CardContent className="p-7 sm:p-8">
              <p className="text-sm font-extrabold text-brand-cyan-blue">04</p>
              <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">Play Space</h3>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/70">
                We create informal environments where participants can experiment, make mistakes without judgment, and stay focused on their learning. Humor and playfulness help adults relax, participate, and have fun while they learn.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-20 lg:mt-28" aria-labelledby="about-contact-cta-heading">
        <div className="relative isolate grid overflow-hidden rounded-2xl bg-brand-charcoal p-6 text-brand-white sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="relative z-10 max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Start a conversation
            </p>
            <h2 id="about-contact-cta-heading" className="mt-4 max-w-3xl text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to <span className="text-brand-mint-green">explore a learning need?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-white/70">
              Tell us what you&apos;re working on, and let&apos;s explore how learning can support your goals.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact?interest=program-information" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue">
                Request Program Information
              </Link>
              <Link href="/contact?interest=consultation" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-white px-5 text-sm font-bold text-brand-white transition-colors hover:bg-brand-white hover:text-brand-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue">
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="relative z-10 mt-6 min-h-64 translate-y-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[36%] lg:translate-y-0">
            <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 z-0 size-40 rounded-full bg-brand-mint-green/25 blur-2xl lg:size-56" />
            <Image src="/assets/hero/cta_hero.png" alt="" fill sizes="(min-width: 1024px) 32vw, 100vw" className="relative z-10 origin-bottom-right object-contain object-bottom lg:scale-100" />
          </div>
        </div>
      </section>
    </main>
  );
}
