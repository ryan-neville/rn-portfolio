import { Trophy, GraduationCap, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const highlights = [
  {
    icon: Trophy,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/25',
    value: '4x',
    sub: 'Hackathons',
  },
  {
    icon: GraduationCap,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25',
    value: 'Algonquin',
    sub: 'Comp. Eng. Tech',
  },
  {
    icon: MapPin,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/25',
    value: 'Ottawa',
    sub: 'Ontario, Canada',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-28 bg-[#0d1117]">
      {/* Warm glow rising from hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <Reveal className="text-center mb-12 md:mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-amber-400 glass border border-amber-400/20 rounded-full mb-4 sm:mb-5">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile image — hidden on small mobile, shown from sm up */}
          <Reveal variant="left" delay={100} className="flex justify-center">
            <div className="relative mb-10 lg:mb-0">
              {/* Warm glow behind image */}
              <div className="absolute -inset-6 rounded-3xl glow-portrait" />
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-amber-400 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-sky-400 rounded-br-xl" />
              {/* Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Ryan Neville"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Floating badge — repositioned to not overflow on mobile */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass border border-white/10 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl shadow-black/40">
                <div className="text-xl sm:text-2xl font-black gradient-text">11+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Years in Tech</div>
              </div>
            </div>
          </Reveal>

          {/* Bio content */}
          <Reveal variant="right" delay={200}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Hi, I&apos;m Ryan 👋</h3>
            <p className="text-amber-400 font-medium mb-5 sm:mb-6 text-sm sm:text-base">
              Manager, Site Reliability Engineering @ Kinaxis
            </p>

            <div className="space-y-3 sm:space-y-4 text-slate-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              <p>
                I&apos;m a site reliability engineering leader based in Ottawa, Ontario. I currently
                manage a Site Reliability Engineering team at{' '}
                <span className="text-white font-medium">Kinaxis</span> — a global leader in supply
                chain management SaaS — where I&apos;ve grown from Advisory Developer to Senior SRE to
                Team Lead, Cloud Platform, and now into my current management role.
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
                <span className="text-amber-400 font-medium">Kinaxis Hackathons</span> from 2022
                through 2025, earning the Microsoft Choice Award in 2025.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {highlights.map((item, i) => (
                <Reveal
                  key={item.value}
                  delay={300 + i * 100}
                  className={`glass border ${item.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center`}
                >
                  <div className={`inline-flex p-1.5 sm:p-2 rounded-lg sm:rounded-xl ${item.bg} mb-1.5 sm:mb-2`}>
                    <item.icon size={14} className={item.color} />
                  </div>
                  <div className={`text-sm sm:text-lg font-bold ${item.color} leading-tight`}>{item.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-600 mt-0.5 leading-tight">{item.sub}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
