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
