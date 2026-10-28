"use client";

import React, { useEffect, useRef, useState } from "react";

import Header from "@/app/2027/components/HeaderBM14";

import AboutSection from "@/app/2027/components/AboutSectionBM14";

import FAQSection from "@/app/2027/components/FAQSectionBM14";

import JudgesSection from "@/app/2027/components/JudgesSectionBM14";

import ApplyButton from "@/app/2027/components/ApplyButtonBM14";

import ActivityPreview from "@/app/2027/components/ActivityPreviewBM14";

import { TypingProvider } from "@/context/TypingContext";

import ScheduleSection from "@/app/2027/components/ScheduleSectionBM14";

import SponsorCard from "@/app/2027/components/SponsorCardBM14";

import Image from "next/image";

// import SprayPaintOverlay from "@/app/2027/components/SprayPaintOverlay";



/**

 * The Rough Tex backdrop is painted once, by the connector band that starts at

 * 570vh. The footer's Transition.png is opaque and overlaps upwards from

 * 1028vh - 25vw, so it would otherwise cut the texture off well before the

 * purple actually begins. A second element re-draws the same texture on top of

 * that graphic, which only lines up if both use an identical, centred

 * background size and the overlay shifts the image up by the distance between

 * the band's top and its own (458vh - 25vw).

 */

const TEX_SIZE = "100vw auto";



interface DecorImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {

  label?: string;

}



function DecorImage({ label, style, className, ...props }: DecorImageProps) {

  const [broken, setBroken] = useState(false);



  if (broken) {

    return (

      <div

        className={className}

        style={{

          ...style,

          pointerEvents: "none",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textAlign: "center",

          padding: "0.5rem",

          border: "2px dashed rgba(255, 255, 255, 0.35)",

          borderRadius: "12px",

          background: "rgba(255, 255, 255, 0.04)",

          color: "rgba(255, 255, 255, 0.5)",

          fontFamily: "var(--font-code-pro, sans-serif)",

          fontSize: "0.7rem",

          fontWeight: 600,

          textTransform: "uppercase",

          letterSpacing: "0.08em",

        }}

      >

        {label}

      </div>

    );

  }



  return (

    <img

      {...props}

      style={{ ...style, pointerEvents: 'none' }}

      className={className}

      onError={() => setBroken(true)}

    />

  );

}



const silverSponsors = [

  {

    name: "Salesforce",

    logo: "/assets/sponsors/salesforce.png",

    url: "https://www.salesforce.com/",

  },

];



const bronzeSponsors = [

  {

    name: "Keytos",

    logo: "/assets/sponsors/keytos.svg",

    url: "https://www.keytos.io/",

  },

  {

    name: "Caterpillar",

    logo: "/assets/sponsors/cat.png",

    url: "https://www.caterpillar.com/",

  },

  {

    name: "Lovable",

    logo: "/assets/sponsors/lovable.png",

    url: "https://lovable.dev/",

  },

  {

    name: "Purdue RCAC",

    logo: "/assets/sponsors/RCAC_Logo.png",

    url: "https://www.rcac.purdue.edu/",

    logoScale: 1.28,

    logoOffsetY: 10,

  },

  {

    name: "CS Department",

    logo: "/assets/sponsors/PurdueCS.svg",

    url: "https://www.cs.purdue.edu/",

    logoScale: 1.28,

    logoOffsetY: 10,

  },

  {

    name: "Maritime",

    logo: "/assets/sponsors/maritime.png",

    url: "https://maritime.sh/",

  },

];




{/*The schedule information*/ }

