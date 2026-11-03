import Button from './ui/Button'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import Section from './ui/Section'

export default function CtaBand({
  eyebrow = 'Get started',
  title = 'Bring cardiac rehab home.',
  body = 'See the kit, the app, and the data behind CardioCare, and talk with us about where it fits.',
  primary = { label: 'Request a demo', to: '/contact?interest=demo' },
  secondary = { label: 'Get in touch', to: '/contact' },
}) {
  return (
    <Section className="pt-0 sm:pt-0">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-center text-white sm:px-12 sm:py-24">
            <div className="wash-dark absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow text-white/60">{eyebrow}</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
              <p className="mt-5 text-lg text-white/70">{body}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to={primary.to} variant="inverse" size="lg">
                  {primary.label}
                </Button>
                {secondary && (
                  <Button to={secondary.to} variant="outlineInverse" size="lg">
                    {secondary.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
