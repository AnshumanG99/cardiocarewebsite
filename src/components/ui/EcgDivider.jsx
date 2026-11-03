import { cn } from '../../lib/cn'

/** One PQRST beat as relative path commands, about 160 units wide. */
const BEAT = 'h28 l5-7 l5 14 l5-7 h20 l4-34 l5 52 l4-18 h24 l7-9 l7 9 h41'

function buildPath(width) {
  let d = 'M0 40'
  for (let x = 0; x < width; x += 160) d += ` ${BEAT}`
  return d
}

/** A thin animated ECG line, used to carry the hero's pulse between sections. */
export default function EcgDivider({ className }) {
  const d = buildPath(1600)
  return (
    <svg
      viewBox="0 0 1600 80"
      preserveAspectRatio="none"
      className={cn('h-16 w-full', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ecg-gradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#7db8ff" />
          <stop offset="0.5" stopColor="#5eead4" />
          <stop offset="1" stopColor="#b5e98a" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d={d}
        fill="none"
        stroke="url(#ecg-gradient)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="ecg-run"
      />
    </svg>
  )
}
