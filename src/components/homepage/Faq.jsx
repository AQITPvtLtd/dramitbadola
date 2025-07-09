"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: 'What is a Hemato-Oncologist?', answer: 'A Hemato-Oncologist is a doctor who specializes in diagnosing and treating blood-related cancers such as leukemia, lymphoma, myeloma, and other disorders of the blood, bone marrow, and lymphatic system.' },
  { question: 'What types of cancers do you treat?', answer: 'I treat a wide range of blood cancers, including leukemia, lymphoma (Hodgkin and non-Hodgkin), multiple myeloma, and related conditions like myelodysplastic syndromes and bone marrow failure disorders.' },
  { question: 'What are the early signs of blood cancer?', answer: 'Common early symptoms include unexplained weight loss, fatigue, frequent infections, night sweats, bruising easily, swollen lymph nodes, and persistent fever.' },
  { question: 'How is blood cancer diagnosed?', answer: 'Diagnosis typically involves blood tests, bone marrow biopsy, imaging (like PET/CT scans), and sometimes genetic or molecular testing to confirm the type and stage of the disease.' },
  { question: 'What treatment options do you offer?', answer: 'Treatment may include chemotherapy, targeted therapy, immunotherapy, stem cell (bone marrow) transplant, and CAR-T cell therapy — based on the patient’s condition and cancer type.' },
  { question: 'Is blood cancer curable?', answer: 'Some types of blood cancers can be cured, especially if detected early and treated with appropriate therapies. Others can be managed effectively with long-term treatment.' },

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
    <section className="py-20 px-6 md:px-12 lg:px-24 lg:mx-15 mx-5 bg-[#f2efef]">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Heading */}
        <div>
          <p className="text-[#d0342c] font-medium mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>Everything You Need to Know</p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "Roboto Slab, serif" }}>
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
                className="w-full flex justify-between items-center text-left text-gray-900 font-semibold text-base focus:outline-none"
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
