"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react"
import { useScrollAnimations, useStaggeredAnimation } from "../hooks/use-scroll-animations"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeToTerms: false,
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

  return (
    <section ref={ref} id="contact" className="relative bg-gray-50 py-24 overflow-hidden">
      <div ref={contentRef} className="container-max section-padding">
        <div className="flex flex-col items-center space-y-16">
          {/* Header Content */}
          <div className={`fade-in-up ${visibleItems.includes(0) ? "visible" : ""}`}>
            <div className="text-center space-y-6 max-w-4xl">
              <div className="inline-flex">
                <div className="glass-badge">
                  <span className="text-sm font-medium text-gray-600">Contact</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Contact us</h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                We're here to help—share your thoughts or inquiries with us, and we'll get back to you soon!
              </p>
            </div>
          </div>

          {/* Contact Content */}
          <div
            className={`fade-in-up ${visibleItems.includes(1) ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-full max-w-6xl">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name-mobile"
                        className="text-sm font-medium text-gray-700 uppercase tracking-wide"
                      >
                        NAME
                      </label>
                      <input
                        type="text"
                        id="name-mobile"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email-mobile"
                        className="text-sm font-medium text-gray-700 uppercase tracking-wide"
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email-mobile"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="contact-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message-mobile"
                        className="text-sm font-medium text-gray-700 uppercase tracking-wide"
                      >
                        MESSAGE
                      </label>
                      <textarea
                        id="message-mobile"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="contact-textarea"
                        placeholder="Enter your message"
                        required
                      />
                    </div>

                    {/* Terms Checkbox and Submit Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                      {/* Terms Checkbox */}
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="agreeToTerms-mobile"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleCheckboxChange}
                            className="contact-checkbox"
                            required
                          />
                          {formData.agreeToTerms && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <label htmlFor="agreeToTerms-mobile" className="text-sm text-gray-600">
                          I agree to the Terms and Condition
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" disabled={!formData.agreeToTerms} className="contact-submit-btn group">
                        <span className="text-sm font-semibold">Send a Message</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>

                  {/* Contact Information Cards - Mobile */}
                  <div className="space-y-4">
                    {/* Contact Phone */}
                    <div className="contact-info-card">
                      <div className="contact-info-icon">
                        <Phone className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Contact Phone</div>
                        <a
                          href="tel:+443301131707"
                          className="text-base font-semibold text-gray-900 hover:text-primary transition-colors"
                        >
                          +44 330 113 1707
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="contact-info-card">
                      <div className="contact-info-icon">
                        <MessageCircle className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">WhatsApp</div>
                        <a
                          href="https://wa.me/918010191019"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-gray-900 hover:text-primary transition-colors"
                        >
                          +91 80 1019 1019
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="contact-info-card">
                      <div className="contact-info-icon">
                        <Mail className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Email</div>
                        <a
                          href="mailto:connect@RedGiraffe.com"
                          className="text-base font-semibold text-gray-900 hover:text-primary transition-colors"
                        >
                          connect@RedGiraffe.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop/Tablet Layout */}
              <div className="hidden md:block">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-8">
                      {/* Left Section - Name and Email (1 column) */}
                      <div className="space-y-4">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                            NAME
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="contact-input"
                            placeholder="Enter your name"
                            required
                          />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                            EMAIL
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="contact-input"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      {/* Middle Section - Message (1 column) */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                          MESSAGE
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={8}
                          className="contact-textarea"
                          placeholder="Enter your message"
                          required
                        />
                      </div>

                      {/* Right Section - Contact Information (1 column) */}
                      <div className="space-y-4">
                        {/* Contact Phone */}
                        <div className="contact-info-card">
                          <div className="contact-info-icon">
                            <Phone className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-1">Contact Phone</div>
                            <a
                              href="tel:+443301131707"
                              className="text-base font-semibold text-gray-900 hover:text-primary transition-colors"
                            >
                              +44 330 113 1707
                            </a>
                          </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="contact-info-card">
                          <div className="contact-info-icon">
                            <MessageCircle className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-1">WhatsApp</div>
                            <a
                              href="https://wa.me/918010191019"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-semibold text-gray-900 hover:text-primary transition-colors"
                            >
                              +91 80 1019 1019
                            </a>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="contact-info-card">
                          <div className="contact-info-icon">
                            <Mail className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-1">Email</div>
                            <a
                              href="mailto:connect@RedGiraffe.com"
                              className="text-base font-semibold text-gray-900 hover:text-primary transition-colors"
                            >
                              connect@RedGiraffe.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms Checkbox and Submit Button - Full Width */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 mt-8 border-t border-gray-200">
                      {/* Terms Checkbox */}
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleCheckboxChange}
                            className="contact-checkbox"
                            required
                          />
                          {formData.agreeToTerms && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                          I agree to the Terms and Condition
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" disabled={!formData.agreeToTerms} className="contact-submit-btn group">
                        <span className="text-sm font-semibold">Send a Message</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
