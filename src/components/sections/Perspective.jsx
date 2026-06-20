import { A, NAV } from '../../data/assets'
import Reveal from '../Reveal'

const POINTS = [
  'I bring a premium and unique visual direction that makes your brand stand out.',
  'I care about the craft, from concept to final product.',
  'I define scalable design systems that keep your brand consistent.',
  'I align your goals with my experience to make the right design decisions for your brand.',
]

export default function Perspective() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-900 px-6 py-28 sm:px-10"
    >
      <img
        src={A.heroPhoto}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative max-w-3xl">
        <Reveal as="p" className="text-sm font-semibold text-white/80 sm:text-lg">
          Companies partner with me because of my
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="mt-2 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-peach sm:text-7xl lg:text-[100px]"
        >
          perspective +<br />sharp instincts
        </Reveal>

        <ul className="mt-10 grid max-w-2xl gap-x-10 gap-y-5 sm:grid-cols-2">
          {POINTS.map((p, i) => (
            <Reveal as="li" key={i} delay={0.1 + i * 0.05} className="flex items-start gap-3">
              <img src={A.check} alt="" className="mt-1 h-4 w-4 shrink-0" />
              <span className="text-sm leading-relaxed text-white/85">{p}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-12">
          <a
            href={NAV.linkedin}
            className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white/20"
          >
            Learn more about me
            <span className="grid h-7 w-7 place-items-center rounded-full bg-peach text-ink">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
