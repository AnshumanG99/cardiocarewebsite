import prototype1 from '../assets/cardiocareprototype1.jpg'
import prototype2 from '../assets/cardiocareprototype2.jpg'
import prototype3 from '../assets/cardiocareprototype3.jpg'

export const prototypes = [
  {
    version: 'V0',
    period: 'May 2024 to Oct 2024',
    title: 'Proof of concept',
    body: 'ECG paired with a RandomForest model for active cardiac stress screening.',
    image: prototype1,
    alt: 'V0 prototype: an Arduino board wired to a set of ECG electrodes',
  },
  {
    version: 'V1',
    period: 'Nov 2024 to Mar 2025',
    title: 'Handheld device and app',
    body: 'Hand-held casing, battery, and a mobile app with 20+ hours of monitoring, running TensorFlow Lite deep learning.',
    image: prototype2,
    alt: 'V1 prototype: the blue handheld casing with its ECG lead set',
  },
  {
    version: 'V2',
    period: 'May 2025 to present',
    title: 'Multimodal screening',
    body: 'ECG and EMG multimodal screening, reaching 99% accuracy in rehab programming.',
    image: prototype3,
    alt: 'V2 prototype: the white wearable device with its ECG lead set',
  },
]
