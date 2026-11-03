import { Activity, BrainCircuit, Gauge, ShieldCheck } from 'lucide-react'

export const steps = [
  {
    number: '01',
    title: 'Scan in seconds',
    body: 'Put on the Bluetooth EKG kit and open the CardioCare app. It records a clinical-quality reading of your heart from wherever you are.',
    mock: 'scan',
  },
  {
    number: '02',
    title: 'Get a plan built for your heart',
    body: "CardioCare's model reads your scan and writes a rehab program around it, then adapts the program as you recover.",
    mock: 'plan',
  },
  {
    number: '03',
    title: 'Train with a safety net',
    body: 'During every session the app tracks cardiac stress, guides you to a safe level of activity, and alerts you the moment something looks off.',
    mock: 'session',
  },
]

export const features = [
  {
    icon: Activity,
    title: 'Hospital-grade signals at home',
    body: 'A custom wearable records ECG and EMG together, so the app sees both the heart and the muscles doing the work.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-personalized programs',
    body: 'Programs are generated from your own readings rather than a one-size-fits-all protocol, and they change as your fitness does.',
  },
  {
    icon: Gauge,
    title: 'Real-time feedback',
    body: 'Live stress monitoring during exercise, with guidance on intensity and immediate alerts when readings leave a safe range.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy by design',
    body: 'Every reading is processed and stored on your phone with on-device AI. Nothing is sent to the cloud, in line with HIPAA standards.',
  },
]

export const specs = [
  { label: 'Signals', value: 'ECG and EMG, multimodal' },
  { label: 'Inference', value: 'On-device with TensorFlow Lite' },
  { label: 'Connectivity', value: 'Bluetooth to the CardioCare app' },
  { label: 'Battery', value: '20+ hours of continuous monitoring' },
  { label: 'Rehab programming', value: '99% accuracy' },
  { label: 'Data residency', value: "Stays on the patient's phone" },
]
