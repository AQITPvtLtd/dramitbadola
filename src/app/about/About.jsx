"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Statistics from '@/components/homepage/Statistics';
import Missionvision from './Missionvision';
import Faq from '@/components/homepage/Faq';
import Content from './Content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image animation (down to up)
            gsap.from(imageRef.current, {
                opacity: 0,
                y: 80, // 👈 start from 80px below
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reset",
                },
            });

            // Text card animation (down to up)
            gsap.from(contentRef.current, {
                opacity: 0,
                y: 80, // 👈 start from 80px below
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reset",
                },
            });
        });

        return () => ctx.revert(); // clean up
    }, []);

    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 bg-[#f2efef]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                {/* Image */}
                <div className="lg:col-span-5 flex justify-center" ref={imageRef}>
                    <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102 shadow-xl">
                        <Image
                            src="/about/doctorimg.jpeg"
                            width={500}
                            height={500}
                            alt="Dr. Amit Badola"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Content Card */}
                <div className="lg:col-span-7" ref={contentRef}>
                    <div className="rounded-xl shadow-xl backdrop-blur-md bg-white/90 border border-gray-200 p-6 lg:p-8 transition-transform duration-300 hover:scale-102">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Dr. Amit Badola
                        </h2>
                        <p className="text-lg font-semibold text-gray-600 mb-1">Consultant – Medical Oncology</p>
                        <p className="text-md font-medium text-[#d0342c] mb-3">Medical Oncology,  Hemato Oncology and Cancer Care</p>
                        <div className="h-[2px] w-20 bg-[#d0342c] mb-4"></div>
                        <p className="text-gray-700 text-base leading-relaxed">
                            Dr. Amit Badola is a dedicated and highly experienced Medical Oncologist at Max Super Speciality Hospital in Dehradun. With a strong background in cancer treatment and a patient-first approach, he specializes in comprehensive cancer care including chemotherapy, targeted therapy, and immunotherapy. Dr. Badola is known for his compassionate care, evidence-based treatment plans, and commitment to improving patient outcomes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <Content />
                <Statistics />
                <Missionvision />
                <Faq />
            </div>
        </div>
    );
};

export default Aboutus;
