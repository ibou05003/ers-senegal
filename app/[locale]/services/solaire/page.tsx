import { useTranslations, useLocale } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { Sun, Zap, TrendingUp, Globe } from 'lucide-react'

export default function SolarPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const advantages = [
    { icon: Sun, text: '300+ jours de soleil par an au Sénégal' },
    { icon: Zap, text: 'Irradiation moyenne de 5,5 kWh/m²/jour' },
    { icon: TrendingUp, text: 'Coût en baisse constante' },
    { icon: Globe, text: 'Contribution aux ODD' },
  ]

  return (
    <>
      <PageHero title={t('solarTitle')} subtitle={t('solarSubtitle')} image="/images/solar-panels.jpg" />

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/solar-panels.jpg"
                  alt="Panneaux solaires"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-lg leading-relaxed text-gray-700">{t('solarDesc')}</p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {t('solarAdvantages')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {advantages.map((a) => (
                  <div key={a.text} className="flex items-start gap-3">
                    <a.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-ers-blue-600" />
                    <span className="text-sm text-gray-700">{a.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href={`/${locale}/projets/kahone`} variant="primary">
                  {t('seeKahone')}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
