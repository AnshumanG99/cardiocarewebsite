import { Quote } from 'lucide-react'

import { cn } from '../lib/cn'

/** Three quote panels in a row. */
export function QuoteGrid({ items }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item.name} className="glass flex flex-col p-7 sm:p-8">
          <Quote className="h-6 w-6 text-teal-glow" strokeWidth={2} aria-hidden="true" />
          <blockquote className="mt-4 flex-1 text-[17px] leading-[1.55] text-white/85">{item.quote}</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <img src={item.image} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-white/15" />
            <div className="text-[14px] leading-snug">
              <p className="font-bold text-white">{item.name}</p>
              <p className="text-white/55">
                {item.title}, {item.org}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

/** One quote per row with its photo beside it. */
export function QuoteList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <figure key={item.name} className="glass grid overflow-hidden lg:grid-cols-5">
          <div className={cn('min-h-[260px] lg:col-span-2', index % 2 === 1 && 'lg:order-2')}>
            <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-3">
            <Quote className="h-6 w-6 text-teal-glow" strokeWidth={2} aria-hidden="true" />
            <blockquote className="mt-4 text-[20px] font-medium leading-[1.4] tracking-[-0.01em] text-white/90 sm:text-[23px]">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6 text-[15px] leading-snug">
              <p className="font-bold text-white">{item.name}</p>
              <p className="text-white/55">
                {item.title}, {item.org}
              </p>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  )
}
