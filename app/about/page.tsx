import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 lg:px-0">
      <section className="relative isolate overflow-hidden rounded-2xl bg-brand-charcoal px-7 py-16 text-brand-white sm:px-10 sm:py-20 lg:px-0 lg:py-24" aria-labelledby="about-heading">
        <Image
          src="/assets/hero/about_us_banner.png"
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

      <section className="mt-20 border-t border-brand-charcoal/10 pt-12 lg:mt-28 lg:pt-16" aria-labelledby="learner-centered-heading">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Our perspective
            </p>
            <h2 id="learner-centered-heading" className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              The Learning Lab sets a new standard for <span className="text-brand-mint-green">learner-centered education.</span>
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-brand-charcoal/70">
            <p>
              To create world-class learning experiences, we commit to understanding you—the modern learner: how you think and retain information, how you absorb and engage with new knowledge, and what helps you commit to lasting change.
            </p>
            <p>
              That perspective shapes how we design every experience: practical, engaging, and connected to the way people learn and work today.
            </p>
            <Accordion className="border-t border-brand-charcoal/10 pt-2">
              <AccordionItem value="think-and-retain" className="border-brand-charcoal/10">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  How learners think and retain information
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We pay attention to how people process and retain information so each learning experience can meet learners where they are.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="absorb-and-engage" className="border-brand-charcoal/10">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  How learners absorb and engage with knowledge
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We shape learning around the ways people prefer to absorb, explore, and engage with new knowledge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="commit-to-change" className="border-brand-charcoal/10">
                <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                  What helps learners commit to lasting change
                </AccordionTrigger>
                <AccordionContent className="text-brand-charcoal/70">
                  We connect learning to the motivation and practical context that help people carry new understanding into lasting change.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
