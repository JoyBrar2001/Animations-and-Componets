"use client";

import CurvedFooter from "@/components/CurvedFooter";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  
  return (
    <>
      <main className="bg-zinc-800 h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-white text-xl font-medium">
          Scroll Down to see the footer
        </h1>
      </main>
      <CurvedFooter />
    </>
  );
}
