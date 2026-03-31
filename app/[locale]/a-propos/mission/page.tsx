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
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('missionTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('missionSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border-l-4 border-ers-blue-600 bg-ers-blue-50 p-10">
                <h2 className="mb-4 text-3xl font-bold text-ers-blue-900 md:text-4xl">Mission</h2>
                <p className="text-lg leading-relaxed text-gray-700">{t('mission')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border-l-4 border-ers-gold-500 bg-ers-gold-50 p-10">
                <h2 className="mb-4 text-3xl font-bold text-ers-gold-800 md:text-4xl">Vision</h2>
                <p className="text-lg leading-relaxed text-gray-700">{t('vision')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 md:py-28 bg-gray-50">
        <div className="container-wide mx-auto">
          <SectionTitle title={t('values')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-ers-blue-50 text-ers-blue-700">
                    <v.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
