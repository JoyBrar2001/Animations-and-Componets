"use client";

import { useEffect } from "react";
import Paragraph from "./Components/Word";
import Lenis from "@studio-freight/lenis";

const paragraph = "What can I do ? Well, well, well, let's see, anything from the Frontend to the Backend and the design. React ? Node ? Redux Express ? Mongo ? Heck! Even Figma? I've got you covered!";

export default function Home() {
  
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <main>
      <div style={{ height: "100vh" }} />
      <Paragraph value={paragraph} />
      <div style={{ height: "100vh" }} />
    </main>
  );
}
