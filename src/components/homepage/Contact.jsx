"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
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
            className="py-16 px-4 md:px-12 lg:px-24 bg-[#f2efef] text-center"
        >
            <p className="text-3xl text-[#d0342c] font-semibold uppercase mb-10" style={{ fontFamily: "Roboto Slab, serif" }}>
                Get in Touch With Us
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
                {/* Head Office */}
                <Link href="https://maps.app.goo.gl/72m8dfxNqBuJndLU7" target='_blank'>
                    <div ref={(el) => (cardsRef.current[0] = el)}>
                        <div className="flex justify-center mb-4">
                            <FaMapMarkerAlt className="text-[#d0342c] text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <p>
                            59/1, Race Course, Opp. UCO Bank, Dehradun, Uttarakhand - 248001
                        </p>
                    </div>
                </Link>

                {/* Email Support */}
                <Link href="mailto:dramitoncology@gmail.com" target='_blank'>
                    <div ref={(el) => (cardsRef.current[1] = el)}>
                        <div className="flex justify-center mb-4">
                            <FaEnvelope className="text-[#d0342c] text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                        <p>
                            dramitoncology@gmail.com
                        </p>
                    </div>
                </Link>

                {/* Let's Talk */}
                <Link href="tel:9286471180" target='_blank'>
                    <div ref={(el) => (cardsRef.current[2] = el)}>
                        <div className="flex justify-center mb-4">
                            <FaPhoneAlt className="text-[#d0342c] text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Let's Talk</h3>
                        <p>
                            Phone : +91 92864 71180
                        </p>
                    </div>
                </Link>

                {/* Office Hour */}
                <div ref={(el) => (cardsRef.current[3] = el)}>
                    <div className="flex justify-center mb-4">
                        <FaClock className="text-[#d0342c] text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Timing Schedule</h3>
                    <p>
                        Tuesday - Thursday - Friday
                        <br />
                        5:00 PM to 7:00 PM
                    </p>
                </div>
            </div>

            <Form />
        </section>
    );
};

export default Contact;
