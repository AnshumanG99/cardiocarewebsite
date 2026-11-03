import demo from '../assets/CardioCareDemonstration.mp4'
import { cn } from '../lib/cn'

/** The app demo video inside a phone bezel. */
export default function PhoneFrame({ className }) {
  return (
    <div className={cn('w-[240px] sm:w-[280px]', className)}>
      <div className="relative aspect-[9/20] overflow-hidden rounded-[2.6rem] border-[8px] border-ink-950 bg-ink-950 shadow-phone">
        <video
          src={demo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label="Demonstration of the CardioCare app guiding a rehab session"
        />
        <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-950" aria-hidden="true" />
      </div>
    </div>
  )
}
