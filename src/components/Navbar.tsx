import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row  justify-between items-center ">
        <img className="w-24 h-auto " src="/assets/logo.png" alt="logo" />

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

        <div className="lg:hidden flex">Humurger Menu</div>
      </nav>
    </div>
  );
}
