export const steps = [
  {
    title: 'Scan at home',
    body: 'Put on the kit and open the app. It records your ECG in seconds.',
    detail:
      'The kit is a small wearable with three ECG leads. It connects to your phone over Bluetooth, and the battery lasts more than 20 hours, so you can wear it through a whole session.',
    mock: 'scan',
  },
  {
    title: 'A program built from your scan',
    body: 'The app reads your ECG and writes a rehab program around it. As you get fitter, the program changes with you.',
    detail:
      'We trained a model on ECG and EMG signals to classify cardiac stress. The app uses it to set your starting intensity and plan each week. In our testing, its rehab programming was 99% accurate.',
    mock: 'plan',
  },
  {
    title: 'Monitoring while you exercise',
    body: 'During each session the app tracks your heart, tells you when to push and when to ease off, and alerts you if something looks wrong.',
    detail:
      'It watches your heart rate and the stress signal from the ECG the whole time. A reading outside the safe range triggers an alert right away, not after the session.',
    mock: 'session',
  },
]

export const features = [
  {
    title: 'ECG and EMG together',
    body: 'The wearable records both, so the model sees the heart and the muscles doing the work.',
  },
  {
    title: 'The model runs on your phone',
    body: 'Inference runs with TensorFlow Lite on the phone itself. There is no server in the loop.',
  },
  {
    title: 'Alerts as they happen',
    body: 'If a reading leaves the safe range, the app tells you immediately.',
  },
  {
    title: 'Nothing leaves your phone',
    body: 'Your ECG is processed and stored on the device. It is never uploaded.',
  },
]

export const privacyFacts = [
  { title: 'Runs on the phone', body: 'The model does its work on your device, not on a server.' },
  { title: 'Nothing uploaded', body: 'Your ECG never leaves the phone, so there is no cloud copy to protect.' },
  { title: 'Built to HIPAA standards', body: 'Storage and processing are designed to meet HIPAA requirements.' },
]

export const specs = [
  { label: 'Signals', value: 'ECG and EMG' },
  { label: 'Model', value: 'TensorFlow Lite, on device' },
  { label: 'Connection', value: 'Bluetooth' },
  { label: 'Battery', value: 'More than 20 hours' },
  { label: 'Programming accuracy', value: '99% in our testing' },
  { label: 'Data', value: 'Stored on the phone only' },
]
