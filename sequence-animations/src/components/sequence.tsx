"use client"

import { useAnimate } from "framer-motion"
import React from "react"

const SequenceWrapper = () => {
  const [scope, animate] = useAnimate()

  const handleAnimate = async() => { 
    await animate(scope.current, { x: 150 });
    await animate(scope.current, { y: 150, borderRadius: "10%" });
    await animate(scope.current, { x: -150, borderRadius: "100%", rotate: "180deg" }, { duration: 1 });  
    await animate(scope.current, { y: 0, borderRadius: "0%" });
    await animate(scope.current, { x: 0, rotate: "-90deg" }, { duration: 0.8 });
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div ref={scope} className="h-24 w-24 bg-violet-500"></div>
      <button
        onClick={handleAnimate}
        className="mt-4 rounded-md bg-slate-900 px-4 py-2 font-semibold text-white"
      >
        Trigger Animation
      </button>
    </div>
  )
}

export default SequenceWrapper