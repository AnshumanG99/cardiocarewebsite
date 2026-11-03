import { FlaskConical, Rocket, Trophy } from 'lucide-react'

import CtaBand from '../components/CtaBand'
import PageHero from '../components/PageHero'
import Roadmap from '../components/Roadmap'
import Container from '../components/ui/Container'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Seo from '../components/ui/Seo'
import { roadmap } from '../data/roadmap'
import { founders, mission, recognition } from '../data/team'

const recognitionIcons = {
  'DECA ICDC': Trophy,
  'Conrad Challenge': Rocket,
  'Georgia Tech': FlaskConical,
}

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="CardioCare was founded in Austin, Texas by two students on a mission to make cardiac rehabilitation reachable for every heart."
      />

      <PageHero
        eyebrow="About CardioCare"
        title={
          <>
            Two students. One mission: rehab <em>every</em> heart can reach.
          </>
        }
        lede="CardioCare started in Austin, Texas with a question: why does a treatment that prevents second heart attacks reach fewer than a third of the people who need it? Everything since has been about building the answer."
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <Reveal className="rounded-[2rem] bg-paper px-6 py-14 sm:px-12 sm:py-20">
            <Eyebrow>Our mission</Eyebrow>
            <blockquote className="display mt-6 max-w-4xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
              &ldquo;{mission}&rdquo;
            </blockquote>
            <p className="mt-6 text-ink-600">Anshuman Garg and Ayan Malpani, co-founders</p>
          </Reveal>
        </Container>
      </Section>

      <Section id="team" className="pt-0 sm:pt-0">
        <Container>
          <SectionHeading eyebrow="Founders" title="Meet the team." layout="stack" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {founders.map((founder, index) => (
              <Reveal
                key={founder.name}
                delay={index * 0.08}
                className="flex flex-col gap-6 rounded-[1.5rem] bg-white p-6 ring-1 ring-ink-900/[0.06] sm:flex-row sm:p-8"
              >
                <img
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  className="h-40 w-40 shrink-0 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-2xl font-medium text-ink-900">{founder.name}</h3>
                  <p className="mt-0.5 text-ink-500">{founder.role}</p>
                  <p className="mt-4 leading-relaxed text-ink-600">{founder.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {founder.interests.map((interest) => (
                      <li key={interest} className="rounded-full bg-ink-900/[0.05] px-3 py-1 text-sm text-ink-700">
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="roadmap" className="bg-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal className="lg:sticky lg:top-28">
                <Eyebrow>Roadmap</Eyebrow>
                <h2 className="display mt-4 text-4xl sm:text-5xl">Where we are, and what comes next.</h2>
                <p className="lede mt-5">Five phases from first algorithm to market launch. We are in the fourth.</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Roadmap items={roadmap} />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="recognition">
        <Container>
          <SectionHeading eyebrow="Recognition" title="Backed by competitions and research programs." layout="stack" />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {recognition.map((item, index) => {
              const Icon = recognitionIcons[item.name]
              return (
                <Reveal as="li" key={item.name} delay={index * 0.06} className="bg-white p-8">
                  {item.image ? (
                    <img src={item.image} alt="" className="h-12 w-12 object-contain" />
                  ) : (
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900/[0.05] text-ink-900">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  )}
                  <h3 className="mt-6 text-lg font-medium text-ink-900">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.detail}</p>
                </Reveal>
              )
            })}
          </ul>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Want to collaborate?"
        body="We are looking for clinical partners, advisors, and early supporters who want to make rehab reachable."
        primary={{ label: 'Get in touch', to: '/contact' }}
        secondary={{ label: 'Clinical validation', to: '/validation' }}
      />
    </>
  )
}
