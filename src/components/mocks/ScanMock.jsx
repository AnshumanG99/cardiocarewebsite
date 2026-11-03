import EcgTrace from './EcgTrace'
import MockCard from './MockCard'

export default function ScanMock({ className }) {
  return (
    <MockCard className={className}>
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-semibold">Recording ECG</p>
        <span className="flex items-center gap-1.5 text-[12px] text-ink-secondary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-red animate-pulse-ring" />
            <span className="relative h-2 w-2 rounded-full bg-red" />
          </span>
          Live
        </span>
      </div>
      <EcgTrace className="mt-4 h-14 w-full" />
      <div className="mt-4 flex items-center justify-between text-[12px] text-ink-secondary">
        <span>Kit connected</span>
        <span className="tabular-nums">0:21 / 0:30</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface">
        <div className="h-full w-[70%] rounded-full bg-blue" />
      </div>
    </MockCard>
  )
}
