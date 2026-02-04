'use client'

import { useEffect } from 'react'

const DEFAULT_SPEED = 0.06
const TEXT_SPEED = 0.03
const MAX_OFFSET = 60

export default function ParallaxController() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const items = new Map<HTMLElement, number>()

    const collect = () => {
      items.clear()

      const nodes = document.querySelectorAll<HTMLElement>('[data-parallax], .parallax-text')
      nodes.forEach((node) => {
        const speedAttr = node.dataset.parallax
        const speed = speedAttr ? Number(speedAttr) : (node.classList.contains('parallax-text') ? TEXT_SPEED : DEFAULT_SPEED)

        if (!Number.isFinite(speed)) return
        items.set(node, speed)
      })
    }

    const update = () => {
      const viewportCenter = window.innerHeight / 2
      items.forEach((speed, node) => {
        const rect = node.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const distance = viewportCenter - elementCenter
        const offset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, distance * speed))
        node.style.setProperty('--parallax-offset', `${offset}px`)
      })
    }

    let rafId = 0
    const schedule = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        update()
        rafId = 0
      })
    }

    collect()
    update()

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('orientationchange', schedule)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('orientationchange', schedule)
    }
  }, [])

  return null
}
