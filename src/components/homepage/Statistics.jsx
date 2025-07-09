"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { number: 10000, label: "Happy Patients" },
  { number: 88, label: "Success Rate" },
  { number: 5, label: "Years of Experience" },
];

const AnimatedNumber = ({ target, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // total animation duration in ms
      const increment = target / (duration / 16); // assuming 60 FPS
      const animate = () => {
        start += increment;
        if (start < target) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      animate();
    }
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Statistics = () => {
  return (
    <section className="bg-[#d0342c] py-12 flex justify-center items-center">
      <div className="max-w-6xl w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-white">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold">
              <AnimatedNumber
                target={item.number}
                suffix={item.label === "Success Rate" ? "%" : "+"}
              />
            </h3>
            <p className="mt-2 text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
