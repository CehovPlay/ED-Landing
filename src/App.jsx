import { LenisProvider } from './context/LenisContext'
import SiteHeader from './components/SiteHeader'
import Hero from './components/sections/Hero'
import Intro16Years from './components/sections/Intro16Years'
import FloatingShapes from './components/sections/FloatingShapes'
import ServicesIntro from './components/sections/ServicesIntro'
import ServiceRow from './components/sections/ServiceRow'
import WebflowFramer from './components/sections/WebflowFramer'
import WorkFolder from './components/sections/WorkFolder'
import GoodDesign from './components/sections/GoodDesign'
import Perspective from './components/sections/Perspective'
import LetsBuild from './components/sections/LetsBuild'
import SiteFooter from './components/sections/SiteFooter'
import { A } from './data/assets'

export default function App() {
  return (
    <LenisProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Intro16Years />
        <FloatingShapes />

        <ServicesIntro />
        <ServiceRow
          id="websites"
          title="Websites & Landing pages"
          subtitle="Creating high-end and beautiful websites built to perform and convert."
          images={A.websites}
        />
        <ServiceRow
          title="Visual Branding"
          subtitle="Helping brands find a distinctive visual language that truly stands out."
          images={A.branding}
        />
        <ServiceRow
          title="Product Design Enhancement"
          subtitle="Bringing fresh ideas to turn complex products into intuitive experiences with an elevated visual layer."
          images={A.product}
        />
        <WebflowFramer />

        <WorkFolder />
        <GoodDesign />
        <Perspective />
        <LetsBuild />
        <SiteFooter />
      </main>
    </LenisProvider>
  )
}
