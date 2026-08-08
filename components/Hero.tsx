import { MapPin, ExternalLink, Github, ChevronDown } from 'lucide-react'

/**
 * Server component: the hero is the LCP and must paint from the HTML alone.
 * Entrance animations are CSS (see globals.css), so nothing here waits on JS.
 */
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
        <div className="anim-pop mb-6 sm:mb-8">
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
                width={200}
                height={200}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Warm glow */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(251,191,36,0.2)]" />
          </div>
        </div>

        {/* Name */}
        <h1
          className="anim-up text-5xl sm:text-6xl md:text-8xl font-black mb-3 sm:mb-4 leading-none tracking-tight"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="gradient-text">Ryan</span>
          <br />
          <span className="text-white drop-shadow-lg">Neville</span>
        </h1>

        {/* Title */}
        <p
          className="anim-up text-base sm:text-lg md:text-xl text-slate-300 mb-4 sm:mb-5 font-light max-w-sm sm:max-w-lg drop-shadow"
          style={{ animationDelay: '0.35s' }}
        >
          Manager, Site Reliability Engineering{' '}
          <span className="text-amber-400 font-medium">@Kinaxis</span>
        </p>

        {/* Location */}
        <div
          className="anim-up flex items-center gap-2 mb-8 sm:mb-10 text-slate-400 text-sm"
          style={{ animationDelay: '0.45s' }}
        >
          <MapPin size={14} className="text-amber-400" />
          Ottawa, Ontario, Canada
        </div>

        {/* CTA buttons — stacked on mobile, side-by-side on sm+ */}
        <div
          className="anim-up flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          style={{ animationDelay: '0.55s' }}
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
            className="flex items-center justify-center gap-2 px-7 py-3.5 glass-photo border border-white/20 rounded-full text-white font-semibold text-sm hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="anim-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="anim-bob">
          <ChevronDown size={18} />
        </div>
      </a>
    </section>
  )
}
