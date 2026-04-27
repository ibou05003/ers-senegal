import type { Metadata } from 'next'
import { useTranslations, useLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/ui/PageHero'
import ServiceRow from '@/components/services/ServiceRow'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  return {
    title: t('title'),
    description: t('intro'),
    keywords: ['services énergie', 'développement projets', 'construction centrales', 'O&M', 'exploitation', 'IPP Sénégal'],
    alternates: {
      canonical: `https://er-senegal.com/${locale}/services`,
      languages: {
        'fr-SN': 'https://er-senegal.com/fr/services',
        en: 'https://er-senegal.com/en/services',
      },
    },
  }
}

export default function ServicesPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const services = [
    { num: '01', titleKey: 'developmentTitle', descKey: 'developmentDesc', slug: 'developpement' },
    { num: '02', titleKey: 'constructionTitle', descKey: 'constructionDesc', slug: 'construction' },
    { num: '03', titleKey: 'operationTitle', descKey: 'operationDesc', slug: 'exploitation' },
    { num: '04', titleKey: 'productionTitle', descKey: 'productionDesc', slug: 'production' },
    { num: '05', titleKey: 'maintenanceTitle', descKey: 'maintenanceDesc', slug: 'maintenance' },
  ] as const

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/hero/kahone-paysage-large.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl">
            <p className="font-serif text-xl italic leading-relaxed text-gray-700 md:text-2xl">
              {t('intro')}
            </p>
          </div>

          <div className="border-t border-gray-200">
            {services.map((s, i) => (
              <ServiceRow
                key={s.slug}
                number={s.num}
                title={t(s.titleKey)}
                description={t(s.descKey)}
                href={`/${locale}/services/${s.slug}`}
                cta={t('learnMore')}
                isLast={i === services.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
