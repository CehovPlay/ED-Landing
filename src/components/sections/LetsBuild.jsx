import { NAV } from '../../data/assets'
import Reveal from '../Reveal'

export default function LetsBuild() {
  return (
    <section className="bg-cream px-4 pb-16 pt-10 sm:px-8">
      <Reveal className="mx-auto max-w-[1600px] overflow-hidden rounded-[40px] bg-peach px-8 py-16 sm:px-16 sm:py-24">
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[86px]">
          Let&rsquo;s build something people remember
        </h2>
        <p className="mt-6 max-w-md text-sm text-ink/70 sm:text-base">
          from global tech companies to growing startups.
        </p>

        <div className="mt-16 flex items-end justify-between gap-6 border-t border-ink/15 pt-10">
          <a
            href={NAV.email}
            className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ink text-2xl text-cream transition hover:scale-105 sm:h-20 sm:w-20"
            aria-label="Let's talk"
          >
            →
          </a>
          <div className="text-right">
            <a
              href={NAV.email}
              className="block font-display text-4xl font-bold tracking-tight text-ink hover:opacity-70 sm:text-6xl lg:text-[86px]"
            >
              Let&rsquo;s talk
            </a>
            <a
              href={NAV.email}
              className="mt-1 block font-display text-2xl font-bold tracking-tight text-ink/70 hover:opacity-70 sm:text-4xl"
            >
              e.dmitry12@gmail.com
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
