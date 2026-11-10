import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-[70vh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
      <div className="max-w-xl">
        <p className="font-bold text-brand-coral">The Learning Lab</p>
        <h1 className="mt-3 max-w-lg text-5xl font-bold tracking-tight sm:text-6xl">
          Learning that moves people forward.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-brand-deep-purple/70">
          Meaningful development experiences for teams, leaders, and
          organizations. Discover practical programs designed to turn new
          knowledge into real-world impact.
        </p>
        <Link
          href="/programs"
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-xl bg-brand-deep-purple px-6 font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
        >
          Explore Programs
        </Link>
      </div>
      <div className="hidden min-h-80 lg:block" aria-hidden="true" />
    </main>
  );
}
