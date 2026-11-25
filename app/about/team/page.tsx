import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MeetTheTeamPage() {
  return (
    <main className="about-page mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 lg:px-0">
      <section className="relative isolate overflow-hidden rounded-2xl bg-brand-charcoal px-7 py-16 text-brand-white sm:px-10 sm:py-20 lg:px-0 lg:py-24" aria-labelledby="meet-the-team-heading">
        <Image
          src="/assets/pages/about/meet-the-team-banner.png"
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
            Meet The Team
          </p>
          <h1 id="meet-the-team-heading" className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[clamp(3rem,4.7vw,4rem)]">
            The people behind <span className="text-brand-mint-green">The Learning Lab.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
            A closer look at the people, perspectives, and energy behind our work.
          </p>
        </div>
      </section>

      <section className="relative isolate mt-16 border-t border-brand-charcoal/10 pt-12 pb-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-brand-charcoal/[0.03] lg:mt-20 lg:pt-16 lg:pb-20" aria-labelledby="foundation-heading">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16 lg:gap-y-10">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
              Foundation
            </p>
            <h2 id="foundation-heading" className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              What grounds <span className="text-brand-mint-green">our work.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-charcoal/70">
              The principles that shape how we learn, collaborate, and create progress together.
            </p>
          </div>
          <Accordion className="border-t border-brand-charcoal/10 pt-2">
            <AccordionItem value="human-centered" className="border-brand-charcoal/10 py-2">
              <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                <span className="mr-3 text-xs font-extrabold text-brand-mint-green">01</span>
                Human-centered
              </AccordionTrigger>
              <AccordionContent className="text-brand-charcoal/70">
                We keep people, context, and real learning needs at the center of how we think and work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="practical" className="border-brand-charcoal/10 py-2">
              <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                <span className="mr-3 text-xs font-extrabold text-brand-mint-green">02</span>
                Practical
              </AccordionTrigger>
              <AccordionContent className="text-brand-charcoal/70">
                We focus on ideas, skills, and conversations that can connect learning to everyday work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="collaborative" className="border-brand-charcoal/10 py-2">
              <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                <span className="mr-3 text-xs font-extrabold text-brand-mint-green">03</span>
                Collaborative
              </AccordionTrigger>
              <AccordionContent className="text-brand-charcoal/70">
                We make space for people to participate, share perspective, and learn with one another.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="growth-minded" className="border-brand-charcoal/10 py-2">
              <AccordionTrigger className="font-heading font-bold text-brand-charcoal hover:no-underline">
                <span className="mr-3 text-xs font-extrabold text-brand-mint-green">04</span>
                Growth-minded
              </AccordionTrigger>
              <AccordionContent className="text-brand-charcoal/70">
                We approach learning as an ongoing opportunity to grow, reflect, and move forward.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="team-content-heading">
        <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          Our people
        </p>
        <h2 id="team-content-heading" className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Meet the people behind the work.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }, (_, index) => (
            <article key={index} className="group flex min-h-[29rem] flex-col overflow-hidden rounded-lg border border-brand-charcoal/15 bg-white p-6 text-brand-charcoal shadow-[0_8px_24px_rgba(41,41,41,0.05)] transition-[border-color,transform,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:border-brand-turquoise hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
              <p className="text-sm font-extrabold text-brand-mint-green">{String(index + 1).padStart(2, "0")}</p>
              <div className="relative mt-4 aspect-square overflow-hidden rounded-md bg-brand-charcoal/5">
                {index === 0 ? (
                  <Image
                    src="/assets/team/image.png"
                    alt="Team member profile portrait"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center p-6 text-center">
                    <span className="text-sm font-semibold text-brand-charcoal/45">Team image pending</span>
                  </div>
                )}
              </div>
              <div className="mt-4 border-t border-brand-charcoal/10 pt-4">
                {index === 0 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Jonnifer C. Mandigma</h3>
                    <p className="mt-2 text-sm font-semibold text-brand-cyan-blue">MSIT · Metro Manila</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-charcoal/75">Information Technology Professional &amp; Academic Instructor</p>
                  </>
                ) : (
                  <p className="text-base font-semibold text-brand-charcoal/60">Profile pending</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
