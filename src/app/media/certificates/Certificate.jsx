"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

// Gallery Data
export const galleryData = [
    { id: 1, path: "certificate.png" },
    { id: 2, path: "certificate1.png" },
    { id: 3, path: "certificate2.png" },
    { id: 4, path: "certificate3.png" },
    { id: 5, path: "certificate4.png" },
    { id: 6, path: "certificate5.png" },
    { id: 7, path: "certificate6.png" },
    { id: 8, path: "certificate7.png" },
    { id: 9, path: "certificate8.png" },
    { id: 10, path: "certificate9.png" },
    { id: 11, path: "certificate10.png" },
    { id: 12, path: "certificate12.png" },
    { id: 13, path: "certificate13.png" },
    { id: 14, path: "certificate14.png" },
    { id: 15, path: "certificate15.png" },
];

const Certificate = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = () => {
        setSelectedIndex((prev) => {
            const nextIndex = (prev + 1) % galleryData.length;
            return nextIndex;
        });
    };

    const handlePrev = () => {
        setSelectedIndex((prev) => {
            const prevIndex = (prev - 1 + galleryData.length) % galleryData.length;
            return prevIndex;
        });
    };

    const closeModal = () => setSelectedIndex(null);

    return (
        <div className="bg-[#f2efef] pt-10 min-h-screen">
            {/* Banner */}
            <h1 className="text-4xl md:text-6xl text-center font-bold text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                Our Certificates
            </h1>

            {/* Gallery */}
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {galleryData.map((photo, index) => (
                    <div
                        key={photo.id}
                        className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={`/certificates/${photo.path}`}
                            alt={`Certificate ${photo.id}`}
                            width={500}
                            height={500}
                            className="w-full h-80 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
                            View Certificate
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center px-4">
                    {/* Close Button - Top Right */}
                    <div className="absolute top-4 right-4 z-50">
                        <button
                            onClick={closeModal}
                            className="text-white cursor-pointer text-3xl bg-black/60 hover:bg-black px-4 py-2 rounded-full"
                            aria-label="Close Modal"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Prev Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 cursor-pointer text-white bg-black/50 hover:bg-black p-2 rounded-full text-xl z-50"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Image Preview */}
                    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 max-w-[90vw] max-h-[85vh] overflow-hidden">
                        <img
                            src={`/certificates/${galleryData[selectedIndex].path}`}
                            alt="Selected"
                            className="object-contain max-w-full max-h-[85vh]"
                        />
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 cursor-pointer text-white bg-black/50 hover:bg-black p-2 rounded-full text-xl z-50"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Certificate;
