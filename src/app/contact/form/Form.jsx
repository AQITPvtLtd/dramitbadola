"use client";

import { form } from '@/services/user';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        MedicalReport: null,
    });

    const formRef = useRef(null);
    const inputRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(formRef.current, {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            });

            gsap.from(inputRefs.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            });
        }, formRef);

        return () => ctx.revert();
    }, []);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 10 * 1024 * 1024) {
            Swal.fire({
                icon: "warning",
                title: "File Too Large",
                text: "Please upload a file smaller than 10MB.",
            });
            e.target.value = "";
            return;
        }
        setFormData({ ...formData, MedicalReport: file });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("fullname", formData.fullname);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("message", formData.message);
        if (formData.MedicalReport) {
            formDataToSend.append("MedicalReport", formData.MedicalReport);
        }

        try {
            const response = await form(formDataToSend);
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    fullname: "",
                    phone: "",
                    email: "",
                    location: "",
                    message: "",
                    MedicalReport: null
                });
                router.push("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            ref={formRef}
            className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
        >
            <h1 className="text-3xl font-bold text-[#d0342c] text-center mb-6" style={{ fontFamily: "Roboto Slab, serif" }}>
                Book Appointment
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input
                        ref={el => inputRefs.current[0] = el}
                        className='bg-gray-100 p-3 w-full rounded-md dark:text-black border focus:border-[#d0342c] focus:ring-1 focus:ring-[#d0342c] outline-none'
                        placeholder='Your Name'
                        type='text'
                        id='fullname'
                        name='fullname'
                        value={formData.fullname}
                        onChange={handlechange}
                        required
                    />
                    <input
                        ref={el => inputRefs.current[1] = el}
                        className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#d0342c] focus:ring-1 focus:ring-[#d0342c] outline-none'
                        placeholder='Phone Number'
                        type='text'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handlechange}
                        required
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input
                        ref={el => inputRefs.current[2] = el}
                        className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#d0342c] focus:ring-1 focus:ring-[#d0342c] outline-none'
                        placeholder='Email Address'
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handlechange}
                        required
                    />
                    <input
                        ref={el => inputRefs.current[3] = el}
                        className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#d0342c] focus:ring-1 focus:ring-[#d0342c] outline-none'
                        placeholder='Enter Your Location'
                        type='text'
                        id='location'
                        name='location'
                        value={formData.location}
                        onChange={handlechange}
                        required
                    />
                </div>
                <textarea
                    ref={el => inputRefs.current[4] = el}
                    className='bg-gray-100 p-3 w-full dark:text-black rounded-md border focus:border-[#d0342c] focus:ring-1 focus:ring-[#d0342c] outline-none'
                    placeholder='Describe Health Problem...'
                    rows='4'
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handlechange}
                ></textarea>

                <div>
                    <label htmlFor="MedicalReport" className="block text-md font-medium mb-2 text-gray-700 dark:text-black">
                        Upload Medical Report (Optional)
                    </label>
                    <input
                        ref={el => inputRefs.current[5] = el}
                        type="file"
                        id="MedicalReport"
                        name="MedicalReport"
                        onChange={handleFileChange}
                        accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg, .avif"
                        className="border bg-gray-100 border-gray-300 p-3 rounded-md w-full focus:border-[#d0342c] focus:ring-1 focus:ring-[#d0342c] dark:text-black outline-none"
                    />
                </div>

                <div className="text-center mt-4">
                    {loading ? (
                        <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50 rounded-md" style={{ backgroundColor: "rgba(75, 0, 130, 0.5)" }}>
                            <ClipLoader width="60" height="60" color="#eb5f30" className="animate-spin" />
                        </div>
                    ) : (
                        <button className="bg-[#d0342c] border-2 border-[#d0342c] font-semibold cursor-pointer px-6 py-3 text-white rounded-xl hover:bg-white hover:text-[#d0342c] transition duration-300">
                            Send Message
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Form;
