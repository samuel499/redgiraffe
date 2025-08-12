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

          {/* Description with Bold Black Text */}
          <div
            className={`mb-[-40px] fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed">
              <span className="font-bold text-black">At RedGirraffe, we're reimagining</span> the future of enterprise
              payments.
              <br />
              <br />
              <span className="font-bold text-black">We simplify</span> recurring B2B transactions{" "}
              <span className="font-bold text-black">with</span> intelligent automation - {" "}
              <span className="font-bold text-black">removing global merchant acceptance barriers,</span> speeding cash flow, and giving
              businesses full control{" "}
              <span className="font-bold text-black">over how they pay, track, and scale.</span>
            </p>
          </div>

          <div className="relative w-screen h-56 sm:h-[500px]">
            <Image
              src="/images/featuresImg.svg"
              alt="RedGirraffe features"
              fill
              className="object-contain"
              priority
            />
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
