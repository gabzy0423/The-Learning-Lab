import Link from "next/link";

export default function HrisSolutionPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-7 py-20 sm:px-10 lg:px-0">
      <section aria-labelledby="hris-heading">
        <p className="flex items-center gap-3 text-sm font-bold text-brand-charcoal">
          <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-mint-green" />
          Proposed solution page
        </p>
        <h1 id="hris-heading" className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Custom Human Resource Information System (HRIS)
        </h1>
        <div className="mt-8 max-w-3xl rounded-2xl border border-dashed border-brand-charcoal/20 bg-brand-charcoal/[0.03] p-7 sm:p-8">
          <p className="text-base leading-relaxed text-brand-charcoal/70">
            This solution is coming soon. Ask us about the direction, or explore our learning programs while the offering is being finalized.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-brand-charcoal px-4 py-3 text-sm font-bold text-brand-white transition-colors hover:bg-brand-charcoal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue">
              Ask about this solution
            </Link>
            <Link href="/programs" className="rounded-xl border border-brand-charcoal/15 px-4 py-3 text-sm font-bold text-brand-charcoal transition-colors hover:border-brand-turquoise hover:text-brand-cyan-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue">
              Return to learning programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
