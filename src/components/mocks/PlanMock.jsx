import { Check } from 'lucide-react'

import { cn } from '../../lib/cn'
import MockCard from './MockCard'

const sessions = [
  { day: 'Mon', activity: 'Brisk walk', detail: '20 min, zone 2', done: true },
  { day: 'Wed', activity: 'Stationary bike', detail: '15 min, zone 2', done: true },
  { day: 'Fri', activity: 'Brisk walk', detail: '25 min, zone 2', done: false },
  { day: 'Sun', activity: 'Light resistance', detail: '2 sets, 12 reps', done: false },
]

export default function PlanMock({ className }) {
  return (
    <MockCard className={className}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-ink-900">This week</p>
        <span className="rounded-full bg-brand-green/15 px-2 py-0.5 text-[11px] font-medium text-ink-700">Week 4 of 12</span>
      </div>
      <ul className="mt-4 divide-y divide-ink-900/[0.06]">
        {sessions.map((session) => (
          <li key={session.day} className="flex items-center gap-3 py-2.5">
            <span className="w-8 text-xs font-medium text-ink-400">{session.day}</span>
            <span className="flex-1">
              <span className="block text-sm text-ink-900">{session.activity}</span>
              <span className="block text-xs text-ink-500">{session.detail}</span>
            </span>
            <span
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded-full',
                session.done ? 'bg-ink-900 text-white' : 'ring-1 ring-inset ring-ink-300',
              )}
              aria-hidden="true"
            >
              {session.done && <Check className="h-3 w-3" strokeWidth={3} />}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink-500">Intensity adjusted after Tuesday&rsquo;s scan.</p>
    </MockCard>
  )
}
