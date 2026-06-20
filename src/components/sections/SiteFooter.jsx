import { A, NAV } from '../../data/assets'

const STACK = ['Figma', 'React', 'Tailwind', 'GSAP', 'Lenis Scroll']

export default function SiteFooter() {
  return (
    <footer className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-neutral-900 pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        src={A.deskVideo}
        poster={A.videoPoster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

      {/* Верхний ряд: «Website made using» + контакты */}
      <div className="relative mx-auto flex w-full max-w-[1600px] items-start justify-between px-6 sm:px-10">
        <div className="text-xs text-white/70">
          <p className="mb-2 font-normal">Contact:</p>
          <ul className="space-y-1 font-semibold text-white">
            <li><a href={NAV.email} className="hover:opacity-70">Email</a></li>
            <li><a href={NAV.linkedin} className="hover:opacity-70">Linkedin</a></li>
            <li><a href={NAV.x} className="hover:opacity-70">X</a></li>
            <li><a href={NAV.behance} className="hover:opacity-70">Behance</a></li>
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
      </div>

      {/* Низ: гигантские Juan / Mora */}
      <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-8 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-[12vw] font-semibold leading-[0.8] tracking-tight text-peach lg:text-[150px]">
              Dmitry
            </h2>
            <p className="mt-3 text-xs font-semibold text-white/80 sm:text-base">
              Product &amp; UI/UX Designer&nbsp;&nbsp;2026
            </p>
          </div>
          <div className="text-right">
            <h2 className="font-display text-[12vw] font-semibold leading-[0.8] tracking-tight text-peach lg:text-[150px]">
              Edinac
            </h2>
            <p className="mt-3 text-xs font-semibold text-white/80 sm:text-base">
              Open to freelance &amp; full-time
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
