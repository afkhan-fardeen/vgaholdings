'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <section className="relative video-container snap-start md:snap-center [scroll-snap-stop:always]" aria-label="Hero section with corporate video">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover parallax"
        data-parallax="0.08"
        aria-label="VGA Holdings corporate video"
      >
        <source src="/videos/VGA_Holdings_Corporate_Video_1080P.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-white/10 z-[5]" />
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-10 animate-fade-in anim-delay-200">
        <a
          href="#about"
          className="flex flex-col items-center text-white hover:text-[#d4af37] transition-colors animate-bounce focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 rounded px-3 py-2"
          aria-label="Scroll to about section"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <iconify-icon icon="solar:alt-arrow-down-linear" width="20" height="20" className="sm:w-6 sm:h-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
