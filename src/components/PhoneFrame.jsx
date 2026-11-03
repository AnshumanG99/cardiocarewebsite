import demo from '../assets/CardioCareDemonstration.mp4'
import { cn } from '../lib/cn'

/** The app demo video inside a phone bezel. */
export default function PhoneFrame({ className }) {
  return (
    <div className={cn('w-[260px]', className)}>
      <div className="relative aspect-[9/20] overflow-hidden rounded-[2.75rem] border-[8px] border-[#1a2452] bg-[#1a2452] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_40px_80px_-30px_rgba(0,0,0,0.8)]">
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
        <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-[#1a2452]" aria-hidden="true" />
      </div>
    </div>
  )
}
