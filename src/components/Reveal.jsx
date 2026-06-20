import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveal — мягкое появление снизу вверх при входе в экран (играет один раз).
 * Используется для заголовков/абзацев по всему лендингу.
 *
 * Подкрутка: y (дистанция), duration, delay, ease.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  y = 40,
  duration = 1,
  delay = 0,
  ease = 'power3.out',
  start = 'top 85%',
}) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          delay,
          ease,
          scrollTrigger: { trigger: el, start, invalidateOnRefresh: true },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [y, duration, delay, ease, start])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
