'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Github, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050816] bg-grid">
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[100px] animate-float pointer-events-none"
        style={{ animationDelay: '1s' }}
      />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050816_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-8"
        >
          <div className="relative w-36 h-36">
            {/* Outer spinning ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 animate-spin-slow opacity-70" />
            {/* Inner container */}
            <div className="absolute inset-0.5 rounded-full bg-[#050816]" />
            {/* Image */}
            <div className="absolute inset-1.5 rounded-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQGIm8AiXZUUmQ/profile-displayphoto-shrink_200_200/0/1731361019777"
                alt="Ryan Neville"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://avatars.githubusercontent.com/u/108026531?v=4'
                }}
              />
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.4)]" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 flex items-center gap-2 px-4 py-1.5 glass border border-blue-500/20 rounded-full"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-slate-400 font-medium">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-4 leading-none tracking-tight"
        >
          <span className="gradient-text">Ryan</span>
          <br />
          <span className="text-white">Neville</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-slate-400 mb-5 font-light max-w-lg"
        >
          Software Developer{' '}
          <span className="text-blue-400 font-medium">@Kinaxis</span>
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center gap-2 mb-10 text-slate-500 text-sm"
        >
          <MapPin size={14} className="text-blue-400" />
          Ottawa, Ontario, Canada
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://ca.linkedin.com/in/ryan-neville-63b03289"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <ExternalLink size={15} />
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/ryan-neville"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 glass border border-white/15 rounded-full text-white font-semibold text-sm hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200 hover:scale-105"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
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
