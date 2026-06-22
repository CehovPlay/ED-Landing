import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * useMagnetic — «магнитная» кнопка: элемент мягко тянется за курсором,
 * на уход — пружинит обратно. Возвращает ref, который вешаешь на элемент.
 *
 * Подкрутка:
 *   strength — сила притяжения (0.2 слабо … 0.6 сильно)
 *   speed    — скорость доводки (меньше = резче)
 */
export function useMagnetic({ strength = 0.4, speed = 0.4 } = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    // Отключаем на тач-устройствах (нет курсора)
    if (window.matchMedia('(hover: none)').matches) return

    const xTo = gsap.quickTo(el, 'x', { duration: speed, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: speed, ease: 'power3.out' })

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const relX = e.clientX - (r.left + r.width / 2)
      const relY = e.clientY - (r.top + r.height / 2)
      xTo(relX * strength)
      yTo(relY * strength)
    }
    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength, speed])

  return ref
}
