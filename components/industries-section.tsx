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

          {/* Desktop & Tablet: 3D Cylindrical Carousel */}
          <div
            className={`hidden md:block fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative w-full max-w-6xl mx-auto">
              <div
                className="relative mx-auto"
                style={{
                  height: "500px",
                  perspective: "1200px",
                  perspectiveOrigin: "center center",
                }}
              >
                {/* 3D Cylinder Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotation}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  {industries.map((industry, index) => {
                    const angle = index * 60 * (Math.PI / 180) // 60 degrees apart
                    const translateZ = 280 // Radius of cylinder
                    const rotateY = index * 60 // Rotation for each card

                    return (
                      <div
                        key={industry.id}
                        className="absolute"
                        style={{
                          transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                          transformStyle: "preserve-3d",
                          width: "200px",
                          height: "280px",
                          left: "50%",
                          top: "50%",
                          marginLeft: "-100px",
                          marginTop: "-140px",
                        }}
                      >
                        <button
                          onClick={() => handleIndustryClick(industry.id)}
                          className="industry-card-3d group relative w-full h-full"
                          style={{
                            transformStyle: "preserve-3d",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: selectedIndustry === industry.id ? "scale(1.1) translateZ(50px)" : "scale(1)",
                          }}
                        >
                          {/* Card Container */}
                          <div
                            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                              backdropFilter: "blur(20px)",
                              border: "1px solid rgba(255,255,255,0.3)",
                              boxShadow:
                                selectedIndustry === industry.id
                                  ? "0 25px 60px rgba(0,0,0,0.3), 0 0 0 3px #209954"
                                  : "0 15px 40px rgba(0,0,0,0.2)",
                            }}
                          >
                            {/* Image Section */}
                            <div className="relative h-3/5 overflow-hidden">
                              <Image
                                src={industry.image || "/placeholder.svg"}
                                alt={industry.title}
                                width={200}
                                height={168}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Content Section */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                                {industry.description}
                              </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                          </div>
                        </button>
                      </div>
                    )
                  })}
                </div>

                {/* Center Hub */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-primary/20 flex items-center justify-center"
                    style={{
                      transform: "translateZ(100px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-1"></div>
                      <span className="text-xs font-semibold text-gray-700">Industries</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Popup Card */}
              {selectedIndustryData && (
                <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-8 z-20 animate-scale-in">
                  <div className="industry-popup-3d">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{selectedIndustryData.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{selectedIndustryData.description}</p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => setSelectedIndustry(null)}
                        className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
