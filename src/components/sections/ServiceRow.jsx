import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../Reveal'

gsap.registerPlugin(ScrollTrigger)

/**
 * ServiceRow — заголовок сервиса + ряд из 5 превью с параллакс-зумом.
 * Переиспользуется для «Websites», «Visual Branding», «Product Design…».
 *
 * Подкрутка: scrub (привязка зума к скроллу), scaleFrom/scaleTo (глубина).
 */
export default function ServiceRow({
  title,
  subtitle,
  images = [],
  id,
  scrub = 1.2,
  scaleFrom = 1.04,
  scaleTo = 1.14,
}) {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Зум каждой картинки внутри своей overflow-hidden рамки
      gsap.utils.toArray('.tile-img').forEach((img) => {
        gsap.fromTo(
          img,
          { scale: scaleFrom, yPercent: -6 },
          {
            scale: scaleTo,
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub, // ← интенсивность зума ряда
              invalidateOnRefresh: true,
            },
          },
        )
      })
      // Stagger-появление плиток
      gsap.fromTo(
        '.tile',
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: 'top 75%', invalidateOnRefresh: true },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [scrub, scaleFrom, scaleTo])

  return (
    <section id={id} ref={root} className="bg-cream px-4 py-24 sm:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <Reveal as="h2" className="font-display text-4xl font-semibold text-ink sm:text-6xl">
          {title}
        </Reveal>
        {subtitle && (
          <Reveal as="p" delay={0.1} className="mx-auto mt-4 max-w-md text-sm text-ink/60 sm:text-base">
            {subtitle}
          </Reveal>
        )}
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="tile aspect-[4/5] overflow-hidden rounded-xl bg-neutral-200 sm:aspect-[3/4]"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="tile-img h-full w-full object-cover will-change-transform"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
