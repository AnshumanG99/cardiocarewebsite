import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import Seo from '../components/ui/Seo'
import { site } from '../data/site'

const audiences = [
  'Cardiologists and rehabilitation specialists',
  'Clinics planning a pilot or trial',
  'Investors and partners',
  'Patients and families',
]

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Request a demo, start a clinical pilot, or ask us anything about CardioCare." />

      <PageHero
        compact
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s talk about bringing rehab <em>home</em>.
          </>
        }
        lede="Whether you are a healthcare provider, an investor, a potential partner, or someone recovering from a cardiac event, we would love to hear from you."
      />

      <Section className="pt-4 sm:pt-6">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <dl className="space-y-8">
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-lg font-medium text-ink-900 underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Location</dt>
                  <dd className="mt-2 text-lg text-ink-900">{site.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Response time</dt>
                  <dd className="mt-2 text-lg text-ink-900">Within {site.responseTime}</dd>
                </div>
              </dl>
              <div className="mt-12 border-t border-ink-900/10 pt-8">
                <p className="eyebrow">Who we talk to</p>
                <ul className="mt-4 space-y-2 text-ink-600">
                  {audiences.map((audience) => (
                    <li key={audience}>{audience}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <div className="rounded-[2rem] bg-white p-6 shadow-card ring-1 ring-ink-900/[0.08] sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
