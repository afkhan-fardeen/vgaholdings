'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Services', href: '#services' },
    { label: 'News', href: '#news' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-md"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="VGA Holdings Home">
          <Image 
            src="/logos/vgalogo.png" 
            alt="VGA Holdings Logo" 
            width={400}
            height={400}
            className="h-12 sm:h-14 w-auto"
            priority
            sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs lg:text-sm font-medium text-white hover:text-[#d4af37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-black rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-black rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <iconify-icon 
            icon="solar:hamburger-menu-linear" 
            width="24" 
            height="24" 
            stroke-width="1.5"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-black" role="navigation" aria-label="Mobile navigation">
          <nav className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#d4af37] transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-black rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
