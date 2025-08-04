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
  const [viewMode, setViewMode] = useState<"spiral" | "layered">("spiral")
  const [spiralRotation, setSpiralRotation] = useState(0)
  const [layerAnimation, setLayerAnimation] = useState(0)
  const { ref, inView } = useScrollAnimations({ triggerOnce: false })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 100)

  // Spiral animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSpiralRotation((prev) => (prev + 0.5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Layer animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLayerAnimation((prev) => (prev + 0.3) % 360)
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
                  onClick={() => setViewMode("spiral")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: viewMode === "spiral" ? "#191A39" : "transparent",
                    color: viewMode === "spiral" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: viewMode === "spiral" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Spiral Helix
                </button>
                <button
                  onClick={() => setViewMode("layered")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: viewMode === "layered" ? "#191A39" : "transparent",
                    color: viewMode === "layered" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: viewMode === "layered" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Layered Depth
                </button>
              </div>
            </div>
          </div>

          {/* Desktop & Tablet: 3D Views */}
          <div
            className={`hidden md:block fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Spiral/Helix View */}
            {viewMode === "spiral" && (
              <div className="relative w-full max-w-6xl mx-auto">
                <div
                  className="relative mx-auto"
                  style={{
                    height: "700px",
                    perspective: "1500px",
                    perspectiveOrigin: "center center",
                  }}
                >
                  {/* Spiral Container */}
                  <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                    {industries.map((industry, index) => {
                      // Spiral mathematics
                      const t = (index / industries.length) * 4 * Math.PI + (spiralRotation * Math.PI) / 180
                      const spiralRadius = 200 + index * 30
                      const x = Math.cos(t) * spiralRadius
                      const y = Math.sin(t) * spiralRadius
                      const z = index * 80 - 200 + Math.sin(spiralRotation * 0.01 + index) * 50
                      const rotateY = (t * 180) / Math.PI
                      const rotateX = Math.sin(t) * 20
                      const scale = 1 - Math.abs(z) / 800 // Scale based on depth
                      const isSelected = selectedIndustry === industry.id

                      return (
                        <div
                          key={industry.id}
                          className="absolute"
                          style={{
                            transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${
                              isSelected ? scale * 1.3 : scale
                            })`,
                            transformStyle: "preserve-3d",
                            left: "50%",
                            top: "50%",
                            marginLeft: "-100px",
                            marginTop: "-120px",
                            opacity: Math.max(0.3, 1 - Math.abs(z) / 600),
                            transition: isSelected ? "all 0.4s ease" : "opacity 0.1s ease",
                            zIndex: Math.round(1000 - Math.abs(z)),
                          }}
                        >
                          <button
                            onClick={() => handleIndustryClick(industry.id)}
                            className="spiral-industry-card group relative"
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
                                  ? "0 30px 80px rgba(0,0,0,0.4), 0 0 0 3px #209954"
                                  : "0 20px 60px rgba(0,0,0,0.3)",
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

                              {/* Spiral Trail Effect */}
                              <div className="absolute inset-0 pointer-events-none">
                                <div
                                  className="absolute w-2 h-2 bg-primary/40 rounded-full"
                                  style={{
                                    top: "10%",
                                    left: "10%",
                                    animation: `spiralTrail 3s ease-in-out infinite ${index * 0.5}s`,
                                  }}
                                />
                                <div
                                  className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                                  style={{
                                    top: "80%",
                                    right: "15%",
                                    animation: `spiralTrail 4s ease-in-out infinite ${index * 0.7}s`,
                                  }}
                                />
                              </div>

                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </div>
                          </button>
                        </div>
                      )
                    })}
                  </div>

                  {/* Spiral Center Core */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-2xl flex items-center justify-center"
                      style={{
                        transform: `translateZ(0px) rotateY(${spiralRotation}deg)`,
                        transformStyle: "preserve-3d",
                        animation: "spiralCore 8s ease-in-out infinite",
                      }}
                    >
                      <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Layered Depth View */}
            {viewMode === "layered" && (
              <div className="relative w-full max-w-6xl mx-auto">
                <div
                  className="relative mx-auto"
                  style={{
                    height: "600px",
                    perspective: "1200px",
                    perspectiveOrigin: "center 40%",
                  }}
                >
                  {/* Layered Container */}
                  <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                    {industries.map((industry, index) => {
                      // Layer mathematics - create depth layers
                      const layer = Math.floor(index / 2) // 2 cards per layer
                      const positionInLayer = index % 2 // Position within layer (0 or 1)
                      const layerDepth = layer * 150 // Depth of each layer
                      const layerRotation = layer * 15 + layerAnimation * 0.5 // Slight rotation per layer
                      const x = (positionInLayer - 0.5) * 300 + Math.sin(layerAnimation * 0.01 + index) * 30
                      const y = layer * -50 + Math.cos(layerAnimation * 0.01 + index) * 20
                      const z = -layerDepth + Math.sin(layerAnimation * 0.02 + index) * 40
                      const scale = Math.max(0.6, 1 - layer * 0.15) // Scale down with depth
                      const opacity = Math.max(0.4, 1 - layer * 0.2) // Fade with depth
                      const isSelected = selectedIndustry === industry.id

                      return (
                        <div
                          key={industry.id}
                          className="absolute"
                          style={{
                            transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${layerRotation}deg) scale(${
                              isSelected ? scale * 1.2 : scale
                            })`,
                            transformStyle: "preserve-3d",
                            left: "50%",
                            top: "50%",
                            marginLeft: "-125px",
                            marginTop: "-150px",
                            opacity: isSelected ? 1 : opacity,
                            transition: isSelected ? "all 0.4s ease" : "opacity 0.3s ease",
                            zIndex: Math.round(1000 + layerDepth),
                          }}
                        >
                          <button
                            onClick={() => handleIndustryClick(industry.id)}
                            className="layered-industry-card group relative"
                            style={{
                              width: "250px",
                              height: "300px",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            {/* Card Container */}
                            <div
                              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                              style={{
                                background: `linear-gradient(135deg, rgba(255,255,255,${
                                  0.95 - layer * 0.1
                                }) 0%, rgba(255,255,255,${0.8 - layer * 0.1}) 100%)`,
                                backdropFilter: "blur(20px)",
                                border: `1px solid rgba(255,255,255,${0.3 + layer * 0.1})`,
                                boxShadow: isSelected
                                  ? `0 ${30 + layer * 10}px ${80 + layer * 20}px rgba(0,0,0,${
                                      0.4 + layer * 0.1
                                    }), 0 0 0 3px #209954`
                                  : `0 ${20 + layer * 5}px ${60 + layer * 10}px rgba(0,0,0,${0.3 + layer * 0.05})`,
                              }}
                            >
                              {/* Layer Indicator */}
                              <div
                                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                style={{
                                  background: `linear-gradient(45deg, hsl(${layer * 60}, 70%, 50%), hsl(${
                                    layer * 60 + 30
                                  }, 70%, 60%))`,
                                }}
                              >
                                {layer + 1}
                              </div>

                              {/* Image Section */}
                              <div className="relative h-3/5 overflow-hidden">
                                <Image
                                  src={industry.image || "/placeholder.svg"}
                                  alt={industry.title}
                                  width={250}
                                  height={180}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div
                                  className="absolute inset-0 bg-gradient-to-t to-transparent"
                                  style={{
                                    background: `linear-gradient(to top, rgba(0,0,0,${
                                      0.5 + layer * 0.1
                                    }), transparent)`,
                                  }}
                                />
                              </div>

                              {/* Content Section */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                  {industry.description}
                                </p>
                              </div>

                              {/* Depth Particles */}
                              <div className="absolute inset-0 pointer-events-none">
                                {[...Array(3)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute rounded-full"
                                    style={{
                                      width: `${4 - layer}px`,
                                      height: `${4 - layer}px`,
                                      background: `hsl(${layer * 60 + i * 30}, 60%, 60%)`,
                                      left: `${20 + i * 25}%`,
                                      top: `${15 + i * 20}%`,
                                      opacity: 0.6 - layer * 0.1,
                                      animation: `layerParticle ${3 + i}s ease-in-out infinite ${(index + i) * 0.5}s`,
                                    }}
                                  />
                                ))}
                              </div>

                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </div>
                          </button>
                        </div>
                      )
                    })}
                  </div>

                  {/* Layer Depth Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-none">
                    {[...Array(Math.ceil(industries.length / 2))].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full border-2 border-white/50"
                        style={{
                          background: `linear-gradient(45deg, hsl(${i * 60}, 70%, 50%), hsl(${i * 60 + 30}, 70%, 60%))`,
                          animation: `layerIndicator 2s ease-in-out infinite ${i * 0.3}s`,
                        }}
                      />
                    ))}
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
