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
      { label: "The Journey", url: "https://redgirraffe.com/in/app/thejourney" },
      { label: "Board of Advisors", url: "https://redgirraffe.com/in/app/boardofadvisors" },
      { label: "Founding Team", url: "https://redgirraffe.com/in/app/foundingteam" },
      { label: "INDIA - S A & I Team", url: "https://redgirraffe.com/in/app/strategyadvisoryteam" },
      { label: "Media Relations", url: "https://redgirraffe.com/in/app/mediarelations" },
      { label: "Higher Purpose", url: "https://redgirraffe.com/in/app/purpose" },
      { label: "Our Values", url: "https://redgirraffe.com/in/app/values" },
      { label: "RentPay™", url: "https://redgirraffe.com/in/app/rentpay-details" },
      { label: "About Us", url: "https://redgirraffe.com/in/app/aboutus" },
      { label: "Reviews", url: "https://redgirrafee-new.vercel.app/#" },
      { label: "FAQs", url: "https://redgirraffe.com/in/app/faqs" },
      { label: "Blog", url: "https://redgirraffe.com/blog/" },
      { label: "Press Releases", url: "https://redgirraffe.com/blog/media-corner/" },
    ],
  },
  {
    title: "Policies & Compliance",
    subtitle: "Key policies for security and compliance",
    icon: Shield,
    links: [
      { label: "Fixed Deposit", url: "https://redgirraffe.com/in/app/fixed-deposit" },
      { label: "Refer & Earn", url: "https://redgirraffe.com/in/app/referrals" },
      { label: "Privacy Policy", url: "https://redgirraffe.com/in/app/privacypolicy" },
      { label: "Refund/Cancellation Policy", url: "https://redgirraffe.com/in/app/refund" },
      { label: "Terms & Conditions", url: "https://redgirraffe.com/in/app/terms-and-conditions" },
      { label: "Anti corruption & Bribery Policy", url: "https://redgirraffe.com/in/app/anti-corruption-bribery" },
      { label: "Code of Business Conduct & Ethics", url: "https://redgirraffe.com/in/app/code-business-conduct-ethics" },
      { label: "Anti-Fraud Policy Investigation", url: "https://redgirraffe.com/in/app/anti-fraud-policy-investigation" },
      { label: "Anti-Money Laundering Policy", url: "https://redgirraffe.com/in/app/anti-money-laundering-policy" },
      { label: "Sanctions Compliance Statement", url: "https://redgirraffe.com/in/app/sanctions-compliance-statement" },
      { label: "Grievance Redressal Policy", url: "https://redgirraffe.com/in/app/grievance-redressal-policy" },
    ],
  },
  {
    title: "Business Services",
    subtitle: "Solutions for businesses & partners",
    icon: Briefcase,
    links: [
      { label: "List Your Property", url: "https://redgirraffe.com/in/app/list-property" },
      { label: "Register as Agent", url: "https://redgirraffe.com/in/app/register-as-agent" },
      { label: "Corporate Rental ERP", url: "https://redgirraffe.com/in/app/rentpay-erp" },
      { label: "SME Loans", url: "https://redgirraffe.com/in/app/sme-loans" },
      { label: "Post Your Requirement", url: "https://redgirraffe.com/in/app/post-requirement" },
    ],
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
    <footer className="bg-black text-white">
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
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base hover:text-primary transition-colors duration-200 leading-relaxed"
                        >
                          {link.label}
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
          {/* ...same changes for mobile links */}
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
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-gray-300 hover:text-primary py-1"
                          >
                            {link.label}
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
      <div className="border-t border-gray-700 bg-black">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-lg text-gray-300">
              Write us at:&nbsp;
              <a href="mailto:connect@redgirraffe.com" className="text-primary font-bold">
                connect@redgirraffe.com
              </a>
            </div>
            <div className="text-lg text-gray-300">
              Copyright © 2025-2026 | RedGirraffe™. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
