import Image from "next/image";

export default function MeetTheTeamPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 lg:px-0">
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
            <div key={index} className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-brand-charcoal/20 bg-brand-charcoal/[0.03] p-6 text-center">
              <span className="text-sm font-semibold text-brand-charcoal/45">Team image {String(index + 1).padStart(2, "0")} pending</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
