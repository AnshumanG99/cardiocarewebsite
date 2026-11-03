import { cn } from '../../lib/cn'

/** Shared surface for the product UI vignettes. */
export default function MockCard({ className, children }) {
  return (
    <div className={cn('rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/[0.08]', className)}>{children}</div>
  )
}
