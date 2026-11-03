export const site = {
  name: 'CardioCare',
  tagline: 'Cardiac rehab at home',
  description:
    'CardioCare is an EKG kit and an app for doing cardiac rehab at home. Scan your heart, get a program built around it, and exercise with your heart rate monitored.',
  email: 'info@cardiocare.fit',
  location: 'Austin, Texas',
}

export const primaryNav = [
  { label: 'Platform', to: '/platform' },
  { label: 'Impact', to: '/impact' },
  { label: 'Validation', to: '/validation' },
  { label: 'About', to: '/about' },
]

export const footerNav = [
  {
    heading: 'Product',
    links: [
      { label: 'Platform', to: '/platform' },
      { label: 'How it works', to: '/platform#how-it-works' },
      { label: 'Prototypes', to: '/platform#prototypes' },
    ],
  },
  {
    heading: 'Why',
    links: [
      { label: 'The problem', to: '/impact' },
      { label: 'Validation', to: '/validation' },
      { label: 'Roadmap', to: '/about#roadmap' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Recognition', to: '/about#recognition' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export const contactInterests = [
  { value: 'demo', label: 'A demo' },
  { value: 'clinical', label: 'A clinical pilot or trial' },
  { value: 'partnership', label: 'A partnership' },
  { value: 'investment', label: 'Investing' },
  { value: 'other', label: 'Something else' },
]

export const disclaimer =
  'CardioCare is currently in development and not yet FDA-approved for clinical use. Information provided on this website is for educational purposes only and should not be considered medical advice. Always consult with a healthcare professional for medical guidance.'
