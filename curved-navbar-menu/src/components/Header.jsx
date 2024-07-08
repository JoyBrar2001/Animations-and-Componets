"use client"

import { useState } from "react"
import styles from "./styles.module.scss"
import Navbar from "./nav/Navbar";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.button} onClick={() => setIsActive(!isActive)}>
        <div className={`${styles.burger} ${isActive && styles.burgerActive}`}></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Navbar />}
      </AnimatePresence>
    </>
  )
}