"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Feather } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Test() {
  return (
    <section className="relative w-full bg-neutral-900">
      <FlipNav />
      <Content />
      <Content />
      <Content />
    </section>
  );
}


export const FlipNav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
      animate={hidden ? "hidden" : "visible"}
      className="sticky top-0 p-4 flex items-center justify-between bg-black border-b border-b-neutral-500"
    >
      <NavLeft />
      <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap">
        Sign in
      </button>
    </motion.nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/">
        <Feather />
      </Link>
      <Link href="/about">About</Link>
      <Link href="/community">Community</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/company">Company</Link>
    </div>
  );
};

const Content = () => {
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-12 text-sm">
      <h1 className="mb-8 text-7xl font-bold">My Blog Post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt nemo ullam ex labore. Nam aspernatur nesciunt id, qui tempore accusantium nisi quas omnis eveniet totam maxime consectetur voluptas alias est eligendi. Perferendis aperiam modi tempore nihil dolores iure aliquam dignissimos enim odit quos! Cumque vero quam ratione unde vitae.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt nemo ullam ex labore. Nam aspernatur nesciunt id, qui tempore accusantium nisi quas omnis eveniet totam maxime consectetur voluptas alias est eligendi. Perferendis aperiam modi tempore nihil dolores iure aliquam dignissimos enim odit quos! Cumque vero quam ratione unde vitae.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt nemo ullam ex labore. Nam aspernatur nesciunt id, qui tempore accusantium nisi quas omnis eveniet totam maxime consectetur voluptas alias est eligendi. Perferendis aperiam modi tempore nihil dolores iure aliquam dignissimos enim odit quos! Cumque vero quam ratione unde vitae.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt nemo ullam ex labore. Nam aspernatur nesciunt id, qui tempore accusantium nisi quas omnis eveniet totam maxime consectetur voluptas alias est eligendi. Perferendis aperiam modi tempore nihil dolores iure aliquam dignissimos enim odit quos! Cumque vero quam ratione unde vitae.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt nemo ullam ex labore. Nam aspernatur nesciunt id, qui tempore accusantium nisi quas omnis eveniet totam maxime consectetur voluptas alias est eligendi. Perferendis aperiam modi tempore nihil dolores iure aliquam dignissimos enim odit quos! Cumque vero quam ratione unde vitae.</p>
    </main>
  );
}