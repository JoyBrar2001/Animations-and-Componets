import { Feather } from "lucide-react";
import Link from "next/link";
import TransitionLink from "./TransitionLink";

export const FlipNav = () => {
  return (
    <nav className="p-4 flex items-center justify-between relative">
      <NavLeft />
      <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap">
        Sign in
      </button>
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <TransitionLink href="/">
        <Feather />
      </TransitionLink>
      <TransitionLink href="/about">About</TransitionLink>
      <TransitionLink href="/community">Community</TransitionLink>
      <TransitionLink href="/pricing">Pricing</TransitionLink>
      <TransitionLink href="/company">Company</TransitionLink>
    </div>
  );
};