"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/2027/components/HeaderBM14";
import AboutSection from "@/app/2027/components/AboutSectionBM14";
import FAQSection from "@/app/2027/components/FAQSectionBM14";
import ApplyButton from "@/app/2027/components/ApplyButtonBM14";
import ActivityPreview from "@/app/2027/components/ActivityPreviewBM14";
import { TypingProvider } from "@/context/TypingContext";
import ScheduleSection from "@/app/2027/components/ScheduleSectionBM14";

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

{/*The schedule information*/}
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
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nunc eros. Fusce nec felis dapibus, sagittis orci sagittis, imperdiet erat. Aliquam erat volutpat. Vivamus efficitur vel ante a ornare.",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nunc eros. Fusce nec felis dapibus, sagittis orci sagittis, imperdiet erat. Aliquam erat volutpat. Vivamus efficitur vel ante a ornare.",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nunc eros. Fusce nec felis dapibus, sagittis orci sagittis, imperdiet erat. Aliquam erat volutpat. Vivamus efficitur vel ante a ornare.",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nunc eros. Fusce nec felis dapibus, sagittis orci sagittis, imperdiet erat. Aliquam erat volutpat. Vivamus efficitur vel ante a ornare.",
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
        <div className="App font-dosis" style={{ backgroundColor: "#3B344B", minHeight: "100vh" }}>
          {/* Header - updated to work without parallax */}
          <Header />

          {/* Main content container with CSS Grid layout */}
          <main
            className="w-full main-content"
            style={{ height: "1950vh", overflow: "hidden" }}
          >
            {/* Hero Section */}
            <section id="hero" className="hero-section">
              <div
                className="hero-content "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <div className="hero-text">
                  <h2
                    className="text-center mb-6"
                    style={{
                      fontFamily: "var(--font-futura-cyrillic)",
                      fontWeight: 100,
                      fontSize: "clamp(18px, 3.5vw, 28px)",
                      lineHeight: "100%",
                      letterSpacing: "0.1em",
                      color: "#FFFFFF",
                      textAlign: "center",
                      width: "100%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    23 - 25 January 2026
                    <span
                      className="text-white"
                      style={{ animation: "blink 1s step-end infinite" }}
                    >
                      _
                    </span>
                  </h2>
                  <h1
                    className="text-center mb-12"
                    style={{
                      fontFamily: "var(--font-disket-mono)",
                      fontWeight: 400,
                      fontSize: "clamp(32px, 8vw, 80px)",
                      lineHeight: "100%",
                      letterSpacing: "0.1em",
                      color: "#FFE958",
                      textShadow: "0px 0px 15px #FFDE00",
                    }}
                  >
                    {" "}
                    BOILERMAKE XIV{" "}
                  </h1>
                  <link
                    rel="icon"
                    href="assets/favicon.ico"
                    type="image/x-icon"
                  />
                </div>
                <div
                  className="hero-buttons"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                  <ApplyButton
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
                  />
                </div>
              </div>
            </section>
            {/* About Section */}
            <section
              id="about"
              className="w-[80vw] lg:w-[60vw] flex items-center justify-center absolute"
              style={{ top: "270vh" }}
            >
              <AboutSection />
            </section>

            {/* Schedule Section */}
            <section
              id="schedule"
              className="w-full flex items-center justify-center absolute"
              style={{ top: "430vh", paddingTop: "8rem" }}
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
              style={{ top: "700vh", minHeight: "150vh" }}
            >
              <FAQSection questions={questions} />
            </section>

            {/* Sponsors Section */}
            <section
              id="sponsors"
              className="absolute flex flex-col items-center justify-center py-20 px-8 w-full"
              style={{ top: "1100vh" }}
            >
              {/* Main Content Container - All content centered vertically */}
              <div className="flex flex-col items-center justify-center gap-12 max-w-4xl">
                {/* Message text */}
                <h1
                  className="text-center"
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
                  SPONSORS
                  <span style={{ animation: "blink 1s infinite" }}>_</span>
                </h1>

                <h2
                  className="text-center mb-6"
                  style={{

                    fontWeight: 400,
                    fontSize: "clamp(18px, 3.5vw, 28px)",
                    lineHeight: "100%",
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    fontFamily: "var(--font-disket-mono)",
                    color: "#FFE958",
                    textShadow: "0px 0px 15px #FFDE00",
                  }}
                >
                  [coming soon]
                  <span
                    className="text-white"
                  // style={{ animation: "blink 1s step-end infinite" }}
                  >
                    {/* _ */}
                  </span>
                </h2>
                {/* Button */}
                <a
                  // href="https://docs.google.com/forms/d/e/1FAIpQLScaVyVFmm3Jwn1225SjUPCInKD9-MLZhxIRtQT8o4y1HAxs_g/viewform"
                  href="/past"
                  className="inline-block px-12 py-4 border-2 border-white text-white uppercase tracking-wider transition-all duration-300 hover:bg-black/20"
                  style={{
                    fontFamily: "var(--font-futura-cyrillic)",
                    fontWeight: 500,
                    fontSize: "clamp(14px, 2vw, 18px)",
                    letterSpacing: "0.15em",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "2px solid #FFFFFF",
                      paddingBottom: "4px",
                    }}
                  >
                    IN THE PAST
                  </span>
                </a>
              </div>
            </section>

            {/* Contact/Message Section */}
            <section
              id="contact"
              className="absolute flex flex-col items-center justify-center py-20 px-8 w-full"
              style={{ top: "1590vh" }}
            >
              {/* Main Content Container - All content centered vertically */}
              <div className="flex flex-col items-center justify-center gap-12 max-w-4xl">
                {/* Message text */}
                <h1
                  className="text-center"
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
                  Escape Reality
                  <span style={{ animation: "blink 1s infinite" }}>_</span>
                </h1>

                {/* Button */}
                <a
                  // href="https://docs.google.com/forms/d/e/1FAIpQLScaVyVFmm3Jwn1225SjUPCInKD9-MLZhxIRtQT8o4y1HAxs_g/viewform"
                  href="https://boilermake-apply.web.app"
                  className="inline-block px-12 py-4 border-2 border-white text-white uppercase tracking-wider transition-all duration-300 hover:bg-black/20"
                  style={{
                    fontFamily: "var(--font-futura-cyrillic)",
                    fontWeight: 500,
                    fontSize: "clamp(14px, 2vw, 18px)",
                    letterSpacing: "0.15em",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "2px solid #FFFFFF",
                      paddingBottom: "4px",
                    }}
                  >
                    APPLY NOW!
                  </span>
                </a>
              </div>
            </section>

            {/* Footer Section */}
            <section
              id="footer"
              className="absolute flex flex-col items-center justify-center w-full gap-8"
              style={{ top: "1930vh", zIndex: 100, position: "absolute", backgroundColor: "transparent" }}
            >
              {/* Social Media Icons */}
              <div className="flex flex-row gap-6">
                <a
                  href="https://www.instagram.com/boilermake/?hl=en"
                  className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
                  aria-label="Instagram"
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "0px 0px 15px #FFE958";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "none";
                  }}
                >
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "1.75em" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/boilermake/"
                  className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
                  aria-label="LinkedIn"
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "0px 0px 15px #FFE958";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.textShadow = "none";
                  }}
                >
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: "1.75em" }}
                  />
                </a>
              </div>

              {/* Made with love text */}
              <p
                className="text-center text-white"
                style={{
                  fontFamily: "var(--font-geist-vf)",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  letterSpacing: "0.05em",
                  color: "#FFFFFF",
                  textShadow: "0px 0px 15px #FFDE00",
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
