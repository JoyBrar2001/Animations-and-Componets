"use client";

import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CurvedFooter() {
  const footerRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(1440);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const updateSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const curveHeight = useTransform(scrollYProgress, [0, 1], [150, 0]);

  useMotionValueEvent(curveHeight, "change", (latest) => {
    console.log(latest);
  });

  const path = useMotionTemplate`M0,150 C${screenWidth * 0.25},${curveHeight} ${screenWidth * 0.75},${curveHeight} ${screenWidth},150`;

  return (
    <footer ref={footerRef} className="relative w-full bg-purple-700 text-white">
      <svg className="absolute top-[-150px] left-0 right-0 w-full h-[150px]">
        <motion.path d={path} fill="#7e22ce" />
      </svg>

      <div className="max-w-7xl mx-auto pt-2 pb-20 px-10 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <h2 className="text-lg font-semibold uppercase tracking-tight">
            Stay up to date
          </h2>

          <h1 className="text-6xl font-extrabold">
            get our<br />newsletter
          </h1>

          <form className="pt-10 flex items-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-3 w-72 text-lg rounded-full bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-600"
            />
            <button className="bg-purple-700 hover:bg-purple-800 text-white p-4 rounded-full transition-all duration-300">
              <ArrowRight size={24} />
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-lg font-semibold uppercase tracking-tight">
            Get in touch
          </h2>

          <div className="text-4xl tracking-wide font-bold">
            <h1>hello@poppr.be</h1>
            <h1>+32(0)93353333</h1>
          </div>

          <div className="text-xl font-medium">
            <h2>Stapelpein 70/303</h2>
            <h2>9000 Ghent</h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-purple-500 py-6 px-10 md:px-20 flex flex-col md:flex-row justify-between items-center text-sm">

        <div className="flex flex-wrap gap-6 text-gray-200">
          <a href="#" className="hover:text-white transition-all duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-all duration-300">Disclaimer</a>
          <a href="#" className="hover:text-white transition-all duration-300">Terms & Conditions</a>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-all duration-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-white transition-all duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-all duration-300">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
