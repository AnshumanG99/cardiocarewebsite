import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Orb from '../components/ui/Orb'
import Seo from '../components/ui/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
        <Orb color="blue" className="-left-40 top-0" />
        <Orb color="teal" className="-right-40 bottom-0" />
        <Container className="relative text-center">
          <h1 className="h-hero">That page is not here.</h1>
          <p className="lede mx-auto mt-4 max-w-text">The link may be old. Everything is one click from the home page.</p>
          <div className="mt-6 text-[18px]">
            <Button to="/" variant="link" chevron>
              Go to the home page
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
