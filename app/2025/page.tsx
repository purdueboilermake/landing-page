"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroText from "@/components/HeroText";
import AboutSection from "@/components/AboutSection";
import ScheduleSign from "@/components/Signs/ScheduleSign";
import Statistic from "@/components/Statistic";
import FAQSign from "@/components/Signs/FAQSign";
import SponsorSign from "@/components/Signs/SponsorSign";
import SponsorCard from "@/components/SponsorCard";
import FAQAccordian from "@/components/FAQAccordian";
import ApplyButton from "@/components/ApplyButton";
import Image from "next/image";
import ActivityPreview from "@/components/Event/ActivityPreview";
import BackgroundManager from "@/components/BackgroundManager";
import { BackgroundScaleMode } from "@/components/BackgroundLayer";
import { TypingProvider } from "@/context/TypingContext";

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

const activities = [
  {
    title: "Activity Name",
    startDate: "2025-02-21T19:30:00",
    endDate: "2025-02-21T20:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Introduction to BoilerMake.",
  },
  {
    title: "Activity Name",
    startDate: "2025-02-21T21:00:00",
    endDate: "2025-02-21T21:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Hackers can start coding.",
  },
  {
    title: "Activity Name",
    startDate: "2025-02-22T21:30:00",
    endDate: "2025-02-23T23:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Event filled with fun games and activities.",
  },
  {
    title: "Activity Name",
    startDate: "2025-02-23T09:00:00",
    endDate: "2025-02-23T09:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Hackers must stop coding.",
  },
  {
    title: "Activity Name",
    startDate: "2025-02-23T10:00:00",
    endDate: "2025-02-23T14:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "First round of judging (all submitted projects).",
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
  // Dynamic circle positions/opacities (in CSS units)
  const [aboutCircleTop, setAboutCircleTop] = useState<string>("130vh");
  const [aboutCircleOpacity, setAboutCircleOpacity] = useState<number>(0.8);
  const [faqCircleTop, setFaqCircleTop] = useState<string>("830vh");
  const [faqCircleOpacity, setFaqCircleOpacity] = useState<number>(0.8);

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
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const scrollY = window.scrollY;
      const vhPx = window.innerHeight;
      const scrollVh = (scrollY / vhPx) * 100; // scroll in vh units

      //
      // ==== CIRCLE 1: hero → about ====
      //
      const c1StartScrollVh = 0;
      const c1EndScrollVh = 250;
      const c1Span = c1EndScrollVh - c1StartScrollVh;
      const c1t = clamp01((scrollVh - c1StartScrollVh) / c1Span);
      const c1TopVh = lerp(0, 250, c1t);
      setAboutCircleTop(`${c1TopVh}vh`);
      setAboutCircleOpacity(0.8);

      //
      // ==== CIRCLE 2: FAQ → “next page” ====
      //
      // scroll range (when to start / stop moving)
      const c2StartScrollVh = 910;   // start moving once page has scrolled ~910vh
      const c2EndScrollVh = 1150;     // finish moving by 1150vh
      const c2Span = c2EndScrollVh - c2StartScrollVh;

      // position range (where to put the circle)
      const c2StartTopVh = 910;      // start
      const c2EndTopVh = 1150;        // final rest position

      const c2t = clamp01((scrollVh - c2StartScrollVh) / c2Span);
      const c2TopVh = lerp(c2StartTopVh, c2EndTopVh, c2t);

      setFaqCircleTop(`${c2TopVh}vh`);
      setFaqCircleOpacity(0.8);
    };

    // run once
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Run after hydration + next paint
    const nudge = () => {
      // Dispatch synthetic scroll/resize to observers
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
      // Tiny scroll jiggle to guarantee intersection recalculation
      const x = window.scrollX, y = window.scrollY;
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

  // Background layer configuration with responsive heights
  const backgroundLayers = [
    {
      id: "solid-bg-color",
      imageUrl: "/this/is/a/fake/image.png", // This will fail to load, showing fallback
      zIndex: -100,
      opacity: 1,
      fallbackColor: "#2A2627", // This should show as the background color
      priority: true, // Always load immediately
    },
    {
      id: "rainbow-blob",
      imageUrl: "images/homepage_gradient_upper.png",
      position: "absolute" as const,
      zIndex: -50,
      opacity: 1,
      top: 0,
      blendMode: "normal",
      useIntrinsicHeight: false,
      height: "400vh", // 200vh mobile, 400vh desktop
      // scaleMode: "cover" as BackgroundScaleMode,
      // height: isMobile ? "200vh" : "300vh", // 200vh mobile, 400vh desktop
      width: "100%",
      fallbackColor: "#ffffff",
      priority: true,
    },
    {
      id: "stars-left",
      imageUrl: "/images/stars-left.png",
      position: "absolute" as const,
      zIndex: -50,
      opacity: 0.8,
      top: "80vh",
      left: "-35%",
      height: "30vh",
      scaleMode: "contain" as BackgroundScaleMode,
      backgroundPosition: "center",
      blendMode: "normal",
      fallbackColor: "transparent",
      priority: true, // Always load immediately
    },
    {
      id: "stars-right",
      imageUrl: "/images/stars-right.png",
      position: "absolute" as const,
      zIndex: -99,
      opacity: 0.8,
      top: "60vh", // A bit higher than stars-left (80vh)
      left: "35%", // Positioned on the right side (100% + 35% overhang = 135%)
      height: "30vh",
      scaleMode: "contain" as BackgroundScaleMode,
      backgroundPosition: "center",
      blendMode: "normal",
      fallbackColor: "transparent",
      priority: true, // Always load immediately
    },
    {
      id: "about-circle",
      imageUrl: "/images/about-circle.png",
      position: "absolute" as const,
      zIndex: -80,
      opacity: aboutCircleOpacity,
      top: aboutCircleTop,
      left: "0%",
      height: "100vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
      priority: true, // Always load immediately
    },
    {
      id: "about-accent-1",
      imageUrl: "/images/about-accent-1.png",
      position: "absolute" as const,
      zIndex: -70,
      opacity: 1,
      top: "302vh",
      left: "0vw",
      width: "80vw",
      height: "30vh",
      scaleMode: "fill" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "about-accent-2",
      imageUrl: "/images/about-accent-2.png",
      position: "absolute" as const,
      zIndex: -70,
      opacity: 1,
      top: "270vh",
      left: "0%",
      width: "100%",
      scaleMode: "fill" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "schedule-gradient",
      imageUrl: "images/schedule-gradient.png",
      position: "absolute" as const,
      zIndex: -50,
      opacity: 1,
      top: "400vh",
      width: "100%",
      height: "100vh",
      blendMode: "normal",
      fallbackColor: "#ffffff",
      priority: true,
      useIntrinsicHeight: false,
    },
    {
      id: "corrdior-1",
      imageUrl: "/images/corridor-1.png",
      position: "absolute" as const,
      zIndex: -50,
      opacity: 1,
      top: "440vh",
      left: "41vw",
      width: "17vw",
      height: "80vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "ringed-red-planet",
      imageUrl: "/images/ringed-red-planet.png",
      position: "absolute" as const,
      zIndex: -50,
      opacity: 1,
      top: "470vh",
      left: "75vw",
      width: "25vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "schedule-grid",
      imageUrl: "/images/schedule-grid.png",
      position: "absolute" as const,
      zIndex: -70,
      opacity: 1,
      top: "470vh",
      left: "0%",
      width: "100%",
      height: "260vh",
      useIntrinsicHeight: false,
      scaleMode: "cover" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "faq-gradient",
      imageUrl: "/images/faq-gradient.png",
      position: "absolute" as const,
      zIndex: -50,
      opacity: 1,
      top: "700vh",
      left: "0%",
      width: "100vw",
      height: "1200vh",
      useIntrinsicHeight: false,
      scaleMode: "fill" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
      priority: true,
    },
    {
      id: "faq-circle",
      imageUrl: "/images/faq-circle.png",
      position: "absolute" as const,
      zIndex: -99,
      opacity: faqCircleOpacity,
      top: faqCircleTop,
      left: "0%",
      height: "100vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "#ff0000",
    },
    {
      id: "faq-accent-1",
      imageUrl: "/images/faq-accent-1.png",
      position: "absolute" as const,
      zIndex: -30,
      opacity: 1,
      top: "840vh",
      left: "0vw",
      width: "100vw",
      height: "30vh",
      scaleMode: "fill" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "faq-accent-2",
      imageUrl: "/images/faq-accent-2.png",
      position: "absolute" as const,
      zIndex: -40,
      opacity: 1,
      top: "930vh",
      left: "0vw",
      width: "100vw",
      height: "20vh",
      scaleMode: "fill" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "planet-1",
      imageUrl: "/images/planet1.png",
      position: "absolute" as const,
      zIndex: -39,
      opacity: 1,
      top: "1506vh",
      left: "40vw",
      // width: "100vw",
      height: "20vw",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "planet2",
      imageUrl: "/images/planet2.png",
      position: "absolute" as const,
      zIndex: -39,
      opacity: 1,
      top: "1415vh",
      left: "47vw",
      // width: "100vw",
      height: "20vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "planet3",
      imageUrl: "/images/planet3.png",
      position: "absolute" as const,
      zIndex: -39,
      opacity: 1,
      top: "1480vh",
      left: "-40vw",
      // width: "100vw",
      height: "20vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "planet4",
      imageUrl: "/images/planet4.png",
      position: "absolute" as const,
      zIndex: -39,
      opacity: 1,
      top: "1450vh",
      left: "1vw",
      // width: "100vw",
      height: "20vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "ringed-planet",
      imageUrl: "/images/ring-planet.png",
      position: "absolute" as const,
      zIndex: -39,
      opacity: 1,
      top: "1350vh",
      left: "-30vw",
      height: "20vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },

    {
      id: "orbits",
      imageUrl: "/images/orbits.png",
      position: "absolute" as const,
      zIndex: -40,
      opacity: 1,
      top: "1350vh",
      left: "0vw",
      width: "100vw",
      height: "200vh",
      scaleMode: "contain" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
    {
      id: "footer-accent",
      imageUrl: "/images/footer-accent.png",
      position: "absolute" as const,
      zIndex: -40,
      opacity: 1,
      top: "1630vh",
      left: "0vw",
      width: "100vw",
      height: "20vh",
      scaleMode: "fill" as BackgroundScaleMode,
      blendMode: "normal",
      fallbackColor: "transparent",
    },
  ];

  return (
    <TypingProvider>
      <>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          rel="stylesheet"
        />
        <div className="App font-dosis">
        {/* Background Manager - replaces parallax background system */}
        <BackgroundManager
          layers={backgroundLayers}
          globalFallbackColor="#C5E1E6"
        />

        {/* Header - updated to work without parallax */}
        <Header />

        {/* Main content container with CSS Grid layout */}
        <main className="w-full main-content">
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
                    fontFamily: "var(--font-geist-vf)",
                    fontWeight: 100,
                    fontSize: "clamp(18px, 3.5vw, 28px)",
                    lineHeight: "100%",
                    letterSpacing: "0.1em",
                    color: "#FFFFFF",
                    textAlign: "center",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  coming jan 2026
                <span className="text-white" style={{ animation: 'blink 1s step-end infinite' }}>_</span></h2>
                <h1
                  className="text-center mb-12"
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
                  {" "}
                  BOILERMAKE XIII{" "}
                </h1>
              </div>
              <div
                className="hero-buttons"
                style={{ justifyContent: "center" }}
              >
                {/* Interest Form Button */}
                <a
                // href="https://docs.google.com/forms/d/e/1FAIpQLScaVyVFmm3Jwn1225SjUPCInKD9-MLZhxIRtQT8o4y1HAxs_g/viewform"
                href = "https://boilermake-apply.web.app"
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
            </div>
          </section>
          {/* About Section */}
          <section
            id="about"
            className="w-[80vw] lg:w-[60vw] flex items-center justify-center py-[270vh] absolute"
          >
            <AboutSection />
          </section>

          {/* Schedule Section */}
          <section
            id="schedule"
            className="w-full flex items-center justify-center py-[410vh]"
          >
            <div className="w-full max-w-7xl mx-auto px-4 relative">
              <div className="text-center absolute top-16 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <div
                  style={{
                    fontFamily: 'var(--font-disket-mono)',
                    fontWeight: 400,
                    fontSize: 'clamp(32px, 8vw, 60px)',
                    lineHeight: '100%',
                    letterSpacing: '0.1em',
                    color: '#FFE958',
                    textShadow: '0px 0px 15px #FFDE00',
                  }}
                >
                  Schedule<span style={{ animation: 'blink 1s infinite' }}>_</span>
                </div>
              </div>

              <div className="schedule-activities w-full h-[170vh] relative mt-[90vh]">
                {activities.map((activity, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={`activity${index + 1}`}
                      className={`
              absolute
              ${isLeft
                          ? 'left-0 lg:-left-[5%]'
                          : 'right-0 lg:-right-[5%]'
                        }
            `}
                      style={{
                        top: `${index * 33}vh`
                      }}
                    >
                      <ActivityPreview
                        title={activity.title}
                        startDate={activity.startDate}
                        endDate={activity.endDate}
                        location={activity.location}
                        description={activity.description}
                        isActive={activeEventId === index + 1}
                        onEventClick={() => handleEventClick(index + 1)}
                        size="large"
                        popup="left"
                        align={isLeft ? 'left' : 'right'}
                        activityId={index + 1}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="w-full flex items-start justify-center relative py-32 overflow-x-hidden">
            {/* Absolute header like the others */}
            <div className="text-center absolute top-16 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
              <div
                style={{
                  fontFamily: 'var(--font-disket-mono)',
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 8vw, 60px)',
                  lineHeight: '100%',
                  letterSpacing: '0.1em',
                  color: '#FFE958',
                  textShadow: '0px 0px 15px #FFDE00',
                }}
              >
                FAQ<span style={{ animation: 'blink 1s infinite' }}>_</span>
              </div>
            </div>

            {/* Actual accordion content */}
            <div className="faq-sign w-full flex justify-center pt-32 pb-8 overflow-x-hidden">
              <FAQAccordian questions={questions} />
            </div>
          </section>

          {/* Contact/Message Section */}
          <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-8">
            {/* Main Content Container - All content centered vertically */}
            <div className="flex flex-col items-center justify-center gap-12 max-w-4xl flex-1">
              {/* Message text */}
              <h1
                className="text-center"
                style={{
                  fontFamily: "var(--font-geist-vf)",
                  fontWeight: 300,
                  fontSize: "clamp(40px, 8vw, 80px)",
                  lineHeight: "100%",
                  letterSpacing: "0.05em",
                  color: "#FFFFFF",
                    textShadow: "0px 0px 15px #FFDE00"
                }}
              >
                [message]
              </h1>

              {/* Button */}
              <a
                // href="https://docs.google.com/forms/d/e/1FAIpQLScaVyVFmm3Jwn1225SjUPCInKD9-MLZhxIRtQT8o4y1HAxs_g/viewform"
                href = "https://boilermake-apply.web.app"
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
                  APPLY/CONTACT/...
                </span>
              </a>

              {/* Social Media Icons */}
              <div className="flex flex-row gap-6 mt-8">
                
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
                  <i className="fab fa-instagram" style={{ fontSize: "1.75em" }} />
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
                  <i className="fab fa-linkedin" style={{ fontSize: "1.75em" }} />
                </a>
                
              </div>

              {/* Made with love text */}
              <p
                className="text-center text-white mt-8"
                style={{
                  fontFamily: "var(--font-geist-vf)",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  letterSpacing: "0.05em",
                  color: "#FFFFFF",
                    textShadow: "0px 0px 15px #FFDE00"
                }}
              >
                Made with 💛 by the BoilerMake XIII team
              </p>
            </div>
          </section>
        </main>
      </div>
      </>
    </TypingProvider>
  );
}

export default App;