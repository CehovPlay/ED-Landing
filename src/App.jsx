import { LenisProvider } from './context/LenisContext'
import ParallaxImage from './components/ParallaxImage'

// Плейсхолдер-изображения (Unsplash) — замени src на свои.
const IMAGES = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2400&auto=format&fit=crop',
]

function Spacer({ label }) {
  return (
    <div className="flex h-[70vh] items-center justify-center">
      <p className="text-sm uppercase tracking-[0.3em] text-white/30">{label}</p>
    </div>
  )
}

export default function App() {
  return (
    <LenisProvider>
      <main className="min-h-screen">
        <header className="flex h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Parallax Reveal
          </h1>
          <p className="mt-5 max-w-md text-white/50">
            Скролль вниз — изображение дрейфует с инерцией, текст всплывает синхронно.
          </p>
          <span className="mt-16 animate-pulse text-xs uppercase tracking-[0.3em] text-white/30">
            scroll ↓
          </span>
        </header>

        <ParallaxImage
          src={IMAGES[0]}
          alt="Mountain range"
          eyebrow="Chapter 01"
          title="Глубина через движение"
          text="Контейнер с overflow-hidden, медленный зум и вертикальный дрейф создают ощущение объёма."
        />

        <Spacer label="breathing room" />

        {/* Пример индивидуальной настройки: более «ленивый» scrub и сильнее зум */}
        <ParallaxImage
          src={IMAGES[1]}
          alt="Forest light"
          eyebrow="Chapter 02"
          title="Инерция, а не дёрганость"
          text="scrub связывает прогресс анимации со скроллом — движение живёт вместе с пользователем."
          tuning={{ scrub: 2, scaleTo: 1.18 }}
        />

        <Spacer label="breathing room" />

        <ParallaxImage
          src={IMAGES[2]}
          alt="Road through trees"
          eyebrow="Chapter 03"
          title="Переиспользуемый блок"
          text="Меняешь только пропсы src/title/text — код анимации остаётся нетронутым."
          aspect="aspect-[21/9]"
        />

        <footer className="flex h-[60vh] items-center justify-center">
          <p className="text-white/30">— fin —</p>
        </footer>
      </main>
    </LenisProvider>
  )
}
