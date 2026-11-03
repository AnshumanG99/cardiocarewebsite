import Closing from '../components/Closing'
import PageHero from '../components/PageHero'
import Stats from '../components/Stats'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Section from '../components/ui/Section'
import Seo from '../components/ui/Seo'
import { accessByIncome, barriers, problemStats, whoItHelps } from '../data/stats'

export default function Impact() {
  return (
    <>
      <Seo
        title="Impact"
        description="Cardiac rehab after a heart attack saves lives, but most people never start it. The numbers, the reasons, and what CardioCare changes."
      />

      <PageHero label="The problem" title="Rehab saves lives. Most people never start it." />

      <Section className="pt-0 sm:pt-0">
        <Container size="wide">
          <p className="lede mx-auto max-w-text text-center">
            In the U.S., more than 800,000 people have a heart attack every year. People who skip rehab afterward have
            a 47% higher chance of another event. Even so, only 20 to 30 percent of eligible patients ever go. The
            reasons are practical: cost, distance, and paperwork.
          </p>
          <Stats stats={problemStats} className="mt-12" />
        </Container>
      </Section>

      <Section glow="left">
        <Container size="wide">
          <Heading label="Barriers" title="Why people do not go" />
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {barriers.map((barrier) => (
              <div key={barrier.name} className="grid gap-5 py-9 lg:grid-cols-12 lg:gap-8">
                <h3 className="text-[24px] font-extrabold tracking-[-0.02em] text-white lg:col-span-3">{barrier.name}</h3>
                <div className="lg:col-span-4">
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/40">Today</p>
                  <p className="copy mt-2">{barrier.today}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="label">With CardioCare</p>
                  <p className="mt-2 text-[17px] font-medium leading-[1.55] text-white/90">{barrier.withUs}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section glow="right">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="label mb-4">Around the world</p>
              <h2 className="h-section">It is worse outside wealthy countries.</h2>
              <p className="copy mt-4">
                Availability of cardiac rehab is 60% in high-income countries, 28% in middle-income countries, and 8%
                in low-income countries. CardioCare needs a phone and a kit, not a clinic, so it can go where programs
                do not exist.
              </p>
            </div>
            <figure className="glass p-7 sm:p-8">
              <figcaption className="text-[14px] font-bold text-white">Cardiac rehab availability by country income level</figcaption>
              <ul className="mt-6 space-y-5">
                {accessByIncome.map((row) => (
                  <li key={row.label}>
                    <div className="flex items-baseline justify-between gap-4 text-[14px]">
                      <span className="text-white/80">{row.label}</span>
                      <span className="font-bold tabular-nums text-white">{row.value}%</span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-r bg-white/10" aria-hidden="true">
                      <div className="bg-gradient-brand h-full rounded-r" style={{ width: `${row.value}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </figure>
          </div>
        </Container>
      </Section>

      <Section glow="center">
        <Container size="wide">
          <Heading label="Who it helps" title="Who this is for" />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {whoItHelps.map((item, index) => (
              <div key={item.title}>
                <span className="bg-gradient-brand inline-flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="h-tile mt-4">{item.title}</h3>
                <p className="copy mt-2">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Closing
        title="Help us fix this."
        body="If you run a clinic, back early companies, or want CardioCare for someone in your family, get in touch."
        primary={{ label: 'Get in touch', to: '/contact' }}
      />
    </>
  )
}
