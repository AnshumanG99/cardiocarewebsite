import { Check } from 'lucide-react'

import { cn } from '../lib/cn'

const statusLabel = { completed: 'Done', current: 'Now', upcoming: 'Next' }

function Marker({ status }) {
  if (status === 'completed') {
    return (
      <span className="bg-gradient-brand flex h-6 w-6 items-center justify-center rounded-full text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
      </span>
    )
  }
  if (status === 'current') {
    return (
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-1 rounded-full bg-teal-glow animate-pulse-ring" />
        <span className="relative h-3 w-3 rounded-full bg-teal-glow" />
      </span>
    )
  }
  return <span className="flex h-6 w-6 rounded-full border-2 border-white/25" />
}

/** Vertical timeline. */
export default function Roadmap({ items }) {
  return (
    <ol>
      {items.map((item, index) => {
        const last = index === items.length - 1
        return (
          <li key={item.phase} className="flex gap-5 sm:gap-7">
            <div className="flex flex-col items-center">
              <Marker status={item.status} />
              {!last && <span className="mt-2 w-px flex-1 bg-white/12" aria-hidden="true" />}
            </div>
            <div className={cn('pb-10', last && 'pb-0')}>
              <p className="text-[14px] text-white/50">
                {item.dates}
                <span className="mx-2 text-white/20" aria-hidden="true">
                  |
                </span>
                <span className={cn('font-semibold', item.status === 'current' ? 'text-teal-glow' : 'text-white/40')}>
                  {statusLabel[item.status]}
                </span>
              </p>
              <h3 className="mt-1 text-[21px] font-bold tracking-[-0.01em] text-white">
                {index + 1}. {item.phase}
              </h3>
              <p className="copy mt-1.5 max-w-[560px]">{item.body}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

/** Compact five-column version. */
export function PhaseRow({ items }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-5 sm:gap-4">
      {items.map((item, index) => (
        <li key={item.phase} className="flex gap-4 sm:block">
          <span
            className={cn(
              'block w-1 shrink-0 rounded-full sm:h-1.5 sm:w-full',
              item.status === 'completed' && 'bg-gradient-brand',
              item.status === 'current' && 'bg-teal-glow shadow-[0_0_18px_rgba(94,234,212,0.7)]',
              item.status === 'upcoming' && 'bg-white/15',
            )}
            aria-hidden="true"
          />
          <div className="sm:mt-4">
            <p className={cn('text-[12px] font-bold', item.status === 'current' ? 'text-teal-glow' : 'text-white/40')}>
              {index + 1}
              {item.status === 'current' && ' (now)'}
            </p>
            <p className={cn('mt-0.5 text-[15px] font-bold leading-snug', item.status === 'upcoming' ? 'text-white/55' : 'text-white')}>
              {item.phase}
            </p>
            <p className="mt-1 text-[13px] text-white/50">{item.dates}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
