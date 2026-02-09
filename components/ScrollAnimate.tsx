'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  animation?: 'slide-up' | 'slide-down' | 'fade-scale' | 'fade'
  delay?: number
  threshold?: number
  rootMargin?: string
}

export default function ScrollAnimate({
  children,
  className = '',
  animation = 'slide-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay, threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={`scroll-animate ${animation} ${isVisible ? 'animate-in' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
