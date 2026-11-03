import Button from './ui/Button'
import Container from './ui/Container'
import Orb from './ui/Orb'

/** Page opener: a short title, one line under it, and optional links. */
export default function PageHero({ label, title, lede, links = [], children }) {
  return (
    <section className="relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-40">
      <Orb color="blue" className="-left-40 top-10" />
      <Orb color="teal" className="-right-40 top-32" />
      <Container className="relative text-center">
        {label && <p className="label mb-4">{label}</p>}
        <h1 className="h-hero">{title}</h1>
        {lede && <p className="lede mx-auto mt-4 max-w-text">{lede}</p>}
        {links.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px] sm:text-[18px]">
            {links.map((link) => (
              <Button key={link.label} to={link.to} href={link.href} variant="link" chevron>
                {link.label}
              </Button>
            ))}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
