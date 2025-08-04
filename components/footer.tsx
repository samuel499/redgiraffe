"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, Mail, MapPin, Link, Shield, Briefcase } from "lucide-react"

const footerSections = [
  {
    title: "Important Links",
    subtitle: "Quick access to essential pages",
    icon: Link,
    links: [
      "The Journey",
      "Board of Advisors",
      "Founding Team",
      "INDIA - S A & I Team",
      "Media Relations",
      "Higher Purpose",
      "Our Values",
      "RentPay™",
      "About Us",
      "Reviews",
      "FAQs",
      "Blog",
      "Press Releases",
    ],
  },
  {
    title: "Policies & Compliance",
    subtitle: "Key policies for security and compliance",
    icon: Shield,
    links: [
      "Fixed Deposit",
      "Refer & Earn",
      "Privacy Policy",
      "Refund/Cancellation Policy",
      "Terms & Conditions",
      "Anti corruption & Bribery Policy",
      "Code of Business Conduct & Ethics",
      "Anti-Fraud Policy Investigation",
      "Anti-Money Laundering Policy",
      "Sanctions Compliance Statement",
      "Grievance Redressal Policy",
    ],
  },
  {
    title: "Business Services",
    subtitle: "Solutions for businesses & partners",
    icon: Briefcase,
    links: ["List Your Property", "Register as Agent", "Corporate Rental ERP", "SME Loans", "Post Your Requirement"],
  },
]

const offices = [
  {
    country: "United Kingdom",
    company: "RedGirraffe Inc.",
    address: "Harben House, Harben Parade, Finchley Road, London, NW3 6LH.",
  },
  {
    country: "Singapore",
    company: "RedGirraffe Holdings",
    address: "3 Temasek Avenue, Centennial Tower, #17-01, Singapore 039190.",
  },
  {
    country: "India",
    company: "RedGirraffe.com",
    address: "904, Galleria Towers, DLF Phase IV, Gurgaon, Haryana - 122002.",
    secondAddress: "507, Tulsiani Chambers, Nariman Point, Mumbai - 400021.",
  },
]

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [email, setEmail] = useState("")

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:block">
        <div className="container-max section-padding py-16">
          <div className="grid grid-cols-5 gap-8">
            {/* Important Links, Policies & Compliance, Business Services */}
            {footerSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div key={section.title} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-3 h-3 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 italic">{section.subtitle}</p>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-xs text-gray-600 hover:text-primary transition-colors duration-200 leading-relaxed"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}

            {/* Our Offices */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Our Offices</h3>
              </div>
              <p className="text-xs text-gray-500 italic">Global presence, local impact</p>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-xs font-semibold text-gray-900">{office.country}</h4>
                    <p className="text-xs font-medium text-gray-700">{office.company}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{office.address}</p>
                    {office.secondAddress && (
                      <p className="text-xs text-gray-600 leading-relaxed">{office.secondAddress}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Connected */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Stay Connected</h3>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-gray-600">More news and updates</p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Creative Accordion Design */}
      <div className="block md:hidden">
        <div className="container-max section-padding py-12">
          {/* Mobile Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">RedGiraffe</h2>
            <p className="text-sm text-gray-600">Stay connected with us</p>
          </div>

          {/* Newsletter Signup - Priority on Mobile */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Stay Connected</h3>
              <p className="text-sm text-gray-600">Get the latest news and updates</p>
            </div>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white text-sm font-semibold py-3 px-4 rounded-xl hover:bg-primary-600 transition-colors duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Offices - Prominent Display */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Our Offices</h3>
            </div>
            <p className="text-sm text-gray-500 italic mb-4">Global presence, local impact</p>
            <div className="grid grid-cols-1 gap-4">
              {offices.map((office, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{office.country}</h4>
                  <p className="text-sm font-medium text-gray-700 mb-2">{office.company}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-1">{office.address}</p>
                  {office.secondAddress && (
                    <p className="text-xs text-gray-600 leading-relaxed">{office.secondAddress}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="space-y-3">
            {footerSections.map((section) => {
              const IconComponent = section.icon
              return (
                <div key={section.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-900 block">{section.title}</span>
                        <span className="text-xs text-gray-500 italic">{section.subtitle}</span>
                      </div>
                    </div>
                    {expandedSection === section.title ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedSection === section.title && (
                    <div className="px-4 pb-4 animate-slide-down">
                      <div className="grid grid-cols-2 gap-2 ml-11">
                        {section.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href="#"
                            className="text-xs text-gray-600 hover:text-primary transition-colors duration-200 py-1"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-xs text-gray-600">Copyright © 2025-2026 | RedGiraffe™. All rights reserved.</div>
            <div className="text-xs text-gray-600">We help you grow your business efficiently and effectively.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
