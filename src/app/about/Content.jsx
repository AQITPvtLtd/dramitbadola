"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const [activeCategory, setActiveCategory] = useState("Work Experience");
  const contentRef = useRef(null); // 👈 ref for animation

  const categories = [
    "Work Experience",
    "Education & Training",
    "Memberships",
    "Speciality Interest",
    "Research Papers & Publications",
  ];

  const AboutContent = [
    {
      id: 1,
      content: [
        "Currently working at Max Super Speciality Hospital, Dehradun (Mar 2025 - Present)",
        "Associate Consultant – BLK-Max Super Speciality Hospital, Delhi (Feb 2024 - Mar 2025)",
        "Editor – Asian Journal of Oncology (Mar 2024 - Jan 2025)",
        "Reviewer – Clinical Radiology, Cancer Epidemiology and Indian Journal of Gynaecologic Oncology (2024)",
        "Senior Resident – Asian Institute of Medical Sciences, Faridabad (2021 - 2024)",
        "Senior Resident – Swami Rama Himalayan University, Uttarakhand (2020 - 2021)",
      ],
      category: "Work Experience",
    },
    {
      id: 2,
      content: [
        "DrNB (Medical Oncology) – Asian Institute of Medical Sciences, Haryana (2024)",
        "Preceptorship – Indian Leukemia Academy (2024)",
        "MRCP (Medical Oncology) – Royal College of Physicians, United Kingdom (2023)",
        "Preceptorship (ESMO Breast Oncology) – Singapore (2023)",
        "Preceptorship (Lymphoma) – Indian Society of Medical & Paediatric Oncology (2023)",
        "Certification (Medical Oncology) – European Society for Medical Oncology (2022)",
        "MD (Radiation Oncology) – Swami Rama Himalayan University, Uttarakhand (2020)",
        "MBBS – VCSG Government Medical College, Srinagar (2015)",
      ],
      category: "Education & Training",
    },
    {
      id: 3,
      content: [
        "Indian Society of Medical and Pediatric Oncology (ISMPO)",
        "European Society for Medical Oncology (ESMO)",
        "American Society of Clinical Oncology (ASCO)",
        "American Association for Cancer Research (AACR)",
      ],
      category: "Memberships",
    },
    {
      id: 4,
      content: [
        "Precision Oncology",
        "Targeted therapy",
        "Immunotherapy",
        "Molecular Oncology",
        "Cellular Therapy (BMT & CAR-T Cell Therapy)",
        "Chemotherapy in Solid Tumors (Breast, Lung, GI, GU, Head & Neck, Sarcoma)",
        "Hematologic Malignancies (Lymphoma, Multiple Myeloma, Acute & Chronic Leukemia)",
      ],
      category: "Speciality Interest",
    },
    {
      id: 5,
      content: [
        "19 publications in national & international indexed journals",
        "Poster presentation in European Society for Medical Oncology, Spain (2023)",
        "Poster presentation in European Society for Medical Oncology, Singapore (2022)",
      ],
      category: "Research Papers & Publications",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 80, // 👈 down to up
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
    });

    return () => ctx.revert(); // cleanup
  }, [activeCategory]);

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-8 md:flex gap-8"
      ref={contentRef} // 👈 ref applied here
    >
      {/* Sidebar Tabs */}
      <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-3 w-full md:w-1/3 mb-6 md:mb-0">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`min-w-[140px] cursor-pointer text-center px-5 py-3 rounded-xl text-sm md:text-base shadow-sm transition-all duration-200 font-semibold h-[48px]
              ${
                activeCategory === category
                  ? "bg-[#d0342c] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-[#d0342c] hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/3">
        {AboutContent.filter(
          (item) => item.category === activeCategory
        ).map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3
              className="text-xl text-center font-semibold mb-4 text-[#d0342c]"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              {item.category}
            </h3>
            <ul className="space-y-4 text-gray-700 text-[16px] leading-relaxed">
              {item.content.map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#d0342c] mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
