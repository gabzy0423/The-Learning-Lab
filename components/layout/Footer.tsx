import Image from "next/image";
import Link from "next/link";
import { programs } from "@/content/programs";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-white">
      <div className="mx-auto grid max-w-[74rem] gap-10 px-7 py-12 sm:px-10 lg:grid-cols-[1.25fr_0.8fr_1.15fr_1.25fr] lg:gap-0 lg:px-14 lg:py-14">
        <div className="lg:pr-10">
          <Link href="/" aria-label="The Learning Lab home" className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-brand-cyan-blue">
            <Image src="/assets/logo/learning-lab-logo-transparent.png" alt="The Learning Lab" width={360} height={132} className="h-12 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-white/70">
            Practical learning experiences for teams, leaders, and organizations.
          </p>
          <div className="mt-5 flex items-center gap-3" aria-label="Social links coming soon">
            {[
              ["facebook.svg", "Facebook"],
              ["gmail.svg", "Email"],
              ["linkedin.svg", "LinkedIn"],
            ].map(([icon, label]) => (
              <span key={icon} title={`${label} link coming soon`} className="grid size-9 place-items-center rounded-full border border-brand-white/15 text-brand-white/75">
                <Image src={`/assets/icons/${icon}`} alt="" width={17} height={17} className="opacity-75" aria-hidden="true" />
                <span className="sr-only">{label} link coming soon</span>
              </span>
            ))}
          </div>
        </div>
        <nav className="lg:border-l lg:border-brand-white/15 lg:px-10" aria-label="Footer navigation">
          <p className="text-sm font-bold text-brand-mint-green">Explore</p>
          <ul className="mt-4 grid gap-3 text-sm text-brand-white/75">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-white focus-visible:outline-2 focus-visible:outline-brand-cyan-blue">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="lg:border-l lg:border-brand-white/15 lg:px-10" aria-label="Program categories">
          <p className="text-sm font-bold text-brand-mint-green">Programs</p>
          <ul className="mt-4 grid gap-3 text-sm text-brand-white/75">
            {programs.map((program) => (
              <li key={program.slug}>
                <Link href={`/programs/${program.slug}`} className="transition-colors hover:text-brand-white focus-visible:outline-2 focus-visible:outline-brand-cyan-blue">
                  {program.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:border-l lg:border-brand-white/15 lg:pl-10">
          <h2 className="max-w-xs font-heading text-2xl font-extrabold leading-tight sm:text-3xl">Let’s talk about your learning needs.</h2>
          <Link href="/contact?interest=consultation" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-mint-green px-5 text-sm font-bold text-brand-charcoal transition-colors hover:bg-brand-mint-green/90 focus-visible:outline-2 focus-visible:outline-brand-cyan-blue">
            Request a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-brand-white/15">
        <div className="mx-auto max-w-[74rem] px-7 py-5 text-xs text-brand-white/55 sm:px-10 lg:px-14">
          © The Learning Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
