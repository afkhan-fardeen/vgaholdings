'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'

type Category = 'All' | 'CHEMICALS' | 'CONSULTANCY' | 'OIL & GAS'

const clients = [
  // CONSULTANCY
  { name: 'Berger', logo: '/images/sections/clients/berger.png', category: 'CONSULTANCY' as Category },
  { name: 'SY Enterprises', logo: '/images/sections/clients/syenterprises.png', category: 'CONSULTANCY' as Category },
  { name: 'EDB', logo: '/images/sections/clients/edb.png', category: 'CONSULTANCY' as Category },
  { name: 'Arthur L', logo: '/images/sections/clients/arthurl.jpg', category: 'CONSULTANCY' as Category },
  { name: 'AGODCO', logo: '/images/sections/clients/agodco.png', category: 'CONSULTANCY' as Category },
  { name: 'Extaxi', logo: '/images/sections/clients/extaxi.png', category: 'CONSULTANCY' as Category },
  { name: 'GS', logo: '/images/sections/clients/gs.png', category: 'CONSULTANCY' as Category },
  // CHEMICALS
  { name: 'Bapco', logo: '/images/sections/clients/Bapco.jpg', category: 'CHEMICALS' as Category },
  { name: 'Bapco Refine', logo: '/images/sections/clients/bapco-refine.png', category: 'CHEMICALS' as Category },
  { name: 'RAFCO', logo: '/images/sections/clients/RAFCO.png', category: 'CHEMICALS' as Category },
  { name: 'STSBH', logo: '/images/sections/clients/stsbh.png', category: 'CHEMICALS' as Category },
  { name: 'AMA', logo: '/images/sections/clients/ama.jpeg', category: 'CHEMICALS' as Category },
  // OIL & GAS
  { name: 'PDO', logo: '/images/sections/clients/PDO.png', category: 'OIL & GAS' as Category },
  { name: 'OXY', logo: '/images/sections/clients/OXY.png', category: 'OIL & GAS' as Category },
  { name: 'ADNOC', logo: '/images/sections/clients/ADNOC.png', category: 'OIL & GAS' as Category },
  { name: 'GALFAR', logo: '/images/sections/clients/GALFAR.png', category: 'OIL & GAS' as Category },
  { name: 'TENARIS', logo: '/images/sections/clients/TENARIS.png', category: 'OIL & GAS' as Category },
]

const categories: Category[] = ['All', 'CHEMICALS', 'CONSULTANCY', 'OIL & GAS']

export default function Clients() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const autoScrollRef = useRef<number | null>(null)

  // Filter clients based on active category
  const filteredClients = activeCategory === 'All' 
    ? clients 
    : clients.filter(client => client.category === activeCategory)

  // Duplicate for seamless loop
  const displayClients = [...filteredClients, ...filteredClients]

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollContainerRef.current || isHovered) return

    const scroll = () => {
      if (!scrollContainerRef.current || isHovered) return
      
      const container = scrollContainerRef.current
      const scrollAmount = 1
      
      container.scrollLeft += scrollAmount
      
      // Reset to beginning when reaching the end (seamless loop)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      }
    }

    autoScrollRef.current = window.setInterval(scroll, 30) // Smooth continuous scroll

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [activeCategory, isHovered, filteredClients])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 300
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <Section id="clients">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-8 sm:mb-12 text-center animate-fade-up anim-delay-100 parallax-text">
        Meet Our Clients
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category)
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = 0
              }
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
              activeCategory === category
                ? 'bg-[#d4af37] text-white shadow-lg'
                : 'bg-white text-[#4A4F55] hover:bg-[#F5F6F7] shadow-[0_2px_8px_rgba(15,23,42,0.08)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Left Arrow - Golden/Yellow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white shadow-lg p-2 sm:p-3 rounded-full hover:bg-[#c19d2e] transition-all duration-300 hidden md:flex items-center justify-center"
          aria-label="Scroll left"
        >
          <iconify-icon icon="solar:alt-arrow-left-linear" width="24" height="24" stroke-width="1.5" />
        </button>

        {/* Right Arrow - Golden/Yellow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white shadow-lg p-2 sm:p-3 rounded-full hover:bg-[#c19d2e] transition-all duration-300 hidden md:flex items-center justify-center"
          aria-label="Scroll right"
        >
          <iconify-icon icon="solar:alt-arrow-right-linear" width="24" height="24" stroke-width="1.5" />
        </button>

        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {displayClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 lg:h-28 lg:w-56 flex-shrink-0"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Hide scrollbar styles */}
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </Section>
  )
}
