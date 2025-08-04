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
  const [viewMode, setViewMode] = useState<"tilted" | "floating">("tilted")
  const [floatingAnimation, setFloatingAnimation] = useState(0)
  const { ref, inView } = useScrollAnimations({ triggerOnce: false })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 100)

  // Floating animation for 3D cards
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingAnimation((prev) => (prev + 0.5) % 360)
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

          {/* View Mode Toggle */}
          <div
            className={`hidden md:flex fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="glass-toggle">
              <div className="flex items-center relative">
                <button
                  onClick={() => setViewMode("tilted")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: viewMode === "tilted" ? "#191A39" : "transparent",
                    color: viewMode === "tilted" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: viewMode === "tilted" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Tilted Deck
                </button>
                <button
                  onClick={() => setViewMode("floating")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: viewMode === "floating" ? "#191A39" : "transparent",
                    color: viewMode === "floating" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: viewMode === "floating" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Floating Cards
                </button>
              </div>
            </div>
          </div>

          {/* Desktop & Tablet: 3D Views */}
          <div
            className={`hidden md:block fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Tilted Plane/Deck View */}
            {viewMode === "tilted" && (
              <div className="relative w-full max-w-6xl mx-auto">
                <div
                  className="relative mx-auto"
                  style={{
                    height: "600px",
                    perspective: "1500px",
                    perspectiveOrigin: "center 30%",
                  }}
                >
                  {/* Tilted Plane Container */}
                  <div
                    className="absolute inset-0 grid grid-cols-3 gap-8 p-8"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateX(25deg) rotateY(-5deg)",
                      transformOrigin: "center center",
                    }}
                  >
                    {industries.map((industry, index) => {
                      const row = Math.floor(index / 3)
                      const col = index % 3
                      const depth = row * 40 // Stagger depth for perspective
                      const isSelected = selectedIndustry === industry.id

                      return (
                        <div
                          key={industry.id}
                          className="relative"
                          style={{
                            transform: `translateZ(${depth}px) ${isSelected ? "translateY(-20px) scale(1.05)" : ""}`,
                            transformStyle: "preserve-3d",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <button
                            onClick={() => handleIndustryClick(industry.id)}
                            className="tilted-industry-card group relative w-full h-64"
                          >
                            {/* Card Container */}
                            <div
                              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                boxShadow: isSelected
                                  ? "0 30px 80px rgba(0,0,0,0.3), 0 0 0 3px #209954"
                                  : "0 20px 60px rgba(0,0,0,0.2)",
                              }}
                            >
                              {/* Image Section */}
                              <div className="relative h-3/5 overflow-hidden">
                                <Image
                                  src={industry.image || "/placeholder.svg"}
                                  alt={industry.title}
                                  width={300}
                                  height={200}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                              </div>

                              {/* Content Section */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
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
                </div>
              </div>
            )}

            {/* Floating 3D Cards View */}
            {viewMode === "floating" && (
              <div className="relative w-full max-w-6xl mx-auto">
                <div
                  className="relative mx-auto"
                  style={{
                    height: "700px",
                    perspective: "1200px",
                    perspectiveOrigin: "center center",
                  }}
                >
                  {/* Floating Cards Container */}
                  <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                    {industries.map((industry, index) => {
                      const angle = (index * 60 + floatingAnimation) * (Math.PI / 180)
                      const radiusX = 300 + Math.sin(floatingAnimation * 0.01) * 50
                      const radiusY = 200 + Math.cos(floatingAnimation * 0.01) * 30
                      const x = Math.cos(angle) * radiusX
                      const y = Math.sin(angle) * radiusY
                      const z = Math.sin(angle * 2) * 100 + Math.cos(floatingAnimation * 0.02) * 50
                      const rotateY = angle * (180 / Math.PI)
                      const rotateX = Math.sin(floatingAnimation * 0.01 + index) * 15
                      const isSelected = selectedIndustry === industry.id

                      return (
                        <div
                          key={industry.id}
                          className="absolute"
                          style={{
                            transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) ${
                              isSelected ? "scale(1.2)" : "scale(1)"
                            }`,
                            transformStyle: "preserve-3d",
                            left: "50%",
                            top: "50%",
                            marginLeft: "-100px",
                            marginTop: "-120px",
                            transition: isSelected ? "transform 0.4s ease" : "none",
                          }}
                        >
                          <button
                            onClick={() => handleIndustryClick(industry.id)}
                            className="floating-industry-card group relative"
                            style={{
                              width: "200px",
                              height: "240px",
                              transformStyle: "preserve-3d",
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
                                boxShadow: isSelected
                                  ? "0 25px 60px rgba(0,0,0,0.4), 0 0 0 3px #209954"
                                  : "0 15px 40px rgba(0,0,0,0.2)",
                                animation: `floatingBob 3s ease-in-out infinite ${index * 0.5}s`,
                              }}
                            >
                              {/* Image Section */}
                              <div className="relative h-3/5 overflow-hidden">
                                <Image
                                  src={industry.image || "/placeholder.svg"}
                                  alt={industry.title}
                                  width={200}
                                  height={144}
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

                              {/* Floating Particles Effect */}
                              <div className="absolute inset-0 pointer-events-none">
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                                    style={{
                                      left: `${20 + i * 30}%`,
                                      top: `${10 + i * 20}%`,
                                      animation: `floatingParticle 4s ease-in-out infinite ${i * 1.5}s`,
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

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

          {/* Mobile: Horizontal Scrolling Loop with Flippable Cards */}
          <div
            className={`block md:hidden w-full fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
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
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "300ms" }}
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
