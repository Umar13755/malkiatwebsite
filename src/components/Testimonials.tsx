"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "This product has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours.",
    avatar: "/assets/profile.jpg",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "I'm impressed by the robust features and the responsive support team. It's been a game-changer for our projects.",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    content:
      "The user-centric design of this tool is outstanding. It's a joy to use and has significantly improved our design process.",
    avatar: "/assets/profile3.jpg",
  },
  {
    name: "David Patel",
    role: "Product Manager",
    content:
      "This solution has streamlined our operations and boosted productivity. I highly recommend it to any growing business.",
    avatar: "/assets/profile4.jpg",
  },
];

export default function Testimonials() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start("visible");
          } else {
            setIsVisible(false);
            controls.start("hidden");
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold text-white text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#ededed] bg-opacity-10 rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                    width={64}
                    height={64}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-white opacity-65">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-white opacity-70 italic">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
