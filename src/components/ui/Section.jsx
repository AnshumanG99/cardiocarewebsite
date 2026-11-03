import { cn } from '../../lib/cn'

const glows = {
  left: 'glow-left',
  right: 'glow-right',
  center: 'glow-center',
  bottom: 'glow-bottom',
}

export default function Section({ id, glow, className, children }) {
  return (
    <section id={id} className={cn('relative scroll-mt-16 py-20 sm:py-28', glow && glows[glow], className)}>
      {children}
    </section>
  )
}
