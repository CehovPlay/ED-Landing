import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '../Container'
import { A } from '../../data/assets'

gsap.registerPlugin(ScrollTrigger)

// Разные фигуры: PNG-сферы/пилюли (без иконок) + CSS-сквирклы/капсулы.
// Раскинуты на всю ширину вьюпорта (left от -7% до 95%, пара уходит за края).
// Размеры через clamp() — масштабируются на планшетах/мобилках, не вылезают гигантами.
const GRAD = 'radial-gradient(circle at 35% 28%, #ffffff, #dcdcdc 55%, #a6a6a6 100%)'
// mobile:false — фигура скрыта на узких экранах (< sm), чтобы композиция не превращалась
// в кашу. На мобилке остаётся 6 фигур, всё ещё раскинутых от края до края (-7% … 95%),
// и они крупнее (vw-доля больше), чтобы выглядеть весомо на маленьком экране.
const SHAPES = [
  // уходит за левый край
  { type: 'img', src: A.shapes.pill, top: '6%', left: '-7%', w: 'clamp(190px,40vw,470px)', speed: 0.6, mobile: true },
  { type: 'css', shape: 'capsule', top: '44%', left: '3%', w: 'clamp(150px,21vw,370px)', h: 'clamp(85px,11vw,195px)', speed: 0.7, mobile: false },
  { type: 'img', src: A.shapes.circle1, top: '4%', left: '14%', w: 'clamp(170px,38vw,430px)', speed: 1.2, mobile: true },
  { type: 'css', shape: 'squircle', top: '50%', left: '23%', w: 'clamp(105px,15vw,240px)', h: 'clamp(105px,15vw,240px)', speed: 0.5, mobile: false },
  { type: 'img', src: A.shapes.circle2, top: '18%', left: '37%', w: 'clamp(200px,46vw,520px)', speed: 1.35, mobile: true },
  { type: 'img', src: A.shapes.pill, top: '58%', left: '47%', w: 'clamp(150px,36vw,360px)', speed: 0.8, mobile: true },
  { type: 'css', shape: 'squircle', top: '5%', left: '63%', w: 'clamp(120px,17vw,300px)', h: 'clamp(120px,17vw,300px)', speed: 0.95, mobile: false },
  { type: 'img', src: A.shapes.circle1, top: '46%', left: '72%', w: 'clamp(140px,34vw,320px)', speed: 1.0, mobile: true },
  { type: 'css', shape: 'squircle', top: '12%', left: '85%', w: 'clamp(120px,18vw,300px)', h: 'clamp(120px,18vw,300px)', speed: 1.1, mobile: false },
  // уходит за правый край
  { type: 'img', src: A.shapes.circle2, top: '56%', left: '93%', w: 'clamp(130px,34vw,300px)', speed: 1.25, mobile: true },
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
      <div className="relative z-20 -mt-[14vh] h-[70vh] sm:h-[86vh]">
        {/* На всю ширину вьюпорта — фигуры раскинуты от края до края */}
        <div className="relative h-full w-full">
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

          {SHAPES.map((s, i) => {
            const hide = s.mobile ? '' : 'hidden sm:block'
            return s.type === 'css' ? (
              <div
                key={i}
                data-speed={s.speed}
                className={`shape pointer-events-none absolute will-change-transform ${hide} ${
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
                className={`shape pointer-events-none absolute grayscale will-change-transform ${hide}`}
                style={{ top: s.top, left: s.left, width: s.w }}
              />
            )
          })}
        </div>

        <Container className="absolute inset-x-0 bottom-10">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink/50">
            Design Expert
          </span>
        </Container>
      </div>
    </section>
  )
}
