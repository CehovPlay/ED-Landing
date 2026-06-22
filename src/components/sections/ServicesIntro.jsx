import Container from '../Container'

// Большой заголовок-«мост» перед рядами работ.
// Слева по краю контента, на всю ширину — как на референсе. Статичный (без пина).
export default function ServicesIntro() {
  return (
    <section className="relative overflow-hidden bg-cream pt-24 pb-10">
      <Container>
        <h2 className="text-left font-display text-[9vw] font-bold leading-[1.02] tracking-tight text-ink lg:text-[110px]">
          Here&rsquo;s how I help teams ship better products:
        </h2>
      </Container>
    </section>
  )
}
