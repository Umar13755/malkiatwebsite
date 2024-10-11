import React from "react";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row p-5 justify-between mt-20 gap-12">
      {/* Left Section: Text Content */}
      <div className="space-y-10 py-10 lg:py-20 lg:w-2/5">
        <div>
          <h2 className="heading2 text-center lg:text-left ">
            Unlock Global Opportunities with Expert <span className="text-red-500">Malkiat Consultant</span>
          </h2>
          <p className="paragraph text-center lg:text-left mt-1">
            From study visas to work permits, we offer tailored solutions for
            all your immigration needs. Let us guide you on your journey to
            success abroad!
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Button type="" href="/booking" text="Book Appointment" />
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-3/5">
        <img
          src="/assets/plane.svg"
          alt="hero"
          className="w-full h-full object-fit rounded-lg"
        />
      </div>
    </div>
  );
}
