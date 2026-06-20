import { A } from '../../data/assets'

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
      {/* Тёплый персиковый оверлей для глубины */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(241,160,122,0.45),transparent_60%)]" />

      {/* Подзаголовок слева сверху */}
      <p className="absolute left-6 top-24 max-w-[14ch] font-display text-2xl font-semibold leading-tight text-white sm:left-10 sm:text-3xl">
        Brand &amp; Web
        <br />
        Design Specialist
      </p>

      {/* Гигантская подпись внизу: Juan (outline) — карточка — Mora (fill) */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 sm:px-8">
        <h1 className="text-outline select-none font-display text-[16vw] font-semibold leading-[0.8] tracking-tight">
          Juan
        </h1>

        {/* Маленькая проектная карточка по центру (перекрывает текст) */}
        <img
          src={A.websites[4]}
          alt=""
          className="mb-[3vw] hidden h-[18vw] max-h-48 w-auto -rotate-6 rounded-xl object-cover shadow-2xl ring-1 ring-white/20 sm:block"
        />

        <h1 className="select-none font-display text-[16vw] font-semibold leading-[0.8] tracking-tight text-peach">
          Mora
        </h1>
      </div>

      <span className="absolute bottom-6 right-8 text-xs font-medium text-white/70">
        Freelance Design Director
      </span>
    </section>
  )
}
