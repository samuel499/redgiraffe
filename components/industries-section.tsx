"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import RequestDemoButton from "./ui/request-demo-button"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

const industries = [
  {
    id: "fintech",
    title: "FinTech",
    description: "Digital payment solutions for modern financial technology.",
    image: "/placeholder.svg?height=300&width=300&text=FinTech+Digital+Banking",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Secure HIPAA-compliant payment processing.",
    image: "/placeholder.svg?height=300&width=300&text=Healthcare+Medical+Technology",
  },
  {
    id: "datacentre",
    title: "Data Centre",
    description: "Automated billing for global data operations.",
    image: "/placeholder.svg?height=300&width=300&text=Data+Center+Technology",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Multi-currency solutions for online retailers.",
    image: "/placeholder.svg?height=300&width=300&text=E-Commerce+Online+Shopping",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Streamlined property payment processing.",
    image: "/placeholder.svg?height=300&width=300&text=Real+Estate+Property",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "B2B payment automation for supply chains.",
    image: "/placeholder.svg?height=300&width=300&text=Manufacturing+Industry",
  },
]

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)
  const [radius, setRadius] = useState(200) // Default radius
  const { ref, inView } = useScrollAnimations({ triggerOnce: false })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(3, 100)

  // Handle window resize and set initial radius
  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth
        if (width < 640) setRadius(120)
        else if (width < 1024) setRadius(160)
        else setRadius(200)
      }
    }

    // Set initial radius
    updateRadius()

    // Add resize listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateRadius)
      return () => window.removeEventListener("resize", updateRadius)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleIndustryClick = (industryId: string) => {
    setSelectedIndustry(selectedIndustry === industryId ? null : industryId)
  }

  const selectedIndustryData = industries.find((industry) => industry.id === selectedIndustry)

  // Create duplicated array for seamless loop
  const duplicatedIndustries = [...industries, ...industries]

  return (
    <section ref={ref} id="industries" className="relative py-24 overflow-hidden industries-gradient">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center space-y-16">
          {/* Header Content */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="text-center space-y-6 max-w-4xl">
              {/* Glass Badge */}
              <div className="inline-flex">
                <div className="glass-badge">
                  <span className="text-sm font-medium text-gray-600">Industries We Serve</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Industries We Serve
              </h2>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                RedGiraffe powers secure, scalable payment automation for global enterprises across finance, real
                estate, energy and more.
              </p>
            </div>
          </div>

          {/* Desktop: Circular Animation Container */}
          <div
            className={`hidden md:block fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative w-full max-w-5xl">
              <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] mx-auto">
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg border-4 border-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-primary rounded-full mx-auto mb-2"></div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">Industries</span>
                    </div>
                  </div>
                </div>

                {/* Rotating Industry Cards */}
                {industries.map((industry, index) => {
                  const angle = (rotation + index * 60) * (Math.PI / 180)
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <div
                      key={industry.id}
                      className="absolute transition-all duration-300"
                      style={{
                        left: `calc(50% + ${x}px - 60px)`,
                        top: `calc(50% + ${y}px - 60px)`,
                        transform: selectedIndustry === industry.id ? "scale(1.1)" : "scale(1)",
                        width: "120px",
                        height: "120px",
                      }}
                    >
                      <button
                        onClick={() => handleIndustryClick(industry.id)}
                        className="industry-card group relative w-full h-full"
                      >
                        <div className="relative overflow-hidden rounded-xl w-full h-full">
                          <Image
                            src={industry.image || "/placeholder.svg"}
                            alt={industry.title}
                            width={120}
                            height={120}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold text-white text-center px-1">{industry.title}</span>
                          </div>
                        </div>

                        {/* Selection Ring */}
                        {selectedIndustry === industry.id && (
                          <div className="absolute -inset-2 border-3 border-primary rounded-xl animate-pulse"></div>
                        )}
                      </button>
                    </div>
                  )
                })}

                {/* Desktop Popup Card */}
                {selectedIndustryData && (
                  <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-8 sm:left-full sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:ml-8 z-20 animate-scale-in">
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-2 sm:left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:-translate-x-2">
                      <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white sm:border-t-8 sm:border-b-8 sm:border-r-12 sm:border-t-transparent sm:border-b-transparent sm:border-r-white sm:border-l-0 sm:border-r-white"></div>
                    </div>

                    <div className="industry-popup-compact">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-3 h-3 bg-white rounded-sm"></div>
                        </div>
                        <h4 className="text-sm font-bold text-gray-900">{selectedIndustryData.title}</h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{selectedIndustryData.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile: Horizontal Scrolling Loop with Flippable Cards */}
          <div
            className={`block md:hidden w-full fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative overflow-hidden">
              {/* Scrolling Container */}
              <div
                className={`mobile-industries-scroll ${selectedIndustry ? "slowed" : ""}`}
                style={{
                  display: "flex",
                  width: `${duplicatedIndustries.length * 140}px`,
                }}
              >
                {duplicatedIndustries.map((industry, index) => (
                  <div
                    key={`${industry.id}-${index}`}
                    className="mobile-industry-item"
                    style={{
                      width: "120px",
                      height: "160px",
                      margin: "0 10px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flip-card">
                      <div className={`flip-card-inner ${selectedIndustry === industry.id ? "flipped" : ""}`}>
                        {/* Front of Card - Image */}
                        <div className="flip-card-front">
                          <button onClick={() => handleIndustryClick(industry.id)} className="mobile-industry-button">
                            <div className="mobile-industry-image-container">
                              <Image
                                src={industry.image || "/placeholder.svg"}
                                alt={industry.title}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover"
                              />
                              <div className="mobile-industry-overlay">
                                <span className="mobile-industry-title">{industry.title}</span>
                              </div>
                            </div>
                          </button>
                        </div>

                        {/* Back of Card - Content */}
                        <div className="flip-card-back">
                          <div className="flip-card-content">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="w-3 h-3 bg-white rounded-sm"></div>
                              </div>
                              <h4 className="text-sm font-bold text-gray-900 leading-tight">{industry.title}</h4>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4">{industry.description}</p>
                            <button onClick={() => setSelectedIndustry(null)} className="flip-card-close-btn">
                              ×
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-600">Ready to transform your payment infrastructure?</p>
              <RequestDemoButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
