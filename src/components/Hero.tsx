import React from "react";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="flex p-5 justify-between mt-20">
      <div className="space-y-5">
        <div>
          <h2 className="heading2">
            Unlock Global Opportunities with Expert Visa Consultancy
          </h2>
          <p className="paragraph">
            From study visas to work permits, we offer tailored solutions for
            all your immigration needs. Let us guide you on your journey to
            success abroad!
          </p>
        </div>
        <Button href="#" text="Book Appointment" />
      </div>
      <div>Image</div>
    </div>
  );
}
