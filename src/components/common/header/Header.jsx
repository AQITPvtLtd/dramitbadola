"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { navItems } from "./navItems"; // adjust path if needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/logo/logo.png" alt="Logo" width={200} height={200} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-black relative z-50">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(index)}
              onMouseLeave={() => setDesktopDropdownOpen(null)}
            >
              {!item.dropdown ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <>
                  <button className="flex items-center gap-1 px-2 py-1 cursor-pointer">
                    {item.label}
                    <FaChevronDown className="text-sm mt-0.5" />
                  </button>

                  {/* Dropdown menu */}
                  <div
                    className={`absolute left-0 top-full w-64 bg-white border rounded-xl shadow-lg p-2 transition-all duration-200 ${desktopDropdownOpen === index ? "block" : "hidden"
                      }`}
                  >
                    {item.dropdown.map((dropItem, i) => (
                      <Link
                        key={i}
                        href={dropItem.href}
                        className="block px-4 py-2 rounded-md font-semibold text-black transition-colors duration-200 hover:bg-[#d0342c] hover:text-white"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>



        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <button className="bg-[#d0342c] hover:bg-[#b22d26] text-white font-semibold py-2 px-4 rounded hidden md:block">
              Book Appointment
            </button>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 font-semibold text-black">
            {navItems.map((item, index) => (
              <div key={index}>
                {!item.dropdown ? (
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === index ? null : index
                        )
                      }
                      className="w-full text-left px-0 py-2"
                    >
                      <span className="flex items-center justify-between w-full">
                        {item.label}
                        <FaChevronDown className="text-sm ml-2" />
                      </span>
                    </button>

                    {mobileDropdownOpen === index && (
                      <div className="ml-2 mt-2 bg-white border rounded-xl shadow-lg p-2">
                        {item.dropdown.map((dropItem, i) => (
                          <Link
                            key={i}
                            href={dropItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 rounded-md font-semibold text-black transition-colors duration-200 hover:bg-[#d0342c] hover:text-white"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Book Appointment
            </Link>
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;