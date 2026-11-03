export const site = {
  name: 'CardioCare',
  tagline: 'AI-Powered Home Cardiac Rehab',
  description:
    'CardioCare pairs a Bluetooth EKG kit with on-device AI to deliver personalized, monitored cardiac rehabilitation at home. No insurance delays, no long commutes, no financial stress.',
  email: 'info@cardiocare.fit',
  location: 'Austin, Texas',
  responseTime: '24 to 48 hours',
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
      { label: 'Prototype journey', to: '/platform#prototypes' },
    ],
  },
  {
    heading: 'Evidence',
    links: [
      { label: 'The problem', to: '/impact' },
      { label: 'Clinical validation', to: '/validation' },
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
  { value: 'demo', label: 'Requesting a demo' },
  { value: 'clinical', label: 'Clinical pilot or trial participation' },
  { value: 'partnership', label: 'Partnership opportunities' },
  { value: 'investment', label: 'Investment inquiry' },
  { value: 'other', label: 'Something else' },
]

export const disclaimer =
  'CardioCare is in development and is not yet FDA-approved for clinical use. Information on this website is for educational purposes only and is not medical advice. Always consult a healthcare professional for medical guidance.'
