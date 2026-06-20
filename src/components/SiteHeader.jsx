import { NAV } from '../data/assets'

// Логотип-монограмма (синие наклонные штрихи) — как в центре нав-пилюли референса
function Monogram({ className = '' }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden>
      <g fill="var(--color-royal)">
        <rect x="2" y="2" width="4.5" height="16" rx="2.25" transform="skewX(-12)" />
        <rect x="11" y="2" width="4.5" height="16" rx="2.25" transform="skewX(-12)" />
        <rect x="20" y="2" width="4.5" height="16" rx="2.25" transform="skewX(-12)" />
      </g>
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        {/* Лого слева — mix-blend, чтобы читалось и на тёмных, и на светлых секциях */}
        <a
          href="#top"
          className="pointer-events-auto text-sm font-semibold tracking-wide text-white mix-blend-difference"
        >
          Dmitry • Edinac
        </a>

        {/* Центральная пилюля */}
        <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-black/5 bg-white/70 p-1 pr-2 shadow-sm backdrop-blur-md">
          <a
            href="#about"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-ink/70 transition hover:bg-black/5"
          >
            About
          </a>
          <span className="grid h-7 w-9 place-items-center">
            <Monogram className="h-4 w-auto" />
          </span>
          <a
            href="#work"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-ink/70 transition hover:bg-black/5"
          >
            Work
          </a>
        </nav>

        {/* Контакты справа */}
        <div className="pointer-events-auto flex items-center gap-4 text-sm font-medium text-white mix-blend-difference">
          <a href={NAV.email} className="hover:opacity-70">
            Email
          </a>
          <a href={NAV.linkedin} className="hover:opacity-70">
            in
          </a>
          <a href={NAV.x} className="hover:opacity-70">
            x
          </a>
          <a href={NAV.behance} className="hover:opacity-70">
            Be
          </a>
        </div>
      </div>
    </header>
  )
}
