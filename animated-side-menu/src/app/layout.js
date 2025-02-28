import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animated Side Menu",
  description: "Created using Next.js and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
