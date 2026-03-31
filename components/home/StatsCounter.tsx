'use client'

import { useTranslations } from 'next-intl'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionTitle from '@/components/ui/SectionTitle'
import { STATS } from '@/lib/constants'

export default function StatsCounter() {
  const t = useTranslations('home')

  const stats = [
    { end: STATS.mwInstalled, label: t('statsMw'), suffix: '+' },
    { end: STATS.co2Avoided, label: t('statsCo2'), suffix: '' },
    { end: STATS.homesPowered, label: t('statsHomes'), suffix: '' },
    { end: STATS.jobsCreated, label: t('statsJobs'), suffix: '+' },
    { end: STATS.yearsExperience, label: t('statsYears'), suffix: '' },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide mx-auto">
        <SectionTitle title={t('statsTitle')} />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
