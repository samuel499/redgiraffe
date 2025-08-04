"use client"

import { useState } from "react"
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
  const { ref, inView } = useScrollAnimations({ triggerOnce: false })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(3, 100)

  const handleIndustryClick = (industryId: string) => {
    setSelectedIndustry(selectedIndustry === industryId ? null : industryId)
  }

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

          {/* Horizontal Scrolling Loop with Flippable Cards - All Screen Sizes */}
          <div
            className={`w-full fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative overflow-hidden">
              {/* Scrolling Container */}
              <div
                className={`industries-scroll ${selectedIndustry ? "slowed" : ""}`}
                style={{
                  display: "flex",
                  width: `${duplicatedIndustries.length * 200}px`,
                }}
              >
                {duplicatedIndustries.map((industry, index) => (
                  <div
                    key={`${industry.id}-${index}`}
                    className="industry-item"
                    style={{
                      width: "180px",
                      height: "240px",
                      margin: "0 10px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flip-card">
                      <div className={`flip-card-inner ${selectedIndustry === industry.id ? "flipped" : ""}`}>
                        {/* Front of Card - Image */}
                        <div className="flip-card-front">
                          <button onClick={() => handleIndustryClick(industry.id)} className="industry-button">
                            <div className="industry-image-container">
                              <Image
                                src={industry.image || "/placeholder.svg"}
                                alt={industry.title}
                                width={180}
                                height={180}
                                className="w-full h-full object-cover"
                              />
                              <div className="industry-overlay">
                                <span className="industry-title">{industry.title}</span>
                              </div>
                            </div>
                          </button>
                        </div>

                        {/* Back of Card - Content */}
                        <div className="flip-card-back">
                          <div className="flip-card-content">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                              </div>
                              <h4 className="text-lg font-bold text-gray-900 leading-tight">{industry.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">{industry.description}</p>
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
