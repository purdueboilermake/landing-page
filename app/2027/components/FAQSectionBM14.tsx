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
      className="relative w-full overflow-x-clip flex flex-col items-center"
      style={{
        height: "clamp(980px, 112vh, 1160px)",
        minHeight: "clamp(980px, 112vh, 1160px)",
        paddingTop: "clamp(60px, 10vw, 130px)",
        paddingBottom: "clamp(20px, 3vw, 40px)",
      }}
    >
      {/* Purple rough texture stipple — transition between purple backdrop and caution tape */}
      <img
        src="/imagesbm14/schedule/RoughTexPurple.png"
        alt=""
        className="absolute left-0 w-full pointer-events-none select-none z-[1] opacity-90"
        style={{ top: "-28vw", height: "auto" }}
      />

      {/* Caution tape header — two overlapping torn strips (Tape.png also carries the cyan splatter) */}
      <img
        src="/imagesbm14/faq/Tape.png"
        alt=""
        className="absolute left-0 w-full pointer-events-none select-none z-[2]"
        style={{ top: "-30vw", height: "auto" }}
      />
      <img
        src="/imagesbm14/faq/Tape-2.png"
        alt=""
        className="absolute left-0 w-full pointer-events-none select-none z-[3]"
        style={{ top: "-24vw", height: "auto" }}
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

      {/* Left sticker cluster (green star → purple → blue crown) — pinned to fixed top so it stays static when questions toggle */}
      <img
        src="/imagesbm14/faq/StickerRandom1%202.png"
        alt=""
        className="hidden sm:block absolute pointer-events-none select-none z-[3]"
        style={{
          left: "clamp(-120px, -4vw, -16px)",
          top: "clamp(380px, 32vw, 520px)",
          height: "clamp(280px, 38vw, 620px)",
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
          bottom: "clamp(8px, 1.5vw, 20px)",
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
          left: "clamp(16px, 4vw, 48px)",
          bottom: "clamp(12px, 2vw, 24px)",
          width: "clamp(96px, 14vw, 180px)",
          height: "auto",
        }}
      />

      {/* Bottom-right BOILER car — orange cloud (Splotch) behind, car + graffiti on top */}
      <div
        className="absolute pointer-events-none select-none z-[3]"
        style={{
          right: "clamp(-60px, -3vw, 0px)",
          bottom: "clamp(12px, 2vw, 24px)",
          width: "clamp(150px, 22vw, 360px)",
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
