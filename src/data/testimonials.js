import yogesh from '../assets/YogeshDemo.jpg'
import austinHeart from '../assets/validationmeeting.jpg'
import gain from '../assets/validationteampic.jpg'

export const testimonials = [
  {
    specialty: 'Interventional cardiology',
    quote:
      "CardioCare's platform mirrors the metrics we track in-clinic. Home based cardiac rehab is a much needed step towards recovery, and making it accessible to all is a worthy endeavor.",
    name: 'Dr. Yogesh Agrawal',
    title: 'Interventional Cardiologist',
    org: 'OSF Healthcare, Illinois',
    image: yogesh,
    imageAlt: 'Dr. Yogesh Agrawal reviewing a CardioCare demo',
  },
  {
    specialty: 'Cardiology',
    quote:
      'CardioCare is an innovative, and feasible solution which can impact millions. We see this solution bridging the gap between the care in rehabilitation clinics and at-home.',
    name: 'Dr. Vivek Goswami and team',
    title: 'Cardiologists',
    org: 'Austin Heart, Texas',
    image: austinHeart,
    imageAlt: 'The CardioCare founders presenting the kit to a clinical team',
  },
  {
    specialty: 'Medical direction',
    quote:
      'We see this as an essential next step. Remote monitoring platforms like CardioCare will redefine outpatient rehabilitation, giving patients confidence in recovery.',
    name: 'Dr. Bharati Kolte',
    title: 'Medical Director and Educator',
    org: 'GAIN Health Clinic, Texas',
    image: gain,
    imageAlt: 'The CardioCare founders with a clinical team after a validation session',
  },
]

export const clinics = [
  { name: 'OSF Healthcare', location: 'Illinois' },
  { name: 'Austin Heart', location: 'Texas' },
  { name: 'GAIN Health Clinic', location: 'Texas' },
]

export const validated = [
  {
    title: 'Metrics that match the clinic',
    body: 'Cardiologists confirmed the measures CardioCare tracks line up with what they monitor during supervised rehab.',
  },
  {
    title: 'Safety thresholds',
    body: 'Alerting and intensity guidance were reviewed against how clinicians manage cardiac stress in person.',
  },
  {
    title: 'Usability for patients',
    body: 'Setup, scanning, and daily sessions were walked through with specialists to keep the experience simple enough for recovery at home.',
  },
  {
    title: 'Pilot patient tested',
    body: 'The platform has been used by pilot patients alongside testing with local cardiac rehabilitation centers.',
  },
]
