"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/2027/components/HeaderBM14";
import AboutSection from "@/app/2027/components/AboutSectionBM14";
import FAQSection from "@/app/2027/components/FAQSectionBM14";
import ApplyButton from "@/app/2027/components/ApplyButtonBM14";
import ActivityPreview from "@/app/2027/components/ActivityPreviewBM14";
import { TypingProvider } from "@/context/TypingContext";
import ScheduleSection from "@/app/2027/components/ScheduleSectionBM14";
import SponsorCard from "@/app/2027/components/SponsorCardBM14";
import Image from "next/image";

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
const TEX_FOOTER_OFFSET = "calc(25vw - 458vh)";
const TEX_FOOTER_FADE_IN =
  "linear-gradient(to bottom, transparent 0px, #000 24px)";
const TEX_FOOTER_MASK =
  "linear-gradient(to bottom, transparent 0px, #000 24px, #000 46%, transparent 64%)";

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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0.5rem",
          border: "2px dashed rgba(255, 255, 255, 0.35)",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.04)",
          color: "rgba(255, 255, 255, 0.5)",
          fontFamily: "var(--font-dosis, sans-serif)",
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
      style={style}
      className={className}
      onError={() => setBroken(true)}
    />
  );
}

const sponsors = [
  [
    // XL logos
    {
      name: "CAT",
      logo: "/assets/sponsors/cat.png",
      url: "https://www.caterpillar.com/",
    },
    {
      name: "SFAB",
      logo: "/assets/sponsors/SFAB.png",
      url: "https://www.purdue.edu/sao/Fundraising/SOGA%20and%20SFAB.html",
    },
  ],
  [
    // LG logos
  ],
  [
    // MD logos
    {
      name: "Purdue CS",
      logo: "/assets/sponsors/PurdueCS.svg",
      url: "https://www.cs.purdue.edu/",
    },
    {
      name: "D.E. Shaw",
      logo: "/assets/sponsors/deshaw.png",
      url: "https://www.deshaw.com/",
    },
    {
      name: "RCAC",
      logo: "/assets/sponsors/RCAC_Logo.png",
      url: "https://www.rcac.purdue.edu/",
    },
  ],
  [
    // SM logos
    {
      name: "CoE",
      logo: "/assets/sponsors/coe.svg",
      url: "https://engineering.purdue.edu/Engr",
    },
    {
      name: "Roboflow",
      logo: "/assets/sponsors/roboflow.png",
      url: "https://roboflow.com/",
    },
    {
      name: "Runpod",
      logo: "/assets/sponsors/runpod_color.png",
      url: "https://www.runpod.io/",
    },
    {
      name: "Purdue Innovates",
      logo: "/assets/sponsors/purdue_innovates.png",
      url: "https://purdueinnovates.org/",
    },
  ],
  [
    {
      name: "Klaviyo",
      logo: "/assets/sponsors/klaviyo.png",
      url: "https://www.klaviyo.com/",
    },
    {
      name: "Blip",
      logo: "/assets/sponsors/blip.png",
      url: "https://www.blippayments.com/",
    },
    {
      name: "Sync",
      logo: "/assets/sponsors/sync.png",
      url: "https://sync.so/",
    },
    {
      name: "Modal",
      logo: "/assets/sponsors/modal.svg",
      url: "https://modal.com/",
    },
  ],
  [
    {
      name: "Taco Bell",
      logo: "/assets/sponsors/TacoBell.svg",
      url: "https://www.tacobell.com/",
    },
    {
      name: "Cartesia",
      logo: "/assets/sponsors/cartesia.svg",
      url: "https://www.cartesia.ai/",
    },
    {
      name: "Warp",
      logo: "/assets/sponsors/warp.png",
      url: "https://www.warp.dev/",
    },
    {
      name: "Wolfram",
      logo: "/assets/sponsors/wolfram.png",
      url: "https://www.wolfram.com/",
    },
  ],
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

  useEffect(() => {
    setIsLoaded(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
        <div className="App font-dosis relative" style={{ backgroundColor: "#3B344B", minHeight: "100vh" }}>

          {/* Header floats over the scene so the sky reaches the true top */}
          <div className="absolute inset-x-0 top-0 z-[200]">
            <Header />
          </div>

          {/* Main content container with CSS Grid layout */}
          <main
            className="w-full main-content"
            style={{ height: "calc(1028vh + clamp(700px, 60vw, 950px))", overflow: "hidden" }}
          >
            {/* Seamless connector: one continuous Rough Tex backdrop running
                from the top of FAQ (570vh) all the way to the top of the
                footer (1028vh), covering Sponsors and the empty band between
                them. FAQ and Sponsors are deliberately transparent so this is
                the only thing painting that backdrop — when they each painted
                their own, the texture stopped dead at the FAQ section's bottom
                edge and left a hard line. The gradient on top fades the purple
                page above into the texture. Sits behind all section content. */}
            <div
              aria-hidden
              className="absolute inset-x-0 pointer-events-none z-0"
              style={{
                top: "570vh",
                height: "458vh",
                backgroundColor: "#292526",
                backgroundImage:
                  "linear-gradient(to bottom, #3B344B 0%, rgba(41,37,38,0) 100%), url('/imagesbm14/faq/Rough%20Tex.png')",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: `100% 12vh, ${TEX_SIZE}`,
                backgroundPosition: "center top, center top",
              }}
            />
            {/* Grounding shadow beneath the hero skyline: sits entirely in the
                purple band below the hero so it never touches the scene, and
                softens the hard flat bottom edge of the foreground buildings
                into the page background. */}
            <div
              aria-hidden
              className="absolute inset-x-0 pointer-events-none z-0"
              style={{
                top: "160dvh",
                height: "26vh",
                background:
                  "linear-gradient(to bottom, rgba(13,6,24,0.55) 0%, rgba(13,6,24,0.22) 35%, rgba(59,52,75,0) 100%)",
              }}
            />
            {/* Hero Section — BoilerMake XIV skyline scene */}
            <section
              id="hero"
              className="hero-section relative w-full overflow-hidden"
              style={
                {
                  height: "160dvh",
                  backgroundColor: "#0d0618",
                  // --- tuning knobs ---
                  "--bb-w": "70%",     // billboard width, % of skyline box
                  "--bb-y": "30%",     // billboard height above skyline baseline
                  "--ledge-h": "clamp(52px, 11vw, 190px)",
                  "--sky-zoom": "1", // 1 = plain cover, higher = bigger clouds

                  "--btn-y": "55%",   // button height on the sign, % of billboard height
                  "--scene-drop": "0%",   // pushes the whole scene down; more = more sky above
                  "--sky-offset-y": "-135px",
                } as React.CSSProperties
              }
            >
              {/* Sky — clouds at top, magenta bleed at bottom */}
              <div
                className="pointer-events-none absolute z-[1]"
                aria-hidden
                style={{
                  top: 0,
                  bottom: 0,
                  left: "-6%",
                  width: "133%",
                }}
              >
                <Image
                  src="/imagesbm14/landing/Background.webp"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  draggable={false}
                  className="select-none object-cover"
                  style={{
                    objectPosition: "50% 100%",

                    transform: "translateY(var(--sky-offset-y)) translateX(0%) scaleX(1.35)",
                    transformOrigin: "top right",

                  }}
                />
              </div>

              {/* SKYLINE — full-bleed, exact aspect ratio, bottom-anchored */}
              <div
                className="pointer-events-none absolute inset-x-0 z-[3] w-full"
                style={{
                  aspectRatio: "1652 / 1080",
                  bottom: "calc(-1 * var(--scene-drop))",
                }}
              >
                {/* Billboard art — before the buildings so rooftops occlude its base */}
                <div
                  className="absolute left-1/2 z-[1] -translate-x-1/2"
                  style={{
                    bottom: "var(--bb-y)",
                    width: "var(--bb-w)",
                    containerType: "inline-size",
                  }}
                >
                  <Image
                    src="/imagesbm14/landing/Billboard Before.webp"
                    alt=""
                    width={905}
                    height={578}
                    priority
                    draggable={false}
                    className="h-auto w-full select-none"
                  />

                  {/* Sign copy — dark ink on the painted panel */}
                  <div className="absolute inset-x-[6%] top-[5%] flex h-[39%] flex-col items-center justify-center text-center">
                    <h1
                      className="w-full text-balance"
                      style={{
                        fontFamily: "var(--font-disket-mono)",
                        fontWeight: 400,
                        fontSize: "8.2cqi",
                        lineHeight: 1.02,
                        letterSpacing: "0.06em",
                        color: "#1a1a1a",
                      }}
                    >
                      BOILERMAKE XIV
                    </h1>
                    <h2
                      style={{
                        fontFamily: "var(--font-futura-cyrillic)",
                        fontWeight: 400,
                        fontSize: "3.4cqi",
                        letterSpacing: "0.1em",
                        color: "#4a4a4a",
                        marginBottom: "0.5em",
                      }}
                    >
                      22 - 24 JANUARY 2027
                    </h2>

                  </div>
                </div>

                {/* Buildings — sit on top of the sign */}
                <Image
                  src="/imagesbm14/landing/Buildings.webp"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  draggable={false}
                  className="z-[2] select-none object-cover object-bottom"
                  style={{
                    transform: "scaleX(1.04)",
                    transformOrigin: "center bottom",
                  }}
                />

                {/* Button layer — an empty box with the sign's exact geometry, stacked
            above the buildings so the CTA stays visible and clickable. */}
                <div
                  className="absolute left-1/2 z-[3] -translate-x-1/2"
                  style={{ bottom: "var(--bb-y)", width: "var(--bb-w)", aspectRatio: "905 / 578", containerType: "inline-size" }}
                >
                  {/* Same inset as the sign copy, so the button shares the panel's box */}
                  <div
                    className="absolute inset-x-[6%] flex justify-center"
                    style={{ top: "var(--btn-y)" }}
                  >

                    <a href="https://boilermake-apply.web.app"
                      className="pointer-events-auto whitespace-nowrap transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE958] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                      style={{
                        fontFamily: "var(--font-futura-cyrillic), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(13px, 4.4cqi, 30px)",
                        letterSpacing: "0.08em",
                        lineHeight: 1,
                        color: "#FFFFFF",
                        background: "#5A8A4A",
                        border: "0.5cqi solid #FFFFFF",
                        borderRadius: "9999px",
                        padding: "0.72em 2.1em",
                        boxShadow: "0 0.5cqi 0 rgba(0,0,0,0.28)",
                      }}
                    >
                      Interest form
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
            {/* About Section */}
            <section
              id="about"
              className="w-[80vw] lg:w-[60vw] flex items-center justify-center absolute"
              style={{ top: "180vh" }}
            >
              <AboutSection />
            </section>

            {/* Schedule Section */}
            <section
              id="schedule"
              className="w-full flex items-center justify-center absolute"
              style={{ top: "325vh", paddingTop: "8rem" }}
            >
              <ScheduleSection activities={activities} />
              {/*
              <div className="w-full max-w-7xl mx-auto px-4">
                <div
                  className="text-center absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                  style={{ top: "8rem" }}
                >
                  
                  <div
                    style={{
                      fontFamily: "var(--font-disket-mono)",
                      fontWeight: 400,
                      fontSize: "clamp(32px, 8vw, 60px)",
                      lineHeight: "100%",
                      letterSpacing: "0.1em",
                      color: "#FFE958",
                      textShadow: "0px 0px 15px #FFDE00",
                    }}
                  >
                    Schedule
                    <span style={{ animation: "blink 1s infinite" }}>_</span>
                  </div>
                </div>

                <div
                  className="schedule-activities w-full relative mt-12 md:mt-32"
                  style={{ marginTop: "12rem" }}
                >
                  {activities.map((activity, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                      <div
                        key={`activity${index + 1}`}
                        className={`
                          absolute
                          transition-transform duration-500
                            ${
                              isLeft
                                ? "left-0 -translate-x-[-2%] md:-translate-x-[-5%] lg:-translate-x-[-3%] xl:-translate-x-[1%] min-[1340px]:-translate-x-[6%] min-[1400px]:-translate-x-[10%] min-[1470px]:-translate-x-[17%] 2xl:-translate-x-[20%]"
                                : "right-0 translate-x-[-2%] md:translate-x-[-6%] lg:translate-x-[-3%] xl:translate-x-[1%] min-[1340px]:translate-x-[5%] min-[1400px]:translate-x-[10%] min-[1470px]:translate-x-[17%] 2xl:translate-x-[20%]"
                            }
                        `}
                        style={{
                          top: `${index * 33}vh`,
                        }}
                      >
                        <ActivityPreview
                          title={activity.title}
                          startDate={activity.startDate}
                          endDate={activity.endDate || ""}
                          location={activity.location}
                          description={activity.description}
                          isActive={activeEventId === index + 1}
                          onEventClick={() => handleEventClick(index + 1)}
                          size="large"
                          popup="left"
                          align={isLeft ? "left" : "right"}
                          activityId={index + 1}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            
            */}

            </section>

            {/* FAQ Section */}
            <section
              id="faq"
              className="w-full absolute overflow-x-clip"
              style={{ top: "570vh", minHeight: "150vh" }}
            >
              <FAQSection questions={questions} />
            </section>


            {/* ================= Sponsors Section ================= */}
            <section
              id="sponsors"
              className="absolute flex flex-col items-center justify-center py-24 px-8 w-full overflow-hidden"
              style={{
                top: "745vh",
                height: "283vh"
              }}
            >
              <div className="flex flex-col items-center justify-center gap-14 max-w-[1406px] w-full relative">

                {/* Decoration layer — locked to the design frame's aspect
                    ratio (1405.55 x 1550.66) so every % position below
                    resolves against a real, defined height instead of
                    "auto". (An auto-height container is what sent the
                    splotch/crown/drip flying up near the page header
                    before — % top/left on an absolutely positioned child
                    only works reliably when its containing block has a
                    real height.) */}
                <div
                  className="absolute top-0 left-0 w-full pointer-events-none"
                  style={{
                    aspectRatio: "1405.5479736328125 / 1550.6602783203125",
                    zIndex: 0,
                  }}
                >

                  {/* Big pink splotch — bleeds off the left edge, level with
                      the middle rows of the sponsor grid. Sized off the
                      real image's own proportions (width + maxHeight cap)
                      instead of a guessed aspect-ratio, which was
                      distorting it. */}
                  <DecorImage
                    src="/imagesbm14/spons/splotch-2.png"
                    alt=""
                    label="Splotch"
                    className="absolute opacity-90"
                    style={{


                      left: "clamp(-140px, 140vw, 140px)",
                      top: "clamp(150px, 15vh, 4500px)",
                      width: "clamp(250px, 30vw, 500px)",
                      height: "auto",
                      maxHeight: "120vh",
                      zIndex: 1,
                      transform: "translateX(-80%)",
                      aspectRatio: "1/ 3",
                    }}
                  />


                  {/* Crown doodle — bottom-right of the grid, matches the
                      exact top/left/size/rotation from the design frame.
                      zIndex bumped above its siblings so nothing (like the
                      splotch above) can ever render over it again. */}
                  <DecorImage
                    src="/imagesbm14/spons/image-2.png"
                    alt=""
                    label="Crown"
                    className="absolute"
                    style={{

                      top: "90vh",      // example, adjust
                      right: "2vw",
                      width: "17vw",
                      height: "auto",
                      aspectRatio: "1 / 1",
                      transform: "rotate(14.87deg)",
                      zIndex: 5,
                    }}
                  />
                </div>

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

                <h1 style={{ fontSize: "clamp(24px, 4vw, 48px)" }}>COMING SOON</h1>
                {/*
                {/* Sponsor tier grid
                <div className="flex flex-col items-center gap-4 w-full max-w-3xl relative z-10">
                  {sponsors.map((tier, tierIndex) => {
                    if (tier.length === 0) return null;
                    const heightByTier = ["h-24", "h-24", "h-20", "h-16", "h-14", "h-14"];
                    const boxHeight = heightByTier[tierIndex] || "h-14";
                    return (
                      <div
                        key={`tier-${tierIndex}`}
                        className="flex flex-row flex-wrap items-center justify-center gap-4 w-full"
                      >
                        {tier.map((sponsor, i) => (
                          <a
                            key={sponsor.name || `placeholder-${tierIndex}-${i}`}
                            href={sponsor.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center border-2 border-white rounded-lg ${boxHeight} flex-1 min-w-[120px] max-w-[220px] bg-transparent`}
                          >
                            {sponsor.logo ? (
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-h-[70%] max-w-[70%] object-contain"
                              />
                            ) : (
                              <span className="text-white/40 text-xs uppercase tracking-wider">
                                [logo]
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    );
                  })}
                </div>
                */}

              </div>
            </section>

            {/* ================= Footer Section ================= */}
            <section
              id="footer"
              className="flex flex-col items-center justify-end w-full gap-6 relative overflow-visible "
              style={{
                top: "1028vh",
                zIndex: 100,
                position: "absolute",
                backgroundColor: "#403A50",
                minHeight: "clamp(700px, 60vw, 950px)",
                paddingBottom: "3rem",
              }}
            >
              {/* Transition from Sponsors → Footer */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-screen pointer-events-none"
                style={{
                  top: "-25vw",
                  zIndex: 1,
                }}
              >
                {/* The graphic is opaque, so its top edge cut the texture off
                    with a hairline. It fades in over its first 24px instead,
                    and the texture overlay below fades in over the same 24px —
                    as the graphic hides the band's texture, the overlay's copy
                    replaces it at the same rate, so coverage stays constant
                    and there's no edge. */}
                <DecorImage
                  src="/imagesbm14/spons/Transition.png"
                  alt=""
                  label="Transition"
                  className="block w-full h-auto"
                  style={{
                    WebkitMaskImage: TEX_FOOTER_FADE_IN,
                    maskImage: TEX_FOOTER_FADE_IN,
                  }}
                />
                {/* Carries the Rough Tex band across the opaque part of the
                    graphic, then masks itself out where it turns purple. */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "url('/imagesbm14/faq/Rough%20Tex.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: TEX_SIZE,
                    backgroundPosition: `center ${TEX_FOOTER_OFFSET}`,
                    WebkitMaskImage: TEX_FOOTER_MASK,
                    maskImage: TEX_FOOTER_MASK,
                  }}
                />
              </div>
              {/* Decoration layer — centered, capped at the design frame's
                  1280px reference width, and locked to its 1280:1308 aspect
                  ratio so the % positions below resolve against a real,
                  defined height instead of "auto" (the same bug that sent
                  the traffic light off to the wrong spot). */}

              <div
                className="absolute inset-0 flex items-start justify-center pointer-events-none"
                style={{ zIndex: 10 }}
              >
                {/* Blue spray blob and the traffic light that sits on it. Both
                    live outside the 1280 frame and are anchored to the real
                    left edge of the viewport — inside the frame they'd drift
                    apart by the frame's inset on screens wider than 1280. The
                    blob comes first in the DOM so the light paints over it.
                    The kit has no cyan blob, so the orange cloud is
                    hue-rotated. */}
                <DecorImage
                  src="/imagesbm14/faq/Splotch.png"
                  alt=""
                  label="Splotch"
                  className="absolute"
                  style={{
                    top: "14%",
                    left: "calc(-1 * clamp(130px, 19vw, 300px))",
                    width: "clamp(220px, 33vw, 500px)",
                    height: "auto",
                    filter: "hue-rotate(168deg) saturate(1.25)",
                  }}
                />
                <DecorImage
                  src="/imagesbm14/spons/traffic-light.png"
                  alt=""
                  label="Traffic light"
                  className="absolute opacity-90"
                  style={{
                    top: "clamp(60px, 10vh, 180px)",
                    left: "clamp(-6px, 1vw, 24px)",
                    width: "clamp(150px, 17vw, 240px)",
                    height: "auto",
                    transform: "rotate(-11.77deg)",
                    aspectRatio: "277.91 / 416.87",
                  }}
                />

                <div
                  className="relative w-full max-w-[1280px]"
                  style={{ aspectRatio: "1280 / 1308" }}
                >
                  {/* Dripping heart doodle */}
                  <DecorImage
                    src="/imagesbm14/spons/heart.png"
                    alt=""
                    label="Heart"
                    className="absolute"
                    style={{
                      top: "9.4%",
                      left: "28.75%",
                      width: "40.2%",
                      height: "auto",
                      aspectRatio: "1 / 1",
                    }}
                  />

                  {/* Brick doodle — sits between the heart and the flower,
                      matching the mobile Figma frame. No coordinates were
                      given for this one — best guess. */}
                  <DecorImage
                    src="/imagesbm14/brick_1.webp"
                    alt=""
                    label="Brick"
                    className="absolute opacity-90"
                    style={{
                      top: isMobile ? "70%" : "40%",
                      left: "10.1%",
                      width: "10%",
                      height: "auto",
                      maxHeight: "11%",
                    }}
                  />

                  {/* Brick doodle — sits between the heart and the flower,
                      matching the mobile Figma frame. No coordinates were
                      given for this one — best guess. */}
                  <DecorImage
                    src="/imagesbm14/brick2.webp"
                    alt=""
                    label="Brick"
                    className="absolute opacity-90"
                    style={{
                      top: "20%",
                      left: "70.07%",
                      width: "10%",
                      height: "auto",
                      maxHeight: "11%",
                    }}
                  />
                </div>

                {/* Orange blob + flower, pinned to the real right edge of the
                    viewport rather than the 1280 frame so the blob bleeds off
                    screen the way the mock does. */}
                <DecorImage
                  src="/imagesbm14/end/splotch-3.png"
                  alt=""
                  label="Splotch"
                  className="absolute"
                  style={{
                    top: "-11%",
                    right: "0px",
                    height: "clamp(260px, 62vw, 680px)",
                    width: "auto",
                  }}
                />
                <DecorImage
                  src="/imagesbm14/spons/flower.png"
                  alt=""
                  label="Flower"
                  className="absolute"
                  style={{
                    top: "8%",
                    right: "clamp(8px, 1.8vw, 34px)",
                    width: "clamp(120px, 20vw, 270px)",
                    height: "auto",
                    transform: "rotate(18deg)",
                  }}
                />
              </div>

              {/* Social Media Icons — stays centered, above the doodles, near the bottom */}
              <div className="flex flex-row gap-6 relative z-10">
                <a
                  href="https://www.instagram.com/boilermake/?hl=en"
                  className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "0px 0px 15px #FFE958";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "none";
                  }}
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
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "0px 0px 15px #FFE958";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "none";
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" style={{ fontSize: "1.75em" }} />
                </a>
              </div>

              {/* Made with love text */}
              <p
                className="text-center text-white relative z-10 bg-[#403A50]"
                style={{
                  fontFamily: "var(--font-rubik-wet-paint)",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  letterSpacing: "0.05em",
                  color: "#FFFFFF",
                  textShadow: "0px 0px 10px #FFDE00",
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