import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useParallax — вся анимационная логика блока (без вёрстки).
 *
 * Принимает refs на три DOM-узла:
 *   container — общий триггер (".block-container"), обязан иметь overflow-hidden
 *   image     — само изображение (двигается/масштабируется внутри контейнера)
 *   text      — текстовый блок (fade-in + подъём снизу вверх)
 *
 * Все «ручки» интенсивности вынесены в options со значениями по умолчанию.
 */
export function useParallax(
  { containerRef, imageRef, textRef },
  {
    // — ИЗОБРАЖЕНИЕ —
    scrub = 1.2, // 0.5 = отзывчиво, 1 = базово, 2 = максимально «ленивый» дрейф (Juan Mora)
    scaleFrom = 1, // стартовый масштаб
    scaleTo = 1.1, // конечный масштаб (глубина). 1.15–1.2 = сильнее зум
    imageYFrom = -12, // yPercent изображения в начале (низ виден чуть выше)
    imageYTo = 12, // yPercent в конце. Бери в пределах «запаса» высоты (см. ParallaxImage: h-[125%])

    // — ТЕКСТ —
    textYFrom = 50, // px: насколько ниже стартует текст
    textScrub = 1, // отдельный scrub для текста (можно сделать «живее» картинки)
    textEase = 'power2.out', // плавность подъёма текста

    ease = 'none', // для scrub-картинки линейность ощущается ровнее; power2.out — мягче на концах
  } = {},
) {
  useLayoutEffect(() => {
    const container = containerRef.current
    const image = imageRef.current
    const text = textRef.current
    if (!container || !image) return

    // gsap.context изолирует все созданные тут анимации/триггеры и даёт чистый revert()
    const ctx = gsap.context(() => {
      // 1) ПАРАЛЛАКС ИЗОБРАЖЕНИЯ — живёт на всём проходе блока через экран.
      //    scrub привязывает прогресс к полосе прокрутки (а не запускает один раз).
      gsap.fromTo(
        image,
        { yPercent: imageYFrom, scale: scaleFrom },
        {
          yPercent: imageYTo,
          scale: scaleTo,
          ease, // ← мягкость кривой картинки
          scrollTrigger: {
            trigger: container,
            start: 'top bottom', // блок только коснулся низа вьюпорта
            end: 'bottom top', // блок полностью ушёл вверх
            scrub, // ← ГЛАВНАЯ ручка инерции картинки
            invalidateOnRefresh: true, // пересчёт на resize/поворот — без «съезда»
          },
        },
      )

      // 2) РЕВИЛ ТЕКСТА — отдельный триггер, чтобы текст «доезжал» раньше,
      //    пока блок входит в экран (а не растягивался на весь скролл).
      if (text) {
        gsap.fromTo(
          text,
          { y: textYFrom, autoAlpha: 0 }, // autoAlpha = opacity + visibility
          {
            y: 0,
            autoAlpha: 1,
            ease: textEase,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%', // текст стартует, когда верх блока на 85% высоты экрана
              end: 'top 35%', // и завершает подъём ближе к центру
              scrub: textScrub, // ← ручка плавности текста (меньше = отзывчивее)
              invalidateOnRefresh: true,
            },
          },
        )
      }
    }, container)

    return () => ctx.revert() // полная очистка при размонтировании/ремаунте
  }, [
    containerRef,
    imageRef,
    textRef,
    scrub,
    scaleFrom,
    scaleTo,
    imageYFrom,
    imageYTo,
    textYFrom,
    textScrub,
    textEase,
    ease,
  ])
}
