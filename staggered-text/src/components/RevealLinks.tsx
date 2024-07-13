"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RevealLinks() {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
}

const FlipLink = ({ children, href }: { children: string, href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: 0.25,
                delay: 0.025 * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: 0.25,
                delay: 0.025 * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
}