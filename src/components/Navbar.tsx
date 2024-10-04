import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row mx-10 p-7 justify-between">
        <img className="w-24 h-auto" src="/assets/logo.png" alt="logo" />

        <div className="gap-7 lg:flex hidden">
            <Link href="#" className="text-gray-400 hover:text-red-500 hover:underline transition duration-300 ease-in-out">Services</Link>

            <Link href="#" className="text-gray-400 hover:text-red-500 hover:underline transition duration-300 ease-in-out">About Us</Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 hover:underline transition duration-300 ease-in-out">Testimonials</Link>
        </div>
        <div className="">Contact Us</div>
      </nav>
    </div>
  );
}
