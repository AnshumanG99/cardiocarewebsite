import { site } from '../data/site'
import Button from './ui/Button'
import Container from './ui/Container'
import EcgDivider from './ui/EcgDivider'
import Section from './ui/Section'

export default function Closing({
  title = 'Want to see it?',
  body = 'We are happy to walk you through the kit and the app, in person in Austin or over a call.',
  primary = { label: 'Request a demo', to: '/contact?interest=demo' },
}) {
  return (
    <Section glow="bottom" className="overflow-hidden pt-0 sm:pt-0">
      <EcgDivider className="opacity-70" />
      <Container className="pt-16 text-center sm:pt-20">
        <h2 className="h-section">{title}</h2>
        <p className="lede mx-auto mt-4 max-w-text">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button to={primary.to} size="lg">
            {primary.label}
          </Button>
          <Button href={`mailto:${site.email}`} variant="link" chevron>
            Email us
          </Button>
        </div>
      </Container>
    </Section>
  )
}
