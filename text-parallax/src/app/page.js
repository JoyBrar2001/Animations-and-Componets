"use client";

import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

import Picture1 from '../../public/assets/Picture1.png'
import Picture2 from '../../public/assets/Picture2.png'
import Picture3 from '../../public/assets/Picture3.jpg'
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  return (
    <main className="overflow-x-hidden">
      <div className="h-[100vh]" />
      <div ref={container}>
        <Slider src={Picture1} left="-55%" phrase="Front End Developer" progress={scrollYProgress} direction="left" />
        <Slider src={Picture2} left="-15%" phrase="Graphic Designer" progress={scrollYProgress} direction="right" />
        <Slider src={Picture3} left="-40%" phrase="Full Stack Dev" progress={scrollYProgress} direction="left" />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
}

const Slider = ({ src, left, phrase, progress, direction }) => {
  const dir = direction == 'left' ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);

  return (
    <motion.div
      className="relative flex whitespace-nowrap"
      style={{ left, x }}
    >
      <Phrase src={src} phrase={phrase} />
      <Phrase src={src} phrase={phrase} />
      <Phrase src={src} phrase={phrase} />
    </motion.div>
  );
}

const Phrase = ({ src, phrase }) => {
  return (
    <div className={`flex px-5 gap-5 items-center`}>
      <p className="text-[7.5vw]">
        {phrase}
      </p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image
          src={src}
          style={{ objectFit: 'cover' }}
          alt="image"
          fill
          placeholder="blur"
        />
      </span>
    </div>
  );
}