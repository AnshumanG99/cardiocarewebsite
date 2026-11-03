import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '../../lib/cn'

const base =
  'inline-flex items-center justify-center font-semibold transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary: 'rounded-full bg-white text-navy shadow-[0_10px_30px_-10px_rgba(94,234,212,0.45)] hover:bg-tint-blue',
  white: 'rounded-full bg-white text-navy hover:bg-tint-blue',
  ghost: 'rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/15',
  ghostDark: 'rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/15',
  link: 'gap-0.5 text-teal-glow hover:text-white',
  linkDark: 'gap-0.5 text-teal-glow hover:text-white',
}

const sizes = {
  sm: 'h-9 px-4 text-[14px]',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-[16px]',
}

const isLink = (variant) => variant === 'link' || variant === 'linkDark'

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  chevron = false,
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant], !isLink(variant) && sizes[size], className)
  const content = (
    <>
      {children}
      {chevron && <ChevronRight className="-mr-1 h-[1.1em] w-[1.1em]" strokeWidth={2.5} aria-hidden="true" />}
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
