import { NAV } from '../../data/assets'
import Container from '../Container'

const STACK = ['Figma', 'React', 'Tailwind', 'GSAP', 'Lenis Scroll']

export default function SiteFooter() {
  return (
    <footer className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-neutral-900 pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale"
        src="/night-rain.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Графитовый оверлей */}
      <div className="absolute inset-0 bg-neutral-900/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Верхний ряд: «Website made using» + контакты */}
      <Container className="relative flex items-start justify-between">
        <div className="text-xs text-white/70">
          <p className="mb-2 font-normal">Contact:</p>
          <ul className="space-y-1 font-semibold text-white">
            <li><a href={NAV.linkedin} className="hover:opacity-70">LinkedIn</a></li>
            <li><a href={NAV.email} className="hover:opacity-70">Email</a></li>
            <li><a href={NAV.dribbble} className="hover:opacity-70">Dribbble</a></li>
          </ul>
        </div>

        <div className="text-right text-xs text-white/70">
          <p className="mb-2 font-normal">Website made using:</p>
          <ul className="space-y-1 font-semibold text-white">
            {STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Низ: гигантские Dmitry / Edinac */}
      <Container className="relative pb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-[12vw] font-semibold leading-[0.8] tracking-tight text-graphite-mist lg:text-[150px]">
              Dmitry
            </h2>
            <p className="mt-3 text-xs font-semibold text-white/80 sm:text-base">
              Product &amp; UI/UX Designer&nbsp;&nbsp;2026
            </p>
          </div>
          <div className="text-right">
            <h2 className="font-display text-[12vw] font-semibold leading-[0.8] tracking-tight text-graphite-mist lg:text-[150px]">
              Edinac
            </h2>
            <p className="mt-3 text-xs font-semibold text-white/80 sm:text-base">
              Open to freelance &amp; full-time
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
