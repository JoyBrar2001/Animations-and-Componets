"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Button from "@/components/Header/Button";
import Nav from "@/components/Header/Nav";

import styles from "./style.module.scss";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav />}
        </AnimatePresence>
      </motion.div>

      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}