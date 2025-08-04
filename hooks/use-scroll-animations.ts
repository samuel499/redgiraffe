"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationsOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimations(options: UseScrollAnimationsOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -20px 0px", triggerOnce = false } = options
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold, rootMargin },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  return { ref, inView }
}

export function useStaggeredAnimation(count: number, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { ref, inView } = useScrollAnimations({ triggerOnce: false, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      const timeouts: NodeJS.Timeout[] = []
      for (let i = 0; i < count; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems((prev) => [...prev, i])
        }, i * delay)
        timeouts.push(timeout)
      }
      return () => timeouts.forEach(clearTimeout)
    } else {
      // Reset when out of view so it can animate again
      setVisibleItems([])
    }
  }, [inView, count, delay])

  return { ref, visibleItems, inView }
}
