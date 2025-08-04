"use client"

import { useState } from "react"
import { MousePointer } from "lucide-react"
import Image from "next/image"
import { useScrollAnimations } from "../hooks/use-scroll-animations"

export default function HeroSection() {
  const [activeToggle, setActiveToggle] = useState<"commercial" | "platforms">("commercial")
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })

  const handleToggleChange = (value: "commercial" | "platforms") => {
    setActiveToggle(value)
    if (value === "platforms") {
      window.open("https://redgirraffe.com/in/b2b-saas", "_blank")
    }
  }

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient-animated absolute inset-0" />
      </div>

      {/* Toggle Section */}
      <div className="relative z-10 pt-32 pb-8">
        <div className="container-max section-padding">
          <div className="flex justify-center">
            <div
              className={`glass-toggle transform transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center relative">
                <button
                  onClick={() => handleToggleChange("commercial")}
                  className={`px-8 py-3 text-base font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: activeToggle === "commercial" ? "#191A39" : "transparent",
                    color: activeToggle === "commercial" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: activeToggle === "commercial" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Commercial
                </button>
                <button
                  onClick={() => handleToggleChange("platforms")}
                  className={`px-8 py-3 text-base font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: activeToggle === "platforms" ? "#191A39" : "transparent",
                    color: activeToggle === "platforms" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: activeToggle === "platforms" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Platforms
                </button>

                {/* Smooth Background Slider */}
                <div
                  className="absolute top-1 bottom-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl transition-all duration-500 ease-out opacity-10"
                  style={{
                    left: activeToggle === "commercial" ? "4px" : "50%",
                    width: "calc(50% - 8px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="container-max section-padding pb-24">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Headlines */}
            <div className="space-y-4">
              <h1
                className={`text-hero lg:text-hero-lg font-bold transition-all duration-1000 ease-out ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  color: "#191A39",
                  transitionDelay: "200ms",
                }}
              >
                RedGiraffe Global
              </h1>
              <h2
                className={`text-hero lg:text-hero-lg font-bold text-white transition-all duration-1000 ease-out ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: "300ms",
                }}
              >
                Commercial Card
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed transition-all duration-1000 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: "400ms",
              }}
            >
              Simplify recurring B2B payments, cut costs, and optimize cash flow in 97+ countries
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: "500ms",
              }}
            >
              <button className="btn-primary text-base px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-out">
                <MousePointer className="w-5 h-5" />
                Request Demo
              </button>
              <button className="btn-secondary text-base px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-out">
                Contact Sales
              </button>
            </div>

            {/* Hero Image */}
            <div
              className={`relative mt-12 w-full transition-all duration-1200 ease-out ${
                inView ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: "600ms",
              }}
            >
              <div className="relative w-full max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out group">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Business professionals in meeting with RedGiraffe commercial card solution"
                    width={1200}
                    height={600}
                    className="w-full"
                    priority
                  />

                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce-gentle">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  )
}
