"use client";

import { motion } from "framer-motion";

export default function PopupButton() {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: [0, 1, 0.6, 1], damping: 1, duration: 0.25, delay: 0.25 }}
      className="ml-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] active:scale-95"
    >
      Hover over me
    </motion.button>
  );
}