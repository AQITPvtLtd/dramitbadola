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
          <ul className="space-y-2 text-sm text-white">
            <li className='hover:text-gray-300'><a href="/">Home</a></li>
            <li className='hover:text-gray-300'><a href="/about">About</a></li>
            <li className='hover:text-gray-300'><a href="">Blogs</a></li>
            <li className='hover:text-gray-300'><a href="">Media</a></li>
            <li className='hover:text-gray-300'><a href="/contact">Book Appointment</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Treatments</h4>
          <ul className="space-y-2 text-sm text-white">
            <li className='hover:text-gray-300'><a href="#">Chemotheray</a></li>
            <li className='hover:text-gray-300'><a href="#">Targeted Therapy</a></li>
            <li className='hover:text-gray-300'><a href="#">Immunotherapy</a></li>
            <li className='hover:text-gray-300'><a href="#">Stem Cell Transplant</a></li>
            <li className='hover:text-gray-300'><a href="#">Supportive Care</a></li>
            <li className='hover:text-gray-300'><a href="#">Radiation Therapy</a></li>
            <li className='hover:text-gray-300'><a href="#">Clinical Trials</a></li>
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
                  Max Super Speciality Hospital, Johri, Malsi, Dehradun, Uttarakhand 248001
                </div>
              </li>
            </Link>
            <Link href="" target='_blank'>
              <li className="flex items-start gap-3 mb-5">
                <IoIosCall className="text-white text-2xl" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  +1 123 456 789
                </div>
              </li>
            </Link>
            <Link href="" target='_blank'>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-white text-2xl" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  contact@dentiacare.com
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex justify-center items-center text-lg font-semibold text-white text-center">
        <a href="#" className="hover:text-gray-400" style={{ fontFamily: "Roboto Slab, serif" }}>
          Design & Developed By Tek Booster (Digital Marketing Company)
        </a>
      </div>
    </footer>
  );
};

export default Footer;