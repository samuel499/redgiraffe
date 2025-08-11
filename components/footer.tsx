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
    <footer className="bg-gradient-to-b from-[#0B1E3F] to-[#0A1730] text-white">
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:block">
        <div className="container-max section-padding py-20">
          <div className="grid grid-cols-5 gap-10">
            {footerSections.map((section) => {
              const IconComponent = section.icon
              return (
                <div key={section.title} className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                  </div>
                  <p className="text-base italic text-gray-300">{section.subtitle}</p>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-base hover:text-primary transition-colors duration-200 leading-relaxed"
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
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Our Offices</h3>
              </div>
              <p className="text-base italic text-gray-300">Global presence, local impact</p>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-base font-semibold">{office.country}</h4>
                    <p className="text-base font-medium">{office.company}</p>
                    <p className="text-base text-gray-300 leading-relaxed">{office.address}</p>
                    {office.secondAddress && (
                      <p className="text-base text-gray-300 leading-relaxed">{office.secondAddress}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Connected */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Stay Connected</h3>
              </div>
              <div className="space-y-5">
                <p className="text-base">More news and updates</p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="container-max section-padding py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">RedGirraffe</h2>
            <p className="text-lg text-gray-300">Stay connected with us</p>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-900 rounded-2xl p-6 mb-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Stay Connected</h3>
              <p className="text-lg text-gray-300">Get the latest news and updates</p>
            </div>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white text-lg font-semibold py-3 px-4 rounded-xl hover:bg-primary-600 transition-colors duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Offices */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Our Offices</h3>
            </div>
            <p className="text-lg text-gray-300 italic mb-4">Global presence, local impact</p>
            <div className="grid grid-cols-1 gap-4">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">{office.country}</h4>
                  <p className="text-lg font-medium mb-2">{office.company}</p>
                  <p className="text-base text-gray-300 leading-relaxed mb-1">{office.address}</p>
                  {office.secondAddress && (
                    <p className="text-base text-gray-300 leading-relaxed">{office.secondAddress}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {footerSections.map((section) => {
              const IconComponent = section.icon
              return (
                <div key={section.title} className="bg-gray-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold block">{section.title}</span>
                        <span className="text-base text-gray-300 italic">{section.subtitle}</span>
                      </div>
                    </div>
                    {expandedSection === section.title ? (
                      <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedSection === section.title && (
                    <div className="px-4 pb-4">
                      <div className="grid grid-cols-2 gap-2 ml-12">
                        {section.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href="#"
                            className="text-lg text-gray-300 hover:text-primary py-1"
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

      {/* Copyright */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-lg text-gray-300">
              Write us at:&nbsp;
              <a href="mailto:connect@redgirraffe.com" className="text-primary font-bold">
                connect@redgiraffe.com
              </a>
            </div>
            <div className="text-lg text-gray-300">
              Copyright © 2025-2026 | RedGiraffe™. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
