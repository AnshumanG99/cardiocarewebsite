import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '../../lib/cn'

const base =
  'group inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'rounded-full bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-950',
  secondary:
    'rounded-full bg-white text-ink-900 ring-1 ring-inset ring-ink-900/15 hover:bg-ink-50 hover:ring-ink-900/30',
  inverse: 'rounded-full bg-white text-ink-900 hover:bg-cream',
  outlineInverse: 'rounded-full text-white ring-1 ring-inset ring-white/30 hover:bg-white/10',
  ghost: 'text-ink-900 hover:text-brand-blue',
  ghostInverse: 'text-white/90 hover:text-white',
}

const sizes = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
}

const isText = (variant) => variant === 'ghost' || variant === 'ghostInverse'

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant], !isText(variant) && sizes[size], className)
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
