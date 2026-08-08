'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let frame = 0

    const handleScroll = () => {
      // Coalesce scroll events into one read per frame; a bare listener runs the
      // handler far more often than the page can paint.
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setScrolled(window.scrollY > 30)
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav className="anim-nav fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`max-w-5xl mx-auto transition-all duration-500 rounded-2xl px-6 ${
          scrolled ? 'glass-nav border border-white/10 shadow-xl shadow-black/60 py-3' : 'py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="text-xl font-black gradient-text tracking-tight">RN</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-sky-400 group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-slate-400 hover:text-white text-sm font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-sky-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu — CSS grid-rows handles the auto-height animation, so the
            open/close state costs no JS beyond the class toggle. */}
        <div className={`nav-collapse md:hidden${menuOpen ? ' is-open' : ''}`}>
          <div>
            <div className="pt-2 pb-3 flex flex-col border-t border-white/10 mt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? undefined : -1}
                  className="text-slate-400 hover:text-white text-sm font-medium transition-colors py-3 px-1 border-b border-white/5 last:border-0 active:text-amber-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
