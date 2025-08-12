"use client"

import Image from "next/image"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

const solutions = [
  {
    id: "paypulse",
    category: "Payment Solution",
    title: "PayPulse",
    description:
      "Unified AP & Payments: Ingests all invoices, Automates workflows, RedGirraffe acts as Merchant of Record (MOR), eliminating all supplier onboarding friction.",
    image: "/images/pay1.png",
    imageAlt: "Office workspace showing payment processing on laptop and mobile device",
  },
  {
    id: "leasecore",
    category: "Property Management",
    title: "LeaseCore",
    description:
      "Centralized Lease Intelligence: Digitizes all property/asset leases, manages critical dates, and automates payments via the PayPulse engine.",
    image: "/images/lease-core.png",
    imageAlt: "Property management visualization with house-shaped objects",
  },
  {
    id: "esg-horizon",
    category: "Sustainability Reporting",
    title: "ESG Horizon",
    description:
      "Automated Scope 3 Reporting: Automatically captures and maps emissions data from payment and utility flows, providing board-ready reports.",
    image: "/images/horizon.png",
    imageAlt: "ESG sustainability reporting dashboard with various charts and metrics",
  },
  {
    id: "flowforge",
    category: "IoT Solutions",
    title: "FlowForge",
    description:
      "IoT-Driven Efficiency: Integrates with utility meters to identify waste, optimise consumption, and validate hard-dollar energy savings.",
    image: "/images/flowforge3.png",
    imageAlt: "IOT devices on a surface",
  },
]

export default function SolutionsSection() {
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(6, 200)

  return (
    <section ref={ref} className="relative bg-white py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center space-y-16">
          {/* Header Content */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="text-center space-y-6 max-w-4xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Our Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Four integrated modules that transform your enterprise operations through a unified platform.
              </p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="w-full max-w-7xl">
            {/* Mobile Layout */}
            <div className="block md:hidden space-y-12">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`fade-in-up ${visibleItems.includes(index + 1) ? "visible" : ""}`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Mobile Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                    {/* Category Badge */}
                    <div className="solutions-category-badge inline-block">
                      <span className="text-sm font-medium text-primary">{solution.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>

                    {/* Image */}
                    <div className="solutions-image-container md:border-4 md:border-white md:rounded-2xl">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.imageAlt}
                        width={600}
                        height={400}
                        className="solutions-image"
                        priority={index < 2}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop/Tablet Timeline Layout */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-24">
                {solutions.map((solution, index) => {
                  const isLeft = index % 2 === 0
                  return (
                    <div
                      key={solution.id}
                      className={`relative ${isLeft ? "fade-in-left" : "fade-in-right"} ${visibleItems.includes(index + 1) ? "visible" : ""}`}
                      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white shadow-lg"></div>

                      {/* Content Container */}
                      <div className="grid grid-cols-2 gap-16 items-center">
                        {isLeft ? (
                          <>
                            {/* Text Content - Left */}
                            <div className="text-left pr-8">
                              <div className="flex justify-start mb-4">
                                <div className="solutions-category-badge">
                                  <span className="text-sm font-medium text-primary">{solution.category}</span>
                                </div>
                              </div>
                              <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                              <p className="text-base text-gray-600 leading-relaxed">{solution.description}</p>
                            </div>

                            {/* Image - Right */}
                            <div className="pl-8">
                              <div className="solutions-image-container md:border-8 md:border-white md:rounded-2xl">
                                <Image
                                  src={solution.image || "/placeholder.svg"}
                                  alt={solution.imageAlt}
                                  width={600}
                                  height={400}
                                  className="solutions-image p-4"
                                  priority={index < 2}
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Image - Left */}
                            <div className="pr-8">
                              <div className="solutions-image-container md:border-8 md:border-white md:rounded-2xl">
                                <Image
                                  src={solution.image || "/placeholder.svg"}
                                  alt={solution.imageAlt}
                                  width={600}
                                  height={400}
                                  className="solutions-image p-4"
                                  priority={index < 2}
                                />
                              </div>
                            </div>

                            {/* Text Content - Right */}
                            <div className="text-left pl-8">
                              <div className="flex justify-start mb-4">
                                <div className="solutions-category-badge">
                                  <span className="text-sm font-medium text-primary">{solution.category}</span>
                                </div>
                              </div>
                              <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                              <p className="text-base text-gray-600 leading-relaxed">{solution.description}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
