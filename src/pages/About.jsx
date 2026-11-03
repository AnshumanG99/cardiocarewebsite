import { FlaskConical, Rocket } from 'lucide-react'

import Closing from '../components/Closing'
import PageHero from '../components/PageHero'
import Roadmap from '../components/Roadmap'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Section from '../components/ui/Section'
import Seo from '../components/ui/Seo'
import { roadmap } from '../data/roadmap'
import { founders, mission, recognition, story, team } from '../data/team'

const recognitionIcons = {
  'Conrad Challenge': Rocket,
  'Georgia Tech': FlaskConical,
}

export default function About() {
  return (
    <>
      <Seo title="About" description="CardioCare is built by three students, one in Austin and two at Yale. Who we are, where we are, and what comes next." />

      <PageHero label="About" title="The team behind CardioCare." lede="Three students, one in Austin and two at Yale." />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <p className="mx-auto max-w-text text-[19px] leading-[1.5] text-white/85 sm:text-[21px]">{story}</p>
        </Container>
      </Section>

      <Section id="team" glow="left">
        <Container size="wide">
          <Heading label="Team" title="Who we are" />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {[...founders, ...team].map((person) => (
              <div key={person.name} className="glass flex flex-col gap-6 p-7 sm:flex-row sm:p-8">
                <img
                  src={person.image}
                  alt={`Portrait of ${person.name}`}
                  className="h-32 w-32 shrink-0 rounded-2xl object-cover ring-1 ring-white/15"
                  style={person.focus ? { objectPosition: person.focus } : undefined}
                />
                <div>
                  <h3 className="h-tile">{person.name}</h3>
                  <p className="label mt-1">{person.role}</p>
                  <p className="copy mt-3">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <figure className="mt-10 text-center">
            <blockquote className="mx-auto max-w-[820px] text-[22px] font-medium leading-[1.4] tracking-[-0.01em] text-white/90 sm:text-[26px]">
              &ldquo;{mission}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-[15px] text-white/50">Anshuman Garg, founder</figcaption>
          </figure>
        </Container>
      </Section>

      <Section id="roadmap" glow="right">
        <Container>
          <Heading label="Roadmap" title="Where we are" lede="Five phases from the first algorithm to launch. We are in the fourth." />
          <div className="mx-auto mt-12 max-w-[640px]">
            <Roadmap items={roadmap} />
          </div>
        </Container>
      </Section>

      <Section id="recognition" glow="center">
        <Container size="wide">
          <Heading label="Recognition" title="Where we have been recognized" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {recognition.map((item) => {
              const Icon = recognitionIcons[item.name]
              return (
                <li key={item.name} className="glass p-7">
                  {item.image ? (
                    <img src={item.image} alt="" className="h-12 w-12 object-contain" />
                  ) : (
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-teal-glow ring-1 ring-inset ring-white/15">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                  )}
                  <h3 className="mt-5 text-[19px] font-bold tracking-[-0.01em] text-white">{item.name}</h3>
                  <p className="mt-1 text-[14px] leading-snug text-white/55">{item.detail}</p>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Closing
        title="Want to work with us?"
        body="We are looking for clinical partners, advisors, and early supporters."
        primary={{ label: 'Get in touch', to: '/contact' }}
      />
    </>
  )
}
