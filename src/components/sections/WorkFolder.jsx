import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { A } from '../../data/assets'

gsap.registerPlugin(ScrollTrigger)

// CTA-блок «Work»: гигантское фоновое слово + синяя 3D-папка по центру.
export default function WorkFolder() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Фоновое слово «Work» уезжает по горизонтали на скролле
      gsap.fromTo(
        '.work-bg',
        { xPercent: -6 },
        {
          xPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        },
      )
      // Папка слегка покачивается/приподнимается
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
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={root}
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden bg-cream"
    >
      {/* Огромное полупрозрачное слово на фоне */}
      <span className="work-bg pointer-events-none absolute select-none whitespace-nowrap font-display text-[34vw] font-bold leading-none text-peach/25">
        Work
      </span>

      <div className="relative flex flex-col items-center gap-6">
        <p className="text-sm font-semibold text-ink/70">Curious?... Check out my</p>
        <img src={A.folder.full} alt="Portfolio folder" className="work-folder w-64 max-w-[60vw]" />
        <p className="text-sm font-semibold text-ink/70">Or keep scrolling</p>
      </div>
    </section>
  )
}
