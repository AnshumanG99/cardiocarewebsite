import { trustMarks } from '../data/team'
import Container from './ui/Container'
import Reveal from './ui/Reveal'

export default function TrustBar() {
  return (
    <section className="border-y border-ink-900/[0.06] bg-white">
      <Container className="py-10 sm:py-12">
        <Reveal>
          <p className="eyebrow text-center">Recognized by competitions, researchers, and clinicians</p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {trustMarks.map((mark) => (
              <li key={mark.name} className="flex items-center gap-2.5">
                {mark.image && (
                  <img src={mark.image} alt="" className="h-7 w-7 object-contain opacity-70 grayscale" />
                )}
                <span className="font-display text-[1.45rem] tracking-tight text-ink-400">{mark.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
