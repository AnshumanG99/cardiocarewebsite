import { Link } from 'react-router-dom'

import { cn } from '../../lib/cn'

export default function Wordmark({ className, inverse = false }) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-2 font-extrabold tracking-[-0.02em]', inverse ? 'text-white' : 'text-navy', className)}
      aria-label="CardioCare home"
    >
      <img src="/favicon.png" alt="" className="h-7 w-7" />
      <span className="text-[18px]">CardioCare</span>
    </Link>
  )
}
