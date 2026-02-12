'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'

const leaders = [
  {
    name: 'Terry Antoniadis',
    role: 'CEO',
    image: '/images/sections/leadership/terry-1.png',
    linkedin: 'https://www.linkedin.com/in/eleftherios-antoniadis-64675820',
  },
  {
    name: 'Yana Antoniadis',
    role: 'Managing Director',
    image: '/images/sections/leadership/yana.png',
    linkedin: 'https://www.linkedin.com/in/yana-antoniadis-a66817148/',
  },
  {
    name: 'Brett Paul Maclagan',
    role: 'Compliance Director',
    image: '/images/sections/leadership/brett.png',
    linkedin: 'https://www.linkedin.com/in/brett-maclagan-b250975/',
  },
]

export default function Leadership() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems((prev) => {
              const newItems = [...prev]
              newItems[index] = true
              return newItems
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-index]')
    items?.forEach((item) => observer.observe(item))

    return () => {
      items?.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <Section ref={sectionRef} id="leaders">
      <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          {/* <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Leadership
          </span> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#d4af37] animate-fade-up anim-delay-100 parallax-text">Meet Our Leaders</h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        {leaders.map((leader, index) => (
          <div
            key={index}
            data-index={index}
            className={`text-center transition-all duration-300 group ${
              visibleItems[index]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="bg-[#D9D9D9] aspect-square w-full mb-4 overflow-hidden max-w-[220px] mx-auto rounded-full">
              <div className="relative w-full h-full rounded-full">
                <Image
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  fill
                  className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-medium text-[#1F2A36] group-hover:text-[#d4af37] transition-colors duration-300 font-gloria mb-2">
              {leader.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4F55] mb-3">{leader.role}</p>
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#1F2A36] hover:text-[#d4af37] transition-colors"
            >
              <iconify-icon icon="mdi:linkedin" width="18" height="18" className="sm:w-5 sm:h-5" />
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
