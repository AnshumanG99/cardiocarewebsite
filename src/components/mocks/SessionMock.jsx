import MockCard from './MockCard'

const points = [52, 50, 48, 46, 42, 40, 36, 34, 30, 31, 28, 27, 25, 26, 24, 25, 23, 24, 22, 23]

export default function SessionMock({ className }) {
  const path = points.map((y, i) => `${i === 0 ? 'M' : 'L'}${(i / (points.length - 1)) * 300} ${y}`).join(' ')
  return (
    <MockCard className={className}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-ink-500">Heart rate</p>
          <p className="mt-1 text-3xl font-medium tabular-nums tracking-tight text-ink-900">
            112 <span className="text-sm font-normal text-ink-500">bpm</span>
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-green/15 px-2.5 py-1 text-xs font-medium text-ink-800">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
          Zone 2, on target
        </span>
      </div>
      <svg viewBox="0 0 300 60" className="mt-4 h-14 w-full" aria-hidden="true" preserveAspectRatio="none">
        <rect x="0" y="18" width="300" height="20" fill="#7DB356" fillOpacity="0.12" rx="2" />
        <path d={path} fill="none" stroke="#2F7FD6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="300" cy={points[points.length - 1]} r="4" fill="#2F7FD6" stroke="#fff" strokeWidth="2" />
      </svg>
      <div className="mt-3 flex items-center justify-between text-xs text-ink-500">
        <span>Brisk walk, 12:40 elapsed</span>
        <span>Hold this pace</span>
      </div>
    </MockCard>
  )
}
