import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RETRY_MS = 100
const MAX_ATTEMPTS = 30

/**
 * Resets scroll on route change, or scrolls to the element named by the URL hash.
 * Route chunks load lazily, so a hash target may not exist on the first pass;
 * the lookup retries briefly until the page has rendered.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    let attempts = 0
    let timer
    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts++ < MAX_ATTEMPTS) timer = setTimeout(scrollToTarget, RETRY_MS)
    }
    scrollToTarget()

    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
