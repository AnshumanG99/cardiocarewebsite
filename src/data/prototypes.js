import prototype1 from '../assets/cardiocareprototype1.jpg'
import prototype2 from '../assets/cardiocareprototype2.jpg'
import prototype3 from '../assets/cardiocareprototype3.jpg'

export const prototypes = [
  {
    version: 'V0',
    period: 'May to Oct 2024',
    title: 'Proof of concept',
    body: 'An Arduino board, ECG electrodes, and a RandomForest model for screening cardiac stress.',
    image: prototype1,
    alt: 'The V0 prototype: an Arduino board wired to ECG electrodes',
  },
  {
    version: 'V1',
    period: 'Nov 2024 to Mar 2026',
    title: 'First handheld',
    body: 'A handheld case with a battery, and the first version of the app. More than 20 hours of monitoring, running a TensorFlow Lite model.',
    image: prototype2,
    alt: 'The V1 prototype: a blue handheld case with ECG leads',
  },
  {
    version: 'V2',
    period: 'Mar 2026 to present',
    title: 'Current version',
    body: 'Adds EMG alongside ECG. This is the version going into clinical trials.',
    image: prototype3,
    alt: 'The V2 prototype: a white wearable with its ECG lead set',
  },
]
