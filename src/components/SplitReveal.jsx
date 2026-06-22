import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * SplitReveal — фирменный «выезд по словам из-под маски» (как на juanmora.co).
 * Каждое слово сидит в overflow-hidden обёртке и выезжает снизу со stagger.
 *
 * Принимает ТЕКСТ строкой (text), не children — чтобы корректно разбить на слова.
 * Подкрутка: stagger (плотность), duration, y (глубина), ease, start.
 */
export default function SplitReveal({
  text,
  as: Tag = 'div',
  className = '',
  stagger = 0.06,
  duration = 0.9,
  y = 110,
  delay = 0,
  ease = 'power4.out',
  start = 'top 85%',
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.sr-word'),
        { yPercent: y },
        {
          yPercent: 0,
          duration,
          ease,
          stagger,
          delay,
          scrollTrigger: { trigger: el, start, invalidateOnRefresh: true },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [text, stagger, duration, y, delay, ease, start])

  const words = String(text).split(' ')
  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-flex overflow-hidden pb-[0.12em] align-bottom">
            <span className="sr-word inline-block will-change-transform">{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
