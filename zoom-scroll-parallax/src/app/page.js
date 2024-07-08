"use client";

import ZoomParallax from "@/components/ZoomParallax";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

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
      <ZoomParallax />
    </main>
  );
}
