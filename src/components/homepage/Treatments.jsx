"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/info";

const Treatments = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <div className="px-4 lg:py-10 bg-[#f2efef]">
            <h1 className="text-center font-bold text-3xl md:text-4xl text-gray-800 pb-8" style={{ fontFamily: "Roboto Slab, serif" }}>
                Our Treatments
            </h1>

            <div className="max-w-6xl mx-auto relative">
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.url} className="px-2 pb-5 pt-5">
                            <div className="bg-white rounded-xl border shadow-md hover:shadow-xl transition-all  duration-300  hover:scale-105 overflow-hidden relative h-[430px] flex flex-col justify-between">

                                {/* Circular Image */}
                                <div className="flex justify-center items-center pt-6">
                                    <div className="w-[260px] h-[200px] rounded-full overflow-hidden border-2 border-[#d0342c] shadow-md flex items-center justify-center">
                                        <Image
                                            src={item.image}
                                            alt="treatment"
                                            width={260}
                                            height={200}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>


                                {/* Title & Description */}
                                <div className="px-4 pt-4 text-center">
                                    <h2 className="text-lg font-bold text-[#d0342c] mb-1" style={{ fontFamily: "Roboto Slab, serif" }}>
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-700 line-clamp-3">
                                        {item.description ? (
                                            <span dangerouslySetInnerHTML={{ __html: item.description }} />
                                        ) : (
                                            "Loading..."
                                        )}
                                    </p>
                                </div>

                                {/* Button */}
                                <div className="px-4 pb-6 pt-2 flex justify-center">
                                    <Link
                                        href={`treatments/${item.url}`}
                                        className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-[#d0342c] text-white hover:bg-white hover:text-[#d0342c] border-2 border-[#d0342c] transition-all"
                                    >
                                        Know More <GrNext size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

// Custom Arrows
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute top-1/2 cursor-pointer right-2 md:right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
            onClick={onClick}
        >
            <GrNext size={20} />
        </button>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute cursor-pointer top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
            onClick={onClick}
        >
            <GrPrevious size={20} />
        </button>
    );
};

export default Treatments;
