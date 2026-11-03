import { createElement } from 'react'

import { cn } from '../../lib/cn'

export default function Container({ as = 'div', size = 'page', className, children, ...rest }) {
  return createElement(
    as,
    {
      className: cn('mx-auto w-full px-5 sm:px-8', size === 'wide' ? 'max-w-wide' : 'max-w-page', className),
      ...rest,
    },
    children,
  )
}
