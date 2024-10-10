"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";

const StatCard = ({
  end,
  suffix = "",
  text,
}: {
  end: number;
  suffix?: string;
  text: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 className="title-font font-bold text-6xl text-red-500 mb-3">
        {isInView && (
          <CountUp
            start={0}
            end={end}
            duration={2}
            separator=","
            suffix={suffix}
          />
        )}
      </motion.h2>
      <p className="text-lg font-medium text-white">{text}</p>
    </motion.div>
  );
};

export default function AnimatedSuccessStories() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div className="relative py-24 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <StatCard end={500} suffix="+" text="Client's Success" />
          <StatCard end={250} suffix="+" text="Work Visa" />
          <StatCard end={300} suffix="+" text="Student Visa" />
          <StatCard end={99} suffix="%" text="Client Satisfaction" />
        </motion.div>
      </div>
    </div>
  );
}
