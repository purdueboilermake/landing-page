/**
 * FAQAccordian.tsx
 * Will be used to display the Frequently Asked Questions that hackers might have
 * @AshokSaravanan222
 * 09-15-2024
 */
import React, { useState } from 'react';
import Image from 'next/image';

type FAQAccordianProps = {
  questions: { question: string, answer: string }[];
};

export default function FAQAccordian({ questions }: FAQAccordianProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" className="space-y-1">
      {questions.map((faq, index) => (
        <div key={index} className="max-w-full">
          <h2>
            <button
              type="button"
              className={`flex text-xs md:text-md lg:text-xl items-center justify-between p-2 md:p-3 lg:p-5 font-medium font-subtitle border border-b-0 bg-[#E1E5E7] ${index === 0 ? "rounded-t-xl" : index === questions.length - 1 && openIndex !== index ? "rounded-b-xl" : "" } dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 w-full`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span>{faq.question}</span>
              <Image
                src={"/images/pin.png"}
                alt="Pin Icon"
                className={`w-4 md:w-6 lg:w-8 transition-transform duration-200 ${openIndex === index ? 'rotate-90' : ''}`}
                width={32}
                height={32}
              />
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${openIndex === index ? 'block' : 'hidden'} p-2 md:p-3 lg:p-5 border border-white dark:border-gray-700 bg-[#E1E5E7] rounded-b-xl w-full text-xs md:text-md lg:text-xl text-left`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <p className="mb-2 dark:text-gray-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
