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
      <main className="relative h-dvh w-full overflow-hidden" style={{ backgroundColor: "#0d0618" }}>
        {/*
          Sky — kept to the upper band so clouds don't dominate the page,
          slightly scaled to hide any top edge.
        */}
        <div
          className="absolute inset-x-0 top-0 z-[1] overflow-hidden pointer-events-none"
          style={{ height: "58%" }}
        >
          <Image
            src="/imagesbm14/landing/Background-fill.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top select-none"
            style={{
              transform: "scale(1.1)",
              transformOrigin: "center top",
            }}
          />
        </div>

        {/* Magenta/purple glow band — bridges the sky into the buildings */}
        <div
          className="absolute inset-x-0 z-[2] pointer-events-none"
          style={{
            top: "40%",
            height: "35%",
            background:
              "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(155,30,120,0.55) 0%, rgba(90,20,90,0.35) 40%, rgba(13,6,24,0) 75%)",
          }}
          aria-hidden
        />

        {/* Soft falloff from sky into the lower night */}
        <div
          className="absolute inset-x-0 z-[1] pointer-events-none"
          style={{
            top: "48%",
            height: "24%",
            background:
              "linear-gradient(to bottom, transparent 0%, #0d0618 100%)",
          }}
          aria-hidden
        />

        {/*
          Buildings — middle ground: wider than the tiny contain version,
          but not full-bleed cover (keeps water tower / sides visible).
        */}
        <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end justify-center pointer-events-none">
          <Image
            src="/imagesbm14/landing/Buildings.webp"
            alt=""
            width={1652}
            height={1080}
            priority
            sizes="100vw"
            className="h-auto object-contain object-bottom select-none"
            style={{ width: "min(92vw, 1500px)" }}
          />
        </div>

        {/* Front ledge — closer foreground buildings, sits in front of + below the mid buildings */}
        <div
          className="absolute inset-x-0 bottom-0 z-[7] w-full pointer-events-none"
          style={{ height: "16%" }}
        >
          <Image
            src="/imagesbm14/landing/Front_Buildings.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom select-none"
          />
        </div>

        {/* Billboard — just above the mid rooftops */}
        <div
          className="absolute left-1/2 z-[4] -translate-x-1/2 pointer-events-none"
          style={{
            bottom: "42%",
            width: "min(68vw, 520px)",
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
                  fontSize: "clamp(1.3rem, 5.2vw, 2.6rem)",
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
                  fontSize: "clamp(0.8rem, 2.5vw, 1.1rem)",
                  color: "#1a1a1a",
                  marginTop: "0.35em",
                }}
              >
                coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Interest Form — on the supports, above the rooftops, nudged up from the billboard */}
        <button
          type="button"
          className="absolute left-1/2 z-[5] -translate-x-1/2 cursor-default"
          style={{
            bottom: "52%",
            fontFamily: "var(--font-roboto-flex), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(12px, 2vw, 15px)",
            color: "#FFFFFF",
            background: "#5A8A4A",
            border: "2px solid #FFFFFF",
            borderRadius: "9999px",
            padding: "10px 26px",
            boxShadow: "0 3px 0 rgba(0,0,0,0.18)",
          }}
        >
          Interest Form
        </button>

          {/* Socials */}
          <div className="absolute bottom-0 left-0 right-0 z-[12] flex justify-center gap-5 sm:gap-6 pb-5 sm:pb-7">
          {[
            {
              href: "mailto:team@boilermake.org",
              label: "Email",
              icon: "fas fa-envelope",
            },
            {
              href: "https://www.instagram.com/boilermake/?hl=en",
              label: "Instagram",
              icon: "fab fa-instagram",
            },
            {
              href: "https://www.linkedin.com/company/boilermake/",
              label: "LinkedIn",
              icon: "fab fa-linkedin",
            },
            {
              href: "https://x.com/BoilerMake1",
              label: "X",
              icon: "fab fa-twitter",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="text-[#FFE958] hover:text-white transition duration-300"
              style={{ fontSize: "1.45em" }}
            >
              <i className={item.icon} />
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
   