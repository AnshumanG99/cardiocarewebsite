import { Check } from 'lucide-react'

import { cn } from '../lib/cn'
import Reveal from './ui/Reveal'

const statusLabel = { completed: 'Completed', current: 'In progress', upcoming: 'Upcoming' }

function Marker({ status }) {
  if (status === 'completed') {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
      </span>
    )
  }
  if (status === 'current') {
    return (
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-1 rounded-full bg-brand-blue animate-pulse-ring" />
        <span className="relative h-3 w-3 rounded-full bg-brand-blue" />
      </span>
    )
  }
  return <span className="flex h-6 w-6 rounded-full bg-white ring-1 ring-inset ring-ink-300" />
}

function StatusPill({ status }) {
  return (
    <span
      className={cn(
        'rounded-full px-2.5 py-0.5 text-xs font-medium',
        status === 'completed' && 'bg-ink-900/[0.06] text-ink-700',
        status === 'current' && 'bg-brand-blue/10 text-brand-blue',
        status === 'upcoming' && 'bg-white text-ink-500 ring-1 ring-inset ring-ink-200',
      )}
    >
      {statusLabel[status]}
    </span>
  )
}

/** Vertical timeline of the company roadmap. */
export default function Roadmap({ items }) {
  return (
    <ol className="space-y-0">
      {items.map((item, index) => {
        const last = index === items.length - 1
        return (
          <Reveal as="li" key={item.phase} delay={index * 0.05} className="flex gap-5 sm:gap-8">
            <div className="flex flex-col items-center">
              <Marker status={item.status} />
              {!last && <span className="mt-2 w-px flex-1 bg-ink-900/10" aria-hidden="true" />}
            </div>
            <div className={cn('pb-10', last && 'pb-0', item.status === 'upcoming' && 'opacity-70')}>
              <p className="text-sm text-ink-500">{item.dates}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-medium text-ink-900">
                  Phase {index + 1}: {item.phase}
                </h3>
                <StatusPill status={item.status} />
              </div>
              <p className="mt-2 max-w-xl text-ink-600">{item.body}</p>
            </div>
          </Reveal>
        )
      })}
    </ol>
  )
}

/** Compact horizontal version for overview pages. */
export function RoadmapStepper({ items }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-5 sm:gap-4">
      {items.map((item, index) => (
        <Reveal as="li" key={item.phase} delay={index * 0.05} className="flex gap-4 sm:block">
          <span
            className={cn(
              'block w-1 shrink-0 rounded-full sm:h-1 sm:w-full',
              item.status === 'completed' && 'bg-ink-900',
              item.status === 'current' && 'bg-brand-blue',
              item.status === 'upcoming' && 'bg-ink-200',
            )}
            aria-hidden="true"
          />
          <div className="sm:mt-4">
            <p className={cn('text-xs font-medium uppercase tracking-eyebrow', item.status === 'current' ? 'text-brand-blue' : 'text-ink-400')}>
              Phase {index + 1}
            </p>
            <p className={cn('mt-1 font-medium', item.status === 'upcoming' ? 'text-ink-500' : 'text-ink-900')}>
              {item.phase}
            </p>
            <p className="mt-1 text-sm text-ink-500">{item.dates}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
