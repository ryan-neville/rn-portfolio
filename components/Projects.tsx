import { ExternalLink, Github, Languages, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

type Project = {
  icon: React.ElementType
  name: string
  tagline: string
  description: string
  /** Where the running app lives — opens in a new tab. */
  liveUrl?: string
  repoUrl: string
  stats: { value: string; label: string }[]
  tags: string[]
  accent: string
  glow: string
}

const projects: Project[] = [
  {
    icon: Languages,
    name: 'Japanese Kana Flashcards',
    tagline: 'Hiragana & katakana practice',
    description:
      'An interactive flashcard app for memorizing Japanese kana. Covers every base character and consonant combination with 3D flip animations, swipe navigation, Fisher-Yates shuffling, and hiragana-only, katakana-only, or combined practice modes.',
    // Served by this site from the japanese-flashcard-app submodule.
    liveUrl: '/projects/japanese-flashcards',
    repoUrl: 'https://github.com/ryan-neville/japanese-flashcard-app',
    stats: [
      { value: '210', label: 'Cards' },
      { value: '105', label: 'Hiragana' },
      { value: '105', label: 'Katakana' },
    ],
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS 4'],
    accent: 'from-amber-400 to-orange-400',
    glow: 'shadow-amber-500/20',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryUrl = project.liveUrl ?? project.repoUrl

  // The reveal lives on a wrapper so the card keeps its own hover transition —
  // both set the `transition` shorthand, and one would clobber the other.
  return (
    <Reveal delay={index * 120} className="h-full">
      <article
        className={`group relative h-full glass border border-white/8 hover:border-amber-400/30 rounded-2xl p-5 sm:p-7 md:p-8 transition-all duration-300 hover:shadow-xl ${project.glow} focus-within:border-amber-400/40`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.accent} shadow-lg ${project.glow}`}>
              <project.icon size={18} className="text-[#0d1117]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                {/* Stretched link — makes the whole card selectable */}
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 rounded"
                >
                  {project.name}
                </a>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{project.tagline}</p>
            </div>
          </div>
          <ArrowUpRight
            size={18}
            className="flex-shrink-0 text-slate-600 group-hover:text-amber-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
          />
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
          {project.stats.map((stat) => (
            <div key={stat.label} className="glass border border-white/8 rounded-xl p-2.5 sm:p-3 text-center">
              <div className="text-base sm:text-lg font-bold gradient-text leading-tight">{stat.value}</div>
              <div className="text-[9px] sm:text-[10px] text-slate-600 mt-0.5 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-lg glass border border-white/8 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions — sit above the stretched link */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.accent} rounded-full text-[#0d1117] font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-xl ${project.glow} w-full sm:w-auto`}
            >
              <ExternalLink size={15} />
              Launch App
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 glass border border-white/20 rounded-full text-white font-semibold text-sm hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            <Github size={15} />
            View Code
          </a>
          </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 lg:py-28 bg-[#0d1117]">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-sky-400/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[720px] h-[720px] rounded-full orb-amber pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <Reveal className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-amber-400 glass border border-amber-400/20 rounded-full mb-4 sm:mb-5">
            Side Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-lg mx-auto">
            Select a project to open it in a new tab.
          </p>
        </Reveal>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
