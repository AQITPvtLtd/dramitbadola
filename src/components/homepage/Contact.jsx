"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "@/app/contact/form/Form";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset", // repeat on scroll
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 px-4 md:px-12 lg:px-24 bg-[#f4fcfc] text-center"
        >
            <p className="text-sm text-[#d0342c] font-medium uppercase mb-2">
                Get in Touch
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">
                Seamless Communication, Global Impact.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
                {/* Head Office */}
                <div ref={(el) => (cardsRef.current[0] = el)}>
                    <div className="flex justify-center mb-4">
                        <FaMapMarkerAlt className="text-[#d0342c] text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Head Office</h3>
                    <p>
                        Max Super Speciality Hospital, Johri,
                        <br />
                        Malsi, Dehradun, Uttarakhand 248001
                    </p>
                </div>

                {/* Email Support */}
                <div ref={(el) => (cardsRef.current[1] = el)}>
                    <div className="flex justify-center mb-4">
                        <FaEnvelope className="text-[#d0342c] text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                    <p>
                        dramitoncology@gmail.com
                    </p>
                </div>

                {/* Let's Talk */}
                <div ref={(el) => (cardsRef.current[2] = el)}>
                    <div className="flex justify-center mb-4">
                        <FaPhoneAlt className="text-[#d0342c] text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Let's Talk</h3>
                    <p>
                        Phone : 9286471180
                    </p>
                </div>

                {/* Office Hour */}
                <div ref={(el) => (cardsRef.current[3] = el)}>
                    <div className="flex justify-center mb-4">
                        <FaClock className="text-[#d0342c] text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Office Hour</h3>
                    <p>
                        Monday - Friday
                        <br />
                        08.00 - 17.00
                    </p>
                </div>
            </div>

            <Form />
        </section>
    );
};

export default Contact;
