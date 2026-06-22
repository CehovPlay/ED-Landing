import { NAV } from '../data/assets'
import Container from './Container'

export default function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <Container className="flex items-center justify-between py-5">
        {/* Лого слева — mix-blend, чтобы читалось и на тёмных, и на светлых секциях */}
        <a
          href="#top"
          className="pointer-events-auto text-sm font-semibold tracking-wide text-white mix-blend-difference"
        >
          Dmitry • Edinac
        </a>

        {/* Центральная пилюля */}
        <nav className="pointer-events-auto flex items-center gap-2 rounded-full border border-black/5 bg-white/70 p-1 px-2 shadow-sm backdrop-blur-md">
          <a
            href="#about"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-ink/70 transition hover:bg-black/5"
          >
            About
          </a>
          <a
            href="#/work"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-ink/70 transition hover:bg-black/5"
          >
            Work
          </a>
        </nav>

        {/* Контакты справа */}
        <div className="pointer-events-auto flex items-center gap-4 text-sm font-medium text-white mix-blend-difference">
          <a href={NAV.linkedin} className="hover:opacity-70">
            LinkedIn
          </a>
          <a href={NAV.email} className="hover:opacity-70">
            Email
          </a>
          <a href={NAV.dribbble} className="hover:opacity-70">
            Dribbble
          </a>
        </div>
      </Container>
    </header>
  )
}
