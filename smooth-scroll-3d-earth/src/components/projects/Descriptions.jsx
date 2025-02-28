import React from "react";

export default function Descriptions({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="absolute top-[3px] h-full w-full z-20 pointer-events-none">
      {data.map((project, i) => {
        const { title, description } = project;
        return (
          <div
            key={i}
            className="bg-[#ec4e39] flex justify-between items-center px-[10%] transition-[clip-path] duration-400"
            style={{
              clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-10">
              {crop(title, 9)}
            </p>
            <p className="w-[40%] text-[1vw] font-bold">{description}</p>
          </div>
        );
      })}
    </div>
  );
}