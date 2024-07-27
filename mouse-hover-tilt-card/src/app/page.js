import TiltCard from "@/components/TiltCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-screen w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </main>
  )
}
