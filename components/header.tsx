"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Industries", href: "#industries" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact Us", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is 20% from top
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navigationItems.forEach((item) => {
      const sectionId = item.href.substring(1)
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = useCallback((href: string, sectionName: string) => {
    setIsMenuOpen(false)

    // Immediately set active section for instant feedback
    const sectionId = href.substring(1)
    setActiveSection(sectionId)

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 120
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const isLinkActive = useCallback(
    (href: string) => {
      const sectionId = href.substring(1)
      return activeSection === sectionId
    },
    [activeSection],
  )

  return (
    <>
      {/* Fixed header with proper backdrop blur */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
      >
        <div className="flex justify-center pt-4 px-4">
          {/* Centered Glass Navigation Bar */}
          <div className="glass-nav px-8 py-4 w-full max-w-4xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button onClick={() => handleNavClick("#home", "Home")} className="flex lg:hidden items-center group lg:mr-[4%]">
                <div
                  className="text-2xl font-bold transition-colors duration-200 group-hover:text-primary"
                  style={{ color: "#191A39" }}
                >
                  RedGirraffe
                </div>
              </button>

              <button onClick={() => handleNavClick("#home", "Home")} className="hidden lg:block fl ex items-center group lg:mr-[4%]">
                <div
                  className="text-2xl font-bold transition-colors duration-200 group-hover:text-primary"
                  style={{ color: "#191A39" }}
                >
                  <div>
                    <Image 
                      src="/images/flags2.svg"
                      alt="RedGirraffe"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </button>

              {/* Desktop Navigation - Centered */}
              <nav className="hidden lg:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-8">
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
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 hover:bg-white/20 transition-colors duration-200"
                style={{ borderRadius: "24px" }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 mt-4 px-4 ${
            isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="flex justify-center">
            <div
              className="w-full max-w-4xl shadow-lg"
              style={{
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            > 
              <nav className="p-6">
                <div className="space-y-4">
                  {navigationItems.map((item, index) => {
                    const isActive = isLinkActive(item.href)

                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href, item.name)}
                        className={`w-full text-left block text-base font-medium transition-all duration-200 animate-slide-down cursor-pointer ${
                          isActive ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {isActive && <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}
