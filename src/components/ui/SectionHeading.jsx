import { cn } from '../../lib/cn'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

/**
 * Section intro. `layout="split"` puts the headline on the left and the
 * supporting copy on the right, the editorial pattern used across the site.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  action,
  layout = 'split',
  className,
  titleClassName,
}) {
  if (layout === 'center') {
    return (
      <Reveal className={cn('mx-auto max-w-3xl text-center', className)}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={cn('display mt-4 text-4xl sm:text-5xl', titleClassName)}>{title}</h2>
        {lede && <p className="lede mt-5">{lede}</p>}
        {action && <div className="mt-7 flex justify-center">{action}</div>}
      </Reveal>
    )
  }

  if (layout === 'stack') {
    return (
      <Reveal className={cn('max-w-3xl', className)}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={cn('display mt-4 text-4xl sm:text-5xl', titleClassName)}>{title}</h2>
        {lede && <p className="lede mt-5">{lede}</p>}
        {action && <div className="mt-7">{action}</div>}
      </Reveal>
    )
  }

  return (
    <div className={cn('grid gap-8 lg:grid-cols-12 lg:gap-12', className)}>
      <Reveal className="lg:col-span-6">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={cn('display mt-4 text-4xl sm:text-5xl', titleClassName)}>{title}</h2>
      </Reveal>
      {(lede || action) && (
        <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8 lg:pt-10">
          {lede && <p className="lede">{lede}</p>}
          {action && <div className="mt-6">{action}</div>}
        </Reveal>
      )}
    </div>
  )
}
