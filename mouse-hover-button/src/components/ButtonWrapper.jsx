"use client"

import React, { useEffect, useRef } from 'react'

const ButtonWrapper = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-800 px-4">
      <SpotlightButton />
    </div>
  )
}

const SpotlightButton = () => {
  const buttonRef = useRef(null)
  const spanRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect()
      const offset = e.offsetX

      const left = `${(offset / width) * 100}%`

      spanRef.current.animate([{ left }], { duration: 250, fill: "forwards", easing: "ease-in-out" })
    }
    
    const handleMouseLeave = (e) => {
      spanRef.current.animate([{ left: "50%" }], { duration: 150, fill: "forwards", easing: "ease-in-out" })
    }

    buttonRef.current.addEventListener("mousemove", handleMouseMove)
    buttonRef.current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      buttonRef.current.removeEventListener("mousemove", handleMouseMove)
      buttonRef.current.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <button ref={buttonRef} className="w-full max-w-xs rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white relative overflow-hidden">
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Hover me
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100"></span>
    </button>
  )
}

export default ButtonWrapper