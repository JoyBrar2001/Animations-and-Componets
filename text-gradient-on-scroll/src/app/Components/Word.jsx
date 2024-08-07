"use client";

import { useRef } from "react";
import styles from "./page.module.scss";
import { motion, progress, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ value }) {

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = value.split(" ");

  return (
    <p
      className={styles.paragraph}
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className={styles.word}>
      {characters.map((character, i) => {
        const start = range[0] + (step * i);
        const end = range[0] + (step * (i + 1));

        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
}

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span>
      <span className={styles.shadow}>
        {children}
      </span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}