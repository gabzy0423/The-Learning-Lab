import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-bold text-brand-coral">The Learning Lab</p>
      <h1 className="mt-3 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
        Explore learning with The Learning Lab.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-deep-purple/70">
        Browse the five program categories or request more information.
      </p>
      <Link
        href="/programs"
        className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-xl bg-brand-deep-purple px-6 font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
      >
        Explore Programs
      </Link>
    </main>
  );
}
