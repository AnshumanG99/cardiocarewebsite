import { Activity, BellRing, Cpu, Lock } from 'lucide-react'

import Closing from '../components/Closing'
import { mocks } from '../components/mocks'
import PageHero from '../components/PageHero'
import PhoneFrame from '../components/PhoneFrame'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Section from '../components/ui/Section'
import Seo from '../components/ui/Seo'
import { features, specs, steps } from '../data/platform'
import { prototypes } from '../data/prototypes'
import { cn } from '../lib/cn'

const featureIcons = [Activity, Cpu, BellRing, Lock]
const stepGlows = ['bg-brand-blue/35', 'bg-brand-teal/35', 'bg-brand-green/30']

export default function Platform() {
  return (
    <>
      <Seo
        title="Platform"
        description="An EKG kit, an app, and a model that runs on your phone. How CardioCare records your ECG, builds your program, and monitors each session."
      />

      <PageHero
        label="Platform"
        title="An EKG kit, an app, and a model on your phone."
        lede="Everything a patient needs to scan, train, and recover at home."
        links={[
          { label: 'How it works', to: '#how-it-works' },
          { label: 'Request a demo', to: '/contact?interest=demo' },
        ]}
      >
        <div className="relative mt-14 flex justify-center sm:mt-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/30 blur-3xl" aria-hidden="true" />
          <PhoneFrame className="relative sm:w-[300px]" />
        </div>
      </PageHero>

      <Section id="how-it-works" glow="left">
        <Container size="wide">
          <Heading label="How it works" title="Three steps, every session." />
          <div className="mt-12 space-y-4">
            {steps.map((step, index) => {
              const Mock = mocks[step.mock]
              return (
                <div key={step.title} className="glass grid overflow-hidden lg:grid-cols-2">
                  <div className={cn('p-8 sm:p-12', index % 2 === 1 && 'lg:order-2')}>
                    <span className="bg-gradient-brand inline-flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-extrabold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[30px]">
                      {step.title}
                    </h3>
                    <p className="copy mt-4">{step.detail}</p>
                  </div>
                  <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden p-8 sm:p-12">
                    <div className={cn('pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl', stepGlows[index])} aria-hidden="true" />
                    <Mock className="relative w-full max-w-[360px]" />
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section glow="right">
        <Container size="wide">
          <Heading label="Inside" title="What's in the kit" />
          <div className="glass mt-12 grid sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <div
                  key={feature.title}
                  className={cn(
                    'p-7 sm:p-9',
                    index % 2 === 1 && 'sm:border-l sm:border-white/10',
                    index >= 1 && 'border-t border-white/10 sm:border-t-0',
                    index >= 2 && 'sm:border-t',
                  )}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] text-teal-glow ring-1 ring-inset ring-white/15">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="h-tile mt-5">{feature.title}</h3>
                  <p className="copy mt-2">{feature.body}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section glow="center">
        <Container>
          <Heading label="Specifications" title="The short version" />
          <dl className="glass mx-auto mt-12 max-w-[760px] divide-y divide-white/10 px-7 sm:px-10">
            {specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-[1fr_1.6fr] gap-6 py-4 text-[17px]">
                <dt className="text-white/50">{spec.label}</dt>
                <dd className="font-semibold text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="prototypes" glow="left">
        <Container size="wide">
          <Heading label="Hardware" title="Three versions so far" lede="Every version was tested on real signals before we built the next one." />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {prototypes.map((prototype) => (
              <figure key={prototype.version}>
                <img
                  src={prototype.image}
                  alt={prototype.alt}
                  className="aspect-[4/3] w-full rounded-[24px] object-cover ring-1 ring-white/10"
                  loading="lazy"
                />
                <figcaption className="mt-5">
                  <p className="label">
                    {prototype.version}, {prototype.period}
                  </p>
                  <h3 className="h-tile mt-2">{prototype.title}</h3>
                  <p className="copy mt-2">{prototype.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Closing title="Want to try it?" body="Fifteen minutes with the kit and the app is the fastest way to see what it does." />
    </>
  )
}
