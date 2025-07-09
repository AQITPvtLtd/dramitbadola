"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "@/components/homepage/Contact";

gsap.registerPlugin(ScrollTrigger);

const Contactus = () => {
    const sectionRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
        <div ref={sectionRef} className="bg-[#f2efef]">
            <Contact />
            <div className="grid grid-cols-1 lg:grid-cols-12 py-6">
                <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                    <div className="map-container" ref={mapRef}>
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
    );
};

export default Contactus;
