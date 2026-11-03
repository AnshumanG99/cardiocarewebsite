import { lazy, Suspense } from 'react'

import Button from './ui/Button'
import Container from './ui/Container'

const HeartScene = lazy(() => import('./HeartScene'))

const facts = ['Diamond Challenge global finalist', 'Built with three cardiology practices', 'Your data never leaves your phone']

function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="h-56 w-56 rounded-full bg-teal/30 blur-3xl sm:h-72 sm:w-72" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <Container
        size="wide"
        className="relative grid items-center gap-6 pb-16 pt-24 lg:min-h-[92vh] lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-28"
      >
        <div className="relative order-first h-[300px] sm:h-[380px] lg:order-last lg:col-span-6 lg:h-[600px]">
          <Suspense fallback={<SceneFallback />}>
            <HeartScene className="pointer-events-none absolute -inset-x-8 -inset-y-6 lg:-inset-x-16 lg:-inset-y-12 [&>canvas]:h-full [&>canvas]:w-full" />
          </Suspense>
        </div>

        <div className="lg:col-span-6">
          <h1 className="h-hero">Cardiac rehab at home.</h1>
          <p className="mt-5 max-w-[520px] text-[18px] leading-[1.5] text-white/70 sm:text-[20px]">
            CardioCare is an EKG kit and an app. Scan your heart, get a rehab program built around it, and exercise
            with your heart rate monitored.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact?interest=demo" variant="white" size="lg">
              Request a demo
            </Button>
            <Button to="/platform" variant="ghostDark" size="lg" chevron>
              See how it works
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/60">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-glow" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
