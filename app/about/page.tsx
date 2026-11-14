export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 lg:px-14">
      <section aria-labelledby="about-heading">
        <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          About The Learning Lab
        </p>
        <h1 id="about-heading" className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Learning designed to move people forward.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-charcoal/70">
          A closer look at the purpose and direction behind The Learning Lab.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="mission-vision-heading">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold text-brand-cyan-blue">Draft direction</p>
            <h2 id="mission-vision-heading" className="mt-2 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              What guides our work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-brand-charcoal/65">
            Proposed Mission and Vision copy for stakeholder review.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal p-7 text-brand-white sm:p-8">
            <p className="text-sm font-bold text-brand-mint-green">Mission</p>
            <p className="mt-5 max-w-xl font-heading text-2xl font-extrabold leading-tight sm:text-3xl">
              To create practical, human-centered learning experiences that help people grow, work better together, and turn insight into action.
            </p>
          </article>
          <article className="rounded-2xl border border-brand-mint-green/30 bg-brand-mint-green p-7 text-brand-charcoal sm:p-8">
            <p className="text-sm font-bold text-brand-charcoal/70">Vision</p>
            <p className="mt-5 max-w-xl font-heading text-2xl font-extrabold leading-tight sm:text-3xl">
              A workplace culture where learning moves people, teams, and organizations forward.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
