import CtaBand from '../components/CtaBand'
import { mocks } from '../components/mocks'
import PageHero from '../components/PageHero'
import PhoneFrame from '../components/PhoneFrame'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Seo from '../components/ui/Seo'
import { features, specs, steps } from '../data/platform'
import { prototypes } from '../data/prototypes'
import { cn } from '../lib/cn'

export default function Platform() {
  return (
    <>
      <Seo
        title="Platform"
        description="A Bluetooth EKG kit, a phone, and on-device AI. How CardioCare records your heart, builds your program, and monitors every session at home."
      />

      <PageHero
        eyebrow="The platform"
        title={
          <>
            Hospital-grade monitoring. <em>Living-room</em> simplicity.
          </>
        }
        lede="A Bluetooth EKG kit, a phone, and on-device AI. That is everything a patient needs to scan, train, and recover safely at home."
        actions={
          <>
            <Button to="/contact?interest=demo" size="lg">
              Request a demo
            </Button>
            <Button to="#how-it-works" variant="secondary" size="lg">
              How it works
            </Button>
          </>
        }
        aside={
          <div className="relative overflow-hidden rounded-[2rem] bg-paper py-10 sm:py-14">
            <div className="wash absolute inset-0" aria-hidden="true" />
            <PhoneFrame className="relative mx-auto" />
          </div>
        }
      />

      <Section id="how-it-works" className="bg-paper">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps, every session."
            lede="The same loop a supervised program follows, measure, prescribe, monitor, running on a phone."
            layout="stack"
          />
          <div className="mt-14 space-y-6">
            {steps.map((step, index) => {
              const Mock = mocks[step.mock]
              return (
                <Reveal
                  key={step.number}
                  className="grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink-900/[0.06] lg:grid-cols-2"
                >
                  <div className={cn('p-8 sm:p-12', index % 2 === 1 && 'lg:order-2')}>
                    <p className="font-display text-3xl text-ink-400">{step.number}</p>
                    <h3 className="display mt-4 text-3xl sm:text-4xl">{step.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink-600">{step.body}</p>
                  </div>
                  <div className="relative min-h-[340px] bg-paper">
                    <div className="wash absolute inset-0 opacity-80" aria-hidden="true" />
                    <Mock className="absolute left-1/2 top-1/2 w-[min(100%-3rem,22rem)] -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What's inside"
            title="Everything a supervised program gives you, without the supervision room."
            lede="Clinical-quality signals, programs written for one patient at a time, and a safety net that is always on."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06} className="bg-white p-8 sm:p-10">
                <feature.icon className="h-6 w-6 text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-6 text-xl font-medium text-ink-900">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-950 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow className="text-white/50">Under the hood</Eyebrow>
              <h2 className="display mt-4 text-4xl sm:text-5xl">Edge AI, so the data never leaves the patient.</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Every model runs on the phone. Nothing is uploaded, so there is no cloud copy of a patient&rsquo;s
                heart data to protect.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <dl className="divide-y divide-white/10 border-y border-white/10">
                {specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-6 py-5">
                    <dt className="text-sm text-white/50">{spec.label}</dt>
                    <dd className="text-white">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="prototypes">
        <Container>
          <SectionHeading
            eyebrow="Prototype journey"
            title="Three generations of hardware in eighteen months."
            lede="From a first proof of concept to a multimodal wearable, each version was built, tested with real signals, and replaced with something better."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {prototypes.map((prototype, index) => (
              <Reveal key={prototype.version} delay={index * 0.08}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
                  <img
                    src={prototype.image}
                    alt={prototype.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-3xl text-ink-900">{prototype.version}</span>
                  <span className="text-sm text-ink-500">{prototype.period}</span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-ink-900">{prototype.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{prototype.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="See it running."
        body="Fifteen minutes with the kit and the app is the fastest way to understand what CardioCare does."
      />
    </>
  )
}
