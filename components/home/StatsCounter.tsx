'use client'

import { useTranslations } from 'next-intl'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
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
    <section className="py-24 md:py-32">
      <div className="container-wide mx-auto">
        <SectionTitle
          title={t('statsTitle')}
          subtitle={t('statsSubtitle')}
        />

        <div className="mt-16 flex flex-wrap items-baseline justify-center gap-x-16 gap-y-14 px-4 lg:gap-x-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="flex w-[260px] flex-col items-center text-center">
                <div className="tabular-nums text-6xl font-medium tracking-tight text-gray-900 md:text-7xl lg:text-8xl" style={{ fontFeatureSettings: '"tnum"' }}>
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} label="" className="!text-inherit" />
                </div>
                <div className="mt-4 text-base font-normal leading-snug text-gray-500">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
