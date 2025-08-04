"use client"

import Image from "next/image"
import RequestDemoButton from "./ui/request-demo-button"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

export default function FeaturesSection() {
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 200)

  return (
    <section ref={ref} className="relative bg-white py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Glass Badge */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="glass-badge">
              <span className="text-sm font-medium text-gray-600">Features</span>
            </div>
          </div>

          {/* Description with Bold Black Text */}
          <div
            className={`fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed">
              <span className="font-bold text-black">At RedGiraffe, we're reimagining</span> the future of enterprise
              payments.
              <br />
              <br />
              <span className="font-bold text-black">Our mission is to simplify</span> recurring B2B transactions{" "}
              <span className="font-bold text-black">through</span> intelligent automation,{" "}
              <span className="font-bold text-black">eliminating friction,</span> accelerating cash flow, and giving
              businesses complete control{" "}
              <span className="font-bold text-black">over how they pay, track, and scale.</span>
            </p>
          </div>

          {/* Full Width Image */}
          <div
            className={`fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-full mt-16">
              <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="RedGiraffe features and platform capabilities"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Request Demo Button */}
          <div
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "600ms" }}
          >
            <RequestDemoButton />
          </div>
        </div>
      </div>
    </section>
  )
}
