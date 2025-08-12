"use client"

import { footerSections, offices } from "@/lib/constants"
import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp, Mail, MapPin } from "lucide-react"
import Copyright from "./main/copyright"

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

      <Copyright />
    </footer>
  )
}
