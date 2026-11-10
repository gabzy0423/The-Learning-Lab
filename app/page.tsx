import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-[70vh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-base font-bold text-brand-coral">The Learning Lab</p>
        <h1 className="mt-3 max-w-xl text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          Learning that moves people forward.
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-9 text-brand-deep-purple/70">
          Meaningful development experiences for teams, leaders, and
          organizations. Discover practical programs designed to turn new
          knowledge into real-world impact.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/programs"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-deep-purple px-6 font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact?interest=consultation"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-brand-deep-purple px-6 font-extrabold text-brand-deep-purple transition-colors hover:bg-brand-deep-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
      <div className="hidden min-h-80 lg:block" aria-hidden="true" />
    </main>
  );
}
