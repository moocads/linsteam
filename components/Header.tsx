"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const SCROLL_THRESHOLD = 20

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "OUR PROPERTIES", href: "/properties" },
  { label: "SOLD", href: "#properties" },
  { label: "RESOURCE", href: "#services" },
  { label: "CONTACT", href: "#contact" },
] as const

type HeaderProps = {
  /** When true, use the dark scrolled style even at top of page. */
  forceDark?: boolean
}

export default function Header({ forceDark = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isDark = forceDark || scrolled

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        isDark ? "bg-dark/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/lins_logo_white.png" alt="Lin's Team Logo" width={300} height={100} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wider text-light transition-all duration-300 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-light md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-gray-border/20 bg-dark md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium tracking-wider text-light transition-all duration-300 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

