import Reveal from '../Reveal'

// Большой заголовок-«мост» перед рядами работ.
export default function ServicesIntro() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 pt-32 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-peach-edge/60 to-transparent" />
      <Reveal
        as="h2"
        className="relative mx-auto max-w-5xl text-center font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-[120px]"
      >
        I help companies to succeed on projects like:
      </Reveal>
    </section>
  )
}
