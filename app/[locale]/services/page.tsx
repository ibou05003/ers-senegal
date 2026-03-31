import { useTranslations, useLocale } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/services/ServiceCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ServicesPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const services = [
    {
      title: t('solarTitle'),
      description: t('solarDesc'),
      href: `/${locale}/services/solaire`,
      icon: 'solar' as const,
    },
    {
      title: t('windTitle'),
      description: t('windDesc'),
      href: `/${locale}/services/eolien`,
      icon: 'wind' as const,
    },
    {
      title: t('hybridTitle'),
      description: t('hybridDesc'),
      href: `/${locale}/services/hybride`,
      icon: 'hybrid' as const,
    },
    {
      title: t('storageTitle'),
      description: t('storageDesc'),
      href: `/${locale}/services/stockage`,
      icon: 'storage' as const,
    },
  ]

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/solar-panels.jpg" />

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((s, i) => (
              <ScrollReveal key={s.icon} delay={i * 0.1}>
                <ServiceCard {...s} cta={t('learnMore')} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
