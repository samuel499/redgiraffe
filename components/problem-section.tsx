"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

export default function ProblemSection() {
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 200)

  return (
    <section ref={ref} className="relative bg-white py-12 md:py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Glass Badge */}
          {/* <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="glass-badge">
              <span className="text-sm font-medium text-gray-600">What We Fix</span>
            </div>
          </div> */}

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
                RedGiraffe removes the delays, complexity, and inefficiencies in enterprise B2B payouts. 
              </p>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
                As Merchants of Record, we unify AP, lease, and utility payments - removing global merchant acceptance barriers while delivering speed, control and scale.
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


          <div className="hidden relative w-screen h-60 sm:h-[500px] md:block">
            <Image
              src="/images/problemImg.svg"
              alt="RedGirraffe features"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
