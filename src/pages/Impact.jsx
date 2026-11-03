import CtaBand from '../components/CtaBand'
import PageHero from '../components/PageHero'
import StatGrid from '../components/StatGrid'
import Container from '../components/ui/Container'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Seo from '../components/ui/Seo'
import { accessByIncome, barriers, impactPillars, problemStats } from '../data/stats'

export default function Impact() {
  return (
    <>
      <Seo
        title="Impact"
        description="Cardiac rehab cuts the risk of a second event, yet most patients never start. The barriers, the numbers, and how CardioCare removes them."
      />

      <PageHero
        eyebrow="The problem"
        title={
          <>
            Rehab works. <em>Access</em> doesn&rsquo;t.
          </>
        }
        lede="Cardiac rehabilitation lowers the risk of a second event and gets people back to their lives. Most of the people who need it never start, and the reasons have little to do with medicine."
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <StatGrid stats={problemStats} />
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Three barriers"
            title="What keeps patients out, and how CardioCare removes it."
            layout="stack"
          />
          <div className="mt-14 divide-y divide-ink-900/10 border-y border-ink-900/10">
            {barriers.map((barrier, index) => (
              <Reveal key={barrier.name} delay={index * 0.05} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <p className="font-display text-3xl text-ink-900">{barrier.name}</p>
                </div>
                <div className="lg:col-span-4">
                  <Eyebrow>Today</Eyebrow>
                  <p className="mt-2 leading-relaxed text-ink-600">{barrier.problem}</p>
                </div>
                <div className="lg:col-span-5">
                  <Eyebrow className="text-brand-blue">With CardioCare</Eyebrow>
                  <p className="mt-2 leading-relaxed text-ink-900">{barrier.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Around the world</Eyebrow>
              <h2 className="display mt-4 text-4xl sm:text-5xl">Where you live decides whether rehab exists at all.</h2>
              <p className="lede mt-5">
                Cardiac rehabilitation is widely available in wealthy countries and almost absent elsewhere.
                CardioCare needs a phone and a kit, not a clinic.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <figure className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
                <figcaption className="text-sm font-medium text-ink-900">
                  Availability of cardiac rehab programs, by country income level
                </figcaption>
                <ul className="mt-6 space-y-5">
                  {accessByIncome.map((row) => (
                    <li key={row.label}>
                      <div className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-ink-700">{row.label}</span>
                        <span className="font-medium tabular-nums text-ink-900">{row.value}%</span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-r bg-ink-100" aria-hidden="true">
                        <div className="h-full rounded-r bg-brand-blue" style={{ width: `${row.value}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <SectionHeading eyebrow="Social impact" title="Rehab for every heart, not only the insured ones." layout="stack" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {impactPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 0.08}
                className="rounded-[1.5rem] bg-white p-8 ring-1 ring-ink-900/[0.06]"
              >
                <p className="font-display text-3xl text-ink-400">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-medium text-ink-900">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Help us close the gap."
        body="Whether you run a clinic, back early companies, or want CardioCare for someone you love, we would like to hear from you."
        primary={{ label: 'Get in touch', to: '/contact' }}
        secondary={{ label: 'See the platform', to: '/platform' }}
      />
    </>
  )
}
