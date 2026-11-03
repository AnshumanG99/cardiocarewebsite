import teamPhoto from '../assets/validationteampic.jpg'
import Closing from '../components/Closing'
import PageHero from '../components/PageHero'
import { QuoteList } from '../components/Quotes'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Section from '../components/ui/Section'
import Seo from '../components/ui/Seo'
import { checks, clinics, testimonials } from '../data/testimonials'
import { cn } from '../lib/cn'

export default function Validation() {
  return (
    <>
      <Seo
        title="Validation"
        description="We built CardioCare with cardiologists at OSF Healthcare, Austin Heart, and GAIN Health Clinic. What they said and what they checked."
      />

      <PageHero label="Validation" title="Built with the cardiologists who run rehab." lede="Three practices in Texas and Illinois shaped CardioCare with us." />

      <Section className="pt-0 sm:pt-0">
        <Container size="wide">
          <figure className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/25 blur-3xl" aria-hidden="true" />
            <img
              src={teamPhoto}
              alt="The CardioCare founders standing with a clinical team after a validation session"
              className="relative aspect-[16/9] w-full rounded-[32px] object-cover object-[50%_38%] ring-1 ring-white/10"
            />
            <figcaption className="relative mt-4 text-center text-[14px] text-white/50">
              With the clinical team at one of our validation partners in Texas.
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section glow="left">
        <Container size="wide">
          <Heading label="In their words" title="What they said" />
          <div className="mt-12">
            <QuoteList items={testimonials} />
          </div>
        </Container>
      </Section>

      <Section glow="right">
        <Container size="wide">
          <Heading label="Review" title="What they checked" />
          <div className="glass mt-12 grid sm:grid-cols-2">
            {checks.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  'p-7 sm:p-9',
                  index % 2 === 1 && 'sm:border-l sm:border-white/10',
                  index >= 1 && 'border-t border-white/10 sm:border-t-0',
                  index >= 2 && 'sm:border-t',
                )}
              >
                <span className="bg-gradient-brand inline-flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="h-tile mt-4">{item.title}</h3>
                <p className="copy mt-2">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="label">Validation partners</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-10 gap-y-2 text-[19px] font-bold text-white">
              {clinics.map((clinic) => (
                <li key={clinic.name}>
                  {clinic.name} <span className="font-medium text-white/50">{clinic.location}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Closing
        title="Run a cardiology or rehab practice?"
        body="We are looking for partners for our clinical trials. If you want to be part of them, get in touch."
        primary={{ label: 'Get in touch', to: '/contact?interest=clinical' }}
      />
    </>
  )
}
