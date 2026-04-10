'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, GraduationCap, MapPin } from 'lucide-react'

const highlights = [
  {
    icon: Trophy,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    label: 'Hackathons',
    value: '4x',
    sub: 'Kinaxis 2022–2025',
  },
  {
    icon: GraduationCap,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    label: 'Education',
    value: "Algonquin",
    sub: 'Computer Engineering Tech.',
  },
  {
    icon: MapPin,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    label: 'Location',
    value: 'Ottawa',
    sub: 'Ontario, Canada',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-28 bg-[#050816]">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-blue-500/40" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-blue-400 glass border border-blue-500/20 rounded-full mb-5">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-pink-500/20 blur-2xl" />
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-violet-500 rounded-br-xl" />
              {/* Image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGIm8AiXZUUmQ/profile-displayphoto-shrink_200_200/0/1731361019777"
                  alt="Ryan Neville"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/108026531?v=4'
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-black gradient-text">10+</div>
                <div className="text-xs text-slate-500">Years in Tech</div>
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Hi, I&apos;m Ryan 👋</h3>
            <p className="text-blue-400 font-medium mb-6">Team Lead, Cloud Platform @ Kinaxis</p>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;m a cloud platform engineer and team lead based in Ottawa, Ontario. I currently
                lead the Cloud Platform team at{' '}
                <span className="text-white font-medium">Kinaxis</span> — a global leader in supply
                chain management SaaS — where I&apos;ve grown from Advisory Developer to Senior SRE to
                my current leadership role.
              </p>
              <p>
                Before Kinaxis, I spent three years at{' '}
                <span className="text-white font-medium">Sitecore</span> progressing from Cloud Ops
                Engineer to Senior Team Lead, and four years as a Software Developer at{' '}
                <span className="text-white font-medium">Kivuto Solutions</span>. I hold a diploma
                in{' '}
                <span className="text-white font-medium">Computer Engineering Technology</span> from
                Algonquin College.
              </p>
              <p>
                I thrive in fast-paced, collaborative environments — demonstrated by participating
                in four consecutive{' '}
                <span className="text-yellow-400 font-medium">Kinaxis Hackathons</span> from 2022
                through 2025. I love building reliable, scalable systems and bringing ideas to life.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={`glass border ${item.border} rounded-2xl p-4 text-center`}
                >
                  <div className={`inline-flex p-2 rounded-xl ${item.bg} mb-2`}>
                    <item.icon size={16} className={item.color} />
                  </div>
                  <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                  <div className="text-[10px] text-slate-600 mt-0.5 leading-tight">{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
