"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrNext } from "react-icons/gr";
import { data } from "@/data/info";

const Treatments = () => {
    return (
        <div className="px-4 pb-10 bg-[#f4fcfc]">
            <h1
                className="text-center font-bold text-2xl lg:text-3xl text-gray-800 pt-8 pb-6"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Our Treatments
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {data.map((d) => (
                    <div
                        key={d.id}
                        className="bg-white h-full rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden relative flex flex-col justify-between"
                    >

                        {/* Circular Image */}
                        <div className="flex justify-center items-center pt-6">
                            <div className="w-[260px] h-[200px] rounded-full overflow-hidden border-2 border-[#d0342c] shadow-md flex items-center justify-center">
                                <Image
                                    src={d.image}
                                    alt="treatment"
                                    width={260}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Title & Description */}
                        <div className="px-4 pt-4 pb-4 text-center flex flex-col justify-between flex-grow">
                            <div>
                                <h2
                                    className="text-lg font-bold text-[#d0342c] mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
                                    style={{ fontFamily: "Roboto Slab, serif" }}
                                    title={d.title}
                                >
                                    {d.title}
                                </h2>
                                <p className="text-sm text-gray-700 line-clamp-2">
                                    {d.description ? (
                                        <span dangerouslySetInnerHTML={{ __html: d.description }} />
                                    ) : (
                                        "Loading..."
                                    )}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-4">
                                <Link
                                    href={`/treatments/${d.url}`}
                                    className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-[#d0342c] text-white hover:bg-white hover:text-[#d0342c] border-2 border-[#d0342c] transition-all duration-300"
                                >
                                    {d.btn} <GrNext size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Treatments;