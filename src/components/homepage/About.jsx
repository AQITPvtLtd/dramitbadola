'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Content from '@/app/about/Content';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse', // repeat on scroll in/out
            once: false, // ensure it happens every time
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse', // repeat
            once: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 md:px-12 lg:px-24 bg-[#f2efef]"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* Image */}
        <div ref={imageRef} className="flex-shrink-0">
          <div className="relative w-[300px] h-[358px] mt-7 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/about/doctorimg.jpeg"
              alt="Portrait of Dr. Amit Badola, Consultant in Medical Oncology"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div ref={contentRef} className="w-full flex-1 min-w-0">
          <Content />
        </div>
      </div>
    </section>
  );
};

export default About;
