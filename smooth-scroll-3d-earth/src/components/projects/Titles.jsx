import React, { useRef } from "react";
import { useScroll, motion, useTransform, useMotionTemplate } from "framer-motion";

export default function Titles({ data, setSelectedProject }) {
  return (
    <div className="w-full border-t border-[rgba(183,171,152,0.25)]">
      {data.map((project, i) => (
        <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} />
      ))}
    </div>
  );
}

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className="border-b border-[rgba(183,171,152,0.25)] relative z-20 cursor-default">
      <div
        className="inline-block pl-[10%]"
        onMouseOver={() => setSelectedProject(i)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <motion.p style={{ clipPath: clip }} className="inline-block text-[8vw] leading-[7.5vw] uppercase font-bold text-[#b7ab98] relative z-10">
          {title}
        </motion.p>
        <p className="block absolute top-0 text-[#1c1c1c] text-[8vw] leading-[7.5vw] uppercase font-bold z-0">
          {title}
        </p>
      </div>
    </div>
  );
}
