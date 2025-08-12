"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Shield,
  BarChart3,
  FileText,
  CheckCircle,
  Smartphone,
  Brain,
  Zap,
} from "lucide-react"
import Image from "next/image"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

const bankAdvantages = [
  "Capture low-risk B2B card spend, reduce fraud with PSP-backed security, and scale globally",
  "Increase Revenue Streams: Earn higher transaction fees with secure high-volume B2B payments",
  "Enhanced Reporting: Access detailed analytics to optimize operations and compliance",
]

const pspAdvantages = [
  "Leverage our platform to offer secure, scalable payment solutions to enterprises worldwide",
  "Expand Market Reach: Tap into RedGirraffe's global network of 97+ countries",
  "Reduce Operational Costs: Streamline Payment Processing with integrated APIs",
]

const carouselItems = [
  {
    icon: Shield,
    title: "Enterprise Grade Security",
    description: "End-to-end encryption for all transactions",
  },
  {
    icon: Shield,
    title: "Fraud Detection by PSPs",
    description: "Top-grade PSP prevents fraud",
  },
  {
    icon: BarChart3,
    title: "Unified Dashboards",
    description: "Real-time analytics for spend control",
  },
  {
    icon: FileText,
    title: "ISO 27001 Certified",
    description: "Globally recognized data security framework",
  },
  {
    icon: CheckCircle,
    title: "PCI-DSS Compliance",
    description: "Adheres to secure card transactions standards",
  },
  {
    icon: Zap,
    title: "ERP & API Ready",
    description: "Seamless integration with 50+ business tools",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Full platform access on your phone",
  },
  {
    icon: Brain,
    title: "AI-Powered Smarts",
    description: "Smart fraud detection and spend optimization",
  },
]

export default function PurposeSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const carouselRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 200)

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width >= 1024) setItemsPerView(4)
      else if (width >= 768) setItemsPerView(3)
      else if (width >= 640) setItemsPerView(2)
      else setItemsPerView(1)
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxSlide = Math.max(0, carouselItems.length - itemsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setCurrentX(e.clientX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    const diff = startX - currentX
    const threshold = 100

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide < maxSlide) {
        nextSlide()
      } else if (diff < 0 && currentSlide > 0) {
        prevSlide()
      }
    }
    setCurrentX(0)
    setStartX(0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const diff = startX - currentX
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide < maxSlide) {
        nextSlide()
      } else if (diff < 0 && currentSlide > 0) {
        prevSlide()
      }
    }
    setCurrentX(0)
    setStartX(0)
  }

  const dragOffset = isDragging ? currentX - startX : 0
  const slideWidth = 100 / itemsPerView

  return (
    <section ref={ref} className="relative bg-gray-50 py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center space-y-16">
          {/* Header Content */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="font-bold text-black">Purpose</span>
                <span className="text-primary-600">-Built</span>
                <br />
                <span className="text-primary-600">Payment</span>
                <span className="font-bold text-black"> Intelligence</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
                RedGirraffe empowers banks and PSPs with smart infrastructure to drive growth and trust.
              </p>
            </div>
          </div>

          {/* Cards Column */}
          <div className="w-full max-w-5xl space-y-8">
            {/* Bank Partnership Card */}
            <div
              className={`fade-in-left ${visibleItems.includes(1) ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="purpose-card">
                <div className="purpose-card-content">
                  {/* Image Section */}
                  <div className="purpose-image-section">
                    <div className="purpose-image-container">
                      <Image
                        src="/images/purpose1.svg"
                        alt="Bank Partnership"
                        width={200}
                        height={200}
                        className="purpose-image"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="purpose-content-section">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Bank Partnership Advantages</h3>
                    <div className="space-y-4">
                      {bankAdvantages.map((advantage, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="feature-check flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed text-left">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PSP Partnership Card */}
            <div
              className={`fade-in-right ${visibleItems.includes(2) ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="purpose-card">
                <div className="purpose-card-content">
                  {/* Image Section */}
                  <div className="purpose-image-section">
                    <div className="purpose-image-container">
                      <Image
                        src="/images/purpose2.svg"
                        alt="PSP Partnership"
                        width={200}
                        height={200}
                        className="purpose-image"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="purpose-content-section">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Authorized PSP Advantages</h3>
                    <div className="space-y-4">
                      {pspAdvantages.map((advantage, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="feature-check flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed text-left">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="w-full max-w-6xl">
              <div className="relative px-16">
                {/* Carousel Container */}
                <div
                  ref={carouselRef}
                  className="overflow-hidden cursor-grab active:cursor-grabbing"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className="flex transition-transform duration-300 ease-out gap-4"
                    style={{
                      transform: `translateX(-${currentSlide * slideWidth}%) translateX(${dragOffset}px)`,
                    }}
                  >
                    {carouselItems.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="carousel-card">
                          {/* Icon Section */}
                          <div className="carousel-icon-container">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>

                          {/* Content */}
                          <div className="carousel-content">
                            <h4 className="carousel-title">{item.title}</h4>
                            <p className="carousel-description">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="carousel-nav-left"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= maxSlide}
                  className="carousel-nav-right"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
