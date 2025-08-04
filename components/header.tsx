"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      {/* Fixed header with proper backdrop blur */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
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
                      className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 relative group cursor-pointer whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
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

              {/* Spacer for desktop to balance logo - hidden on mobile */}
              {/* <div className="hidden lg:block w-32" /> */}
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
                      className={`block text-base font-medium text-gray-700 hover:text-primary transition-all duration-200 animate-slide-down cursor-pointer`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.name}
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
