"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "@/app/contact/form/Form";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const infoCardsRef = useRef([]);
    const headerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate header
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            });

            // Animate info cards
            gsap.from(infoCardsRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            });

            // Animate map
            gsap.from(mapRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reset",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef}>
            <section className="py-16 px-4 md:px-12 lg:px-24 bg-[#f4fcfc] text-center">
                {/* Header */}
                <div ref={headerRef}>
                    <p className="text-sm text-[#d0342c] font-medium uppercase mb-2">Get in Touch</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">
                        Seamless Communication, Global Impact.
                    </h2>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
                    {[
                        {
                            icon: <FaMapMarkerAlt className="text-[#d0342c] text-2xl" />,
                            title: "Head Office",
                            desc: <>Jalan Cempaka Wangi No 22<br />Jakarta - Indonesia</>
                        },
                        {
                            icon: <FaEnvelope className="text-[#d0342c] text-2xl" />,
                            title: "Email Support",
                            desc: <>support@yourdomain.tld<br />hello@yourdomain.tld</>
                        },
                        {
                            icon: <FaPhoneAlt className="text-[#d0342c] text-2xl" />,
                            title: "Let's Talk",
                            desc: <>Phone : +6221.2002.2012<br />Fax : +6221.2002.2013</>
                        },
                        {
                            icon: <FaClock className="text-[#d0342c] text-2xl" />,
                            title: "Office Hour",
                            desc: <>Monday - Friday<br />08.00 - 17.00</>
                        }
                    ].map((item, i) => (
                        <div key={i} ref={el => infoCardsRef.current[i] = el}>
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Form & Map */}
                <div>
                    <Form />
                    <div className="grid grid-cols-1 lg:grid-cols-12 py-6">
                        <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                            <div ref={mapRef} className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.209017979722!2d78.0724633!3d30.3734221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7e115a71725%3A0x4c7db8dceef7823a!2sDr%20Amit%20Badola%20%E2%80%93%20Consultant%20Medical%20%26%20Hemato-Oncologist!5e0!3m2!1sen!2sin!4v1751609615027!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    className="rounded-xl"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
