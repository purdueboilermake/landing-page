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
    title: "Opening Ceremony",
    startDate: "2025-02-21T19:30:00",
    endDate: "2025-02-21T20:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Introduction to BoilerMake.",
  },
  {
    title: "Hacking Starts",
    startDate: "2025-02-21T21:00:00",
    endDate: "2025-02-21T21:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Hackers can start coding.",
  },
  {
    title: "Carnival",
    startDate: "2025-02-22T21:30:00",
    endDate: "2025-02-23T23:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Event filled with fun games and activities.",
  },
  {
    title: "Hacking Ends",
    startDate: "2025-02-23T09:00:00",
    endDate: "2025-02-23T09:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Hackers must stop coding.",
  },
  {
    title: "Judging",
    startDate: "2025-02-23T10:00:00",
    endDate: "2025-02-23T14:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "First round of judging (all submitted projects).",
  },
  {
    title: "Closing Ceremony",
    startDate: "2025-02-23T13:30:00",
    endDate: "2025-02-23T15:00:00",
    location: "Frances A. Cordova Recreational Sports Center",
    description: "Final round of judging and all prize winners announced.",
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
    // Set loaded state after component mounts
    setIsLoaded(true);

    // Check if mobile on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
    },
    {
      id: "rainbow-blob",
      imageUrl: "images/homepage_gradient_upper.png",
      position: "absolute" as const,
      zIndex: -50,
      opacity: 1,
      top: 0,
      blendMode: "normal",
      scaleMode: "cover" as BackgroundScaleMode,
      height: isMobile ? "200vh" : "300vh", // 200vh mobile, 400vh desktop
      fallbackColor: "#ffffff",
    },
    {
      id: "upper-center-circle",
      imageUrl: "/images/Upper_center_circle.png",
      position: "absolute" as const,
      zIndex: -80, // Under content but above dark background layers
      opacity: 0.8,
      top: "-10vh", // 10% above viewport to cut off top
      left: "0%", // Center horizontally
      height: "100vh", // Square aspect ratio
      scaleMode: "contain" as BackgroundScaleMode, // Preserve aspect ratio
      backgroundPosition: "center",
      blendMode: "normal", // Explicitly set blend mode to avoid conflicts
      fallbackColor: "transparent",
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
    },
    {
      id: "about-circle",
      imageUrl: "/images/about-circle.png",
      position: "absolute" as const,
      zIndex: -80, // Under content but above dark background layers
      opacity: 0.8,
      top: "100vh", // 10% above viewport to cut off top
      left: "0%", // Center horizontally
      height: "100vh", // Square aspect ratio
      scaleMode: "contain" as BackgroundScaleMode, // Preserve aspect ratio
      // backgroundPosition: "center",
      blendMode: "normal", // Explicitly set blend mode to avoid conflicts
      fallbackColor: "transparent",
    },
  ];

  return (
    <TypingProvider initialSettings={{ defaultSpeed: 10 }}>
      <div className="App font-dosis">
        {/* Background Manager - replaces parallax background system */}
        <BackgroundManager
          layers={backgroundLayers}
          globalFallbackColor="#C5E1E6"
        />

        {/* Header - updated to work without parallax */}
        <Header />

        {/* Main content container with CSS Grid layout */}
        <main className="main-content">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-arvo font-bold text-white">
                BOILERMAKE
              </h1>
              <h2 className="text-[100px] md:text-[200px] font-arvo leading-none font-extrabold text-white">
                XII
              </h2>
              <p className="text-xl md:text-3xl font-body font-extrabold leading-none mb-4 text-white">
                2/21 - 2/23
              </p>
            </div>
            <div className="hero-buttons">
              <ApplyButton
                text="Organizer Application"
                link="https://forms.gle/inJw2FP3UwLMtNcZA"
                size="large"
              />
              <ApplyButton
                text="Devpost"
                link="https://boilermake-xii.devpost.com/"
                size="large"
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="statistics" className="statistics-section">
          <div className="statistics-grid">
            <Statistic statistic="9" variable="Universities Represented" />
            <Statistic statistic="70" variable="Project Submissions" />
            <Statistic statistic="$4k" variable="In Prizes" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-content">
            <AboutSection />
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="schedule-section">
          <div className="schedule-content">
            <div className="schedule-sign">
              <ScheduleSign />
            </div>
            <div className="schedule-activities">
              {activities.map((activity, index) => (
                <div
                  key={`activity${index + 1}`}
                  className={`activity-item activity-${index + 1}`}
                >
                  <ActivityPreview
                    title={activity.title}
                    startDate={activity.startDate}
                    endDate={activity.endDate}
                    location={activity.location}
                    description={activity.description}
                    isActive={activeEventId === index + 1}
                    onEventClick={() => handleEventClick(index + 1)}
                    size={
                      index < 2
                        ? "small"
                        : index < 4
                        ? "medium"
                        : index < 5
                        ? "large"
                        : "xlarge"
                    }
                    popup={index === 2 || index === 5 ? "right" : "left"}
                  />
                </div>
              ))}
            </div>
            {/* Tents decoration */}
            <div className="tents-decoration">
              <Image
                src="/images/tents.png"
                alt="Tents"
                width={350}
                height={350}
                className="tents-image"
              />
            </div>
          </div>
          {/* Birds animation for schedule */}
          <div className="birds-container birds-schedule">
            <Image
              src="/images/bird2.png"
              alt="Bird 2"
              width={65}
              height={65}
              className="bird bird-1"
            />
            <Image
              src="/images/bird1.png"
              alt="Bird 1"
              width={65}
              height={65}
              className="bird bird-2"
            />
            <Image
              src="/images/bird3.png"
              alt="Bird 3"
              width={65}
              height={65}
              className="bird bird-3"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full min-h-screen flex items-center justify-center py-16">
          <FAQAccordian questions={questions} />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="sponsors-section">
          <div className="sponsors-content">
            <div className="sponsors-sign">
              <SponsorSign />
            </div>
            <div className="sponsors-grid">
              {sponsors.map((sponsorRow, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`sponsor-row sponsor-row-${rowIndex}`}
                >
                  {sponsorRow.map((sponsor, index) => (
                    <SponsorCard
                      key={index}
                      sponsor={sponsor}
                      size={
                        rowIndex === 0
                          ? "xl"
                          : rowIndex === 1
                          ? "lg"
                          : rowIndex === 2
                          ? "md"
                          : "sm"
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Campfires decoration */}
          <div className="campfires-decoration">
            <Image
              src="/images/campfires.png"
              alt="Campfires"
              width={350}
              height={350}
              className="campfires-image"
            />
          </div>
        </section>

        {/* Footer Section */}
        <section id="footer" className="footer-section">
          <footer className="footer-content">
            <p className="text-white text-center">
              © 2025 BoilerMake. All rights reserved.
            </p>
          </footer>
        </section>
      </main>
      </div>
    </TypingProvider>
  );
}

export default App;
