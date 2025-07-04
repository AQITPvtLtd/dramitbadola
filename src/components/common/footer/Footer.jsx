'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#d0342c] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image src='/logo/logo1.png' width={200} height={200} alt='Logo' className='w-52 h-auto' />
          </Link>
          <div className="flex gap-4 text-2xl text-white mt-5">
            <FaFacebookF target="__blank" className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" />
            <FaXTwitter target="__blank" className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" />
            <FaWhatsapp target="__blank" className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" />
            <FaInstagram target="__blank" className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" />
            <FaYoutube target="__blank" className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Media</a></li>
            <li><a href="/contact">Book Appointment</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Treatments</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Chemotheray</a></li>
            <li><a href="#">Targeted Therapy</a></li>
            <li><a href="#">Immunotherapy</a></li>
            <li><a href="#">Stem Cell Transplant</a></li>
            <li><a href="#">Supportive Care</a></li>
            <li><a href="#">Radiation Therapy</a></li>
            <li><a href="#">Clinical Trials</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              {/* <FaLocationDot className="mt-1 text-blue-400" /> */}
              <div>
                <strong className="text-white">Clinic Location</strong><br />
                100 S Main St, New York, NY
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="mt-1 text-blue-400" />
              <div>
                <strong className="text-white">Call Us</strong><br />
                +1 123 456 789
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-blue-400" />
              <div>
                <strong className="text-white">Send a Message</strong><br />
                contact@dentiacare.com
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex justify-center items-center text-sm text-gray-400 text-center">
        <a href="#" className="hover:text-white">
          Design & Developed By Tek Booster (Digital Marketing Company)
        </a>
      </div>
    </footer>
  );
};

export default Footer;