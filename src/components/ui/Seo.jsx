import { site } from '../../data/site'

/** Per-page document metadata. React 19 hoists these tags into <head>. */
export default function Seo({ title, description = site.description }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  )
}
