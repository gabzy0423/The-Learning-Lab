const logos = Array.from({ length: 36 }, (_, index) => ({
  position: `${(index % 9) * 12.5}% ${Math.floor(index / 9) * (100 / 3)}%`,
}));

export function LogoMarquee() {
  return (
    <section className="relative z-20 bg-brand-white py-3 lg:-mt-6 lg:bg-transparent" aria-label="Organization logos">
      <style>{`
        @keyframes logo-marquee { to { transform: translateX(-50%); } }
        .logo-marquee-track { animation: logo-marquee 60s linear infinite; }
        .logo-marquee-viewport { mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); }
        .logo-marquee-viewport:hover .logo-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track { animation: none; }
          .logo-marquee-viewport { overflow-x: auto; }
        }
      `}</style>
      <div className="mx-auto max-w-[80rem] rounded-2xl px-7 sm:px-10 lg:border lg:border-brand-charcoal/10 lg:bg-brand-white lg:px-0 lg:shadow-[0_16px_40px_rgba(41,41,41,0.12)]">
        <div className="logo-marquee-viewport overflow-hidden" aria-hidden="true">
          <div className="logo-marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-4 pr-4">
                {logos.map((logo, index) => (
                  <span
                    key={index}
                    className="shrink-0"
                    style={{
                      width: 138.333,
                      height: 105.5,
                      backgroundImage: "url('/assets/logo/approved-organizations.png')",
                      backgroundSize: "1245px 422px",
                      backgroundPosition: logo.position,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
