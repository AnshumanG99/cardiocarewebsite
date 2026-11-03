import { Link } from 'react-router-dom'

import { disclaimer, footerNav, site } from '../../data/site'
import Container from '../ui/Container'
import Wordmark from '../ui/Wordmark'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] text-[14px] text-white/55">
      <Container size="wide" className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark inverse />
            <p className="mt-4 max-w-[300px] leading-relaxed">{site.tagline}. Built in {site.location}.</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block font-semibold text-white hover:text-teal-glow">
              {site.email}
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:col-span-1 lg:col-span-7">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h3 className="label">{group.heading}</h3>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 max-w-[760px] border-t border-white/[0.08] pt-6 text-[12px] leading-relaxed text-white/40">{disclaimer}</p>
        <div className="mt-4 flex flex-col gap-1 text-[12px] text-white/40 sm:flex-row sm:justify-between">
          <p>
            Copyright &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </Container>
    </footer>
  )
}