const activities = [

  {

    title: "Opening Ceremony",

    startDate: "2026-01-23T19:00:00",

    endDate: "2026-01-23T21:00:00",

    location: "Frances A. Cordova Recreational Sports Center",

    description: "Introduction to BoilerMake, event logistics, and ice breaker activities!",

  },

  {

    title: "Arcade",

    startDate: "2026-01-24T21:00:00",

    endDate: "2026-01-24T23:00:00",

    location: "Frances A. Cordova Recreational Sports Center",

    description: "Hackers can take a break and enjoy some arcade games, eat some snacks, socialize, and win prizes!",

  },

  {

    title: "Hacking Ends",

    startDate: "2026-01-25T09:00:00",

    location: "Frances A. Cordova Recreational Sports Center",

    description: "Hackers finish up their projects and submit online for judging before the deadline. They have time to prepare presentations and demos for the judges.",

  },

  {

    title: "Judging",

    startDate: "2026-01-25T10:00:00",

    endDate: "2026-01-25T11:00:00",

    location: "Frances A. Cordova Recreational Sports Center",

    description: "A first round of judging where hackers are judged based on their submitted projects by our panel of judges.",

  },

  {

    title: "Shark Tank",

    startDate: "2026-01-25T13:30:00",

    endDate: "2026-01-25T15:30:00",

    location: "Frances A. Cordova Recreational Sports Center",

    description: "The finalists present their projects to a panel of judges in a Shark Tank-style format for final evaluation. Awards and prizes are given out to the winners.",

  },

];



const questions = [

  {

    question: "What is a Hackathon?",

    answer:

      "The BoilerMake hackathon is a 36-hour event where you can learn, build, and share a cool technology-based project! On top of your project work, you'll get free food, swag, and opportunities to win some of our $4,000 in prizes offered! We offer numerous events and activities as well to keep the fun going, and provide a platform to network with companies in the tech sector and other like-minded individuals from numerous backgrounds.",

  },

  {

    question:

      "Who can attend and how much experience do I need to participate?",

    answer:

      "Any undergraduate university student age 18 or older from any school or major can attend BoilerMake! No experience or technical background is required to participate, and we have mentors on site to assist with any technical needs. We also have unique and enriching experiences available to more skilled hackers, with special technologies and tech talks offered.",

  },

  {

    question: "How does the application process work?",

    answer:

      "Once applications open, try to submit as soon as possible, make sure to write thoughtful responses in the application, and provide a good resume you want recruiters to see — these are sent to tech companies! Once your application is submitted, you can add your team members through the Teams portal — applicants in a Team will be preferred. After you are accepted through one of our acceptance rounds, you are REQUIRED to RSVP to attend the event. If you are Waitlisted, you are REQUIRED to RSVP to the waitlist to have a good chance at getting a spot. More details will be sent out based on your situation.",

  },

  {

    question: "What projects can I make at BoilerMake?",

    answer:

      "You can build any project you want at BoilerMake! We have no strict project requirements, other than that it was built at the hackathon itself. Every year, we see a wide variety of technologies used and various applications for projects, and even see hardware-based projects — the possibilities are endless!",

  },

  {

    question: "Does BoilerMake offer travel reimbursements?",

    answer:

      "Unfortunately, BoilerMake is not able to offer travel reimbursements at this time to those attending from other universities. We do provide all meals while you are at the hackathon, and offer parking to those who need it. The BoilerMake hackathon venue will be open during the entire duration of the hackathon, and there are many nearby locations which can offer housing over the course of the two nights.",

  },

];





