"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Industries", href: "#industries" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact Us", href: "#contact" },
]

const countryOptions = [
  { code: "US", flag: "🇺🇸", href: "/us" },
  { code: "UK", flag: "🇬🇧", href: "/uk" },
  { code: "EU", flag: "🇪🇺", href: "/eu" },
  { code: "IN", flag: "🇮🇳", href: "/in" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )
    navigationItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = useCallback((href: string, sectionName: string) => {
    setIsMenuOpen(false)
    setActiveSection(href.substring(1))
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 120
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }, [])

  const isLinkActive = useCallback(
    (href: string) => activeSection === href.substring(1),
    [activeSection]
  )

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
      >
        <div className="flex justify-center pt-4 px-4">
          <div className="glass-nav px-8 py-4 w-full max-w-6xl flex items-center justify-between">
            
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home", "Home")}
              className="flex items-center group lg:mr-[4%]"
            >
              <div
                className="text-2xl font-bold transition-colors duration-200 group-hover:text-primary"
                style={{ color: "#191A39" }}
              >
                RedGirraffe
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {navigationItems.map((item) => {
                const isActive = isLinkActive(item.href)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={`text-xl font-medium transition-all duration-200 relative group cursor-pointer whitespace-nowrap ${
                      isActive ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                )
              })}
            </nav>

            {/* Desktop Country Dropdown */}
            <div className="hidden lg:block relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {selectedCountry.code}
                <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-lg shadow-lg bg-white border border-gray-200 overflow-hidden z-50">
                  {countryOptions.map((country) => (
                    <a
                      key={country.code}
                      href={country.href}
                      onClick={() => {
                        setSelectedCountry(country)
                        setIsDropdownOpen(false)
                      }}
                      className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm font-medium"
                    >
                      <span>{country.flag}</span>
                      <span>{country.code}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-white/20 transition-colors duration-200 rounded-3xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[88px] left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200 transition-all duration-300 z-50 ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="p-6 space-y-4">
          {navigationItems.map((item, index) => {
            const isActive = isLinkActive(item.href)
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`w-full text-left text-base font-medium transition-all duration-200 ${
                  isActive ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}
