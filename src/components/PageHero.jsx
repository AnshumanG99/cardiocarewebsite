import { cn } from '../lib/cn'
import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import Reveal from './ui/Reveal'

/** Header block for every page but the home page. */
export default function PageHero({ eyebrow, title, lede, actions, aside, compact = false }) {
  return (
    <section
      className={cn('relative overflow-hidden pt-32 sm:pt-40', compact ? 'pb-10 sm:pb-12' : 'pb-16 sm:pb-20')}
    >
      <Container>
        <div className={cn('grid gap-12', aside && 'lg:grid-cols-12 lg:items-center')}>
          <div className={cn(aside ? 'lg:col-span-7' : 'max-w-3xl')}>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className={cn('display mt-5 text-5xl sm:text-6xl', aside ? 'xl:text-7xl' : 'lg:text-7xl')}>{title}</h1>
            </Reveal>
            {lede && (
              <Reveal delay={0.1}>
                <p className="lede mt-6 max-w-2xl">{lede}</p>
              </Reveal>
            )}
            {actions && (
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
              </Reveal>
            )}
          </div>
          {aside && (
            <Reveal delay={0.2} className="lg:col-span-5">
              {aside}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}