function App() {

  const [activeEventId, setActiveEventId] = useState<number>(0);

  const [isLoaded, setIsLoaded] = useState(false);

  const [isMobile, setIsMobile] = useState(false);



  // Mobile sections may contain animated accordion panels or positioned cards.
  // Reserve space based on their actual visible bounds, including the final FAQ.
  useEffect(() => {
    if (!isMobile) return;

    const layout = document.querySelector<HTMLElement>(".bm-layout");
    if (!layout) return;
    const ids = ["about", "schedule", "faq"] as const;
    const baseSpacing = { about: 64, schedule: 38, faq: 65 };
    let frame = 0;
    let animationFrame = 0;
    let animationStart = 0;

    const update = () => {
      frame = 0;
      for (const id of ids) {
        const section = layout.querySelector<HTMLElement>(`#${id}`);
        if (!section) continue;
        const sectionRect = section.getBoundingClientRect();
        let contentBottom = sectionRect.bottom;

        // FAQ panels can expand inside nested divs (not just paragraphs), so
        // inspect every laid-out descendant instead of only text/button tags.
        section.querySelectorAll<HTMLElement>("*").forEach((el) => {
          if (el.closest("[aria-hidden='true']")) return;
          const style = getComputedStyle(el);
          if (style.display === "none" || style.visibility === "hidden") return;
          if (el.matches("img, svg, canvas, video") || style.position === "fixed") return;
          const rect = el.getBoundingClientRect();
          if (rect.width < 1 || rect.height < 1) return;
          contentBottom = Math.max(contentBottom, rect.bottom);
        });

        const extra = Math.max(0, Math.ceil(contentBottom - sectionRect.bottom));
        const margin = `${baseSpacing[id] + extra}px`;
        if (section.style.marginBottom !== margin) section.style.marginBottom = margin;
      }

      // One continuous texture surface across FAQ, Sponsors, and Footer (Judges stays purple above FAQ).
      // Measuring these edges also keeps it aligned when FAQ panels expand.
      const faqSection = layout.querySelector<HTMLElement>("#faq");
      const texture = layout.querySelector<HTMLElement>(".mobile-rough-continuous");
      if (faqSection && texture) {
        const layoutTop = layout.getBoundingClientRect().top;
        // Tape.png sits at top: -30vw above #faq; start the dark backdrop right at the caution tape
        const tapeOffset = Math.round(window.innerWidth * 0.28);
        const start = Math.max(0, Math.round(faqSection.getBoundingClientRect().top - layoutTop - tapeOffset));
        const top = `${start}px`;
        if (texture.style.top !== top) texture.style.top = top;
      }
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const trackAnimation = () => {
      scheduleUpdate();
      if (performance.now() - animationStart < 900) {
        animationFrame = requestAnimationFrame(trackAnimation);
      } else {
        animationFrame = 0;
      }
    };
    const onFaqInteraction = () => {
      animationStart = performance.now();
      if (!animationFrame) animationFrame = requestAnimationFrame(trackAnimation);
    };
    const observer = new ResizeObserver(scheduleUpdate);
    const mutation = new MutationObserver(scheduleUpdate);
    layout.querySelectorAll("#about, #schedule, #faq, #judges, #sponsors, #footer, #about *, #schedule *, #faq *")
      .forEach((el) => observer.observe(el));
    mutation.observe(layout, { subtree: true, childList: true, attributes: true, attributeFilter: ["aria-expanded", "class"] });
    const faq = layout.querySelector("#faq");
    faq?.addEventListener("click", onFaqInteraction);
    faq?.addEventListener("transitionend", scheduleUpdate);
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
      mutation.disconnect();
      faq?.removeEventListener("click", onFaqInteraction);
      faq?.removeEventListener("transitionend", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      ids.forEach((id) => {
        const section = layout.querySelector<HTMLElement>(`#${id}`);
        if (section) section.style.marginBottom = "";
      });
    };
  }, [isMobile]);

  // --- Buildings scroll wobble (commented out for now) ---

  // const buildingsRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let lastScrollY = window.scrollY;
  //   let velocity = 0;
  //   let skew = 0;
  //   let rafId: number;
  //
  //   const MAX_SKEW = 2.5;   // max degrees
  //   const STIFFNESS = 0.08; // lower = bouncier
  //   const DAMPING = 0.75;   // velocity decay per frame
  //
  //   const spring = () => {
  //     skew += (0 - skew) * STIFFNESS + velocity * 0.012;
  //     velocity *= DAMPING;
  //     skew = Math.max(-MAX_SKEW, Math.min(MAX_SKEW, skew));
  //
  //     if (buildingsRef.current) {
  //       buildingsRef.current.style.transform =
  //         `scaleX(1.04) skewX(${skew.toFixed(3)}deg)`;
  //     }
  //
  //     if (Math.abs(skew) > 0.01 || Math.abs(velocity) > 0.01) {
  //       rafId = requestAnimationFrame(spring);
  //     } else if (buildingsRef.current) {
  //       buildingsRef.current.style.transform = "scaleX(1.04) skewX(0deg)";
  //     }
  //   };
  //
  //   const onScroll = () => {
  //     const currentY = window.scrollY;
  //     velocity = (currentY - lastScrollY) * 0.6;
  //     lastScrollY = currentY;
  //     cancelAnimationFrame(rafId);
  //     rafId = requestAnimationFrame(spring);
  //   };
  //
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //     cancelAnimationFrame(rafId);
  //   };
  // }, []);

  // --- end Buildings wobble ---



  useEffect(() => {

    setIsLoaded(true);



    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };



    checkMobile();

    window.addEventListener("resize", checkMobile);



    return () => {

      window.removeEventListener("resize", checkMobile);

    };

  }, []);



  useEffect(() => {

    // Run after hydration + next paint

    const nudge = () => {

      // Dispatch synthetic scroll/resize to observers

      window.dispatchEvent(new Event("resize"));

      window.dispatchEvent(new Event("scroll"));

      // Tiny scroll jiggle to guarantee intersection recalculation

      const x = window.scrollX,

        y = window.scrollY;

      window.scrollTo(x, y + 1);

      window.scrollTo(x, y);

    };



    // Initial nudge

    const t1 = setTimeout(nudge, 0);

    // Nudge again after images/styles settle

    const t2 = setTimeout(nudge, 250);



    // Also nudge when page becomes visible (reloads from bfcache, etc.)

    const onVis = () => {

      if (document.visibilityState === "visible") {

        nudge();

      }

    };

    document.addEventListener("visibilitychange", onVis);



    return () => {

      clearTimeout(t1);

      clearTimeout(t2);

      document.removeEventListener("visibilitychange", onVis);

    };

  }, []);



  const handleEventClick = (id: number) => {

    if (id === activeEventId) {

      setActiveEventId(0);

    } else {

      setActiveEventId(id);

    }

  };





  return (

    <TypingProvider>

      <>

        <link

          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"

          rel="stylesheet"

        />

        <div className="App font-dosis relative" style={{ background: " #3B344B ", minHeight: "100vh" }}>



          {/* Header floats over the scene so the sky reaches the true top */}

          <div className="absolute inset-x-0 top-0 z-[200]">

            <Header />

          </div>



          {/* Spray paint cursor trail — activates when scrolled past hero (commented out for now) */}

          {/* <SprayPaintOverlay /> */}




          {/* Mobile & Tablet layout: content flows naturally with tailored hero sizing */}
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
          @media (max-width: 1023px) {
            .bm-layout {
              display: flex !important;
              flex-direction: column !important;
              height: auto !important;
              overflow: visible !important;
              position: relative;
              background: #3B344B;
            }
            .bm-layout > .rough-texture-band { display: none !important; }
            .bm-layout > .mobile-rough-continuous {
              display: block !important;
              background-color: #292526;
              background-image: url('/imagesbm14/faq/Rough%20Tex.png');
              background-position: center top;
              background-size: 100vw auto;
              background-repeat: repeat-y;
              bottom: 0 !important;
              height: auto !important;
            }
            .bm-layout > section {
              position: relative !important;
              top: auto !important;
              bottom: auto !important;
              flex-shrink: 0;
            }
            .bm-layout > #hero-about-gradient {
              position: relative !important;
              top: auto !important;
              margin-top: -120px !important;
              margin-bottom: -80px !important;
              height: 220px !important;
              z-index: 15 !important;
            }
            /* Mobile & Tablet spacing between Hero and About (Adjust gap here) */
            .bm-layout > #about {
              width: 100% !important;
              padding: 100px 7vw 24px !important;
              margin-top: 0px !important;
              margin-bottom: 64px;
              background: #3B344B;
              z-index: 8;
            }
            .bm-layout > #schedule {
              min-height: 0 !important;
              height: auto !important;
              padding: 28px 0 32px !important;
              margin-bottom: 38px;
              z-index: 7;
            }
            .bm-layout > #faq {
              min-height: auto !important;
              height: auto !important;
              display: block !important;
              visibility: visible !important;
              padding: 20px 0 5px;
              margin-bottom: 24px;
              z-index: 6;
              overflow: visible !important;
              background: transparent;
            }
            .bm-layout > #judges {
              min-height: 0 !important;
              height: auto !important;
              padding: 16px 24px 32px;
              background-color: #3B344B;
              z-index: 5;
            }
            .bm-layout > #sponsors {
              min-height: 380px !important;
              height: auto !important;
              display: flex !important;
              visibility: visible !important;
              padding: 0 !important;
              margin-bottom: 0px !important;
              z-index: 4;
              overflow: visible !important;
              background: transparent;
            }
            .bm-layout > #sponsors > div {
              gap: 8px !important;
              padding: 16px 18px 28px !important;
            }
            .bm-layout > #sponsors h1, .bm-layout > #sponsors p { margin: 0; }
            /* Transparent footer letting the underlying backdrop texture show through */
            .bm-layout > #footer {
              height: auto !important;
              min-height: auto !important;
              margin-top: -2px !important;
              padding-top: 36px !important;
              padding-bottom: 32px !important;
              background-color: transparent !important;
              background-image: none !important;
            }
          }
          @media (max-width: 699px) {
            .bm-layout > #hero {
              height: var(--hero-h-mobile, clamp(560px, 92svh, 750px)) !important;
              min-height: 0 !important;
            }
          }
          @media (min-width: 700px) and (max-width: 1023px) {
            .bm-layout > #hero {
              height: var(--hero-h-tablet, clamp(750px, 95svh, 1050px)) !important;
              min-height: 0 !important;
            }
          }
        `}</style>

          {/* Main content container with CSS Grid layout */}

          <main

            className="w-full main-content bm-layout"

            style={{ height: `calc(${isMobile ? "1000vh" : "max(845vh, 7150px) + clamp(860px, 80vh, 980px)"} + 220px)`, overflow: "hidden" }}

          >

            {/* Seamless connector: one continuous Rough Tex backdrop running

                from just before FAQ all the way to the top of the

                footer, covering Sponsors and the empty band between

                them. FAQ and Sponsors are deliberately transparent so this is

                the only thing painting that backdrop — when they each painted

                their own, the texture stopped dead at the FAQ section's bottom

                edge and left a hard line. The gradient on top fades the purple

                page above into the texture. Sits behind all section content. */}

            <div

              aria-hidden

              className="absolute inset-x-0 pointer-events-none z-0 rough-texture-band"

              style={{

                top: "700vh",

                height: "485vh",

                backgroundColor: "#292526",

                backgroundImage:

                  "linear-gradient(to bottom, #3B344B 0%, rgba(41,37,38,0) 100%), url('/imagesbm14/faq/Rough%20Tex.png')",

                backgroundRepeat: "no-repeat, no-repeat",

                backgroundSize: `100% 12vh, ${TEX_SIZE}`,

                backgroundPosition: "center top, center top",

              }}

            />



            {/* Mobile/Tablet: a single background surface avoids texture seams between sections. */}
            <div
              aria-hidden
              className="mobile-rough-continuous absolute inset-x-0 pointer-events-none z-0 hidden"
              style={{ top: 0, bottom: 0 }}
            />

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
                  "--clouds-w": "calc(100% + 150px)",    // Width: 100% + extra bleed (e.g. "calc(100% + 80px)" or "108%")
                  "--clouds-top": "-50px",              // Top offset: negative value pulls top edge up past screen
                  "--gradient-w": "calc(100% + 80px)",  // Width: bleed gradient past left & right screen edges
                } as React.CSSProperties
              }
            >

              {/* Sky — base gradient (anchored to bottom) and clouds/stars overlay */}
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
                      objectPosition: "center 200%", // combined with pushing it down
                    }}
                  />
                </div>

                {/* Clouds & Stars Layer — centered and overscaled to eliminate border whitespace */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{
                    top: "var(--clouds-top, -15px)",
                    width: "var(--clouds-w, calc(100% + 80px))",
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
                        href="https://boilermake-apply.web.app"
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
                        Apply Now!
                      </a>

                    </div>

                  </div>

                </div>



                {/* Buildings — sit on top of the sign, wobble on scroll (commented out for now) */}

                <div

                  // ref={buildingsRef}

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

                  style={{ bottom: "var(--bb-y)", width: "var(--bb-w)", aspectRatio: "2000 / 1277", containerType: "inline-size" }}

                >

                  {/* Same inset as the sign copy, so the button shares the panel's box */}

                  <div

                    className="absolute inset-x-[6%] flex justify-center"

                    style={{ top: "var(--btn-y)" }}

                  >

                    <a
                      href="https://boilermake-apply.web.app"
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
                      Apply Now!
                    </a>

                  </div>

                </div>



              </div>





              {/* Foreground ledge */}

              <div

                className="pointer-events-none absolute inset-x-0 z-[7] w-full"

                style={{

                  height: "var(--ledge-h)",

                  bottom: "calc(-1 * var(--scene-drop))",

                }}

                aria-hidden

              >

                <div

                  aria-hidden

                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[8]"

                  style={{

                    height: "clamp(120px, 22vh, 280px)",

                    background:

                      "linear-gradient(to bottom, rgba(59,52,75,0) 0%, rgba(59,52,75,0.25) 30%, rgba(59,52,75,0.75) 65%, #3B344B 100%)",

                  }}



                />







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



              {/* CTAs — above every scene layer, clear of the ledge */}

              <div

                className="absolute inset-x-0 z-[20] flex flex-row flex-wrap items-center justify-center gap-6 px-4"

                style={{ bottom: "calc(var(--ledge-h) + clamp(16px, 4vh, 56px))" }}

              >

                {/* <ApplyButton

                  text="APPLY NOW!"

                  link="https://boilermake-apply.web.app"

                  size="large"

                  variant="hero"

                  className="mr-0"

                />

                <ApplyButton

                  text="INTEREST FORM"

                  link="https://docs.google.com/forms/d/e/1FAIpQLScaVyVFmm3Jwn1225SjUPCInKD9-MLZhxIRtQT8o4y1HAxs_g/viewform"

                  size="large"

                  variant="hero"

                  className="mr-0"

                />

                <ApplyButton

                  text="MENTOR FORM"

                  link="https://docs.google.com/forms/d/e/1FAIpQLScmpc_zMGpQGUZy5vFkCTbkh-3oG5WMKx1eDES1ziDDSOqA4w/viewform"

                  size="large"

                  variant="hero"

                  className="mr-0"

                /> */}

              </div>

            </section>

            {/* =========================================================================
                TRANSITION GRADIENT: OVERLAY BETWEEN BUILDINGS (HERO) AND ABOUT SECTION
                - Sits on top of both sections (z-[15])
                - Fades the bottom of the buildings smoothly into the About section
                - Pointer-events-none ensures it never blocks clicks or interaction
               ========================================================================= */}
            <div
              id="hero-about-gradient"
              aria-hidden
              className="pointer-events-none absolute inset-x-0 w-full z-[15]"
              style={{
                // DESKTOP POSITION & SIZING:
                top: isMobile ? "auto" : "max(55vh, 780px)",
                height: isMobile ? "620px" : "clamp(620px, 90vh, 980px)",
                background:
                  "linear-gradient(to bottom, rgba(28, 10, 42, 0) 0%, rgba(28, 10, 42, 0.65) 30%, #1C0A2A 50%, rgba(28, 10, 42, 0.65) 70%, rgba(28, 10, 42, 0) 100%)",
              }}
            />

            {/* About Section */}

            <section

              id="about"

              className="w-full flex items-center justify-center absolute"

              style={{ top: isMobile ? "163vh" : "max(155vh, 1280px)" }}

            >

              <AboutSection />

            </section>



            {/* Schedule Section */}

            <section

              id="schedule"

              className="w-full absolute flex items-start justify-center"

              style={{

                // Protected with max() so when viewport height shrinks (e.g. Inspect Element is open),

                // Schedule never collides or overlaps with the About card above it.

                top: isMobile ? "260vh" : "max(272vh, 2250px)",

                minHeight: isMobile ? "215vh" : "248vh",

                paddingTop: isMobile ? "2rem" : "7rem",

                paddingBottom: isMobile ? "2rem" : "10rem",

              }}

            >

              {/* Wider responsive frame = less cramped cards/content on desktop,

                  while keeping comfortable gutters on smaller screens. */}

              <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12 xl:px-16">

                <ScheduleSection activities={activities} />

              </div>

            </section>



            {/* ================= Judges Section ================= */}
            <section
              id="judges"
              aria-labelledby="judges-heading"
              className="absolute w-full px-8"
              style={{ top: isMobile ? "535vh" : "580vh" }}
            >
              <JudgesSection />
            </section>


            {/* FAQ Section */}

            <section

              id="faq"

              className="w-full absolute overflow-x-clip"

              style={{
                top: isMobile ? "auto" : "max(720vh, 6000px)",
                minHeight: isMobile ? "auto" : "clamp(980px, 112vh, 1160px)",
              }}

            >

              <FAQSection questions={questions} />

            </section>





            {/* ================= Sponsors Section ================= */}

            <section
              id="sponsors"
              className="absolute flex flex-col items-center justify-center w-full overflow-x-clip pointer-events-none"
              style={{
                top: isMobile ? "auto" : "max(845vh, 7150px)",
                minHeight: isMobile ? "auto" : "clamp(860px, 80vh, 980px)",
                height: isMobile ? "auto" : "clamp(860px, 80vh, 980px)",
              }}
            >
              {/* Screen-edge anchored decorations */}
              <DecorImage
                src="/imagesbm14/spons/Splotchpink.png"
                alt=""
                label="Splotch"
                className="absolute opacity-90 pointer-events-none select-none z-[1]"
                style={{
                  left: "clamp(-40px, -1vw, 0px)",
                  bottom: "clamp(0px, 2vw, 20px)",
                  width: "clamp(160px, 20vw, 300px)",
                  height: "auto",
                }}
              />

              <DecorImage
                src="/imagesbm14/spons/image-2.png"
                alt=""
                label="Crown"
                className="absolute pointer-events-none select-none z-[5]"
                style={{
                  right: "clamp(12px, 3vw, 48px)",
                  bottom: "clamp(12px, 2vw, 36px)",
                  width: "clamp(90px, 14vw, 190px)",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  transform: "rotate(14.87deg)",
                }}
              />

              <div className="flex flex-col items-center justify-center gap-10 max-w-[1406px] w-full px-6 sm:px-8 pt-8 pb-16 relative">

                {/* Sponsors heading — this is a graphic asset from the design team */}

                <DecorImage

                  src="/imagesbm14/spons/icon-2.png"

                  alt="Sponsors"

                  label="Sponsors heading"

                  className="relative z-10 h-auto"

                  style={{

                    width: "clamp(280px, 42vw, 676px)",

                    aspectRatio: "676 / 357",

                  }}

                />

                <div className="relative z-10 flex flex-col items-center gap-8 w-full pointer-events-auto">

                  <div className="flex items-center justify-center">

                    {silverSponsors.map((sponsor) => (

                      <SponsorCard key={sponsor.name} sponsor={sponsor} size="lg" />

                    ))}

                  </div>

                  <div className="grid grid-cols-2 min-[720px]:grid-cols-3 justify-items-center gap-5">

                    {bronzeSponsors.map((sponsor) => (

                      <SponsorCard key={sponsor.name} sponsor={sponsor} size="sm" />

                    ))}

                  </div>

                </div>




              </div>

            </section>



            {/* ================= Footer Section ================= */}

            <section
              id="footer"
              className="flex flex-col items-center justify-center w-full gap-5 relative z-[100]"
              style={{
                top: isMobile ? "auto" : "calc(max(845vh, 7150px) + clamp(860px, 80vh, 980px) - 2px)",
                position: isMobile ? "relative" : "absolute",
                backgroundColor: "transparent",
                minHeight: isMobile ? "auto" : "clamp(140px, 16vh, 200px)",
                paddingTop: "clamp(36px, 4vw, 56px)",
                paddingBottom: "clamp(32px, 4vw, 48px)",
              }}
            >
              {/* Social Media Icons */}
              <div className="flex flex-row gap-6 relative z-10">
                <a
                  href="https://www.instagram.com/boilermake/?hl=en"
                  className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" style={{ fontSize: "1.75em" }} />
                </a>

                <a
                  href="https://www.linkedin.com/company/boilermake/"
                  className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
                  aria-label="LinkedIn"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" style={{ fontSize: "1.75em" }} />
                </a>
              </div>

              {/* Made with love text */}
              <p
                className="text-center text-white relative z-10"
                style={{
                  fontFamily: "var(--font-code-pro)",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  letterSpacing: "0.05em",
                  color: "#FFFFFF",
                  
                }}
              >
                Made with 💛 by the BoilerMake XIV team
              </p>
            </section>

          </main>



        </div>

      </>

    </TypingProvider>

  );

}



export default App;