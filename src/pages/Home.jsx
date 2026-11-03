import { CloudOff, ShieldCheck, Smartphone } from 'lucide-react'

import Closing from '../components/Closing'
import Hero from '../components/Hero'
import PhoneFrame from '../components/PhoneFrame'
import { QuoteGrid } from '../components/Quotes'
import { PhaseRow } from '../components/Roadmap'
import Stats from '../components/Stats'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import EcgDivider from '../components/ui/EcgDivider'
import Heading from '../components/ui/Heading'
import Orb from '../components/ui/Orb'
import Section from '../components/ui/Section'
import Seo from '../components/ui/Seo'
import { privacyFacts, steps } from '../data/platform'
import { roadmap } from '../data/roadmap'
import { problemStats } from '../data/stats'
import { testimonials } from '../data/testimonials'

const privacyIcons = [Smartphone, CloudOff, ShieldCheck]

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />

      <EcgDivider className="-mt-8 opacity-60" />

      <Section glow="left" className="pt-10 sm:pt-14">
        <Container size="wide">
          <Heading
            label="The problem"
            title="Most people who need cardiac rehab never get it."
            lede="After a heart attack, rehab cuts the chance of another one. But it means months of trips to a clinic, insurance approvals, and a bill that can pass $5,000. So most patients skip it."
          />
          <Stats stats={problemStats} className="mt-12" />
          <p className="mt-8 text-center">
            <Button to="/impact" variant="link" chevron>
              More about the problem
            </Button>
          </p>
        </Container>
      </Section>

      <Section glow="right" className="overflow-hidden">
        <Orb color="teal" className="-right-32 top-1/3" />
        <Container size="wide" className="relative">
          <Heading
            label="How it works"
            title="A scan, a program, and a safety net."
            lede="Three parts, all on your phone."
          />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="glass relative flex justify-center overflow-hidden py-10 lg:col-span-5 lg:py-14">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/30 blur-3xl" aria-hidden="true" />
              <PhoneFrame className="relative sm:w-[280px]" />
            </div>
            <ol className="divide-y divide-white/10 lg:col-span-7">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-5 py-6 first:pt-0 sm:gap-6">
                  <span className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold text-white shadow-[0_0_24px_rgba(47,181,179,0.45)]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="h-tile">{step.title}</h3>
                    <p className="copy mt-1.5">{step.body}</p>
                  </div>
                </li>
              ))}
              <li className="pt-6">
                <Button to="/platform" variant="link" chevron>
                  More about the platform
                </Button>
              </li>
            </ol>
          </div>
        </Container>
      </Section>

      <Section glow="center">
        <Container size="wide">
          <Heading
            label="Privacy"
            title="Your heart data stays on your phone."
            lede="The model runs on the phone itself. Nothing is uploaded, so there is no server copy of your ECG."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {privacyFacts.map((fact, index) => {
              const Icon = privacyIcons[index]
              return (
                <div key={fact.title} className="text-center sm:text-left">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-teal-glow ring-1 ring-inset ring-white/15 sm:mx-0">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[20px] font-bold tracking-[-0.01em] text-white">{fact.title}</h3>
                  <p className="copy mt-2">{fact.body}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <EcgDivider className="opacity-50" />

      <Section glow="left" className="overflow-hidden">
        <Orb color="blue" className="-left-40 bottom-0" />
        <Container size="wide" className="relative">
          <Heading
            label="Validation"
            title="What cardiologists told us"
            lede="We worked with cardiologists at OSF Healthcare, Austin Heart, and GAIN Health Clinic while building CardioCare."
          />
          <div className="mt-12">
            <QuoteGrid items={testimonials} />
          </div>
          <p className="mt-8 text-center">
            <Button to="/validation" variant="link" chevron>
              More about validation
            </Button>
          </p>
        </Container>
      </Section>

      <Section glow="right">
        <Container>
          <Heading label="Progress" title="Where we are" />
          <p className="copy mx-auto mt-4 max-w-text text-center">
            We started in May 2024. Since then we have built three versions of the device, tested with pilot
            patients, and worked through the design with three cardiology practices. Right now we are preparing for
            certification and FDA-compliant clinical trials, with launch planned for May 2026.
          </p>
          <div className="glass mt-12 p-6 sm:p-8">
            <PhaseRow items={roadmap} />
          </div>
          <p className="mt-8 text-center">
            <Button to="/about#roadmap" variant="link" chevron>
              Full roadmap
            </Button>
          </p>
        </Container>
      </Section>

      <Closing />
    </>
  )
}
