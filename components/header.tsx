"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

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
  const pathname = usePathname()

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section detection based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.substring(1)) // Remove # from href
      const scrollPosition = window.scrollY + 100 // Offset for header height

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      // Special case for top of page
      if (window.scrollY < 100) {
        setActiveSection("home")
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener with throttling
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll)
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    // Extract section id from href
    const sectionId = href.substring(1)
    setActiveSection(sectionId)

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 120 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const isLinkActive = (href: string) => {
    const sectionId = href.substring(1) // Remove # from href
    return activeSection === sectionId
  }

  return (
    <>
      {/* Fixed header with proper backdrop blur */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-white/30" : ""}`}
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
      >
        <div className="flex justify-center pt-4 px-4">
          {/* Centered Glass Navigation Bar */}
          <div className="glass-nav px-8 py-4 w-full max-w-4xl lg:max-w-3xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="#home"
                className="flex items-center group lg:ml-[4%]"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#home")
                }}
              >
                <div
                  className="text-2xl font-bold transition-colors duration-200 group-hover:text-primary"
                  style={{ color: "#191A39" }}
                >
                  RedGiraffe
                </div>
              </Link>

              {/* Desktop Navigation - Centered */}
              <nav className="hidden lg:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer whitespace-nowrap ${
                        isLinkActive(item.href) ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          isLinkActive(item.href)
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  ))}
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
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={`block text-base font-medium transition-all duration-200 animate-slide-down cursor-pointer relative ${
                        isLinkActive(item.href) ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {isLinkActive(item.href) && <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />}
                      </div>
                    </Link>
                  ))}
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
