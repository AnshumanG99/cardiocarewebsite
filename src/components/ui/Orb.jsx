import { cn } from '../../lib/cn'

/** A large, slowly drifting ball of light. Place inside a `relative overflow-hidden` parent. */
export default function Orb({ className, color = 'teal' }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute h-[440px] w-[440px] rounded-full opacity-30 blur-3xl animate-drift will-change-transform',
        color === 'teal' ? 'bg-brand-teal' : color === 'green' ? 'bg-brand-green' : 'bg-brand-blue',
        className,
      )}
      aria-hidden="true"
    />
  )
}
