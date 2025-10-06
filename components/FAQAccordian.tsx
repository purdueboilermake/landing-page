/**
 * FAQAccordian.tsx
 * Will be used to display the Frequently Asked Questions that hackers might have
 * @AshokSaravanan222
 * 09-15-2024
 */
import React, { useState } from 'react';
import Image from 'next/image';
import TypedText, { TypedHeading } from './TypedText';

type FAQAccordianProps = {
  questions: { question: string, answer: string }[];
};

export default function FAQAccordian({ questions }: FAQAccordianProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
       <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 drop-shadow-lg font-disket-mono mb-8">
           FAQ
       </div>

      {/* Individual question boxes matching the image */}
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-4 md:p-5 lg:p-6 font-medium border-2 border-white bg-neutral-900/90 backdrop-blur-sm text-white hover:bg-neutral-800/90 transition-all duration-300 ease-in-out
                ${openIndex === index ? 'border-b-0' : ''}
              `}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <div
                className="text-white text-left text-lg md:text-xl font-bold"
              >
                {faq.question}
              </div>
              <div className={`text-white text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
            
            {/* Answer content - seamless connection to question header */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 md:p-5 lg:p-6 border-2 border-white bg-neutral-950/90 text-white text-left">
                <TypedText 
                  className="text-white text-sm md:text-base leading-relaxed font-futura-cyrillic text-left"
                  speed={10}
                  delay={openIndex === index ? 100 : 0}
                >
                  {faq.answer}
                </TypedText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
