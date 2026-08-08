import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
// Mounted directly from the japanese-flashcard-app git submodule.
// Only the app UI is imported — the submodule's own root layout and Tailwind 4
// globals are intentionally skipped so this route inherits the portfolio shell.
import FlashcardsApp from '@/projects/japanese-flashcard-app/app/page'

export const metadata: Metadata = {
  title: '日本語 Flashcards | Ryan Neville',
  description:
    'Practice Japanese hiragana and katakana with an interactive flashcard deck — 210 cards covering every base character and consonant combination.',
}

export default function JapaneseFlashcardsPage() {
  return (
    <div className="relative">
      {/* Back to portfolio */}
      <Link
        href="/#projects"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 backdrop-blur-md text-white text-sm font-medium transition-colors"
      >
        <ArrowLeft size={15} />
        <span className="hidden sm:inline">Back to portfolio</span>
      </Link>

      <FlashcardsApp />
    </div>
  )
}
