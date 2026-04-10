'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Trophy, Star, Code, ChevronRight } from 'lucide-react'

type Role = {
  title: string
  period: string
  current?: boolean
}

type Entry = {
  type: 'work' | 'education' | 'volunteer'
  icon: React.ElementType
  company: string
  location: string
  overallPeriod: string
  current?: boolean
  description: string
  roles: Role[]
  highlights: { icon: React.ElementType; color: string; text: string }[]
  tags: string[]
  accent: string
  dotColor: string
  shadowColor: string
}

const experiences: Entry[] = [
  {
    type: 'work',
    icon: Briefcase,
    company: 'Kinaxis',
    location: 'Ottawa, Ontario, Canada',
    overallPeriod: 'Jun 2022 — Present',
    current: true,
    description:
      'Progressed through multiple engineering roles at Kinaxis, a global leader in supply chain management SaaS. Responsibilities have spanned cloud engineering, site reliability, and platform leadership — helping ensure that enterprise customers worldwide can depend on a resilient, scalable supply chain platform.',
    roles: [
      { title: 'Team Lead — Cloud Platform', period: 'Nov 2024 — Present', current: true },
      { title: 'Senior Site Reliability Engineer', period: 'Jan 2023 — Nov 2024' },
      { title: 'Advisory Developer, Cloud Engineering', period: 'Jun 2022 — Jan 2023' },
    ],
    highlights: [
      { icon: Trophy, color: 'text-yellow-400', text: 'Kinaxis Hackathon Participant — 2025' },
      { icon: Trophy, color: 'text-yellow-400', text: 'Kinaxis Hackathon Participant — 2024' },
      { icon: Trophy, color: 'text-yellow-400', text: 'Kinaxis Hackathon Participant — 2023' },
      { icon: Trophy, color: 'text-yellow-400', text: 'Kinaxis Hackathon Participant — 2022' },
    ],
    tags: ['Cloud Platform', 'Site Reliability Engineering', 'Team Leadership', 'DevOps'],
    accent: 'from-blue-500 to-cyan-500',
    dotColor: 'bg-blue-500',
    shadowColor: 'shadow-blue-500/40',
  },
  {
    type: 'work',
    icon: Briefcase,
    company: 'Sitecore',
    location: 'Gatineau, Quebec, Canada',
    overallPeriod: 'May 2019 — Jun 2022',
    description:
      "Held a series of increasingly senior cloud operations roles at Sitecore, a leading digital experience platform company. Managed cloud infrastructure, improved operational reliability, and eventually led a team of cloud operations engineers — ensuring uptime and scalability for Sitecore's enterprise SaaS products.",
    roles: [
      { title: 'Senior Cloud Operations Engineer, Team Lead', period: 'Jun 2021 — Jun 2022' },
      { title: 'Senior Cloud Operations Engineer', period: 'Mar 2021 — Jun 2021' },
      { title: 'Cloud Ops Engineer', period: 'May 2019 — Mar 2021' },
    ],
    highlights: [
      { icon: Star, color: 'text-sky-400', text: 'Promoted to Team Lead within cloud operations' },
    ],
    tags: ['Cloud Operations', 'Team Leadership', 'Infrastructure', 'DevOps'],
    accent: 'from-sky-500 to-indigo-500',
    dotColor: 'bg-sky-500',
    shadowColor: 'shadow-sky-500/40',
  },
  {
    type: 'work',
    icon: Code,
    company: 'Kivuto Solutions',
    location: 'Ottawa / Kanata, Ontario, Canada',
    overallPeriod: 'May 2015 — Apr 2019',
    description:
      'Worked as a Software Developer at Kivuto Solutions, building and maintaining software products across a four-year tenure. Contributed to feature development, bug fixes, and code quality improvements on enterprise software solutions.',
    roles: [{ title: 'Software Developer', period: 'May 2015 — Apr 2019' }],
    highlights: [],
    tags: ['C#', 'Java', 'Software Development', 'Full-Stack'],
    accent: 'from-violet-500 to-purple-500',
    dotColor: 'bg-violet-500',
    shadowColor: 'shadow-violet-500/40',
  },
  {
    type: 'education',
    icon: GraduationCap,
    company: 'Algonquin College',
    location: 'Ottawa, Ontario, Canada',
    overallPeriod: '2012 — 2014',
    description:
      'Completed a two-year diploma in Computer Engineering Technology — Computing Science, gaining a strong foundation in software development, computer networking, digital systems, and embedded programming.',
    roles: [{ title: 'Computer Engineering Technology — Computing Science (Diploma)', period: '2012 — 2014' }],
    highlights: [
      { icon: GraduationCap, color: 'text-violet-400', text: 'Diploma — Computer Engineering Technology' },
    ],
    tags: ['Software Development', 'Networking', 'Digital Systems', 'C', 'Java'],
    accent: 'from-fuchsia-500 to-pink-500',
    dotColor: 'bg-fuchsia-500',
    shadowColor: 'shadow-fuchsia-500/40',
  },
]

function EntryCard({ exp, index, isInView }: { exp: Entry; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative pl-16 md:pl-20"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-4 md:left-6 top-7 w-5 h-5 rounded-full ${exp.dotColor} -translate-x-[10px] z-10 shadow-lg ${exp.shadowColor} flex items-center justify-center`}
      >
        <div className="w-2 h-2 rounded-full bg-white/80" />
        {exp.current && (
          <div className={`absolute inset-0 rounded-full ${exp.dotColor} animate-ping opacity-25`} />
        )}
      </div>

      {/* Card */}
      <div className="group glass border border-white/8 hover:border-white/15 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
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
              <div className="p-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <exp.icon size={14} className="text-slate-400" />
              </div>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                {exp.type === 'work' ? 'Work Experience' : exp.type === 'education' ? 'Education' : 'Volunteer'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
              {exp.company}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{exp.location}</p>
          </div>
          <span className="text-xs text-slate-500 font-mono whitespace-nowrap mt-1">
            {exp.overallPeriod}
          </span>
        </div>

        {/* Role progression */}
        {exp.roles.length > 1 && (
          <div className="mb-5 pl-3 border-l border-white/8 space-y-2">
            {exp.roles.map((role, i) => (
              <div key={i} className="flex items-start gap-2">
                <ChevronRight size={12} className={`mt-0.5 flex-shrink-0 bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`} style={{ color: i === 0 ? '#60a5fa' : '#64748b' }} />
                <div>
                  <span className={`text-sm font-medium ${i === 0 ? 'text-white' : 'text-slate-400'}`}>
                    {role.title}
                  </span>
                  {role.current && (
                    <span className="ml-2 text-[10px] text-blue-400 font-medium">● Now</span>
                  )}
                  <div className="text-xs text-slate-600 font-mono">{role.period}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {exp.roles.length === 1 && (
          <p className={`text-sm font-medium bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent mb-4`}>
            {exp.roles[0].title}
          </p>
        )}

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

        {/* Highlights */}
        {exp.highlights.length > 0 && (
          <div className="space-y-2 mb-5">
            {exp.highlights.map((h, j) => (
              <div key={j} className="flex items-center gap-2">
                <h.icon size={13} className={`${h.color} flex-shrink-0`} />
                <span className="text-sm text-slate-300">{h.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg glass border border-white/8 text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

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
              <EntryCard key={i} exp={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
