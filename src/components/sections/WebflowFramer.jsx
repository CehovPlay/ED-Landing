import Reveal from '../Reveal'

// Заголовок, где слова обрамлены «рамками выделения» (как в Webflow/Framer редакторе)
function FramedWord({ children, color }) {
  return (
    <span className="relative inline-block px-2">
      <span className="relative z-10">{children}</span>
      {/* рамка выделения */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[3px] border-2"
        style={{ borderColor: color }}
      />
      {/* угловой «таб» с ручкой */}
      <span
        className="pointer-events-none absolute -left-1 -top-3 h-4 w-7 rounded-sm"
        style={{ backgroundColor: color }}
      />
    </span>
  )
}

export default function WebflowFramer() {
  return (
    <section className="bg-cream px-6 py-28 text-center">
      <Reveal
        as="h2"
        className="font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl"
      >
        <FramedWord color="var(--color-royal)">Figma</FramedWord> &amp;{' '}
        <FramedWord color="var(--color-royal)">Prototyping</FramedWord>
      </Reveal>
      <Reveal as="p" delay={0.1} className="mx-auto mt-6 max-w-md text-sm text-ink/60 sm:text-base">
        Building interactive prototypes and dev-ready handoff with clean, scalable design systems and
        thoughtful micro-interactions.
      </Reveal>
    </section>
  )
}
