"use client"

import { Globe, Clock, DollarSign } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

const stats = [
  {
    icon: Globe,
    number: 97,
    suffix: "+",
    label: "Countries Covered",
  },
  {
    icon: Clock,
    number: 99.9,
    suffix: "%",
    label: "Uptime SLA",
  },
  {
    icon: DollarSign,
    number: 150,
    suffix: "+",
    label: "Currencies Supported",
  },
]

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix?: string; inView: boolean }) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 })
  const [displayValue, setDisplayValue] = useState(0)

  // Link spring to inView trigger
  useEffect(() => {
    if (inView) {
      spring.set(value)
    } else {
      spring.set(0)
    }
  }, [inView, value, spring])

  // Update displayed value as spring animates
  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplayValue(latest)
    })
  }, [spring])

  return (
    <span>
      {value % 1 === 0
        ? Math.floor(displayValue)
        : displayValue.toFixed(1)}
      {suffix || ""}
    </span>
  )
}

export default function ScaleSection() {
  const { ref, inView } = useScrollAnimations({ triggerOnce: false })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(2, 200)

  return (
    <section ref={ref} className="relative bg-white py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Header Content */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="space-y-6 max-w-4xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Built to Scale with You
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                RedGirraffe supports 97+ countries and 150+ currencies—ensuring 99.9% uptime and $20B+ in secure annual
                processing
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className={`fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full max-w-4xl">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="flex flex-col items-center space-y-4">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Number */}
                    <div className="text-5xl lg:text-6xl font-bold text-gray-900">
                      <AnimatedNumber value={stat.number} suffix={stat.suffix} inView={inView} />
                    </div>

                    {/* Label */}
                    <div className="text-2xl text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
