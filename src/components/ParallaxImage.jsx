import { useRef } from 'react'
import { useParallax } from '../hooks/useParallax'

/**
 * ParallaxImage — переиспользуемый блок «параллакс-картинка + ревил текста».
 *
 * Меняешь только пропсы (src/alt/eyebrow/title/text) — анимацию трогать не нужно.
 * Тонкая настройка интенсивности — через проп `tuning` (пробрасывается в useParallax),
 * например: <ParallaxImage tuning={{ scrub: 2, scaleTo: 1.18 }} />
 *
 * Вёрстка: контейнер с overflow-hidden — обязателен, иначе при сдвиге yPercent
 * будут видны края изображения.
 */
export default function ParallaxImage({
  src,
  alt = '',
  eyebrow,
  title,
  text,
  // aspect — пропорции «окна» картинки (Tailwind-класс). По умолчанию широкий кадр.
  aspect = 'aspect-[16/10]',
  tuning,
}) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  // Вся GSAP-логика инкапсулирована здесь:
  useParallax({ containerRef, imageRef, textRef }, tuning)

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-[18vh]">
      {/* block-container = триггер для ScrollTrigger. overflow-hidden — это «окно». */}
      <div
        ref={containerRef}
        className={`block-container relative w-full overflow-hidden rounded-2xl bg-neutral-900 ${aspect}`}
      >
        {/*
          Изображение нарочно ВЫШЕ контейнера (h-[125%], смещено вверх на -top-[12.5%]),
          чтобы был «запас» для вертикального параллакса и не оголялись края.
          will-change подсказывает браузеру готовить композитный слой (плавность).
        */}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute -top-[12.5%] left-0 h-[125%] w-full object-cover will-change-transform"
        />

        {/* Лёгкое затемнение снизу — чтобы текст читался поверх кадра */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />

        {/* Текстовый блок — ревил снизу вверх + fade-in */}
        {(eyebrow || title || text) && (
          <div
            ref={textRef}
            className="absolute inset-x-0 bottom-0 p-8 sm:p-12"
          >
            {eyebrow && (
              <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {title}
              </h2>
            )}
            {text && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {text}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
