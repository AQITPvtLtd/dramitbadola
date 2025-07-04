"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-cover">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner/newbanner1.png"
          alt="Banner"
          fill
          priority
          className="object-cover w-full h-full"
        />

        {/* Updated Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#d0342c]/90 via-[#d0342c]/40 to-[#d0342c]/20" />
      </div>


      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 max-w-4xl">
        {/* Accent Line */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Dr. Amit Badola
        </h1>

        <h2
          className="text-2xl sm:text-3xl text-white mt-2 font-semibold"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Consultant – Medical Oncology
        </h2>

        <p className="text-lg sm:text-xl text-gray-100 mt-4 max-w-xl leading-relaxed">
          Expert in Medical Oncology, Cancer Care, and Bone Marrow Transplantation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="group inline-flex items-center justify-center bg-[#d0342c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#d0342c] border-2 border-[#d0342c] transition-all"
          >
            Learn More
            <MdOutlineArrowOutward className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact">
            <button className="group inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all">
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
