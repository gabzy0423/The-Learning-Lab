import Image from "next/image";

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
        <div aria-hidden="true" className="absolute inset-0 bg-brand-charcoal/70 sm:bg-brand-charcoal/65 lg:bg-brand-charcoal/55" />
        <div className="relative max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold text-brand-white">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          About The Learning Lab
          </p>
          <h1 id="about-heading" className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[clamp(3rem,4.7vw,4rem)]">
          Learning designed to move <span className="text-brand-mint-green">people forward.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-white/85">
          A closer look at the purpose and direction behind The Learning Lab.
          </p>
        </div>
      </section>
    </main>
  );
}
