import { useTranslations, useLocale } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { Users, Leaf, Heart, Shield } from 'lucide-react'

export default function CommitmentsPage() {
  const t = useTranslations('commitments')
  const locale = useLocale()

  const pillars = [
    {
      icon: Users,
      title: t('communitiesTitle'),
      desc: t('communitiesSubtitle'),
      href: `/${locale}/engagements/communautes`,
    },
    {
      icon: Leaf,
      title: t('environmentTitle'),
      desc: t('environmentSubtitle'),
      href: `/${locale}/engagements/environnement`,
    },
    {
      icon: Heart,
      title: t('diversityTitle'),
      desc: t('diversitySubtitle'),
      href: `/${locale}/engagements/diversite`,
    },
    {
      icon: Shield,
      title: t('safetyTitle'),
      desc: t('safetySubtitle'),
      href: `/${locale}/engagements/securite`,
    },
  ]

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{t('subtitle')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900">{t('approachTitle')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {t('approachDesc')}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ers-green-50 text-ers-green-700">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{p.title}</h3>
                  <p className="mb-6 text-gray-600">{p.desc}</p>
                  <Button href={p.href} variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
