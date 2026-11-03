import { cn } from '../../lib/cn'

export default function Section({ id, className, children }) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-28', className)}>
      {children}
    </section>
  )
}
