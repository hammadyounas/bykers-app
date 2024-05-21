// components/Faq.tsx
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is the price of Honda Pridor 2024?',
    answer:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
  },
  {
    question: 'What is the engine displacement of Honda Pridor?',
    answer:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
  },
  {
    question: 'What is the fuel tank capacity of Honda Pridor?',
    answer:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
  },
  {
    question: 'Which bike is better Suzuki Sprinter ECO VS Honda Pridor?',
    answer:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
  },
  {
    question: 'Which bikes are similar to Honda Pridor?',
    answer:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
  },
  {
    question: 'What is the mileage/fuel average of Honda Pridor??',
    answer:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
  },
  // Add more FAQs here
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mt-10 w-[95%] sm:mt-20 sm:w-[90%] lg:w-[70%] xl:w-[60%]">
      <h1 className="mb-5 text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
        Honda Pridor Price
      </h1>
      {faqData.map((item, index) => (
        <div key={index} className="mb-2 text-xs sm:text-sm lg:text-base">
          <div className="relative flex w-full">
            <button
              className="relative w-full rounded-md border border-gray-300 bg-slate-100 p-2 text-left  font-medium text-gray-900 sm:p-4"
              onClick={() => toggleFaq(index)}
            >
              <p className="w-[90%]">{item.question}</p>
            </button>
            {openIndex === index ? (
              <i className="fa-solid fa-chevron-down absolute right-4 top-1/3"></i>
            ) : (
              <i className="fa-solid fa-chevron-up absolute right-4 top-1/3"></i>
            )}
          </div>
          {openIndex === index && (
            <div className="rounded-b-md border border-gray-300 p-2 text-gray-700 sm:p-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
