import Reveal from '../Reveal'

export default function Intro16Years() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6 py-32">
      {/* Персиковые градиентные «кромки» по углам — как на референсе */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-peach-edge/70 to-transparent" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-peach-edge/60 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-[40rem] rounded-full bg-peach-edge/50 blur-3xl" />
      </div>

      <Reveal
        as="h2"
        className="relative max-w-5xl text-center font-display text-[8vw] font-semibold leading-[1.02] tracking-tight text-ink sm:text-[7vw] lg:text-[112px]"
      >
        9 years making users{' '}
        <span className="inline-block rounded-full bg-peach-soft px-6 pb-2 pt-1 text-ink">
          click
        </span>{' '}
        and <span className="text-peach">scroll</span> my products
      </Reveal>
    </section>
  )
}
