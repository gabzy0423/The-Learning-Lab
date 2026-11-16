export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 lg:px-0">
      <section aria-labelledby="about-heading">
        <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          About The Learning Lab
        </p>
        <h1 id="about-heading" className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[clamp(3rem,4.7vw,4rem)]">
          Learning designed to move people forward.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-charcoal/70">
          A closer look at the purpose and direction behind The Learning Lab.
        </p>
      </section>
    </main>
  );
}
