import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '../components/Container'
import SiteFooter from '../components/sections/SiteFooter'
import { A } from '../data/assets'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: 'ampli',
    title: 'Ampli',
    sub: 'Brand & Product',
    year: '2026',
    challenge:
      'Launch a fintech startup with a premium brand and a product ready for a high-stakes market debut.',
    services: ['Visual Branding', 'Product Design', 'Design System'],
    role: 'Led the full brand identity and product architecture, defining the visual language and UX for a confident market entry.',
    gallery: A.websites,
  },
  {
    id: 'toptrader',
    title: 'Top Trader',
    sub: 'Trading Simulation',
    year: '2025',
    challenge:
      'Build a high-engagement product for a crypto trading tournament that turns a complex domain into a game-like flow.',
    services: ['Product Design', 'UX Research', 'Prototyping'],
    role: 'Designed end-to-end UX/UI and visual direction, making complex trading mechanics intuitive and fun.',
    gallery: A.branding,
  },
  {
    id: 'morable',
    title: 'Morable',
    sub: 'Design Studio',
    year: '2025',
    challenge:
      'Give a young design studio a distinctive identity and a site that communicates craft from the first scroll.',
    services: ['Visual Branding', 'Website Design', 'Art Direction'],
    role: 'Defined the brand system and led the website design, balancing bold expression with usability.',
    gallery: A.product,
  },
  {
    id: 'strava',
    title: 'Strava Groups',
    sub: 'Campaign & UI',
    year: '2024',
    challenge:
      'Bring social energy to fitness with a campaign and product surface that gets people moving together.',
    services: ['Product Design', 'Visual Branding', 'Design System'],
    role: 'Shaped the campaign visual language and the in-product group experience across key flows.',
    gallery: [A.websites[2], A.branding[1], A.product[3], A.websites[0], A.branding[3]],
  },
]

function CaseBlock({ p }) {
  return (
    <section id={p.id} className="border-t border-ink/10 bg-cream py-16 sm:py-24">
      <Container>
        <div className="case-meta grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Название + год + ссылка */}
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {p.title}
              <br />
              {p.sub}
            </h2>
            <span className="mt-4 inline-block rounded-full border border-ink/20 px-3 py-1 text-xs font-medium text-ink/60">
              {p.year}
            </span>
            <div className="mt-6">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:opacity-80"
              >
                See it live
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-ink">↗</span>
              </a>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <p className="mb-2 text-sm text-ink/45">Challenge:</p>
            <p className="text-sm leading-relaxed text-ink/80">{p.challenge}</p>
          </div>

          {/* Services */}
          <div>
            <p className="mb-2 text-sm text-ink/45">Services:</p>
            <div className="flex flex-wrap gap-2">
              {p.services.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/75"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div>
            <p className="mb-2 text-sm text-ink/45">Role:</p>
            <p className="text-sm leading-relaxed text-ink/80">{p.role}</p>
          </div>
        </div>

        {/* Галерея */}
        <div className="mt-12 space-y-4">
          {/* Первый ряд: большая слева + правая той же высоты */}
          <div className="grid grid-cols-3 gap-4">
            <div className="case-img col-span-2 aspect-[16/9] overflow-hidden rounded-xl bg-neutral-200">
              <img src={p.gallery[0]} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            {p.gallery[1] && (
              <div className="case-img relative overflow-hidden rounded-xl bg-neutral-200">
                <img
                  src={p.gallery[1]}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Остальные превью */}
          {p.gallery.length > 2 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {p.gallery.slice(2).map((src, i) => (
                <div
                  key={i}
                  className="case-img aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200"
                >
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default function WorkPage() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.case-meta').forEach((el) => {
        gsap.from(el.children, {
          y: 30,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 82%' },
        })
      })
      gsap.utils.toArray('section').forEach((sec) => {
        const imgs = sec.querySelectorAll('.case-img')
        if (!imgs.length) return
        gsap.from(imgs, {
          y: 50,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: { trigger: imgs[0], start: 'top 85%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root}>
      {/* Hero */}
      <section className="bg-cream pb-12 pt-40">
        <Container>
          <div className="flex items-start gap-5 sm:gap-8">
            <img
              src={A.folder.back}
              alt=""
              className="mt-2 w-20 shrink-0 grayscale brightness-[0.85] sm:w-28"
            />
            <h1 className="font-display text-[9vw] font-semibold leading-[0.98] tracking-tight text-ink/35 lg:text-[110px]">
              Obsessed with the craft and the little details
            </h1>
          </div>
        </Container>
      </section>

      {/* Левый индекс-точки */}
      <div className="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="pointer-events-auto h-1.5 w-1.5 rounded-full bg-ink/25 transition hover:bg-ink/70"
            aria-label={p.title}
          />
        ))}
      </div>

      {PROJECTS.map((p) => (
        <CaseBlock key={p.id} p={p} />
      ))}

      <SiteFooter />
    </main>
  )
}
