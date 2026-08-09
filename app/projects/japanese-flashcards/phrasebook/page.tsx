import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
// Mounted directly from the japanese-flashcard-app git submodule, alongside the
// deck at ../page.tsx. The submodule's in-app links resolve against wherever the
// app is mounted, so every route it owns needs a matching file here.
import PhrasebookApp from '@/projects/japanese-flashcard-app/app/phrasebook/page'

export const metadata: Metadata = {
  title: 'Phrasebook — 日本語 Flashcards | Ryan Neville',
  description:
    'A Japan travel phrasebook — everyday phrases with kana, romaji and English, browsable by section.',
}

export default function JapaneseFlashcardsPhrasebookPage() {
  return (
    // The submodule's own layout gives <body> the page gradient and a flex
    // column for its `flex-1` main; this route inherits the portfolio shell
    // instead, so the wrapper supplies both.
    <div className="relative flex flex-col min-h-[100dvh] bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Back to portfolio */}
      <Link
        href="/#projects"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 backdrop-blur-md text-white text-sm font-medium transition-colors"
      >
        <ArrowLeft size={15} />
        <span className="hidden sm:inline">Back to portfolio</span>
      </Link>

      <PhrasebookApp />
    </div>
  )
}
