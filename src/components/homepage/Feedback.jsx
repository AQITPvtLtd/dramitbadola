'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sumanta Kumar',
    text: 'I do not want to say like others....kindly do consult and I am sure you fill that you are in right hand. You will impress with behavior of this doctor definitely.',
  },
  {
    name: 'Manas Sapra',
    text: 'Dr. Amit is a very generous and helpful doctor I have visited with my dad hospitalisation. My dad suffered from Cancer and Dr. Amit helped us in the chemotherapy and he was very good in explaining the treatment and help us with the medications. Thanks Dr. Amit for all the consultation and help with my dad s treatment.',
  },
  {
    name: 'Aman kumar',
    text: 'Dr Amit badola is an excellent doctor. He took the time to listen to my concerns and explained everything clearly.',
  },
  {
    name: 'Akash Shahwal',
    text: 'I was treated by Amit Sir, in Asian hospital. With my overall experience, I can tell you that he is very passionate towards his job. He is very polite in his words, and his way of treating patients is very professional and loving.',
  },
  {
    name: 'Birendra Singh Airi',
    text: 'I had a great experience with Dr. Amit Badola—he is caring, professional, and truly dedicated to his patients.',
  },
  {
    name: 'Pooja Sharma',
    text: 'I appreciate the care and attention you provided during treatment... that was really very helpful. Best oncologist 🙏',
  },
];

const Feedback = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f2efef] text-center">
      <p className="text-[#d0342c] font-medium mb-2">Testimonials</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-10" style={{ fontFamily: "Roboto Slab, serif" }}>
        Customer Feedback & <br /> Comments.
      </h2>

      {/* Avatar Row */}
      {/* <div className="flex justify-center items-center gap-4 mb-10 flex-wrap">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border border-gray-300"
          >
            <img
              src={`/logo${(i % 5) + 1}.png`}
              alt={`Client ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}

      {/* Testimonial Box */}
      <div className="max-w-3xl mx-auto relative transition-all duration-500 ease-in-out">
        <div className="flex justify-center mb-4 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <div className="transition-all duration-500 ease-in-out px-4 md:px-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-6 min-h-[120px]">
            “{testimonials[current].text}”
          </p>
          <h4 className="font-semibold text-gray-900 text-lg">
            {testimonials[current].name}
          </h4>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="text-xl text-gray-800 hover:text-black transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>
          <span className="text-sm text-gray-700">{`${current + 1} / ${total}`}</span>
          <button
            onClick={nextSlide}
            className="text-xl text-gray-800 hover:text-black transition-colors cursor-pointer"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
