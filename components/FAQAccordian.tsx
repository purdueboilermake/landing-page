/**
 * FAQAccordian.tsx
 * Will be used to display the Frequently Asked Questions that hackers might have
 * @AshokSaravanan222
 * 09-15-2024
 */
import React, { useState } from 'react';
import Image from 'next/image';
import TypedText from './TypedText';

type FAQAccordianProps = {
  questions: { question: string, answer: string }[];
};

export default function FAQAccordian({ questions }: FAQAccordianProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndices(prev => {
      if (prev.includes(index)) {
        // If already open, close it by filtering it out
        return prev.filter(i => i !== index);
      } else {
        // If closed, open it by adding to the array
        return [...prev, index];
      }
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-8 overflow-x-hidden">
        {/* <div className="mb-12 text-center">
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
       </div> */}

      {/* Individual question boxes matching the image */}
      <div className="space-y-6 w-full overflow-x-hidden">
        {questions.map((faq, index) => (
          <div key={index} className="w-full relative overflow-x-hidden">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-4 md:p-5 lg:p-6 font-medium border-2 border-white backdrop-blur-sm text-white hover:bg-gray-800/90 transition-all duration-300 ease-in-out z-10
                ${openIndices.includes(index) ? 'border-b-0' : ''}
              `}
              style={{backgroundColor: '#2A2627E6'}}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndices.includes(index)}
            >
              <div
                className="text-white text-left text-lg md:text-xl font-bold break-words overflow-wrap-anywhere"
                style={{ wordBreak: 'break-word' }}
              >
                {faq.question}
              </div>
              <div className={`text-white text-xl transition-transform duration-300 flex-shrink-0 ml-2 ${openIndices.includes(index) ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
            
            {/* Answer content - seamless connection to question header */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndices.includes(index) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                willChange: 'max-height, opacity'
              }}
            >
               <div className="p-4 md:p-5 lg:p-6 border-2 border-white text-white text-left overflow-hidden overflow-wrap-anywhere" style={{backgroundColor: '#2A2627E6', wordBreak: 'break-word'}}>
                 <TypedText 
                   className="text-white text-sm md:text-base leading-relaxed text-left font-futura-cyrillic"
                   delay={openIndices.includes(index) ? 100 : 0}
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
