"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(".anim-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, contentRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner/banner.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#d0342c]/90 via-[#d0342c]/40 to-[#d0342c]/20" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 h-full flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 max-w-4xl"
      >
        <h1
          className="anim-item text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Dr. Amit Badola
        </h1>

        <h2
          className="anim-item text-2xl sm:text-3xl text-white mt-2 font-semibold"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Consultant – Medical Oncology
        </h2>

        <p className="anim-item text-lg sm:text-xl text-gray-100 mt-4 max-w-xl leading-relaxed">
          Expert in Medical Oncology, Cancer Care, and Bone Marrow Transplantation.
        </p>

        <div className="anim-item mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="group inline-flex items-center justify-center bg-[#d0342c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#d0342c] border-2 border-[#d0342c] transition-all"
          >
            Learn More
            <MdOutlineArrowOutward className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact">
            <button className="group inline-flex items-center justify-center bg-transparent cursor-pointer text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#d0342c] hover:border-[#d0342c] transition-all">
              Contact Us
              <MdOutlineArrowOutward className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
