import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { A } from '../../data/assets'

gsap.registerPlugin(ScrollTrigger)

// Куда вылетают карточки из папки при ховере (x, y, rotation).
const SCATTER = [
  { x: -300, y: -150, r: -20 },
  { x: -180, y: -235, r: -11 },
  { x: -55, y: -275, r: -3 },
  { x: 90, y: -262, r: 5 },
  { x: 220, y: -212, r: 13 },
  { x: 330, y: -120, r: 22 },
]

export default function WorkFolder() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.work-bg',
        { xPercent: -6 },
        {
          xPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        },
      )
      gsap.fromTo(
        '.work-folder',
        { y: 40, scale: 0.96, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          ease: 'power3.out',
          duration: 1,
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        },
      )
      // Исходная «стопка» внутри папки (за карманом)
      gsap.set('.ff-card', { x: 0, y: (i) => i * 4, rotation: (i) => (i - 2.5) * 2.5 })
    }, root)
    return () => ctx.revert()
  }, [])

  const scatter = () => {
    gsap.to('.ff-card', {
      x: (i) => SCATTER[i].x,
      y: (i) => SCATTER[i].y,
      rotation: (i) => SCATTER[i].r,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.07,
    })
    // Карман слегка откидывается (открывается)
    gsap.to('.ff-pocket', {
      rotationX: -20,
      y: 14,
      transformOrigin: 'center bottom',
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power3.out',
    })
  }
  const restack = () => {
    gsap.to('.ff-card', {
      x: 0,
      y: (i) => i * 4,
      rotation: (i) => (i - 2.5) * 2.5,
      duration: 0.45,
      ease: 'power3.inOut',
      stagger: 0.05,
    })
    gsap.to('.ff-pocket', { rotationX: 0, y: 0, duration: 0.45, ease: 'power3.inOut' })
  }

  return (
    <section
      id="work"
      ref={root}
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden bg-cream"
    >
      {/* Огромное полупрозрачное слово на фоне */}
      <span className="work-bg pointer-events-none absolute select-none whitespace-nowrap font-display text-[34vw] font-bold leading-none text-ink/10">
        Work
      </span>

      <div className="relative flex flex-col items-center gap-6">
        <p className="text-sm font-semibold text-ink/70">Curious? Take a look inside my</p>

        {/* Графитовая 3D-папка: карточки лежат стопкой, на hover разлетаются */}
        <div
          className="work-folder relative w-[34rem] max-w-[84vw] cursor-pointer"
          onMouseEnter={scatter}
          onMouseLeave={restack}
          onClick={() => {
            window.location.hash = '#/work'
          }}
        >
          {/* Задняя стенка папки (графит) */}
          <img src={A.folder.back} alt="" className="w-full select-none grayscale brightness-[0.82]" />

          {/* Стопка карточек внутри папки (за карманом). На hover вылетает наружу. */}
          <div className="pointer-events-none absolute inset-0">
            {[...A.websites, ...A.branding].slice(0, 6).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                style={{ marginLeft: -140 }}
                className="ff-card absolute left-1/2 top-[30%] h-44 w-[280px] rounded-lg object-cover shadow-2xl ring-1 ring-black/10"
              />
            ))}
          </div>

          {/* Передний карман (графит, без монограммы) — поверх стопки */}
          <div className="ff-pocket absolute bottom-[3%] left-[5%] z-10 h-[58%] w-[90%] overflow-hidden rounded-[22px] bg-gradient-to-b from-neutral-500 to-neutral-700 p-5 shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)]">
            <span className="inline-block rounded-md border border-white/25 px-3 py-1 text-[11px] font-medium tracking-wide text-white/70">
              Portfolio
            </span>
          </div>
        </div>

        <p className="text-sm font-semibold text-ink/70">Or keep scrolling</p>
      </div>
    </section>
  )
}
