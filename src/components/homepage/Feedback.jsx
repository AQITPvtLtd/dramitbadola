'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Diansi Disouse',
    role: 'Happy Client',
    text: 'Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia Quisque amet velit amet dui hendrerit ultricies id ipsum Mauris sit amet Suspendis potent quis commodo ligula vestibulu lacinia est',
  },
  {
    name: 'Alex Johnson',
    role: 'Regular Patient',
    text: 'Aenean sit amet nisi non eros suscipit lobortis. Integer a bibendum augue. Phasellus et libero a velit dictum egestas non vel leo.',
  },
  {
    name: 'Sophia Lee',
    role: 'Happy Client',
    text: 'Curabitur vehicula libero at dui laoreet, vitae fringilla risus congue. Pellentesque habitant morbi tristique senectus et netus.',
  },
];

const Feedback = () => {
  const [current, setCurrent] = useState(1);
  const total = testimonials.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f4fcfc] text-center">
      <p className="text-blue-600 font-medium mb-2">Testimonials</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Customer Feedback & <br /> Comments.
      </h2>

      <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
        {/* Avatar Bubbles */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border border-gray-300"
          >
            <img
              src={`/logo${(i % 5) + 1}.png`} // Use your image paths
              alt={`Client ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Testimonial */}
      <div className="max-w-3xl mx-auto relative">
        <div className="flex justify-center mb-4 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          “{testimonials[current].text}”
        </p>
        <h4 className="font-semibold text-gray-900 text-lg">
          {testimonials[current].name}
        </h4>
        <p className="text-sm text-gray-500">{testimonials[current].role}</p>

        {/* Pagination + Arrows */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button onClick={prevSlide} className="text-xl text-gray-800 hover:text-black">
            <FaArrowLeft />
          </button>
          <span className="text-sm text-gray-700">{`${current + 1} / ${total}`}</span>
          <button onClick={nextSlide} className="text-xl text-gray-800 hover:text-black">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
