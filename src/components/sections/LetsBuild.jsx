import { NAV } from '../../data/assets'
import Reveal from '../Reveal'
import SplitReveal from '../SplitReveal'
import Container from '../Container'
import { useMagnetic } from '../../hooks/useMagnetic'

export default function LetsBuild() {
  const magnetic = useMagnetic({ strength: 0.45 })
  return (
    <section className="bg-cream pb-16 pt-10">
      <Container>
        <Reveal className="overflow-hidden rounded-[40px] bg-graphite px-8 py-16 sm:px-16 sm:py-24">
          <SplitReveal
            as="h2"
            text="Let’s build something that will be remembered"
            className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-[86px]"
          />
          <p className="mt-6 max-w-md text-sm text-cream/70 sm:text-base">
            from early-stage startups to global teams.
          </p>

          <div className="mt-16 flex items-end justify-between gap-6 border-t border-cream/15 pt-10">
            <a
              ref={magnetic}
              href={NAV.email}
              className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-cream text-2xl text-ink sm:h-20 sm:w-20"
              aria-label="Let's talk"
            >
              →
            </a>
            <div className="text-right">
              <a
                href={NAV.email}
                className="block font-display text-4xl font-bold tracking-tight text-cream hover:opacity-70 sm:text-6xl lg:text-[86px]"
              >
                Let&rsquo;s talk
              </a>
              <a
                href={NAV.email}
                className="mt-1 block font-display text-2xl font-bold tracking-tight text-cream/70 hover:opacity-70 sm:text-4xl"
              >
                e.dmitry12@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
