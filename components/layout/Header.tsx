"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { programs } from "@/content/programs";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const programsButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const closePrograms = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setProgramsOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (programsOpen) {
        setProgramsOpen(false);
        programsButtonRef.current?.focus();
      }
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setMobileProgramsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", closePrograms);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", closePrograms);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen, programsOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = () => setMobileMenuOpen(true);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProgramsOpen(false);
    menuButtonRef.current?.focus();
  };

  const navClass = (active: boolean) =>
    `relative flex min-h-11 items-center px-1 text-[13px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-blue ${
      active
        ? "text-brand-charcoal after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand-turquoise"
        : "text-brand-charcoal/75 hover:text-brand-charcoal"
    }`;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-white/70 bg-brand-white/75 backdrop-blur-xl transition-[background-color,box-shadow] ${
        scrolled ? "shadow-[0_8px_28px_rgba(41,41,41,0.12)]" : "shadow-[0_4px_18px_rgba(41,41,41,0.05)]"
      }`}
    >
      <div className="mx-auto flex min-h-16 w-full max-w-[74rem] items-center justify-between gap-6 px-7 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="flex min-h-11 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-blue"
          aria-label="The Learning Lab home"
        >
          <Image
            src="/assets/logo/learning_lab_logo.png"
            alt="The Learning Lab"
            width={1700}
            height={624}
            priority
            className="hidden h-11 w-auto md:block"
          />
          <Image
            src="/assets/logo/learning-lab-icon.png"
            alt=""
            width={64}
            height={64}
            priority
            className="h-12 w-12 rounded-xl md:hidden"
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary navigation">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navClass(isActive(pathname, link.href))}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative flex items-center">
            <button
              ref={programsButtonRef}
              type="button"
              className={`${navClass(pathname.startsWith("/programs"))} gap-1`}
              aria-expanded={programsOpen}
              aria-controls="programs-menu"
              onClick={() => setProgramsOpen((open) => !open)}
            >
              Programs
              <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>

            {programsOpen && (
              <div id="programs-menu" className="absolute left-0 top-[calc(100%+0.75rem)] w-72 rounded-2xl border border-brand-charcoal/10 bg-white p-2 shadow-[0_18px_50px_rgba(41,41,41,0.16)]">
                {programs.map((program) => {
                  const href = `/programs/${program.slug}`;
                  const active = pathname === href || pathname.startsWith(`${href}/`);
                  return (
                    <Link
                      key={program.slug}
                      href={href}
                      className={`flex min-h-11 items-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-brand-cyan-blue ${active ? "bg-brand-turquoise/25 text-brand-charcoal" : "text-brand-charcoal/75 hover:bg-brand-white hover:text-brand-charcoal"}`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setProgramsOpen(false)}
                    >
                      {program.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {links.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className={navClass(isActive(pathname, link.href))} aria-current={isActive(pathname, link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}

          <Link href="/contact?interest=program-information" className="ml-5 inline-flex min-h-10 items-center justify-center rounded-xl bg-brand-charcoal px-4 text-xs font-extrabold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue">
            Request Information
          </Link>
        </nav>

        <button ref={menuButtonRef} type="button" className="grid size-11 place-items-center rounded-xl text-brand-charcoal transition-colors hover:bg-brand-turquoise/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue lg:hidden" aria-label="Open navigation menu" onClick={openMobileMenu}>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop fixed inset-0 z-[60] bg-[#1f1f1f]/55" role="presentation" onClick={closeMobileMenu}>
          <aside
            className="mobile-drawer ml-auto flex h-dvh w-[min(88vw,24rem)] flex-col bg-brand-white p-0 text-brand-charcoal shadow-[-18px_0_60px_rgba(41,41,41,0.2)]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
          >
        <div className="flex h-full flex-col overflow-y-auto px-5 pb-6 pt-4">
          <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-4">
            <Link href="/" aria-label="The Learning Lab home" className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-brand-cyan-blue" onClick={closeMobileMenu}>
              <Image src="/assets/logo/learning_lab_logo.png" alt="The Learning Lab" width={1700} height={624} className="h-10 w-auto" />
            </Link>
            <button type="button" className="grid size-11 place-items-center rounded-xl hover:bg-brand-turquoise/20 focus-visible:outline-2 focus-visible:outline-brand-cyan-blue" aria-label="Close navigation menu" onClick={closeMobileMenu}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-5 flex flex-col gap-1" aria-label="Mobile navigation">
            {links.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className={`flex min-h-11 items-center rounded-xl px-4 font-bold ${isActive(pathname, link.href) ? "bg-brand-turquoise/25" : "hover:bg-white"}`} aria-current={isActive(pathname, link.href) ? "page" : undefined} onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}

            <div>
              <div>
                <button type="button" className={`flex min-h-11 w-full items-center justify-between rounded-xl px-4 font-bold ${pathname.startsWith("/programs") ? "bg-brand-turquoise/25" : "hover:bg-white"}`} aria-expanded={mobileProgramsOpen} aria-controls="mobile-programs-menu" onClick={() => setMobileProgramsOpen((open) => !open)}>
                  Programs
                  <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-4 transition-transform ${mobileProgramsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </button>
              </div>
              {mobileProgramsOpen && (
                <div id="mobile-programs-menu" className="ml-4 border-l-2 border-brand-turquoise pl-3">
                  {programs.map((program) => {
                    const href = `/programs/${program.slug}`;
                    const active = pathname === href || pathname.startsWith(`${href}/`);
                    return (
                      <Link key={program.slug} href={href} className={`flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold ${active ? "bg-brand-turquoise/20" : "hover:bg-white"}`} aria-current={active ? "page" : undefined} onClick={closeMobileMenu}>
                        {program.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {links.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className={`flex min-h-11 items-center rounded-xl px-4 font-bold ${isActive(pathname, link.href) ? "bg-brand-turquoise/25" : "hover:bg-white"}`} aria-current={isActive(pathname, link.href) ? "page" : undefined} onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact?interest=program-information" className="mt-auto inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-charcoal px-5 text-center font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-blue" onClick={closeMobileMenu}>
            Request Information
          </Link>
        </div>
          </aside>
        </div>
      )}
    </header>
  );
}
