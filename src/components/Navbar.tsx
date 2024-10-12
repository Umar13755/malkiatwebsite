"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "./ui/Button";
import { AlignCenter } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MobileMenu = () => {
    return (
      <div className="absolute top-16 left-0 right-0 w-full py-20 bg-opacity-10 backdrop-blur-lg bg-[#ededed] z-50 text-white flex flex-col justify-center items-center space-y-6">
        <nav className="flex flex-col items-center space-y-6">
          <a
            href="#"
            className="text-lg font-semibold  hover:text-blue-600 transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="text-lg font-semibold  hover:text-blue-600 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-lg font-semibold  hover:text-blue-600 transition duration-300"
          >
            Success Stories
          </a>
          <a
            href="/contact"
            className="text-lg font-semibold  hover:text-blue-600 transition duration-300"
          >
            Contact Us
          </a>
        </nav>

        <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
          Book Appointment
        </button>
      </div>
    );
  };

  return (
    <div>
      <nav className="flex flex-row z-0 justify-between items-center ">
        <img className="w-24 h-auto" src="/assets/logo.png" alt="logo" />

        <div className="gap-7 lg:flex hidden items-center">
          <Link href="#" className="link">
            Services
          </Link>

          <Link href="#" className="link">
            About Us
          </Link>
          <Link href="#" className="link">
            Success Stories
          </Link>
          <Link href="/booking" className="link">
            Appointment
          </Link>
        </div>
        <div className="p-4 lg:flex hidden">
          <Button href="/booking" text="Contact Us" />
        </div>

        <div className="lg:hidden flex" onClick={handleMenu}>
          {isOpen ? <MobileMenu /> : <AlignCenter />}
        </div>
      </nav>
    </div>
  );
}
