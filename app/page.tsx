/**
 * app/page.tsx
 * Home page — BoilerMake XIV coming soon
 * @DylanMiller
 * 7-22-2026
 */

import Image from "next/image";

export default function Home() {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        rel="stylesheet"
      />
      <main
        className="relative w-full overflow-x-hidden"
        style={{ backgroundColor: "#0d0618" }}
      >
        {/* Full-page sky + pink */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/imagesbm14/landing/Background-fill.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top select-none"
          />
        </div>

        {/* Sky breathing room — enough room for full buildings below */}
        <div className="relative z-[1]" style={{ height: "22vh" }} aria-hidden />

        {/* Mid buildings — slight overscale to kill edge gaps in the asset */}
        <div className="relative z-[3] w-full">
          <div
            className="relative z-[3] left-1/2"
            style={{ width: "103%", transform: "translate(-50%, -60px)" }}
          >
            <Image
              src="/imagesbm14/landing/Buildings.webp"
              alt=""
              width={1652}
              height={1080}
              priority
              sizes="100vw"
              className="w-full h-auto select-none block"
            />
          </div>

          {/*
            Billboard sits behind the buildings
          */}
          <div
            className="absolute left-1/2 z-[2] pointer-events-none"
            style={{
              bottom: "32%",
              width: "min(56vw, 560px)",
              transform: "translate(-50%, -60px)",
            }}
          >
            <div className="relative w-full">
              <Image
                src="/imagesbm14/landing/Billboard Before.webp"
                alt=""
                width={905}
                height={578}
                priority
                className="w-full h-auto select-none"
              />
              <div className="absolute left-[5%] right-[5%] top-[8%] h-[42%] flex flex-col items-center justify-center text-center">
                <h1
                  className="w-full"
                  style={{
                    fontFamily: "var(--font-roboto-flex), system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.25rem, 3.8vw, 2.4rem)",
                    lineHeight: 1.05,
                    letterSpacing: "0.04em",
                    color: "#1a1a1a",
                  }}
                >
                  BOILERMAKE XIV
                </h1>
                <p
                  style={{
                    fontFamily: "var(--font-roboto-flex), system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(0.8rem, 2vw, 1.05rem)",
                    color: "#1a1a1a",
                    marginTop: "0.35em",
                  }}
                >
                  coming soon
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="absolute left-1/2 z-[5] cursor-pointer"
            style={{
              bottom: "41%",
              transform: "translate(-50%, -60px)",
              fontFamily: "var(--font-roboto-flex), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(13px, 2.1vw, 16px)",
              color: "#FFFFFF",
              background: "#5A8A4A",
              border: "2px solid #FFFFFF",
              borderRadius: "9999px",
              padding: "12px 30px",
              boxShadow: "0 3px 0 rgba(0,0,0,0.18)",
            }}
          >
            Interest Form
          </button>

          {/* Front ledge — overlaps bottom of mid buildings */}
          <div className="absolute inset-x-0 bottom-0 z-[8] w-full pointer-events-none">
            <Image
              src="/imagesbm14/landing/Front_Buildings.webp"
              alt=""
              width={1280}
              height={203}
              priority
              sizes="100vw"
              className="w-full h-auto select-none block"
            />
          </div>

          {/* Socials — overlay on front buildings */}
          <div className="absolute inset-x-0 bottom-0 z-[12] flex justify-center gap-5 sm:gap-6 pb-4 sm:pb-5">
            {[
              { href: "mailto:team@boilermake.org", label: "Email", icon: "fas fa-envelope" },
              { href: "https://www.instagram.com/boilermake/?hl=en", label: "Instagram", icon: "fab fa-instagram" },
              { href: "https://www.linkedin.com/company/boilermake/", label: "LinkedIn", icon: "fab fa-linkedin" },
              { href: "https://x.com/BoilerMake1", label: "X", icon: "fab fa-twitter" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="text-[#FFE958] hover:text-white transition duration-300"
                style={{ fontSize: "1.45em" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
