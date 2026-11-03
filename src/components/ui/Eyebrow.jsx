import { createElement } from 'react'

import { cn } from '../../lib/cn'

export default function Eyebrow({ as = 'p', className, children }) {
  return createElement(as, { className: cn('eyebrow', className) }, children)
}
