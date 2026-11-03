import prototype3 from '../assets/cardiocareprototype3.jpg'
import CtaBand from '../components/CtaBand'
import { PlanMock, ScanMock, SessionMock } from '../components/mocks'
import MockCard from '../components/mocks/MockCard'
import PhoneFrame from '../components/PhoneFrame'
import { RoadmapStepper } from '../components/Roadmap'
import StatGrid from '../components/StatGrid'
import Testimonials from '../components/Testimonials'
import TrustBar from '../components/TrustBar'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Seo from '../components/ui/Seo'
import { steps } from '../data/platform'
import { roadmap } from '../data/roadmap'
import { problemStats } from '../data/stats'
import { testimonials } from '../data/testimonials'

const outcomes = [
  { value: '95%', title: 'Lower cost', body: 'Designed to cost 95% less than a traditional rehab program.' },
  { value: '0', title: 'Days waiting', body: 'No referrals or insurance approvals. Start the day the kit arrives.' },
  {
    value: '8%',
    title: 'Rehab availability in low-income countries',
    body: 'CardioCare needs a phone and a kit, not a clinic, wherever the patient lives.',
  },
]

function StepVisual({ kind }) {
  if (kind === 'scan') {
    return (
      <>
        <img src={prototype3} alt="The CardioCare V2 wearable with its ECG lead set" className="h-full w-full object-cover" />
        <ScanMock className="absolute inset-x-5 bottom-5" />
      </>
    )
  }
  const Mock = kind === 'plan' ? PlanMock : SessionMock
  return (
    <>
      <div className="wash absolute inset-0 opacity-80" aria-hidden="true" />
      <Mock className="absolute inset-x-6 top-1/2 -translate-y-1/2" />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>AI-powered home cardiac rehab</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display mt-5 text-[2.9rem] sm:text-6xl lg:text-[5.25rem]">
              Cardiac rehab, from your <em>living room</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mx-auto mt-6 max-w-2xl">
              CardioCare pairs a Bluetooth EKG kit with on-device AI to deliver personalized, monitored cardiac
              rehabilitation at home. No insurance delays. No long commutes. No financial stress.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact?interest=demo" size="lg">
                Request a demo
              </Button>
              <Button to="/platform" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={0.25} className="relative mt-14 h-[440px] sm:mt-20 sm:h-[520px]">
        <div className="wash absolute inset-x-0 bottom-0 top-0 mx-auto max-w-6xl" aria-hidden="true" />
        <PhoneFrame className="absolute left-1/2 top-0 -translate-x-1/2" />

        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <SessionMock className="absolute left-[calc(50%-29rem)] top-10 w-72" />
          <PlanMock className="absolute right-[calc(50%-30rem)] top-4 w-72" />
          <ScanMock className="absolute left-[calc(50%-27rem)] top-[19rem] w-64" />
          <MockCard className="absolute right-[calc(50%-27rem)] top-[20rem] w-60">
            <p className="text-xs text-ink-500">Safety check</p>
            <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-ink-900">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              All readings in range
            </p>
            <p className="mt-3 text-xs text-ink-500">Kit battery 18 h remaining</p>
          </MockCard>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <TrustBar />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="The gap"
            title="Cardiac rehab saves lives. Most patients never get it."
            lede="Traditional programs mean months of clinic visits, insurance approvals, and thousands of dollars out of pocket. Fewer than one in three eligible patients ever enroll."
            action={
              <Button to="/impact" variant="ghost" arrow>
                Why access breaks down
              </Button>
            }
          />
          <StatGrid stats={problemStats} className="mt-14" />
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <SectionHeading
            eyebrow="The platform"
            title="One kit. Three steps. Zero clinic visits."
            lede="Hospital-grade monitoring with living-room simplicity. CardioCare records your heart, builds your program, and watches over every session."
            action={
              <Button to="/platform" variant="ghost" arrow>
                Explore the platform
              </Button>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.08}
                className="flex flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ink-900/[0.06]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-50">
                  <StepVisual kind={step.mock} />
                </div>
                <div className="p-7">
                  <p className="font-display text-2xl text-ink-400">{step.number}</p>
                  <h3 className="mt-3 text-xl font-medium text-ink-900">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Testimonials
        items={testimonials}
        eyebrow="Clinical validation"
        title="Built with the cardiologists who run rehab."
        link={{ label: 'Read the full validation', to: '/validation' }}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why it matters"
            title="Built for the patients the current system leaves out."
            lede="Cost, distance, and insurance keep most people out of rehab. CardioCare was designed to remove all three."
            action={
              <Button to="/impact" variant="ghost" arrow>
                See the impact
              </Button>
            }
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
            {outcomes.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="bg-white p-8 sm:p-10">
                <p className="display text-5xl text-ink-900">{item.value}</p>
                <h3 className="mt-4 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-ink-900/[0.06]">
        <Container>
          <SectionHeading
            eyebrow="Progress"
            title="From a proof of concept to clinical trials in under two years."
            lede="Three prototype generations, pilot patients, and validation with three cardiology practices. Now preparing for FDA-compliant trials."
            action={
              <Button to="/about#roadmap" variant="ghost" arrow>
                See the full roadmap
              </Button>
            }
          />
          <div className="mt-14">
            <RoadmapStepper items={roadmap} />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
