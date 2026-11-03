import { Link } from 'react-router-dom'

import { disclaimer, footerNav, site } from '../../data/site'
import Container from '../ui/Container'
import Wordmark from '../ui/Wordmark'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark inverse />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              AI-powered cardiac rehabilitation that patients can start at home, the day they need it.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h3 className="eyebrow text-white/50">{group.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm text-white/80 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/40">{disclaimer}</p>
      </Container>
    </footer>
  )
}
