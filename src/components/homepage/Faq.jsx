"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: 'How often should I visit the dentist?', answer: 'It is recommended to visit the dentist every 6 months for a check-up and cleaning.' },
  { question: 'What should I do in a dental emergency?', answer: 'Contact your dentist immediately. If unavailable, visit an emergency room.' },
  { question: 'Do you offer services for kids?', answer: 'Yes, we provide pediatric dental services tailored for children.' },
  { question: 'What are my options for replacing missing teeth?', answer: 'Options include dental implants, bridges, and dentures based on individual needs.' },
  { question: 'Is teeth whitening safe?', answer: 'Yes, professional teeth whitening is safe when done under a dentist’s supervision.' },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    faqRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reset", // repeat on scroll
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f4fcfc]">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Heading */}
        <div>
          <p className="text-[#d0342c] font-medium mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>Everything You Need to Know</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "Roboto Slab, serif" }}>
            Frequently Asked<br />Questions
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="border-b pb-4 opacity-0"
            >
              <button
                className="w-full flex justify-between items-center text-left text-gray-900 font-medium text-base focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  } text-gray-500`}
                />
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
