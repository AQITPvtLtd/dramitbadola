'use client';
import Image from 'next/image';
import React from 'react';

const Whychooseus = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-[#d0342c] font-semibold mb-2">
            Why Choose Our Dental Care
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Exceptional Service With a <br /> Personal Touch
          </h2>
          <p className="text-gray-500 mb-8 text-base">
            Choosing the right dental provider matters. We combine expert care, advanced
            technology, and a warm atmosphere to ensure every visit is comfortable,
            efficient, and tailored to your unique needs.
          </p>

          <hr className="border-gray-200 mb-6" />

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900">Experienced Dental</h4>
              <p className="text-gray-500 text-sm mt-1">
                Skilled care backed by years of trusted dental experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
              <p className="text-gray-500 text-sm mt-1">
                Modern tools ensure accurate and efficient treatments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Personalized Treatment</h4>
              <p className="text-gray-500 text-sm mt-1">
                Custom care plans made to fit your smile and lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Family-Friendly</h4>
              <p className="text-gray-500 text-sm mt-1">
                Welcoming space for kids, teens, adults, and seniors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/banner/b.jpg"
              alt="Dental Service 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden row-span-2">
            <Image
              src="/banner/b.jpg"
              alt="Dental Service 3"
              width={300}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/banner/b.jpg"
              alt="Dental Service 2"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
