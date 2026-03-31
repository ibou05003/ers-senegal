import { useTranslations } from 'next-intl'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Lightbulb, Award, Heart, Shield } from 'lucide-react'

export default function MissionPage() {
  const t = useTranslations('about')

  const values = [
    { icon: Lightbulb, title: t('valueInnovation'), desc: t('valueInnovationDesc') },
    { icon: Award, title: t('valueExcellence'), desc: t('valueExcellenceDesc') },
    { icon: Heart, title: t('valueEngagement'), desc: t('valueEngagementDesc') },
    { icon: Shield, title: t('valueIntegrity'), desc: t('valueIntegrityDesc') },
  ]

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('missionTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t('missionSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border-l-4 border-ers-green-600 bg-ers-green-50 p-8">
                <h2 className="mb-4 text-2xl font-bold text-ers-green-900">Mission</h2>
                <p className="text-lg leading-relaxed text-gray-700">{t('mission')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border-l-4 border-ers-orange-500 bg-ers-orange-50 p-8">
                <h2 className="mb-4 text-2xl font-bold text-ers-orange-800">Vision</h2>
                <p className="text-lg leading-relaxed text-gray-700">{t('vision')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto">
          <SectionTitle title={t('values')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-ers-green-50 text-ers-green-700">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
