import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

import { cn } from '../lib/cn'
import Button from './ui/Button'
import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import Reveal from './ui/Reveal'
import Section from './ui/Section'

const MotionArticle = motion.article

const controlClass =
  'inline-flex h-11 w-11 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/10'

export default function Testimonials({ items, eyebrow, title, link }) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const current = items[index]

  const go = (direction) => setIndex((value) => (value + direction + items.length) % items.length)

  return (
    <Section className="bg-ink-950 text-white">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow className="text-white/50">{eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{title}</h2>
          </div>
          {link && (
            <Button to={link.to} variant="ghostInverse" arrow>
              {link.label}
            </Button>
          )}
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-[2rem] bg-cream text-ink-900">
            <AnimatePresence mode="wait" initial={false}>
              <MotionArticle
                key={index}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid lg:grid-cols-12"
              >
                <div className="flex flex-col p-8 sm:p-12 lg:col-span-7">
                  <Eyebrow>{current.specialty}</Eyebrow>
                  <blockquote className="display mt-6 flex-1 text-2xl leading-[1.2] sm:text-3xl lg:text-[2.15rem]">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-8">
                    <p className="font-medium">{current.name}</p>
                    <p className="text-sm text-ink-600">
                      {current.title}, {current.org}
                    </p>
                  </footer>
                </div>
                <div className="min-h-[260px] lg:col-span-5 lg:min-h-0">
                  <img src={current.image} alt={current.imageAlt} className="h-full w-full object-cover" />
                </div>
              </MotionArticle>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <ol className="flex gap-2" aria-label="Choose a testimonial">
              {items.map((item, i) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1} of ${items.length}`}
                    aria-current={i === index}
                    className={cn(
                      'block h-2 rounded-full transition-all duration-300',
                      i === index ? 'w-7 bg-white' : 'w-2 bg-white/30 hover:bg-white/60',
                    )}
                  />
                </li>
              ))}
            </ol>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} className={controlClass} aria-label="Previous testimonial">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} className={controlClass} aria-label="Next testimonial">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
