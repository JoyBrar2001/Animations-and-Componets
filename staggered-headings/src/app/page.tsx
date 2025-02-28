import PopupButton from "@/Components/PopupButton";
import StaggeredHeading from "@/Components/StaggeredHeading";

export default function Home() {
  return (
    <main className="h-screen w-full grid place-items-center bg-neutral-800">
      <div className="flex flex-col">
        <StaggeredHeading
          title="conversion"
          className="text-[8.5rem] leading-none tracking-tight ml-8"
        />

        <div className="flex">
          <StaggeredHeading
            title="through"
            className="text-[8.5rem] leading-none tracking-tight -ml-8"
            overallDelay={0.25}
          />

          <div className="flex justify-center items-center">
            <PopupButton />
          </div>

        </div>

        <StaggeredHeading
          title="immersion"
          className="text-[8.5rem] leading-none tracking-tight ml-32"
          overallDelay={0.5}
        />
      </div>
    </main>
  );
}
