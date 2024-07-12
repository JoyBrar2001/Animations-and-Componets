import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FlipNav } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page Transition",
  description: "Page Transitions using Next.js app router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlipNav />
        {children}
      </body>
    </html>
  );
}
