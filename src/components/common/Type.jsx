"use client";
import React from 'react';
import Link from 'next/link';
import { TbArrowBigRightLines } from "react-icons/tb";
import { data } from '@/data/typeofcancer';

const Type = () => {
    return (
        <div className="sticky top-32 right-10">
            <div className='px-5'>
                <div className="shadow-2xl bg-white px-4 py-4 rounded-lg w-auto h-fit mt-10 lg:mt-0">
                    <h2 className="text-xl font-semibold mb-4 dark:text-black">Types of cancer</h2>
                    <ul className="space-y-2">
                        {data.map((a) => (
                            <li key={a.id}>
                                <Link href={`${a.path}`}>
                                    <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                        <TbArrowBigRightLines className='mt-1' /> {a.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-3">
                        <Link
                            href={`/contact`}
                            className="px-4 py-2 bg-[#d0342c] text-white text-md rounded-lg block text-center transition-all border-2 border-transparent hover:border-[#d0342c] hover:text-[#d0342c] hover:bg-white"
                        >
                            Book Your Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Type;
