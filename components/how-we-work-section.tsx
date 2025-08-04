"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

const processSteps = [
  {
    id: "01",
    title: "Setup",
    content: {
      title:
        "We begin by aligning with your compliance needs, integrating KYC, due diligence, and credit assessment to ensure secure onboarding.",
      description:
        "Whether through your ERP or our intuitive interface, setup is instant, seamless, and requires no code.",
    },
  },
  {
    id: "02",
    title: "Approval",
    content: {
      title:
        "Our automated approval system processes applications in real-time using advanced risk assessment algorithms.",
      description:
        "Multi-layered verification ensures compliance while maintaining speed and efficiency for your business operations.",
    },
  },
  {
    id: "03",
    title: "Layout",
    content: {
      title: "Customize your payment interface with our flexible layout system designed for optimal user experience.",
      description:
        "Drag-and-drop components, white-label options, and responsive design ensure perfect integration with your brand.",
    },
  },
  {
    id: "04",
    title: "Execute",
    content: {
      title: "Process payments instantly across 97+ countries with enterprise-grade security and real-time monitoring.",
      description:
        "Automated workflows, smart routing, and failover systems ensure 99.9% uptime for critical transactions.",
    },
  },
  {
    id: "05",
    title: "Monitor",
    content: {
      title: "Track all transactions with comprehensive analytics, reporting, and compliance monitoring tools.",
      description:
        "Real-time dashboards, automated alerts, and detailed audit trails provide complete visibility and control.",
    },
  },
]

export default function HowWeWorkSection() {
  const [showVideo, setShowVideo] = useState(false)
  const [activeStep, setActiveStep] = useState("01")
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 200)

  const toggleVideo = () => {
    setShowVideo(!showVideo)
  }

  const handleStepClick = (stepId: string) => {
    setActiveStep(activeStep === stepId ? "" : stepId)
  }

  return (
    <section ref={ref} id="how-it-works" className="relative bg-gray-50 py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="space-y-8">
            {/* How It Works Button - Centered */}
            <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
              <div className="flex justify-center">
                <button className="glass-badge hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <span className="text-sm font-medium text-gray-700">How It Works</span>
                </button>
              </div>
            </div>

            {/* Badge */}
            <div
              className={`fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="inline-flex">
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Our Seamless Process
                </div>
              </div>
            </div>

            {/* Title and Play Button */}
            <div
              className={`fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    How do we work?
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    We collaborate closely, prioritize your business goals, and deliver real-time support, ensuring a
                    frictionless, future-ready payment experience.
                  </p>
                </div>

                {/* Play Button with Large Circular Border */}
                <div className="relative ml-8">
                  <div className="w-24 h-24 border border-gray-900 rounded-full flex items-center justify-center hover:border-primary transition-colors duration-300">
                    <button
                      onClick={toggleVideo}
                      className="flex items-center gap-2 text-gray-900 hover:text-primary transition-colors duration-200"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span className="text-sm font-medium">PLAY</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          {showVideo && (
            <div className="fade-in-up bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-lg">Video Player Placeholder</div>
                </div>
                <button
                  onClick={toggleVideo}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Process Steps */}
          <div
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Mobile Layout - Keep existing accordion */}
            <div className="md:hidden">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {processSteps.map((step, index) => (
                  <div key={step.id}>
                    {/* Step Header */}
                    <button
                      onClick={() => handleStepClick(step.id)}
                      className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-6">
                        <div className="text-2xl font-bold text-gray-400">{step.id}</div>
                        <div className="text-xl font-bold text-gray-900">{step.title}</div>
                      </div>
                      <div
                        className={`transform transition-transform duration-200 ${
                          activeStep === step.id ? "rotate-180" : ""
                        }`}
                      >
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Step Content */}
                    {activeStep === step.id && (
                      <div className="px-8 pb-8 animate-slide-down">
                        <div className="ml-12 space-y-4 max-w-3xl">
                          <p className="text-lg text-gray-900 leading-relaxed">{step.content.title}</p>
                          <p className="text-base text-gray-600 leading-relaxed">{step.content.description}</p>
                        </div>
                      </div>
                    )}

                    {/* Border */}
                    {index < processSteps.length - 1 && <div className="border-b border-gray-200" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop/Tablet Layout - Horizontal Stack with Internal Content */}
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex min-h-96">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex-1 relative transition-all duration-500 ease-in-out ${
                        activeStep === step.id ? "bg-gray-50" : "hover:bg-gray-25"
                      } ${index < processSteps.length - 1 ? "border-r border-gray-200" : ""}`}
                    >
                      {/* Step Header Button */}
                      <button
                        onClick={() => handleStepClick(step.id)}
                        className="w-full h-full p-4 text-center transition-all duration-300 hover:scale-105 min-h-96 flex flex-col justify-center"
                      >
                        <div className="space-y-3">
                          <div
                            className={`text-lg font-bold transition-colors duration-300 ${
                              activeStep === step.id ? "text-primary" : "text-gray-400"
                            }`}
                          >
                            {step.id}
                          </div>
                          <div
                            className={`text-base font-bold transition-colors duration-300 ${
                              activeStep === step.id ? "text-gray-900" : "text-gray-700"
                            }`}
                          >
                            {step.title}
                          </div>
                        </div>
                      </button>

                      {/* Step Content - Inside the clicked accordion */}
                      {activeStep === step.id && (
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-center animate-fade-in overflow-y-auto">
                          <div className="space-y-3 text-left max-h-full">
                            <div className="text-xs font-bold text-primary mb-1">{step.id}</div>
                            <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">{step.title}</h3>
                            <p className="text-xs text-gray-900 leading-relaxed mb-2 line-clamp-4">
                              {step.content.title}
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                              {step.content.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
