"use client"

import { Check, Star, Mail } from "lucide-react"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

const pricingPlans = [
  {
    id: "bank",
    title: "Bank Partnership",
    price: "$499",
    period: "/mo",
    description: "Engage in the B2B high-value global product partnership",
    features: ["Existing banking relationship", "Negotiated commercial rates", "Regulatory compliance"],
    isActive: false,
    buttonText: "Request Demo",
    buttonStyle: "secondary",
  },
  {
    id: "commercial",
    title: "Pay-pulse Commercial",
    price: "$999",
    period: "/mo",
    description: "High-value recurring payment capability across all major global payment networks",
    features: [
      "Partnered with leading global payment rails",
      "Compliance managed by world-class PSPs",
      "Alternative Payment Methods",
      "97+ Countries Coverage",
    ],
    isActive: true,
    buttonText: "Request Demo",
    buttonStyle: "primary",
  },
  {
    id: "psp",
    title: "Authorised PSPs",
    price: "$1,999",
    period: "/mo",
    description: "Unlock large-scale high-value recurring product across geographies where you operate",
    features: ["Tier 1 PSPs only", "Competitive interchange", "Local market expertise"],
    isActive: false,
    buttonText: "Request Demo",
    buttonStyle: "secondary",
  },
]

export default function PricingSection() {
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(3, 200)

  return (
    <section ref={ref} id="pricing" className="relative bg-gray-50 py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center space-y-16">
          {/* Header Content */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="text-center space-y-6">
              {/* <div className="inline-flex">
                <div className="glass-badge">
                  <span className="text-sm font-medium text-gray-600">Pricing Plans</span>
                </div>
              </div> */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Flexible Pricing to Fit
                <br />
                Your Needs
              </h2>
            </div>
          </div>

          {/* Pricing Cards */}
          <div
            className={`fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={plan.id} className={`pricing-card ${plan.isActive ? "pricing-card-active" : ""}`}>
                    <div className="pricing-card-content">
                      {/* Inner bordered section */}
                      <div className={`pricing-inner-section ${plan.isActive ? "pricing-inner-active" : ""}`}>
                        {/* Header with Star and Premium Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="pricing-star-icon">
                            <Star className="w-5 h-5 text-orange-500 fill-current" />
                          </div>
                          <div className="pricing-premium-badge">Premium</div>
                        </div>

                        {/* Title and Price */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{plan.title}</h3>
                          {/* <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                            <span className="text-base text-gray-600">{plan.period}</span>
                          </div> */}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">{plan.description}</p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-8 flex-1 pt-6">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="pricing-feature-check flex-shrink-0">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Request Demo Button */}
                      <button
                        className={`pricing-demo-btn ${plan.buttonStyle === "primary" ? "pricing-demo-btn-primary" : "pricing-demo-btn-secondary"}`}
                      >
                        <span className="text-sm font-semibold">{plan.buttonText}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consultation Section */}
          <div
            className={`fade-in-up ${visibleItems.includes(2) ? "visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-full max-w-4xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900">Schedule a consultation with our experts.</h3>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="consultation-email-btn">
                    <Mail className="w-5 h-5" />
                    Email us
                  </button>
                  <button className="consultation-contact-btn">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
