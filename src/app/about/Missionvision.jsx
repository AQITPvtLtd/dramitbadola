"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Missionvision = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const elements = [missionRef.current, visionRef.current];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Mission Card */}
        <div
          ref={missionRef}
          className="group rounded-xl bg-white shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#ffe6e6] rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
              <Image src="/about/mission.png" width={60} height={60} alt="Mission Icon" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
              <span className="text-gray-800">Our </span>
              <span className="text-[#d0342c]">Mission</span>
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              To deliver compassionate, personalized, and evidence-based care for patients cancer. We strive to combine medical excellence with empathy, ensuring timely diagnosis, advanced treatment, and holistic support for every individual and their family throughout their journey.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div
          ref={visionRef}
          className="group rounded-xl bg-white shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#ffe6e6] rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
              <Image src="/about/vision.png" width={60} height={60} alt="Vision Icon" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
              <span className="text-gray-800">Our </span>
              <span className="text-[#d0342c]">Vision</span>
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              To become a trusted leader in medical and hemato-oncology care by offering innovative, patient-centric solutions. We aim to create a future where blood cancers are detected early, treated effectively, and every patient receives care with dignity, hope, and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missionvision;
