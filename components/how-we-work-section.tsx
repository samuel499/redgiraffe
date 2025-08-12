"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, X, Pause, Volume2, VolumeX, Maximize, AlertCircle } from "lucide-react"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"
import { processSteps } from "@/lib/constants"

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState("01")
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 200)
  
  const handleStepClick = (stepId: string) => {
    setActiveStep(activeStep === stepId ? "" : stepId)
  }

  return (
    <section ref={ref} id="how-it-works" className="relative bg-gray-50 py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="inline-flex">
                <button className="glass-badge hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <span className="text-sm font-medium text-gray-700">Our Seamless Process</span>
                </button>
              </div>
            </div>

            {/* Title */}
            <div
              className={`fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                    How do
                    <span className="text-primary-600"> we work?</span>
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                    We collaborate closely, prioritize your business goals, and deliver real-time support, ensuring a
                    frictionless, future-ready payment experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Mobile Layout - Keep existing accordion */}
            <div className="lg:hidden">
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
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex min-h-[34rem]">
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
                            <div className="text-lg font-bold text-primary mb-1">{step.id}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{step.title}</h3>
                            <p className="text-lg text-gray-900 leading-relaxed mb-2">
                              {step.content.title}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
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
