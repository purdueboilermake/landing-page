/**
 * app/page.tsx
 * Home page — BoilerMake XIV
 */

import Image from "next/image";
import PastPage from "@/app/past/page";
import ScrollArrow from "@/app/components/ScrollArrow";

const INTEREST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeExKZR9uEza6FShsE8-WIw1jtwXVZVbb77927ZJ0BLhHp3jQ/viewform";

export default function Home() {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        rel="stylesheet"
      />

      {/* Header — Logo only (no sections navbar) */}
      <header
        className="w-full fixed top-0 z-50 transition-all duration-200 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)",
        }}
      >
        <div className="relative flex items-center h-16 px-6 sm:px-8">
          <a
            href="/"
            className="pointer-events-auto absolute left-6 top-4 hover:scale-105 transition"
            aria-label="BoilerMake XIV Home"
          >
            <Image
              src="/imagesbm14/logo_bm14_hammers_only.svg"
              alt="BoilerMake Logo"
              width={64}
              height={56}
              priority
              className="w-10 sm:w-12 md:w-14 h-auto"
            />
          </a>
        </div>
      </header>

      {/* Hero Section Responsiveness Overrides */}
      <style>{`
        #hero {
          --bb-w-active: var(--bb-w-mobile);
          --bb-y-active: var(--bb-y-mobile);
          --btn-y-active: var(--btn-y-mobile);
        }
        @media (min-width: 700px) and (max-width: 1023px) {
          #hero {
            --bb-w-active: var(--bb-w-tablet);
            --bb-y-active: var(--bb-y-tablet);
            --btn-y-active: var(--btn-y-tablet);
          }
        }
        @media (max-width: 699px) {
          #hero {
            height: var(--hero-h-mobile, clamp(560px, 92svh, 750px)) !important;
            min-height: 0 !important;
          }
        }
        @media (min-width: 700px) and (max-width: 1023px) {
          #hero {
            height: var(--hero-h-tablet, clamp(750px, 95svh, 1050px)) !important;
            min-height: 0 !important;
          }
        }
      `}</style>

      <main
        className="relative w-full overflow-x-hidden"
        style={{ backgroundColor: "#0d0618" }}
      >
        {/* Hero Section — BoilerMake XIV skyline scene */}
        <section
          id="hero"
          className="hero-section relative w-full overflow-hidden"
          style={
            {
              // Hero Section Height (controls how tall the sky is)
              height: "140vh",
              backgroundColor: "#0d0618",

              // --- Hero Tuning Knobs (Edit billboard & layout here) ---
              // Desktop Anchored Billboard (lg screens, >= 1024px):
              "--bb-w": "55%",          // Desktop width
              "--bb-y": "30%",          // Height above skyline baseline
              "--btn-y": "55%",         // Button position on the sign

              // Tablet Floating Billboard (700px - 1023px, iPad Mini, iPad Pro, iPad Air):
              "--bb-w-tablet": "85%",              // Tablet width (fills tablet nicely)
              "--bb-y-tablet": "calc(52% + 14vh)", // Height above baseline with viewport lift to stay centered
              "--btn-y-tablet": "108%",            // Button position on floating sign

              // Mobile Floating Billboard (phones, < 700px):
              "--bb-w-mobile": "95%",              // Mobile width
              "--bb-y-mobile": "calc(60% + 18vh)", // Height above baseline with viewport lift (lifts off bottom!)
              "--btn-y-mobile": "110%",            // Button position on floating sign

              // Responsive Hero Heights:
              "--hero-h-mobile": "clamp(560px, 92svh, 750px)",
              "--hero-h-tablet": "clamp(750px, 95svh, 1050px)",

              "--ledge-h": "clamp(52px, 11vw, 190px)",

              "--scene-drop": "0%",

              // Sky & Clouds Overscale & Offsets (bleed border whitespace off-screen):
              "--clouds-w": "calc(100% + 150px)",    // Width: 100% + extra bleed
              "--clouds-top": "-50px",              // Top offset: pulls top edge up past screen
              "--gradient-w": "calc(100% + 80px)",  // Width: bleed gradient past left & right screen edges
            } as React.CSSProperties
          }
        >
          {/* Sky — base gradient and clouds/stars overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
            aria-hidden
          >
            {/* Base Gradient Layer — centered and overscaled to eliminate side border whitespace */}
            <div
              className="absolute left-1/2 -translate-x-1/2 inset-y-0 pointer-events-none"
              style={{
                width: "var(--gradient-w, calc(100% + 80px))",
              }}
            >
              <Image
                src="/imagesbm14/landing/Gradient.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                draggable={false}
                className="select-none object-cover object-bottom opacity-50"
                style={{
                  objectPosition: "center 200%",
                }}
              />
            </div>

            {/* Clouds & Stars Layer — centered and overscaled to eliminate border whitespace */}
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                top: "var(--clouds-top, -50px)",
                width: "var(--clouds-w, calc(100% + 150px))",
                maxWidth: "none",
              }}
            >
              <Image
                src="/imagesbm14/landing/Clouds Stars.webp"
                alt=""
                width={3000}
                height={1110}
                priority
                sizes="100vw"
                draggable={false}
                className="w-full h-auto select-none"
              />
            </div>
          </div>

          {/* SKYLINE — full-bleed, exact aspect ratio, bottom-anchored */}
          <div
            className="pointer-events-none absolute inset-x-0 z-[3] w-full"
            style={{
              aspectRatio: "1652 / 1080",
              bottom: "calc(-1 * var(--scene-drop))",
            }}
          >
            {/* Desktop: Anchored Billboard with scaffolding legs (lg screens only, >= 1024px) */}
            <div
              className="hidden lg:block absolute left-1/2 z-[1] -translate-x-1/2"
              style={{
                bottom: "var(--bb-y)",
                width: "var(--bb-w)",
                containerType: "inline-size",
              }}
            >
              <Image
                src="/imagesbm14/landing/Billboard.webp"
                alt="BoilerMake XIV"
                width={2000}
                height={1277}
                priority
                draggable={false}
                className="h-auto w-full select-none"
              />

              {/* Sign copy — date above the painted panel */}
              <div className="absolute inset-x-[6%] bottom-full flex flex-col items-center justify-center text-center">
                <h2
                  style={{
                    fontFamily: "var(--font-code-pro)",
                    fontWeight: 400,
                    fontSize: "3.4cqi",
                    letterSpacing: "0.1em",
                    color: "#E8E4DA",
                    marginBottom: "0.5em",
                  }}
                >
                  January 22nd - 24th, 2027
                </h2>
              </div>
            </div>

            {/* Mobile & Tablet: Floating Billboard (hidden on desktop lg) */}
            <div
              className="lg:hidden absolute left-1/2 z-[3] -translate-x-1/2"
              style={{
                bottom: "var(--bb-y-active)",
                width: "var(--bb-w-active)",
                containerType: "inline-size",
              }}
            >
              <div className="relative w-full" style={{ aspectRatio: "2000 / 654" }}>
                <Image
                  src="/imagesbm14/landing/Billboard Floating.webp"
                  alt="BoilerMake XIV"
                  width={2000}
                  height={654}
                  priority
                  draggable={false}
                  className="h-auto w-full select-none"
                />

                {/* Sign copy — date above mobile billboard */}
                <div className="absolute inset-x-[6%] bottom-full flex flex-col items-center justify-center text-center pb-2">
                  <h2
                    style={{
                      fontFamily: "var(--font-code-pro)",
                      fontWeight: 400,
                      fontSize: "4.5cqi",
                      letterSpacing: "0.1em",
                      color: "#E8E4DA",
                      marginBottom: "0.5em",
                    }}
                  >
                    January 22nd - 24th, 2027
                  </h2>
                </div>

                {/* Mobile & Tablet Button centered on floating board */}
                <div
                  className="absolute inset-x-[6%] flex justify-center"
                  style={{ top: "var(--btn-y-active)" }}
                >
                  <a
                    href={INTEREST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto whitespace-nowrap transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE958] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    style={{
                      fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(16px, 5.5cqi, 26px)",
                      letterSpacing: "0.08em",
                      lineHeight: 1,
                      color: "#FFFFFF",
                      background: "#5A8A4A",
                      border: "4px solid #FFFFFF",
                      borderRadius: "9999px",
                      padding: "0.65em 1.8em",
                      boxShadow: "0 4px 0 rgba(0,0,0,0.35)",
                    }}
                  >
                    Interest Form
                  </a>
                </div>
              </div>
            </div>

            {/* Buildings — sit on top of the sign */}
            <div
              className="absolute inset-0 z-[2]"
              style={{
                transform: "scaleX(1.04) skewX(0deg)",
                transformOrigin: "center bottom",
                willChange: "transform",
              }}
            >
              <Image
                src="/imagesbm14/landing/Buildings.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                draggable={false}
                className="select-none object-cover object-bottom"
              />
            </div>

            {/* Desktop Button layer — stacked above the buildings for lg desktop */}
            <div
              className="hidden lg:block absolute left-1/2 z-[3] -translate-x-1/2"
              style={{
                bottom: "var(--bb-y)",
                width: "var(--bb-w)",
                aspectRatio: "2000 / 1277",
                containerType: "inline-size",
              }}
            >
              <div
                className="absolute inset-x-[6%] flex justify-center"
                style={{ top: "var(--btn-y)" }}
              >
                <a
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto whitespace-nowrap transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE958] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  style={{
                    fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 4.4cqi, 32px)",
                    letterSpacing: "0.08em",
                    lineHeight: 1,
                    color: "#FFFFFF",
                    background: "#5A8A4A",
                    border: "4.5px solid #FFFFFF",
                    borderRadius: "9999px",
                    padding: "0.72em 2.1em",
                    boxShadow: "0 5px 0 rgba(0,0,0,0.35)",
                  }}
                >
                  Interest Form
                </a>
              </div>
            </div>
          </div>

          {/* Foreground ledge */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[7] w-full"
            style={{
              height: "var(--ledge-h)",
              bottom: "calc(-1 * var(--scene-drop))",
            }}
            aria-hidden
          >
            <Image
              src="/imagesbm14/landing/Front_Buildings.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              draggable={false}
              className="select-none object-cover object-bottom"
            />
          </div>
        </section>

        <ScrollArrow />
      </main>

      {/* Transition overlay between landing and past page */}
      <div className="relative z-[20] h-0 pointer-events-none">
        <img
          src="/imagesbm14/about/Transition.webp"
          alt=""
          className="absolute left-0 top-0 block w-full h-auto"
          style={{
            transform: "translateY(-62%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        />
      </div>

      <PastPage />
    </>
  );
}
