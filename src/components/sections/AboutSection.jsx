import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { A, NAV } from '../../data/assets'
import Container from '../Container'
import { useMagnetic } from '../../hooks/useMagnetic'

gsap.registerPlugin(ScrollTrigger)

const POINTS = [
  '9+ years designing products across logistics, CRM, marketplaces and crypto.',
  'I care about the craft, from UX research to final, dev-ready UI.',
  'I define scalable design systems that keep products consistent.',
  'I align business goals with user needs to make the right design decisions.',
]

// Объединённая секция: «Great products take time» + «product sense + sharp instincts».
// Общий фон-фото с параллаксом на весь скролл секции.
export default function AboutSection() {
  const root = useRef(null)
  const bg = useRef(null)
  const magnetic = useMagnetic({ strength: 0.5 })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg.current,
        { yPercent: -22 },
        {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={root} className="relative overflow-hidden bg-neutral-900">
      {/* Параллакс-фон */}
      <img
        ref={bg}
        src={A.heroPhoto}
        alt=""
        className="absolute inset-x-0 -top-[24%] h-[148%] w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-black/45" />
      {/* Лёгкий шум */}
      <div className="noise pointer-events-none absolute inset-0" />

      {/* Экран 1: Great products take time (слева) */}
      <div className="relative flex min-h-screen items-center">
        <Container>
          <div className="max-w-4xl text-left">
            <h2 className="font-display text-[13vw] font-semibold leading-[1.22] tracking-tight text-graphite-mist sm:text-[12vw] sm:leading-[1.12] lg:text-[150px] lg:leading-[1.0]">
              <span className="block">Great products</span>
              <span className="block">take time</span>
            </h2>
            <p className="mt-6 text-base font-semibold text-white sm:text-2xl">
              the right partner makes them count
            </p>
          </div>
        </Container>
      </div>

      {/* Экран 2: product sense + sharp instincts */}
      <div className="relative flex min-h-screen items-center">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-white/80 sm:text-lg">
              Teams keep partnering with me for my
            </p>
            <h2 className="mt-2 max-w-[14ch] font-display text-5xl font-semibold leading-[1.02] tracking-tight text-graphite-mist sm:text-7xl lg:text-[100px]">
              product sense + sharp instincts
            </h2>

            <ul className="mt-10 grid max-w-2xl gap-x-10 gap-y-5 sm:grid-cols-2">
              {POINTS.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src={A.check} alt="" className="mt-1 h-4 w-4 shrink-0 grayscale" />
                  <span className="text-sm leading-relaxed text-white/85">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <a
                href={NAV.linkedin}
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white/20"
              >
                Learn more about me
                <span
                  ref={magnetic}
                  className="grid h-7 w-7 place-items-center rounded-full bg-graphite-mist text-ink"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
