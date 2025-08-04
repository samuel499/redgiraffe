"use client"

import { Check, Rocket } from "lucide-react"
import RequestDemoButton from "./ui/request-demo-button"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

const bankFeatures = [
  "Capture B2B card spend with low-risk, high-volume transactions",
  "Build lasting customer loyalty through smarter payment experiences",
  "Prevent fraud with enterprise grade security infrastructure",
  "Pay seamlessly with over 97 countries worldwide",
  "Enable real-time transaction monitoring and reporting",
  "Integrate with existing banking infrastructure seamlessly",
  "Provide white-label payment solutions to clients",
  "Scale operations with automated compliance management",
  "Offer competitive interchange rates and fee structures",
]

const enterpriseFeatures = [
  "Offer early payments through intelligent bill discounting",
  "Improve cash flow with dynamic invoice financing",
  "Gain control with secure Maker-Checker workflows",
  "Lower transaction costs through streamlined fee structures",
  "Reach suppliers and partners across 97+ countries",
  "Automate recurring payment schedules and approvals",
  "Access detailed analytics and spending insights",
  "Manage multi-entity payment operations efficiently",
  "Integrate with existing ERP and accounting systems",
]

export default function SmarterPaymentsSection() {
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(4, 200)

  return (
    <section ref={ref} id="features" className="relative bg-white py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Header Content */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smarter Payments. Designed for scale.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed">
                RedGiraffe helps banks and enterprises automate recurring payments, eliminate inefficiencies and unlock
                new levels of operational control.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-7xl">
            {/* Bank Card */}
            <div
              className={`fade-in-left ${visibleItems.includes(1) ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="payment-card group">
                <div className="card-content">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl">✨</div>
                    <div className="card-badge">Bank</div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 flex-1">
                    {bankFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="feature-check flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed text-left">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Get Started Button */}
                  <button className="get-started-btn group/btn">
                    <Rocket className="w-5 h-5 text-white transition-transform duration-300 group-hover/btn:translate-y-[-2px] group-hover/btn:rotate-12" />
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Enterprise Card */}
            <div
              className={`fade-in-right ${visibleItems.includes(2) ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="payment-card group">
                <div className="card-content">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl">✨</div>
                    <div className="card-badge">Cardholding Enterprises</div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 flex-1">
                    {enterpriseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="feature-check flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed text-left">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Get Started Button */}
                  <button className="get-started-btn group/btn">
                    <Rocket className="w-5 h-5 text-white transition-transform duration-300 group-hover/btn:translate-y-[-2px] group-hover/btn:rotate-12" />
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Request Demo Button */}
          <div
            className={`fade-in-up ${visibleItems.includes(3) ? "visible" : ""}`}
            style={{ transitionDelay: "600ms" }}
          >
            <RequestDemoButton />
          </div>
        </div>
      </div>
    </section>
  )
}
