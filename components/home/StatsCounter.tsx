import { useTranslations } from 'next-intl'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'

export default function StatsCounter() {
  const t = useTranslations('home')

  const stats = [
    { end: STATS.mwInstalled, label: t('statsMw'), suffix: '' },
    { end: STATS.co2Avoided, label: t('statsCo2'), suffix: '' },
    { end: STATS.homesPowered, label: t('statsHomes'), suffix: '' },
    { end: STATS.jobsCreated, label: t('statsJobs'), suffix: '+' },
  ]

  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="container-wide mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-x-12 lg:gap-x-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div
                className="font-serif text-5xl tabular-nums tracking-tight text-gray-900 md:text-6xl lg:text-7xl xl:text-8xl"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label=""
                  className="!text-inherit"
                />
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gray-500 md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
