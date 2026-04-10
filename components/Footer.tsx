import { MapPin, Linkedin, Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#0d1117] border-t border-white/5 py-16">
      {/* Warm amber accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-7">
          {/* Name */}
          <div>
            <div className="text-3xl font-black gradient-text text-center">Ryan Neville</div>
            <p className="text-slate-500 text-sm text-center mt-1">Team Lead, Cloud Platform</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <MapPin size={13} className="text-amber-400/70" />
            Ottawa, Ontario, Canada
          </div>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://ca.linkedin.com/in/ryan-neville-63b03289"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3 glass border border-white/10 rounded-full text-slate-400 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-300 text-sm font-medium"
            >
              <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ryan-neville"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3 glass border border-white/10 rounded-full text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-all duration-300 text-sm font-medium"
            >
              <Github size={16} className="group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-700 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} Ryan Neville · Built with{' '}
            <Heart size={10} className="text-amber-500 fill-amber-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
