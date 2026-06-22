import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '../Container'
import { A } from '../../data/assets'

gsap.registerPlugin(ScrollTrigger)

// Разные фигуры: PNG-сферы/пилюли (без иконок) + CSS-сквирклы/капсулы. Плотно, с перекрытием.
const GRAD = 'radial-gradient(circle at 35% 28%, #ffffff, #dcdcdc 55%, #a6a6a6 100%)'
const SHAPES = [
  { type: 'img', src: A.shapes.circle1, top: '2%', left: '30%', w: 540, speed: 1.2 },
  { type: 'img', src: A.shapes.circle2, top: '22%', left: '52%', w: 470, speed: 1.35 },
  { type: 'img', src: A.shapes.pill, top: '-4%', left: '0%', w: 480, speed: 0.6 },
  { type: 'css', shape: 'squircle', top: '0%', left: '70%', w: 300, h: 300, speed: 0.95 },
  { type: 'css', shape: 'squircle', top: '42%', left: '17%', w: 240, h: 240, speed: 0.5 },
  { type: 'img', src: A.shapes.pill, top: '50%', left: '40%', w: 340, speed: 0.8 },
  { type: 'img', src: A.shapes.circle1, top: '52%', left: '62%', w: 280, speed: 1.0 },
  { type: 'css', shape: 'capsule', top: '28%', left: '-5%', w: 380, h: 200, speed: 0.7 },
]

// Плывущие линии: одинаковая явная толщина, летают в разные стороны.
const LINE_W = 6
const LINE_OP = 0.5
const LINES = [
  { d: 'M60,160 C320,460 480,100 620,300 C740,480 880,240 980,380', dir: 1 },
  { d: 'M980,120 C760,360 560,80 360,300 C230,450 110,250 20,430', dir: -1 },
  { d: 'M500,20 C400,240 660,340 540,560 C470,690 340,580 300,720', dir: 1 },
  { d: 'M40,440 C260,300 420,540 640,360 C800,230 900,420 990,300', dir: -1 },
  { d: 'M820,40 C700,220 520,200 460,420 C420,560 560,640 700,560', dir: 1 },
]

export default function IntroShapes() {
  const root = useRef(null)
  const lineRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.shape').forEach((el) => {
        const speed = parseFloat(el.dataset.speed)
        gsap.fromTo(
          el,
          { yPercent: 50 * speed },
          {
            yPercent: -82 * speed,
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
      })

      lineRefs.current.forEach((path, i) => {
        if (!path) return
        const len = path.getTotalLength()
        const seg = len * 0.16
        const dir = LINES[i].dir
        gsap.set(path, {
          strokeDasharray: `${seg} ${len}`,
          strokeDashoffset: dir > 0 ? len + seg : -seg,
        })
        gsap.to(path, {
          strokeDashoffset: dir > 0 ? -seg : len + seg,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden bg-cream">
      {/* Экран 1: фраза на всю ширину контента, ближе к hero */}
      <div className="relative z-10 flex min-h-[52vh] items-start pt-[14vh]">
        <Container>
          <h2 className="text-left font-display text-[9vw] font-semibold leading-[0.98] tracking-tight text-ink lg:text-[126px]">
            9 years building{' '}
            <span className="inline-block rounded-full bg-graphite-soft px-6 pb-2 pt-1 text-ink">
              products
            </span>{' '}
            people <span className="text-graphite">love</span> to use
          </h2>
        </Container>
      </div>

      {/* Экран 2: фигуры (z-20), слегка наезжают на текст */}
      <div className="relative z-20 -mt-[14vh] h-[98vh]">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {LINES.map((l, i) => (
            <path
              key={i}
              ref={(el) => (lineRefs.current[i] = el)}
              d={l.d}
              stroke="var(--color-ink)"
              strokeOpacity={LINE_OP}
              strokeWidth={LINE_W}
              strokeLinecap="round"
            />
          ))}
        </svg>

        {SHAPES.map((s, i) =>
          s.type === 'css' ? (
            <div
              key={i}
              data-speed={s.speed}
              className={`shape pointer-events-none absolute will-change-transform ${
                s.shape === 'squircle' ? 'rounded-[34%]' : 'rounded-full'
              }`}
              style={{ top: s.top, left: s.left, width: s.w, height: s.h, background: GRAD }}
            />
          ) : (
            <img
              key={i}
              src={s.src}
              alt=""
              data-speed={s.speed}
              className="shape pointer-events-none absolute grayscale will-change-transform"
              style={{ top: s.top, left: s.left, width: s.w }}
            />
          ),
        )}

        <Container className="absolute inset-x-0 bottom-10">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink/50">
            Design Expert
          </span>
        </Container>
      </div>
    </section>
  )
}
