"use client";

import { motion } from "motion/react";

import { footerLinks, links } from "./data";
import styles from "./style.module.scss";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateX: -20,
    translateY: 80,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + (i * 0.1),
      ease: [0.215, 0.61, 0.355, 1],
      opacity: {
        duration: 0.35,
      },
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + (i * 0.1),
      ease: [.215, .61, .355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export default function Index() {
  return (
    <nav className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          return (
            <div
              styles={styles.linkContainer}
              key={i}
            >
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={link.href}>
                  {link.title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              href={link.href}
            >
              {link.title}
            </motion.a>
          );
        })}
      </motion.div>
    </nav>
  );
}