import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MeetTheTeamPage() {
  return (
    <main className="about-page mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 2xl:px-0">
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
            <h2 id="foundation-heading" className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.5rem] 2xl:text-5xl">
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
        <div className="mt-10 divide-y divide-brand-charcoal/15 border-y border-brand-charcoal/15">
          {Array.from({ length: 9 }, (_, index) => (
            <article key={index} className="grid min-w-0 gap-5 py-8 text-brand-charcoal sm:py-10 lg:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1.4fr)_7rem] lg:items-start lg:gap-6">
              <div className="relative size-24 overflow-hidden bg-brand-charcoal/5">
                {index === 3 ? (
                  <Image
                    src="/assets/team/image.png"
                    alt="Jonnifer C. Mandigma profile portrait"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center p-2 text-center">
                    <span className="text-xs font-semibold text-brand-charcoal/70">Team image pending</span>
                  </div>
                )}
              </div>
              <div className="min-w-0 break-words">
                {index === 0 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Al Bengco</h3>
                    <p className="mt-2 text-sm font-semibold text-brand-cyan-blue">Founder &amp; Managing Director</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-charcoal/75">Learning &amp; Organizational Development Consultant</p>
                  </>
                ) : index === 1 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Donna Mae G. Arididon</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-cyan-blue">Strategic HR &amp; Capability Building Consultant | Corporate Trainer | Workshop Facilitator</p>
                  </>
                ) : index === 2 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Jackie Lynne Briones</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-cyan-blue">Senior Project Manager | Learning Consultant | Marketing Lead</p>
                  </>
                ) : index === 3 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Jonnifer C. Mandigma, MSIT</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-cyan-blue">Information Technology Professional | Academic Instructor | IT Specialist</p>
                  </>
                ) : index === 4 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Sheryll Cordero</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-cyan-blue">Learning &amp; Organizational Development Consultant</p>
                  </>
                ) : index === 5 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Vicky Leguarda</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-cyan-blue">Executive Client Partner | Learning Experience Specialist</p>
                  </>
                ) : index === 6 ? (
                  <>
                    <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight">Ailene L. Urbano (Alu)</h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-cyan-blue">Global Learning &amp; Development Leader | Organizational Capability &amp; Transformation Consultant</p>
                  </>
                ) : (
                  <p className="text-base font-semibold text-brand-charcoal/60">Profile pending</p>
                )}
              </div>
              <div className="min-w-0 text-sm leading-7 text-brand-charcoal/70">
                {index === 0 ? (
                  <p>With over 20 years in learning and organizational development, Al designs practical, engaging experiences that help people apply learning at work.</p>
                ) : index === 1 ? (
                  <p>With 15+ years across HR, training, and people development, Donna creates practical learning experiences that help leaders grow, teams collaborate, and employees build workplace capabilities.</p>
                ) : index === 2 ? (
                  <p>With 10+ years in client service, business development, and project management, Jackie connects client needs with coordinated learning solutions as a Learning Consultant and Marketing Lead.</p>
                ) : index === 3 ? (
                  <p>Brings practical experience in technology, infrastructure, and project management to IT education and the development of future technology professionals.</p>
                ) : null}
              </div>
              <span className="text-xs font-semibold text-brand-charcoal/60 lg:text-right">Profile pending</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
