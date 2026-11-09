import React from "react";

// Percent of the billboard image. Transparent glyphs sit on the painted
// letters so the art stays put and the words can be highlighted.
const BOUNDS = {
  anchored: {
    // Stop above XIV. The painted word's lowest flourishes share a row
    // with the top of XIV, and a box that tall highlights both.
    name: { left: "11.3%", top: "4.4%", width: "80.6%", height: "21.6%" },
    xiv: { left: "42.2%", top: "27.2%", width: "17.3%", height: "21.2%" },
  },
  floating: {
    name: { left: "11.3%", top: "8.6%", width: "80.6%", height: "42.2%" },
    xiv: { left: "42.1%", top: "53.2%", width: "17.4%", height: "41.4%" },
  },
} as const;

function Word({
  box,
  children,
}: {
  box: React.CSSProperties;
  children: string;
}) {
  return (
    <span className="billboard-word" style={box}>
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        role="presentation"
      >
        <text
          x="0"
          y="168"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fontSize="200"
          fontFamily="Impact, 'Arial Black', sans-serif"
          fill="transparent"
        >
          {children}
        </text>
      </svg>
    </span>
  );
}

export default function BillboardWordmark({
  variant,
}: {
  variant: keyof typeof BOUNDS;
}) {
  const box = BOUNDS[variant];

  return (
    <h1 className="billboard-wordmark">
      <Word box={box.name}>BoilerMake</Word> <Word box={box.xiv}>XIV</Word>
    </h1>
  );
}
