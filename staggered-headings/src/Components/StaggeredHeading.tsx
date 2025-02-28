"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function StaggeredHeading({
  title,
  duration = 0.5,
  delay = 0.05,
  overallDelay = 0,
  className
}: {
  title: string;
  duration?: number;
  delay?: number;
  overallDelay?: number;
  className?: string;
}) {
  return (
    <h2 className={twMerge(
      "text-7xl font-bold text-white",
      className,
    )}>
      {title.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.5, delay: overallDelay + (index * delay) }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
