'use client';
import { useEffect, useRef, useState } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState(true);
  const total = testimonials.length;
  const sliderRef = useRef(null);

  const extendedTestimonials = [...testimonials, testimonials[0]]; // 👈 add first slide at end

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(total);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrent(total - 1);
      }, 20);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Reset to real first slide without animation
  useEffect(() => {
    if (current === total) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 700); // match transition duration

      setTimeout(() => {
        setIsTransitioning(true);
      }, 750);
    }
  }, [current]);

  return (
    <section className="pb-5 px-6 md:px-12 lg:px-24 bg-[#f2efef] text-center overflow-hidden">
      <p className="text-[#d0342c] font-medium mb-2">Testimonials</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-10" style={{ fontFamily: 'Roboto Slab, serif' }}>
        Patients Feedback & <br /> Comments.
      </h2>

      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedTestimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center justify-center text-center px-4 md:px-8 py-4 shrink-0"
            >
              <div className="flex justify-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl">
                {item.text}
              </p>
              <h4 className="font-semibold text-gray-900 text-lg">{item.name}</h4>
            </div>

          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="text-xl text-gray-800 hover:text-black transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>
          <span className="text-sm text-gray-700">{`${(current % total) + 1} / ${total}`}</span>
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