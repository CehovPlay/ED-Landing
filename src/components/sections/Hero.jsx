import { A } from '../../data/assets'
import Container from '../Container'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-neutral-900"
    >
      {/* Фоновое фото (плейсхолдер из референса) */}
      <img
        src={A.heroPhoto}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Нейтральный оверлей для глубины */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45" />
      {/* Лёгкий шум */}
      <div className="noise pointer-events-none absolute inset-0" />

      <Container className="relative h-full">
        {/* Подзаголовок слева сверху */}
        <p className="absolute left-6 top-24 max-w-[14ch] font-display text-2xl font-semibold leading-tight text-white sm:left-10 sm:text-3xl">
          Product &amp; UI/UX
          <br />
          Designer
        </p>

        {/* Гигантская подпись внизу: оба имени заливкой */}
        <div className="absolute inset-x-0 bottom-[6vw] flex items-end justify-between">
          <h1 className="select-none font-display text-[clamp(2.5rem,11vw,190px)] font-semibold leading-[0.8] tracking-tight text-graphite-mist">
            Dmitry
          </h1>

          <h1 className="select-none font-display text-[clamp(2.5rem,11vw,190px)] font-semibold leading-[0.8] tracking-tight text-graphite-mist">
            Edinac
          </h1>
        </div>

        <span className="absolute bottom-7 right-6 text-xs font-medium text-white/70 sm:right-10">
          Product Designer · Team Lead
        </span>
      </Container>
    </section>
  )
}
