import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-brand-deep-purple text-white">
      <div className="mx-auto grid min-h-[70vh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-base font-bold text-brand-mint">The Learning Lab</p>
          <h1 className="mt-3 max-w-xl text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Learning that <span className="text-brand-mint">moves people</span>{" "}
            forward.
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-9 text-white/80">
            Meaningful development experiences for teams, leaders, and
            organizations. Discover practical programs designed to turn new
            knowledge into real-world impact.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-mint px-6 font-extrabold text-brand-deep-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact?interest=consultation"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 font-extrabold text-brand-deep-purple transition-colors hover:bg-brand-off-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
        <div className="order-2 flex w-full justify-center lg:order-none">
          <div
            className="group relative w-full max-w-[34rem] rounded-[46%_54%_50%_50%] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-coral"
            role="img"
            aria-label="A diverse group of professionals collaborating during a workshop"
            tabIndex={0}
          >
            <Image
              src="/assets/hero/learning-lab-hero-reference.jpg"
              alt=""
              aria-hidden="true"
              width={836}
              height={720}
              priority
              className="hero-image-interaction block aspect-square h-auto w-full rounded-[46%_54%_50%_50%] border-[12px] border-white/10 object-cover object-center shadow-[0_28px_80px_rgba(21,4,46,0.47)] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015] group-focus-within:-translate-y-1 group-focus-within:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none"
            />
            <span className="mt-4 inline-flex items-center rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-brand-deep-purple shadow-[0_15px_40px_rgba(19,6,39,0.27)] lg:absolute lg:right-[-1rem] lg:top-8 lg:mt-0">
              Learn with purpose
            </span>
            <span className="mt-2 inline-flex items-center rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-brand-deep-purple shadow-[0_15px_40px_rgba(19,6,39,0.27)] lg:absolute lg:bottom-8 lg:left-[-1.5rem] lg:mt-0">
              Develop with confidence
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
