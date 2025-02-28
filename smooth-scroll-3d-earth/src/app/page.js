import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Projects from "@/components/projects/Projects";

const Earth = dynamic(() => import('@/components/Earth'), {
  ssr: !!false,
  loading: () => <img src="/assets/placeholder.png" alt="Loading..." />
});

export default function Home() {
  return (
    <SmoothScroll>
      <section className="h-[100vh] flex flex-col justify-center items-center text-center">
        <p className="text-2xl font-bold tracking-wide text-white">Scroll down to see the animation</p>
        <div className="mt-4 animate-bounce">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="text-white">
            <path d="M12 5v14"></path>
            <path d="M19 12l-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      <main className="h-[60vw] bg-[#0f0f0f] relative flex items-center justify-center">
        <Earth />
        <Projects />
      </main>

      <section className="h-[100vh] flex flex-col justify-center items-center text-center">
        <p className="text-2xl font-bold tracking-wide text-white">Scroll up to go back</p>
        <div className="mt-4 animate-bounce rotate-180">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="text-white">
            <path d="M12 5v14"></path>
            <path d="M19 12l-7 7-7-7"></path>
          </svg>
        </div>
      </section>
    </SmoothScroll>
  );
}
