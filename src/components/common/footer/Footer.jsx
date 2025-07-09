'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaWhatsapp,
} from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#d0342c] text-white pt-12 pb-4 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image src='/logo/logo1.png' width={200} height={200} alt='Logo' className='w-52 h-auto' />
          </Link>
          <p className='mt-5'>Dr. Amit Badola is a dedicated and highly experienced Medical Oncologist at Max Super Speciality Hospital.</p>
          <div className="flex gap-4 text-3xl text-white mt-5">
            <Link href="https://www.linkedin.com/in/dr-amit-badola-b41b772a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="__blank"><FaLinkedin className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" /></Link>
            <Link href="https://wa.me/919286471180" target="__blank"><FaWhatsapp  className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" /></Link>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white">
            <li className='hover:text-gray-300'><a href="/">Home</a></li>
            <li className='hover:text-gray-300'><a href="/about">About</a></li>
            <li className='hover:text-gray-300'><a href="/blogs">Blogs</a></li>
            <li className='hover:text-gray-300'><a href="/media/gallery">Photo Gallery</a></li>
            <li className='hover:text-gray-300'><a href="/media/videos">Videos</a></li>
            <li className='hover:text-gray-300'><a href="/contact">Book Appointment</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Treatments</h4>
          <ul className="space-y-2 text-sm text-white">
            <li className='hover:text-gray-300'><a href="/treatments/chemotherapy">Chemotheray</a></li>
            <li className='hover:text-gray-300'><a href="/treatments/targeted-therapy">Targeted Therapy</a></li>
            <li className='hover:text-gray-300'><a href="/treatments/immunotherapy">Immunotherapy</a></li>
            <li className='hover:text-gray-300'><a href="/treatments/stem-cell-transplant">Stem Cell Transplant</a></li>
            <li className='hover:text-gray-300'><a href="/treatments/supportive-care">Supportive Care</a></li>
            <li className='hover:text-gray-300'><a href="/treatments/radiation-therapy">Radiation Therapy</a></li>
            <li className='hover:text-gray-300'><a href="/treatments/clinical-trials">Clinical Trials</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white">
            <Link href="https://maps.app.goo.gl/72m8dfxNqBuJndLU7" target='_blank'>
              <li className="flex items-start gap-3 mb-5">
                <IoLocationSharp className="text-white text-4xl" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  59/1, Race Course, Opp. UCO Bank, Dehradun (U.K) 248001
                </div>
              </li>
            </Link>
            <Link href="tel:9286471180" target='_blank'>
              <li className="flex items-start gap-3 mb-5">
                <IoIosCall className="text-white text-2xl" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  +91 92864 71180
                </div>
              </li>
            </Link>
            <Link href="mailto:dramitoncology@gmail.com" target='_blank'>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-white text-2xl" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  dramitoncology@gmail.com
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex justify-center items-center text-lg font-semibold text-white text-center">
        <a href="https://tekbooster.com/" target='_blank' className="hover:text-[#D1D5DB]" style={{ fontFamily: "Roboto Slab, serif" }}>
          Design & Developed By Tek Booster (Digital Marketing Company)
        </a>
      </div>
    </footer>
  );
};

export default Footer;