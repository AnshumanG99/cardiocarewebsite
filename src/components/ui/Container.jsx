import { createElement } from 'react'

import { cn } from '../../lib/cn'

export default function Container({ as = 'div', className, children, ...rest }) {
  return createElement(as, { className: cn('mx-auto w-full max-w-7xl px-5 sm:px-8', className), ...rest }, children)
}
