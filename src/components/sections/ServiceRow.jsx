import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '../Container'

gsap.registerPlugin(ScrollTrigger)

/**
 * ServiceRow — заголовок сервиса + ряд из 5 превью.
 * Аккуратная анимация появления (fade-up) для заголовка, подзаголовка и плиток.
 */
export default function ServiceRow({ title, subtitle, images = [], id }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sr-head > *', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      })
      gsap.from('.tile', {
        y: 50,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.sr-grid', start: 'top 85%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={root} className="bg-cream py-24">
      <Container>
        <div className="sr-head mb-12 max-w-3xl text-left">
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-6xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 max-w-md text-sm text-ink/60 sm:text-base">{subtitle}</p>
          )}
        </div>

        <div className="sr-grid grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
          {images.map((src, i) => (
            <div key={i} className="tile aspect-[4/5] sm:aspect-[3/4]">
              <div className="tile-inner overflow-hidden rounded-xl bg-neutral-200">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
