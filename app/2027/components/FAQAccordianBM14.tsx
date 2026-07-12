/**
 * FAQAccordianBM14.tsx
 * Yellow caution-tape styled accordion for the 2027 FAQ section.
 */

import React, { useState } from "react";

type FAQAccordianProps = {
  questions: { question: string; answer: string }[];
};

function HazardStripes() {
  return (
    <div
      className="flex-shrink-0 self-stretch"
      style={{
        width: "clamp(48px, 8vw, 72px)",
        background: `repeating-linear-gradient(
          -55deg,
          #000 0px,
          #000 16px,
          #FFE42D 16px,
          #FFE42D 32px
        )`,
      }}
      aria-hidden
    />
  );
}

export default function FAQAccordian({ questions }: FAQAccordianProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-5">
      {questions.map((faq, index) => {
        const stripesOnLeft = index % 2 === 1;
        const isOpen = openIndex === index;

        return (
          <div key={index} className="w-full">
            <button
              type="button"
              className="flex items-stretch w-full overflow-hidden transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "#FFE42D" }}
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
            >
              {stripesOnLeft && <HazardStripes />}

              <span
                className={`flex-1 py-5 px-5 text-left text-black ${
                  stripesOnLeft ? "text-center sm:text-left" : ""
                }`}
                style={{
                  fontFamily: "var(--font-source-code-pro)",
                  fontWeight: 700,
                  fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)",
                  lineHeight: 1.3,
                }}
              >
                {faq.question}
              </span>

              {!stripesOnLeft && <HazardStripes />}

              <span
                className="flex items-center justify-center flex-shrink-0 px-3 text-black transition-transform duration-300"
                style={{
                  fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="px-5 py-4 text-white text-left"
                style={{
                  backgroundColor: "#111111",
                  border: "2px solid #FFE42D",
                  borderTop: "none",
                  fontFamily: "var(--font-source-code-pro)",
                  fontWeight: 400,
                  fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
