import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
// Mounted directly from the vowel-movement git submodule. As with the
// flashcard app, only the UI is imported — the submodule's own root layout is
// skipped so this route inherits the portfolio shell.
//
// Its stylesheet, unlike the flashcard app's, *is* imported: the game is built
// from CSS modules that read design tokens (`--bg`, `--ink`, `--token-bg`, …)
// declared in that stylesheet's `:root`. Without it every surface in the grid
// falls back to transparent. It is plain CSS with no Tailwind layers, so it has
// nothing to fight with the portfolio's own globals, and it only loads on this
// route.
import '@/projects/vowel-movement/app/globals.css'
import VowelMovementApp from '@/projects/vowel-movement/app/page'

export const metadata: Metadata = {
  title: 'Vowel Movement | Ryan Neville',
  description:
    'A daily 4x4 word square. Drag the day’s eight vowels into the blanks to spell four words across and four words down.',
}

export default function VowelMovementPage() {
  return (
    <div className="relative">
      {/*
        Back to portfolio. The flashcard route's white glass pill would vanish
        against this app's light palette, so this one is painted from the game's
        own tokens and tracks its light/dark scheme with it.

        A plain anchor rather than `next/link`: the stylesheet imported above
        restyles `body`, and the App Router does not reliably drop a route's
        stylesheet on client-side navigation — a soft nav home can leave the
        page wearing the game's background. A document load cannot.
      */}
      <a
        href="/#projects"
        className="fixed top-4 left-4 z-50 flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-full border text-sm font-medium transition-colors touch-manipulation bg-[var(--bg-panel)] hover:bg-[var(--bg-sunken)] active:bg-[var(--bg-sunken)] border-[var(--line)] text-[var(--ink)] shadow-[var(--shadow)]"
      >
        <ArrowLeft size={15} />
        <span className="hidden sm:inline">Back to portfolio</span>
      </a>

      <VowelMovementApp />
    </div>
  )
}
