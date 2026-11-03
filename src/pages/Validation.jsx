import teamPhoto from '../assets/validationteampic.jpg'
import CtaBand from '../components/CtaBand'
import PageHero from '../components/PageHero'
import Container from '../components/ui/Container'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Seo from '../components/ui/Seo'
import { clinics, testimonials, validated } from '../data/testimonials'
import { cn } from '../lib/cn'

export default function Validation() {
  return (
    <>
      <Seo
        title="Clinical validation"
        description="CardioCare was refined in direct collaboration with cardiologists and rehabilitation specialists at OSF Healthcare, Austin Heart, and GAIN Health Clinic."
      />

      <PageHero
        eyebrow="Clinical validation"
        title={
          <>
            Refined with the clinicians who <em>run</em> cardiac rehab.
          </>
        }
        lede="CardioCare was shaped in direct collaboration with cardiologists and rehabilitation specialists across three practices. Their feedback set the bar for safety, usability, and real-world impact."
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <Reveal>
            <figure>
              <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-paper">
                <img
                  src={teamPhoto}
                  alt="The CardioCare founders standing with a clinical team after a validation session"
                  className="h-full w-full object-cover object-[50%_38%]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-500">
                The CardioCare founders with the clinical team at one of our validation partners in Texas.
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <SectionHeading eyebrow="In their words" title="What cardiologists told us." layout="stack" />
          <div className="mt-14 space-y-6">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                className="grid overflow-hidden rounded-[2rem] bg-cream lg:grid-cols-12"
              >
                <div className={cn('min-h-[280px] lg:col-span-5', index % 2 === 1 && 'lg:order-2')}>
                  <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col p-8 sm:p-12 lg:col-span-7">
                  <Eyebrow>{item.specialty}</Eyebrow>
                  <blockquote className="display mt-6 flex-1 text-2xl leading-[1.2] sm:text-3xl">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-8">
                    <p className="font-medium text-ink-900">{item.name}</p>
                    <p className="text-sm text-ink-600">
                      {item.title}, {item.org}
                    </p>
                  </footer>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <SectionHeading
            eyebrow="What we validated"
            title="Four things we would not ship without a clinician's sign-off."
            lede="Each session with a practice ended with the same question: would you be comfortable with your own patients using this at home?"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
            {validated.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="bg-white p-8 sm:p-10">
                <p className="font-display text-2xl text-ink-400">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="flex flex-col gap-8 border-y border-ink-900/10 py-10 lg:flex-row lg:items-center lg:justify-between">
            <Eyebrow>Validation partners</Eyebrow>
            <ul className="flex flex-wrap gap-x-12 gap-y-6">
              {clinics.map((clinic) => (
                <li key={clinic.name}>
                  <p className="font-display text-3xl text-ink-900">{clinic.name}</p>
                  <p className="mt-1 text-sm text-ink-500">{clinic.location}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        eyebrow="For clinicians"
        title="Join the clinical network."
        body="We are preparing FDA-compliant trials and looking for cardiology and rehabilitation partners who want to shape what comes next."
        primary={{ label: 'Start a conversation', to: '/contact?interest=clinical' }}
        secondary={{ label: 'See the platform', to: '/platform' }}
      />
    </>
  )
}
