"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [clientPath, setClientPath] = useState("");
  const [clientRendered, setClientRendered] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    setClientPath(pathname);
  }, [pathname]);

  useEffect(() => {
    setClientRendered(true);
  }, []);


  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-hackathon", label: "About Hackathon" },
    { href: "/problem-statements", label: "Problem Statements" },
    { href: "/event-flow", label: "Event Flow" },
    { href: "/about", label: "About Us" },
    { href: "/register", label: "Register", highlight: true },
  ]

  return (

    <header className={`sticky top-0 z-50 transition-all duration-300 w-full min-h-[80px] ${clientRendered
        ? scrolled
          ? "bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 shadow-md"
          : "bg-gray-950"
        : "bg-gray-950"
      }`}>
      <div className={`flex z-50 h-20 p-4 items-center justify-between w-full border-b border-gray-400`}>
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Hackathon Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-bold font-mono text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            BurnBrain 2025
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-row  items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium font-mono transition-colors px-4 justify-center ${link.highlight
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white  py-2 rounded-md hover:from-purple-600 hover:to-cyan-600"
                  : clientPath === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-gray-950 z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="  flex flex-col  items-center">
              {navLinks.map((link) => (
                // <div className="w-full flex justify-center items-center border-gray-400 border-b-2 h-20">
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-2xl font-medium font-mono transition-colors justify-center w-full flex items-center border-gray-400 border-b-2 h-20 ${ clientPath === link.href
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                // </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

