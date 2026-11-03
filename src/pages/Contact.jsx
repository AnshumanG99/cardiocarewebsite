import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Seo from '../components/ui/Seo'
import { site } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Request a demo, ask about a clinical pilot, or just say hello." />

      <PageHero
        label="Contact"
        title="Say hello."
        lede={
          <>
            Email us at{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-teal-glow hover:text-white">
              {site.email}
            </a>{' '}
            or use the form. We usually reply within a day or two.
          </>
        }
      />

      <Section glow="bottom" className="pt-0 sm:pt-0">
        <Container>
          <div className="glass mx-auto max-w-[680px] p-6 sm:p-10">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
