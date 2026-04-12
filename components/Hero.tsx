'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Github, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="hero-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/background_photo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Layered dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-[#0d1117]" />
      {/* Warm golden vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36">
            {/* Spinning sunset ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-sky-500 animate-spin-slow opacity-80" />
            {/* Inner dark border */}
            <div className="absolute inset-0.5 rounded-full bg-[#0d1117]" />
            {/* Photo */}
            <div className="absolute inset-1.5 rounded-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Ryan Neville"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Warm glow */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(251,191,36,0.2)]" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black mb-3 sm:mb-4 leading-none tracking-tight"
        >
          <span className="gradient-text">Ryan</span>
          <br />
          <span className="text-white drop-shadow-lg">Neville</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 mb-4 sm:mb-5 font-light max-w-sm sm:max-w-lg drop-shadow"
        >
          Team Lead, Cloud Platform{' '}
          <span className="text-amber-400 font-medium">@Kinaxis</span>
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center gap-2 mb-8 sm:mb-10 text-slate-400 text-sm"
        >
          <MapPin size={14} className="text-amber-400" />
          Ottawa, Ontario, Canada
        </motion.div>

        {/* CTA buttons — stacked on mobile, side-by-side on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="https://ca.linkedin.com/in/ryan-neville-63b03289"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 w-full sm:w-auto"
          >
            <ExternalLink size={15} />
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/ryan-neville"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 glass border border-white/20 rounded-full text-white font-semibold text-sm hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            <Github size={15} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}
