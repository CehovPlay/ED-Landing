import { useEffect, useState } from 'react'
import { LenisProvider } from './context/LenisContext'
import SiteHeader from './components/SiteHeader'
import Hero from './components/sections/Hero'
import IntroShapes from './components/sections/IntroShapes'
import ServicesIntro from './components/sections/ServicesIntro'
import ServiceRow from './components/sections/ServiceRow'
import WorkFolder from './components/sections/WorkFolder'
import AboutSection from './components/sections/AboutSection'
import LetsBuild from './components/sections/LetsBuild'
import SiteFooter from './components/sections/SiteFooter'
import WorkPage from './pages/WorkPage'
import { A } from './data/assets'

function Landing() {
  return (
    <main>
      <Hero />
      <IntroShapes />

      <ServicesIntro />
      <ServiceRow
        id="websites"
        title="Product & UX Design"
        subtitle="End-to-end digital products — from UX research, user flows and wireframes to polished high-fidelity UI."
        images={A.websites}
      />
      <ServiceRow
        title="Design Systems"
        subtitle="Building scalable design systems that keep products consistent and teams fast."
        images={A.branding}
      />
      <ServiceRow
        title="Visual Branding"
        subtitle="Crafting brand identities, presentations and marketing materials that connect product with business value."
        images={A.product}
      />
      <WorkFolder />
      <AboutSection />
      <LetsBuild />
      <SiteFooter />
    </main>
  )
}

// Мини-роутер по хэшу (без внешних зависимостей).
function useHashRoute() {
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash : '')
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const isWork = hash === '#/work'

  return (
    // key пересоздаёт Lenis/ScrollTrigger при смене страницы (скролл в начало, чистый контекст)
    <LenisProvider key={isWork ? 'work' : 'home'}>
      <SiteHeader />
      {isWork ? <WorkPage /> : <Landing />}
    </LenisProvider>
  )
}
