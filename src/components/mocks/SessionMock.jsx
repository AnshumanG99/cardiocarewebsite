import MockCard from './MockCard'

const points = [52, 50, 48, 46, 42, 40, 36, 34, 30, 31, 28, 27, 25, 26, 24, 25, 23, 24, 22, 23]

export default function SessionMock({ className }) {
  const path = points.map((y, i) => `${i === 0 ? 'M' : 'L'}${(i / (points.length - 1)) * 300} ${y}`).join(' ')
  return (
    <MockCard className={className}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[12px] text-ink-secondary">Heart rate</p>
          <p className="mt-1 text-[30px] font-semibold leading-none tabular-nums tracking-tight">
            112 <span className="text-[14px] font-normal text-ink-secondary">bpm</span>
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-green/15 px-2.5 py-1 text-[12px] font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
          Zone 2
        </span>
      </div>
      <svg viewBox="0 0 300 60" className="mt-4 h-14 w-full" aria-hidden="true" preserveAspectRatio="none">
        <rect x="0" y="18" width="300" height="20" fill="#34c759" fillOpacity="0.12" rx="2" />
        <path d={path} fill="none" stroke="#0071e3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="300" cy={points[points.length - 1]} r="4" fill="#0071e3" stroke="#fff" strokeWidth="2" />
      </svg>
      <div className="mt-3 flex items-center justify-between text-[12px] text-ink-secondary">
        <span>Brisk walk, 12:40 in</span>
        <span>Keep this pace</span>
      </div>
    </MockCard>
  )
}
