import yogesh from '../assets/YogeshDemo.jpg'
import austinHeart from '../assets/validationmeeting.jpg'
import gain from '../assets/validationteampic.jpg'

export const testimonials = [
  {
    quote:
      "CardioCare's platform mirrors the metrics we track in-clinic. Home based cardiac rehab is a much needed step towards recovery, and making it accessible to all is a worthy endeavor.",
    name: 'Dr. Yogesh Agrawal',
    title: 'Interventional Cardiologist',
    org: 'OSF Healthcare, Illinois',
    image: yogesh,
    imageAlt: 'Dr. Yogesh Agrawal on a video call reviewing the CardioCare demo',
  },
  {
    quote:
      'CardioCare is an innovative, and feasible solution which can impact millions. We see this solution bridging the gap between the care in rehabilitation clinics and at-home.',
    name: 'Dr. Vivek Goswami and team',
    title: 'Cardiologists',
    org: 'Austin Heart, Texas',
    image: austinHeart,
    imageAlt: 'The CardioCare founders presenting the kit to a clinical team',
  },
  {
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

export const checks = [
  {
    title: 'The numbers match the clinic',
    body: 'Cardiologists checked that what the app tracks lines up with what they monitor during supervised rehab.',
  },
  {
    title: 'Safety limits',
    body: 'The alert thresholds and intensity guidance were reviewed against how clinicians manage cardiac stress in person.',
  },
  {
    title: 'Easy enough to do at home',
    body: 'We walked through setup, scanning, and a full session with specialists to make sure none of it needs a nurse in the room.',
  },
  {
    title: 'Pilot patients',
    body: 'Pilot patients have used the platform, alongside testing with local cardiac rehab centers.',
  },
]
