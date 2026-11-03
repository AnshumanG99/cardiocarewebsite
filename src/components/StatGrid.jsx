import { cn } from '../lib/cn'
import Reveal from './ui/Reveal'

export default function StatGrid({ stats, className, columns = 4 }) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10',
        columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
        className,
      )}
    >
      {stats.map((stat, index) => (
        <Reveal key={stat.value} delay={index * 0.06} className="bg-white px-6 py-8 sm:px-8 sm:py-10">
          <p className="display text-4xl text-ink-900 sm:text-5xl">{stat.value}</p>
          <p className="mt-3 max-w-[18ch] text-sm leading-snug text-ink-600">{stat.label}</p>
        </Reveal>
      ))}
    </div>
  )
}
