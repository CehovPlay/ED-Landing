import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { A } from '../../data/assets'

gsap.registerPlugin(ScrollTrigger)

// Раскладка шейпов: позиция, размер и «скорость» параллакса (глубина).
const SHAPES = [
  { src: A.shapes.circle1, top: '12%', left: '40%', w: 240, speed: 1.4 },
  { src: A.shapes.pill, top: '20%', left: '14%', w: 220, speed: 0.7 },
  { src: A.shapes.hexagon, top: '8%', left: '74%', w: 150, speed: 1.1 },
  { src: A.shapes.square, top: '46%', left: '20%', w: 130, speed: 0.5 },
  { src: A.shapes.circle2, top: '52%', left: '66%', w: 160, speed: 1.6 },
  { src: A.shapes.circle3, top: '60%', left: '82%', w: 110, speed: 0.9 },
  { src: A.shapes.blueCircle, top: '30%', left: '60%', w: 26, speed: 2 },
  { src: A.shapes.bluePill, top: '18%', left: '30%', w: 30, speed: 1.8 },
  { src: A.shapes.blueHex, top: '64%', left: '48%', w: 26, speed: 2.2 },
]

export default function FloatingShapes() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Параллакс: чем выше speed — тем сильнее шейп уезжает (ощущение глубины).
      // ↓ scrub держит движение «привязанным» к скроллу.
      gsap.utils.toArray('.shape').forEach((el) => {
        const speed = parseFloat(el.dataset.speed)
        gsap.fromTo(
          el,
          { yPercent: 40 * speed },
          {
            yPercent: -40 * speed,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2, // ← интенсивность параллакса шейпов
              invalidateOnRefresh: true,
            },
          },
        )
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-cream"
    >
      {SHAPES.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt=""
          data-speed={s.speed}
          className="shape pointer-events-none absolute will-change-transform"
          style={{ top: s.top, left: s.left, width: s.w }}
        />
      ))}

      <span className="absolute bottom-10 left-6 text-xs font-medium uppercase tracking-[0.25em] text-ink/50 sm:left-10">
        Design Expert
      </span>
    </section>
  )
}
