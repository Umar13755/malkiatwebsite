"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import { AlignCenter, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && (event.target as HTMLElement).closest(".mobile-menu") === null) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2, // delay after the links have animated
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const MobileMenu: React.FC = () => {
    const navItems: string[] = [
      "Services",
      "About Us",
      "Success Stories",
      "Contact Us",
    ];
    return (
      <motion.div
      className="absolute top-16 left-0 right-0 w-full px-6 py-10 bg-opacity-10 backdrop-blur-lg bg-[#ededed] z-50 text-white flex flex-col justify-center items-center space-y-6 mobile-menu"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.nav className="flex flex-col items-center space-y-6">
        {navItems.map((label, index) => (
          <motion.a
            key={label}
            href={label === "Contact Us" ? "/contact" : "#"}
            className="link text-lg text-slate-200"
            custom={index}
            variants={linkVariants}
          >
            {label}
          </motion.a>
        ))}
        <motion.div variants={buttonVariants}>
          <Button href="/booking" text="Contact Us" />
        </motion.div>
      </motion.nav>
    </motion.div>
    
    );
  };

  return (
    <div>
      <nav className="flex flex-row z-0 justify-between items-center">
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
          {isOpen ? <X className="cursor-pointer" /> : <AlignCenter className="cursor-pointer" />}
        </div>

        {isOpen && <MobileMenu />}
      </nav>
    </div>
  );
}
