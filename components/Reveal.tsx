'use client'

import { useEffect, useRef, useState } from 'react'

type Variant = 'up' | 'left' | 'right'

/**
 * One observer for every reveal on the page rather than one per element — the
 * browser batches all the intersection bookkeeping into a single callback.
 */
let observer: IntersectionObserver | null = null
const pending = new Map<Element, () => void>()

function observe(el: Element, onEnter: () => void) {
  if (typeof IntersectionObserver === 'undefined') {
    onEnter()
    return () => {}
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          pending.get(entry.target)?.()
          pending.delete(entry.target)
          observer?.unobserve(entry.target)
        }
      },
      // Matches the `margin: '-80px'` the old framer-motion useInView used.
      { rootMargin: '0px 0px -80px 0px' }
    )
  }

  pending.set(el, onEnter)
  observer.observe(el)

  return () => {
    pending.delete(el)
    observer?.unobserve(el)
  }
}

/**
 * Fades content in as it scrolls into view. Children stay server components —
 * they arrive as already-rendered markup, so this adds a wrapper to hydrate but
 * nothing inside it.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  as: Tag = 'div',
  ...rest
}: {
  children: React.ReactNode
  className?: string
  /** Stagger, in milliseconds. */
  delay?: number
  variant?: Variant
  as?: 'div' | 'article'
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    return observe(el, () => setVisible(true))
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${visible ? ' is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
