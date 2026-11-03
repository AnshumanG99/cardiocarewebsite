import { cn } from '../lib/cn'

/** One glass strip with the numbers divided by hairlines. */
export default function Stats({ stats, className }) {
  return (
    <dl className={cn('glass grid grid-cols-2 lg:grid-cols-4', className)}>
      {stats.map((stat, index) => (
        <div
          key={stat.value}
          className={cn(
            'p-6 sm:p-8',
            index % 2 === 1 && 'border-l border-white/10',
            index >= 2 && 'border-t border-white/10 lg:border-t-0',
            index >= 1 && 'lg:border-l',
          )}
        >
          <dd className="text-gradient whitespace-nowrap text-[26px] font-extrabold leading-none tracking-[-0.03em] sm:text-[38px] lg:text-[34px] xl:text-[42px]">
            {stat.value}
          </dd>
          <dt className="mt-3 text-[14px] leading-snug text-white/55">{stat.label}</dt>
        </div>
      ))}
    </dl>
  )
}
