import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { MapPin, Zap, Calendar, Users } from 'lucide-react'

export default function KahonePage() {
  const t = useTranslations('projects')

  const details = [
    { icon: MapPin, label: t('location'), value: t('kahoneLocation') },
    { icon: Zap, label: t('capacity'), value: t('kahoneCapacity') },
    { icon: Calendar, label: t('status'), value: t('kahoneStatus') },
    { icon: Users, label: t('partner'), value: t('kahonePartner') },
  ]

  return (
    <>
      <section className="relative pb-24 pt-36 md:pb-28 md:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/kahone-solar.jpg')" }}
        />
        <div className="absolute inset-0 bg-ers-blue-900/75" />
        <div className="container-wide relative mx-auto px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-ers-blue-600 px-4 py-1 text-sm font-semibold text-white">
            {t('kahoneStatus')}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('kahoneTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('kahoneLocation')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d, i) => (
              <ScrollReveal key={d.label} delay={i * 0.1}>
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  <d.icon className="mb-2 h-5 w-5 text-ers-blue-600" />
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {d.label}
                  </div>
                  <div className="mt-1 font-semibold text-gray-900">{d.value}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="/images/kahone-solar.jpg"
                  alt={t('kahoneTitle')}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-2xl font-bold text-gray-900">{t('kahoneTitle')}</h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-ers-gold-500" />
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {t('kahoneDesc')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            {t('impact')}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedCounter end={18000} label={t('kahoneImpactCo2')} />
            <AnimatedCounter end={160000} label={t('kahoneImpactHomes')} />
            <AnimatedCounter end={150} label={t('kahoneImpactJobs')} suffix="+" />
          </div>
        </div>
      </section>
    </>
  )
}
