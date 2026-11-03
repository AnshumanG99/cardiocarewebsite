import { motion, useReducedMotion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

/** Fades and lifts its children into view once, the first time they scroll into the viewport. */
export default function Reveal({ as = 'div', delay = 0, y = 20, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.65, ease: easing, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
