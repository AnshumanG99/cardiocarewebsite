import EcgTrace from './EcgTrace'
import MockCard from './MockCard'

export default function ScanMock({ className }) {
  return (
    <MockCard className={className}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-ink-900">Recording ECG</p>
        <span className="flex items-center gap-1.5 text-xs text-ink-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-brand-coral animate-pulse-ring" />
            <span className="relative h-2 w-2 rounded-full bg-brand-coral" />
          </span>
          Live
        </span>
      </div>
      <EcgTrace className="mt-4 h-14 w-full" />
      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Kit connected</span>
        <span className="tabular-nums">0:21 / 0:30</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-100">
        <div className="h-full w-[70%] rounded-full bg-brand-blue" />
      </div>
    </MockCard>
  )
}
