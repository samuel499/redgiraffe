"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

export default function ProblemSection() {
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 200)

  return (
    <section ref={ref} className="relative bg-white py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Glass Badge */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="glass-badge">
              <span className="text-sm font-medium text-gray-600">What We Fix</span>
            </div>
          </div>

          {/* Headline */}
          <div
            className={`fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Traditional B2B Payments Are Broken
            </h2>
          </div>

          {/* Description */}
          <div
            className={`fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
                RedGiraffe eliminates the delay, complexity and manual inefficiency that plague enterprise B2B payouts.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
                By acting as Merchants of Record, we unify AP, lease, and utility payment into one intelligent platform
                - built for speed, control and scale.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "600ms" }}
          >
            <button className="glass-button group">
              <span className="text-base font-semibold text-gray-900 mr-3">Get Started</span>
              <div className="btn-icon-circle">
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </button>
          </div>

          {/* Full Width Image */}
          <div
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="w-full mt-16">
              <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
                <Image
                  src="/images/problemImg.svg"
                  alt="Traditional B2B payment problems visualization"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
