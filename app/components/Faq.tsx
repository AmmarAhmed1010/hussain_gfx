"use client"
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How much do you charge for creating a thumbnail?",
    answer: "It generally depends on the niche and complexity of a thumbnail.",
  },
  {
    question: "How long do you generally take to deliver a thumbnail?",
    answer: "We generally deliver within 24 hours after the order is placed.",
  },
  {
    question: "Do I get additional revisions with the thumbnail?",
    answer: "Yes, you get unlimited revisions for a thumbnail.",
  },
  {
    question: "Do you offer monthly or weekly packages?",
    answer: "Yes, we can create a package based upon your requirements",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg shadow-sm border-[#D4D4D4] transition-colors duration-300 ${activeIndex === index ? "bg-[#232323] text-[#FFFFFF]" : "bg-[#6B6B6B] text-[#D4D4D4]"}`}
          >
            <button
              className="text-sm md:text-lg lg:text-xl font-semibold w-full text-left flex justify-between items-center focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="hidden md:inline text-[#D4D4D4]">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
