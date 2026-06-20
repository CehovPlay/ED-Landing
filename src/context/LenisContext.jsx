import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext(null)

/**
 * Хук для доступа к единому инстансу Lenis из любого компонента.
 * Возвращает инстанс Lenis (или null, пока он инициализируется).
 *
 *   const lenis = useLenis()
 *   lenis?.scrollTo('#section')
 */
export function useLenis() {
  return useContext(LenisContext)
}

/**
 * Единый провайдер плавного скролла.
 *
 * Здесь живёт ЕДИНСТВЕННЫЙ «source of truth» для скролла на странице:
 * Lenis двигает страницу, а GSAP ScrollTrigger слушает Lenis (а не нативный
 * scroll). Это убирает рассинхрон между инерцией Lenis и scrub-анимациями.
 *
 * Где крутить «ощущение инерции» всего сайта:
 *   - lerp           — сглаживание (0.05 = тягуче/премиально, 0.12 = отзывчивее)
 *   - duration       — длительность доезда при wheel/touch
 *   - используется ЛИБО lerp, ЛИБО duration+easing (см. ниже)
 */
export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null)
  const lenisRef = useRef(null)

  useEffect(() => {
    const instance = new Lenis({
      // ↓↓↓ ГЛАВНЫЙ регулятор «ленивости» всей страницы (стиль Juan Mora)
      lerp: 0.08, // меньше = более плавно/инертно, больше = резче
      smoothWheel: true,
      wheelMultiplier: 1, // > 1 ускоряет прокрутку колесом, < 1 замедляет
      touchMultiplier: 1.5, // отзывчивость тач-скролла на мобильных
    })

    lenisRef.current = instance
    setLenis(instance)

    // 1) Lenis -> ScrollTrigger: на каждый кадр скролла обновляем триггеры
    instance.on('scroll', ScrollTrigger.update)

    // 2) ScrollTrigger -> Lenis: один общий RAF-цикл через тикер GSAP,
    //    чтобы анимации и скролл считались в одном такте (без джиттера)
    const raf = (time) => instance.raf(time * 1000) // gsap отдаёт секунды
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      instance.off('scroll', ScrollTrigger.update)
      instance.destroy()
      lenisRef.current = null
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
