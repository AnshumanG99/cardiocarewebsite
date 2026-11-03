/** A looping ECG trace. Decorative; the parent supplies any text equivalent. */
export default function EcgTrace({ className, stroke = '#0071e3' }) {
  const path =
    'M0 30 H40 L48 30 L54 22 L60 38 L66 30 H96 L102 8 L108 52 L114 30 H150 L156 24 L162 36 L168 30 H200 L208 30 L214 22 L220 38 L226 30 H256 L262 8 L268 52 L274 30 H310 L316 24 L322 36 L328 30 H360'
  return (
    <svg viewBox="0 0 360 60" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path d={path} fill="none" stroke={stroke} strokeOpacity="0.2" strokeWidth="2" strokeLinejoin="round" />
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray="1000"
        className="animate-ecg"
      />
    </svg>
  )
}
