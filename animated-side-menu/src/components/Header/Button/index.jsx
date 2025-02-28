"use client";

import { motion } from "motion/react";

import styles from "./style.module.scss";

export default function Index({ isActive, setIsActive }) {
  return (
    <button className={styles.button} onClick={() => setIsActive(!isActive)}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label="Menu" />
        </div>

        <div className={styles.el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </button>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}