import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Eyebrow from '../components/ui/Eyebrow'
import Seo from '../components/ui/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
        <div className="wash absolute inset-x-0 bottom-0 h-1/2 opacity-70" aria-hidden="true" />
        <Container className="relative py-24 text-center">
          <Eyebrow>404</Eyebrow>
          <h1 className="display mt-5 text-5xl sm:text-6xl">We couldn&rsquo;t find that page.</h1>
          <p className="lede mx-auto mt-5 max-w-md">
            The link may be out of date. Everything on the site is one click from the home page.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/" size="lg">
              Back home
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
