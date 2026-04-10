'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Trophy, Star, Code } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    company: 'Kinaxis',
    role: 'Software Developer',
    location: 'Ottawa, Ontario, Canada',
    period: '2014 — Present',
    current: true,
    description:
      'Contributing to enterprise supply chain SaaS solutions at Kinaxis — a global leader whose software is trusted by the world\'s most recognized brands. Involved in the full software development lifecycle, building and maintaining features that help organizations manage complex supply chain operations at scale.',
    highlights: [
      { icon: Trophy, color: 'text-yellow-400', text: 'Kinaxis Hackathon Winner — 2023' },
      { icon: Trophy, color: 'text-yellow-400', text: 'Kinaxis Hackathon Winner — 2022' },
    ],
    tags: ['SaaS', 'Supply Chain', 'Enterprise Software', 'Full-Stack'],
    accent: 'from-blue-500 to-cyan-500',
    dotColor: 'bg-blue-500',
    shadowColor: 'shadow-blue-500/40',
  },
  {
    type: 'volunteer',
    icon: Code,
    company: 'Algonquin College',
    role: 'Software Installation Facilitator (Volunteer)',
    location: 'Ottawa, Ontario, Canada',
    period: 'January 2014',
    current: false,
    description:
      'Volunteered to assist incoming Computer Engineering Technology students with setting up their development environments. Guided peers through installing NetBeans IDE and other essential college software, helping classmates get up and running quickly at the start of the academic year.',
    highlights: [
      { icon: Star, color: 'text-green-400', text: 'Peer mentoring & technical onboarding' },
    ],
    tags: ['Mentoring', 'NetBeans', 'Technical Support'],
    accent: 'from-green-500 to-teal-500',
    dotColor: 'bg-green-500',
    shadowColor: 'shadow-green-500/40',
  },
  {
    type: 'education',
    icon: GraduationCap,
    company: 'Algonquin College',
    role: 'Computer Engineering Technology',
    location: 'Ottawa, Ontario, Canada',
    period: '2012 — 2014',
    current: false,
    description:
      'Completed a two-year diploma program in Computer Engineering Technology, building a rigorous foundation in software development, computer networking, digital systems, and embedded programming. Gained hands-on experience with engineering principles applied to real-world software and hardware challenges.',
    highlights: [
      { icon: GraduationCap, color: 'text-violet-400', text: 'Diploma — Computer Engineering Technology' },
    ],
    tags: ['Software Development', 'Computer Networking', 'Digital Systems', 'Embedded Systems'],
    accent: 'from-violet-500 to-purple-500',
    dotColor: 'bg-violet-500',
    shadowColor: 'shadow-violet-500/40',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-28 bg-[#07091a]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-violet-400 glass border border-violet-500/20 rounded-full mb-5">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-6 top-7 w-5 h-5 rounded-full ${exp.dotColor} -translate-x-[10px] z-10 shadow-lg ${exp.shadowColor} flex items-center justify-center`}
                >
                  <div className={`w-2 h-2 rounded-full bg-white/80`} />
                  {exp.current && (
                    <div
                      className={`absolute inset-0 rounded-full ${exp.dotColor} animate-ping opacity-30`}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="group glass border border-white/8 hover:border-white/15 rounded-2xl p-6 md:p-8 transition-all duration-400 hover:shadow-xl hover:shadow-black/30">
                  {/* Current badge */}
                  {exp.current && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-blue-500/15 text-blue-400 border border-blue-500/25 rounded-full mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      Current Position
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`p-1.5 rounded-lg bg-gradient-to-br ${exp.accent} bg-opacity-10`}
                          style={{ background: 'rgba(255,255,255,0.05)' }}
                        >
                          <exp.icon size={14} className="text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                          {exp.type === 'work'
                            ? 'Work Experience'
                            : exp.type === 'education'
                            ? 'Education'
                            : 'Volunteer'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                        {exp.company}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                      <div className="text-xs text-slate-600 mt-1">{exp.location}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <h.icon size={13} className={`${h.color} flex-shrink-0`} />
                        <span className="text-sm text-slate-300">{h.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-lg glass border border-white/8 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
