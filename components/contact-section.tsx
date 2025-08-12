"use client"

import type React from "react"
import { useState } from "react"
import { Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react'
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeToTerms: true,
  })
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })
  const { ref: contentRef, visibleItems } = useStaggeredAnimation(2, 200)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: e.target.checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  function InfoCard({
    icon,
    title,
    children,
  }: {
    icon: React.ReactNode
    title: string
    children: React.ReactNode
  }) {
    return (
      <div className="flex items-start gap-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 rounded-lg">
        <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary-600 flex items-center justify-center">
          <span className="w-5 h-5 text-white">{icon}</span>
        </div>
        <div>
          <div className="text-sm font-medium text-emerald-50 mb-1">{title}</div>
          <div className="text-base font-semibold text-white">{children}</div>
        </div>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg py-3 px-4 border border-white/30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary-600/40"

  const textareaClass =
    "w-full rounded-lg py-3 px-4 border border-white/30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary-600/40 resize-none"

  return (
    <section ref={ref} id="contact" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 pb-24 overflow-hidden w-full">
      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-16">
          {/* Header */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="text-center space-y-6 max-w-4xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Contact <span className="text-primary-600">us</span>
              </h2>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                We're here to help—share your thoughts or inquiries with us, and we'll get back to you soon!
              </p>
            </div>
          </div>

          {/* Content - Full Width */}
          <div className={`fade-in-up w-full ${visibleItems.includes(1) ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            <div className="w-full">
              {/* Mobile */}
              <div className="block md:hidden">
                <div className="bg-gradient-to-br from-green-600/5 to-emerald-600/5 rounded-2xl shadow-lg p-8 mx-4">
                  <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                    <div className="space-y-2">
                      <label htmlFor="name-mobile" className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                        NAME
                      </label>
                      <input
                        type="text"
                        id="name-mobile"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={inputClass}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email-mobile" className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email-mobile"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputClass}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message-mobile" className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                        MESSAGE
                      </label>
                      <textarea
                        id="message-mobile"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={textareaClass}
                        placeholder="Enter your message"
                        required
                      />
                    </div>

                    <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={!formData.agreeToTerms}
                        className="group inline-flex items-center justify-center gap-3 px-5 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow hover:opacity-95 transition"
                      >
                        <span className="text-sm font-semibold">Send a Message</span>
                        <ArrowRight className="w-4 h-4 text-emerald-700 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>

                  <div className="space-y-4">
                    <InfoCard icon={<Phone className="w-5 h-5" />} title="Contact Phone">
                      <a href="tel:+443301131707" className="hover:opacity-90">+44 330 113 1707</a>
                    </InfoCard>
                    <InfoCard icon={<MessageCircle className="w-5 h-5" />} title="WhatsApp">
                      <a href="https://wa.me/918010191019" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                        +91 80 1019 1019
                      </a>
                    </InfoCard>
                    <InfoCard icon={<Mail className="w-5 h-5" />} title="Email">
                      <a href="mailto:connect@redgirraffe.com" className="hover:opacity-90 break-all">
                        connect@redgirraffe.com
                      </a>
                    </InfoCard>
                  </div>
                </div>
              </div>

              {/* Desktop - Full Width */}
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-green-600/5 to-emerald-600/5 rounded-2xl shadow-lg p-8 lg:p-12 xl:p-16">
                  <div className="max-w-none mx-auto">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                              NAME
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className={inputClass}
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                              EMAIL
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={inputClass}
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                            MESSAGE
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={8}
                            className={textareaClass}
                            placeholder="Enter your message"
                            required
                          />
                        </div>

                        <div className="space-y-4">
                          <InfoCard icon={<Phone className="w-5 h-5" />} title="Contact Phone">
                            <a href="tel:+443301131707" className="hover:opacity-90">+44 330 113 1707</a>
                          </InfoCard>
                          <InfoCard icon={<MessageCircle className="w-5 h-5" />} title="WhatsApp">
                            <a href="https://wa.me/918010191019" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                              +91 80 1019 1019
                            </a>
                          </InfoCard>
                          <InfoCard icon={<Mail className="w-5 h-5" />} title="Email">
                            <a href="mailto:connect@redgirraffe.com" className="hover:opacity-90 break-all">
                              connect@redgirraffe.com
                            </a>
                          </InfoCard>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 mt-8 border-t border-white/30">
                        <button
                          type="submit"
                          disabled={!formData.agreeToTerms}
                          className="group inline-flex items-center gap-3 px-5 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow hover:opacity-95 transition"
                        >
                          <span className="text-sm font-semibold">Send a Message</span>
                          <ArrowRight className="w-4 h-4 text-emerald-700 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}