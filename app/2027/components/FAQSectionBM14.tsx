/**
 * FAQSectionBM14.tsx
 * Full FAQ section with graffiti/street aesthetic and decorative assets.
 */

import React from "react";
import FAQAccordian from "./FAQAccordianBM14";

type FAQSectionProps = {
  questions: { question: string; answer: string }[];
};

export default function FAQSectionBM14({ questions }: FAQSectionProps) {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden flex flex-col items-center"
      style={{
        minHeight: "150vh",
        paddingTop: "clamp(120px, 20vw, 240px)",
        paddingBottom: "clamp(80px, 16vw, 220px)",
        backgroundImage: "url('/imagesbm14/faq/Rough%20Tex.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Caution tape header */}
      <img
        src="/imagesbm14/faq/Tape.png"
        alt=""
        className="absolute top-0 left-0 w-full pointer-events-none select-none z-[2]"
        style={{ objectFit: "cover", maxHeight: "clamp(60px, 10vw, 110px)" }}
      />
      <img
        src="/imagesbm14/faq/Tape-2.png"
        alt=""
        className="absolute top-0 left-0 w-full pointer-events-none select-none z-[3]"
        style={{ objectFit: "cover", maxHeight: "clamp(50px, 8vw, 90px)", marginTop: "clamp(20px, 3vw, 40px)" }}
      />

      {/* Cyan splatter — top right */}
      <img
        src="/imagesbm14/faq/Splotch.png"
        alt=""
        className="absolute pointer-events-none select-none z-[2]"
        style={{
          top: "clamp(90px, 12vw, 150px)",
          right: "clamp(0%, 2vw, 4%)",
          width: "clamp(80px, 14vw, 180px)",
          height: "auto",
        }}
      />

      {/* Left sidebar: logo + SECTION label */}
      <div
        className="absolute flex flex-col items-center pointer-events-none select-none z-[2] hidden md:flex"
        style={{ left: "clamp(12px, 2vw, 40px)", top: "clamp(140px, 18vw, 220px)" }}
      >
        <img
          src="/imagesbm14/faq/Yellow%20Logo.png"
          alt=""
          style={{ width: "clamp(36px, 4vw, 56px)", height: "auto", marginBottom: "8px" }}
        />
        <img
          src="/imagesbm14/faq/SECTION.png"
          alt="Section"
          style={{ width: "clamp(28px, 3vw, 44px)", height: "auto" }}
        />
      </div>

      {/* FAQ title */}
      <img
        src="/imagesbm14/faq/FAQ%20Title.png"
        alt="FAQ"
        className="relative pointer-events-none select-none z-[4]"
        style={{
          width: "clamp(160px, 26vw, 320px)",
          height: "auto",
          marginBottom: "clamp(2.5rem, 6vw, 5rem)",
        }}
      />

      {/* Main accordion content */}
      <div className="relative z-[5] w-full max-w-2xl px-6 sm:px-10">
        <FAQAccordian questions={questions} />
      </div>

      {/* Bottom-left stickers */}
      <img
        src="/imagesbm14/faq/Group%2026.png"
        alt=""
        className="absolute pointer-events-none select-none z-[2] hidden sm:block"
        style={{
          bottom: "clamp(6%, 10vw, 14%)",
          left: "clamp(0%, 2vw, 4%)",
          width: "clamp(100px, 14vw, 200px)",
          height: "auto",
        }}
      />
      <img
        src="/imagesbm14/faq/StickerRandom1%202.png"
        alt=""
        className="absolute pointer-events-none select-none z-[2] hidden sm:block"
        style={{
          bottom: "clamp(2%, 4vw, 6%)",
          left: "clamp(8%, 12vw, 14%)",
          width: "clamp(60px, 8vw, 110px)",
          height: "auto",
        }}
      />

      {/* Bottom-right car graphic */}
      <img
        src="/imagesbm14/faq/Car.png"
        alt=""
        className="absolute pointer-events-none select-none z-[2] hidden md:block"
        style={{
          bottom: "clamp(4%, 8vw, 10%)",
          right: "clamp(0%, 2vw, 4%)",
          width: "clamp(180px, 26vw, 360px)",
          height: "auto",
        }}
      />
    </div>
  );
}
