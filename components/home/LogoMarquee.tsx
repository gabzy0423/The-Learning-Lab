import Image from "next/image";

const marqueeRows = [
  { src: "/assets/marquees/1.png", width: 1270, height: 122 },
  { src: "/assets/marquees/2.png", width: 1220, height: 97 },
  { src: "/assets/marquees/image.png", width: 1230, height: 85 },
  { src: "/assets/marquees/4.png", width: 1266, height: 103 },
];

export function LogoMarquee() {
  return (
    <section className="bg-brand-white py-3" aria-label="Organization logos">
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
      <div className="mx-auto max-w-[80rem] px-7 sm:px-10 lg:px-0">
        <div className="logo-marquee-viewport overflow-hidden" aria-hidden="true">
          <div className="logo-marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-4 pr-4">
                {marqueeRows.map((row) => (
                  <Image
                    key={row.src}
                    src={row.src}
                    alt=""
                    aria-hidden="true"
                    width={row.width}
                    height={row.height}
                    sizes="100vw"
                    className="h-auto w-[140vw] shrink-0 object-contain sm:w-[min(80rem,calc(100vw-3.5rem))]"
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
