'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'

const leaders = [
  {
    name: 'Terry Antoniadis',
    role: 'CEO',
    image: '/images/Terry-pic.jpg',
    linkedin: 'https://www.linkedin.com/in/eleftherios-antoniadis-64675820',
  },
  {
    name: 'Yana Antoniadis',
    role: 'Managing Director',
    image: '/images/managingdirector.png',
    linkedin: 'https://www.linkedin.com/in/yana-antoniadis-a66817148/',
  },
  {
    name: 'Brett Paul Maclagan',
    role: 'Compliance Director',
    image: '/images/compliancedirector.png',
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
      <div className="mb-8 sm:mb-12 md:mb-16">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1F2A36]">Meet Our Leaders</h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              data-index={index}
              className={`group text-center transition-all duration-700 ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-[#D9D9D9] aspect-[3/4] w-full mb-3 sm:mb-4 overflow-hidden mx-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#d4af37]/20">
                <div className="relative w-full h-full">
                  <Image
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-medium text-[#1F2A36] group-hover:text-[#d4af37] transition-colors duration-300">
                {leader.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#4A4F55] mb-2">{leader.role}</p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#d4af37] hover:text-[#1F2A36] hover:scale-110 transition-all duration-300"
              >
                <iconify-icon icon="mdi:linkedin" width="20" height="20" className="sm:w-6 sm:h-6" />
              </a>
            </div>
          ))}
      </div>
    </Section>
  )
}
