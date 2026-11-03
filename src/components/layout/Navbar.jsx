import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import logo from '../../assets/cardiocarelogo.png'
import { primaryNav } from '../../data/site'
import { cn } from '../../lib/cn'
import Button from '../ui/Button'
import Container from '../ui/Container'

const desktopLink = ({ isActive }) =>
  cn(
    'rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200',
    isActive ? 'bg-ink-900/[0.06] text-ink-900' : 'text-ink-600 hover:bg-ink-900/[0.04] hover:text-ink-900',
  )

const mobileLink = ({ isActive }) =>
  cn(
    'flex items-center justify-between border-b border-ink-900/10 py-4 text-xl font-medium',
    isActive ? 'text-ink-900' : 'text-ink-600',
  )

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        solid ? 'border-ink-900/[0.06] bg-white/85 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        <Link to="/" className="shrink-0" aria-label="CardioCare home">
          <img src={logo} alt="" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <NavLink to="/contact" className={desktopLink}>
            Contact
          </NavLink>
          <Button to="/contact?interest=demo">Request a demo</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-900/[0.05] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      {/* Absolutely positioned (not fixed): the header's backdrop-filter would otherwise become
          the containing block and collapse a fixed panel to the header's own height. */}
      <div
        id="mobile-navigation"
        className={cn(
          'absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-white lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <Container as="nav" className="flex min-h-full flex-col pb-10 pt-2" aria-label="Mobile">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={mobileLink}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={mobileLink}>
            Contact
          </NavLink>
          <div className="mt-8">
            <Button to="/contact?interest=demo" size="lg" className="w-full">
              Request a demo
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
