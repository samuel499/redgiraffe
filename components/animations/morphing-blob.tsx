"use client"

import { useEffect, useRef } from "react"

interface MorphingBlobProps {
  size?: number
  color?: string
  className?: string
  speed?: number
}

export default function MorphingBlob({
  size = 200,
  color = "#209954",
  className = "",
  speed = 0.01,
}: MorphingBlobProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    let time = 0

    const animate = () => {
      if (!pathRef.current) return

      time += speed

      // Create organic morphing path
      const path = `
        M ${size / 2 + Math.sin(time) * 20} ${size / 4 + Math.cos(time * 1.2) * 15}
        Q ${size * 0.8 + Math.sin(time * 1.5) * 25} ${size / 2 + Math.cos(time * 0.8) * 20}
        ${size / 2 + Math.sin(time * 0.7) * 15} ${size * 0.8 + Math.cos(time * 1.3) * 25}
        Q ${size * 0.2 + Math.sin(time * 1.1) * 30} ${size / 2 + Math.cos(time * 1.7) * 18}
        ${size / 2 + Math.sin(time) * 20} ${size / 4 + Math.cos(time * 1.2) * 15}
        Z
      `

      pathRef.current.setAttribute("d", path)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [size, speed])

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`absolute opacity-20 ${className}`}
      style={{ filter: "blur(1px)" }}
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path ref={pathRef} fill="url(#blobGradient)" className="animate-pulse" />
    </svg>
  )
}
