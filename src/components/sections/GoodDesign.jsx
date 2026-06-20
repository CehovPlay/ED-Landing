import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { A } from '../../data/assets'

gsap.registerPlugin(ScrollTrigger)

export default function GoodDesign() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Лёгкий зум видео для глубины (scrub)
      gsap.fromTo(
        '.gd-video',
        { scale: 1.05 },
        {
          scale: 1.15,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        },
      )
      // Строки текста выезжают с разной скоростью
      gsap.fromTo(
        '.gd-line',
        { yPercent: 60, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: 'top 60%', end: 'center center', scrub: 1 },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden bg-neutral-900"
    >
      <img
        src={A.heroPhoto}
        alt=""
        className="gd-video absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative text-center">
        <h2 className="font-display text-[12vw] font-semibold leading-[0.95] tracking-tight text-peach lg:text-[200px]">
          <span className="gd-line block">Good design</span>
          <span className="gd-line block">takes time</span>
        </h2>
        <p className="gd-line mt-6 text-base font-semibold text-white sm:text-2xl">
          and working with me saves it
        </p>
      </div>
    </section>
  )
}
