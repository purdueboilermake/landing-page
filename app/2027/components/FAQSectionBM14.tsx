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
      className="absolute top-0 left-1/2 -translate-x-1/2 w-screen overflow-x-clip flex flex-col items-center min-h-[128vh] sm:min-h-[135vh] lg:min-h-[145vh]"
      style={{
        paddingTop: "clamp(96px, 19vw, 250px)",
        paddingBottom: "clamp(120px, 18vw, 240px)",
        backgroundImage: "url('/imagesbm14/faq/Rough%20Tex.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Caution tape header — two overlapping torn strips (Tape.png also carries the cyan splatter) */}
      <img
        src="/imagesbm14/faq/Tape.png"
        alt=""
        className="absolute left-0 w-full pointer-events-none select-none z-[2]"
        style={{ top: "-20vw", height: "auto" }}
      />
      <img
        src="/imagesbm14/faq/Tape-2.png"
        alt=""
        className="absolute left-0 w-full pointer-events-none select-none z-[3]"
        style={{ top: "-14vw", height: "auto" }}
      />

      {/* Left sidebar: logo + SECTION label */}
      <div
        className="absolute flex-col items-center pointer-events-none select-none z-[6] hidden sm:flex"
        style={{ left: "clamp(8px, 2vw, 40px)", top: "clamp(200px, 40vw, 300px)" }}
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
      <div className="relative z-[5] w-full max-w-4xl px-6 sm:px-10">
        <FAQAccordian questions={questions} />
      </div>

      {/* Left sticker cluster (green star → purple → blue crown) */}
      <img
        src="/imagesbm14/faq/StickerRandom1%202.png"
        alt=""
        className="absolute pointer-events-none select-none z-[3]"
        style={{
          left: "clamp(-28px, -0.8vw, -12px)",
          top: "44%",
          height: "clamp(400px, 58vw, 700px)",
          width: "auto",
        }}
      />

      {/* Pink splatter — bottom left, behind cluster */}
      <img
        src="/imagesbm14/faq/Group%2026.png"
        alt=""
        className="absolute pointer-events-none select-none z-[2]"
        style={{
          left: "clamp(-16px, -1vw, 0px)",
          bottom: "clamp(4px, 3vw, 50px)",
          height: "clamp(150px, 24vw, 290px)",
          width: "auto",
        }}
      />

      {/* Pink smiley — very bottom left */}
      <img
        src="/imagesbm14/faq/icon.png"
        alt=""
        className="absolute pointer-events-none select-none z-[3]"
        style={{
          left: "clamp(16px, 4vw, 52px)",
          bottom: "clamp(16px, 3vw, 40px)",
          width: "clamp(34px, 5vw, 56px)",
          height: "auto",
        }}
      />

      {/* Bottom-right BOILER car — orange cloud (Splotch) behind, car + graffiti on top */}
      <div
        className="absolute pointer-events-none select-none z-[3]"
        style={{
          right: "clamp(0px, 2vw, 56px)",
          bottom: "clamp(12px, 4vw, 60px)",
          width: "clamp(180px, 32vw, 420px)",
        }}
      >
        <img
          src="/imagesbm14/faq/Splotch.png"
          alt=""
          className="block w-full h-auto"
        />
        <img
          src="/imagesbm14/faq/Car.png"
          alt=""
          className="absolute"
          style={{ width: "84%", left: "9%", top: "-2%", height: "auto" }}
        />
      </div>
    </div>
  );
}
