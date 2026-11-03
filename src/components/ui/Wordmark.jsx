import { Link } from 'react-router-dom'

import { cn } from '../../lib/cn'

/** Text wordmark with the heart mark, for surfaces where the full logo would not read. */
export default function Wordmark({ className, inverse = false }) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-2.5', inverse ? 'text-white' : 'text-ink-900', className)}
      aria-label="CardioCare home"
    >
      <img src="/favicon.png" alt="" className="h-8 w-8" />
      <span className="font-display text-[1.65rem] leading-none tracking-tight">CardioCare</span>
    </Link>
  )
}
