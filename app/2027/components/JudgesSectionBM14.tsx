/**
 * JudgesSectionBM14.tsx
 * Judges section. Fills a fixed block of space (min-h-screen) so the layout
 * in page.tsx can budget around a known height. Shows "Coming Soon" until
 * a judges list is passed in.
 */

import React from "react";

type Judge = {
  name: string;
  title?: string;
  company?: string;
  image?: string;
};

type JudgesSectionProps = {
  judges?: Judge[];
};

export default function JudgesSection({ judges = [] }: JudgesSectionProps) {
  const isComingSoon = judges.length === 0;

  return (
    <div
      className={`w-full flex flex-col items-center justify-start ${isComingSoon
        ? "min-h-[35vh] py-8 gap-4 md:gap-6"
        : "min-h-[70vh] md:min-h-[120vh] gap-10 md:gap-16 pt-24 md:pt-32 pb-32 md:pb-64"
        }`}
    >
      <h2
        id="judges-heading"
        className="text-center select-none tracking-wider"
        style={{
          fontFamily: "var(--font-owned), var(--font-sprite-graffiti), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(2.75rem, 8vw, 6rem)",
          lineHeight: "100%",
          letterSpacing: "0.04em",
          color: "#FFE958",
          textShadow:
            "0 4px 0 #F0A83A, 0 8px 0 #F0A83A, 0 12px 18px rgba(0,0,0,0.45)",
        }}
      >
        JUDGES
      </h2>

      {judges.length === 0 ? (
        <p
          className="text-center text-white"
          style={{
            fontFamily: "var(--font-code-pro), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
            lineHeight: 1.2,
            letterSpacing: "0.06em",
          }}
        >
          Coming Soon
        </p>
      ) : (
        <div className="grid w-full max-w-[1180px] gap-8 px-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {judges.map((judge) => (
            <div key={judge.name} className="text-center text-white">
              {/* TODO: judge card design */}
              <p style={{ fontFamily: "var(--font-code-pro)", fontWeight: 700 }}>
                {judge.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}