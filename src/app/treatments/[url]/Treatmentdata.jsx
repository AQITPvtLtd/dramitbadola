'use client';
import { data as allData } from '@/data/info';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowBigRightLines } from "react-icons/tb";

const Treatmentdata = ({ url }) => {
    const service = allData.find((a) => a.url === url);

    if (!service) {
        return <p className="text-center text-[#d0342c]">Service not found!</p>;
    }

    return (
        <div className="mx-auto px-4 py-8 bg-[#f2efef]">
            <div className="flex flex-col items-center">
                {/* Image Section */}
                <div className="w-full max-w-8xl relative">
                    <Image
                        src={service.image}
                        width={1000}
                        height={350}
                        className="w-full object-cover rounded-lg shadow-lg lg:h-[300px] h-[200px]"
                        alt="Service Image"
                    />
                </div>

                <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 w-full max-w-6xl">
                    {/* Content Section */}
                    <div className="relative bg-white px-6 py-8 shadow-xl rounded-2xl text-center col-span-9 lg:-mt-52">
                        <h1
                            className="font-extrabold text-2xl md:text-3xl text-[#d0342c] underline mb-4"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                            {service.title}
                        </h1>
                        <div className="text-lg text-gray-700 space-y-4 text-left">
                            {service.description.map((item, index) => (
                                <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="shadow-2xl sticky top-40 bg-white px-4 py-4 rounded-lg col-span-3 w-auto h-fit mt-10 lg:mt-0">
                        <h2
                            className="text-xl font-semibold mb-4 dark:text-black"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                            Our Treatments
                        </h2>
                        <ul className="space-y-2">
                            {allData.map((item) => (
                                <li key={item.url}>
                                    <Link href={`${item.url}`}>
                                        <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                            <TbArrowBigRightLines className='mt-1' /> {item.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-3">
                            <Link
                                href={`/contact`}
                                className="px-4 py-2 bg-[#d0342c] text-white text-lg rounded-lg block text-center transition-all border-2 border-transparent hover:border-[#d0342c] hover:text-[#d0342c] hover:bg-white"
                            >
                                Book Your Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatmentdata;
