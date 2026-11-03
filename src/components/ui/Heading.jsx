import { createElement } from 'react'

import { cn } from '../../lib/cn'

/** Centered section heading with an optional small label above and a one-line lede below. */
export default function Heading({ as = 'h2', label, title, lede, className, titleClassName }) {
  return (
    <div className={cn('mx-auto max-w-[780px] text-center', className)}>
      {label && <p className="label mb-4">{label}</p>}
      {createElement(as, { className: cn('h-section', titleClassName) }, title)}
      {lede && <p className="lede mx-auto mt-4 max-w-text">{lede}</p>}
    </div>
  )
}
