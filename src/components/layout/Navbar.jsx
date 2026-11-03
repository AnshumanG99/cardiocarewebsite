import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { primaryNav } from '../../data/site'
import { cn } from '../../lib/cn'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Wordmark from '../ui/Wordmark'

const desktopLink = ({ isActive }) =>
  cn('text-[14px] font-semibold transition-colors', isActive ? 'text-white' : 'text-white/65 hover:text-white')

const mobileLink = ({ isActive }) =>
  cn('block border-b border-white/10 py-3.5 text-[22px] font-bold', isActive ? 'text-white' : 'text-white/70')

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200',
        solid ? 'bg-deep/80 shadow-[0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <Container size="wide" className="flex h-16 items-center justify-between">
        <Wordmark inverse />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={desktopLink}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact?interest=demo" variant="white" size="sm">
            Request a demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      {/* Absolutely positioned: the header's backdrop-filter would make it the containing block for a fixed panel. */}
      <div
        id="mobile-navigation"
        className={cn('absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-deep lg:hidden', open ? 'block' : 'hidden')}
      >
        <Container as="nav" className="pb-10 pt-2" aria-label="Mobile">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={mobileLink}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={mobileLink}>
            Contact
          </NavLink>
          <Button to="/contact?interest=demo" variant="white" size="lg" className="mt-8 w-full">
            Request a demo
          </Button>
        </Container>
      </div>
    </header>
  )
}
