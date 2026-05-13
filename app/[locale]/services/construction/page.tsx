import { useTranslations, useLocale } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ServiceTable from '@/components/services/ServiceTable'
import { HardHat, Cog, Briefcase, ClipboardCheck, Power, Check } from 'lucide-react'

export default function ConstructionPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const bullets = [
    { icon: Cog, text: t('constructionBullet1') },
    { icon: Briefcase, text: t('constructionBullet2') },
    { icon: ClipboardCheck, text: t('constructionBullet3') },
    { icon: Power, text: t('constructionBullet4') },
  ]

  const types = [
    { title: t('constructionType1Title'), description: t('constructionType1Desc') },
    { title: t('constructionType2Title'), description: t('constructionType2Desc') },
    { title: t('constructionType3Title'), description: t('constructionType3Desc') },
    { title: t('constructionType4Title'), description: t('constructionType4Desc') },
  ]

  const localPoints = [
    t('constructionLocal1'),
    t('constructionLocal2'),
    t('constructionLocal3'),
    t('constructionLocal4'),
  ]

  return (
    <>
      <PageHero
        title={t('constructionTitle')}
        subtitle={t('constructionSubtitle')}
        image="/images/services/construction-panneaux-installation.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/services/construction-panneaux-installation.jpg"
                alt="Construction et installation de panneaux solaires sur un site ERS"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ers-blue-50 text-ers-blue-700">
                <HardHat className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">{t('constructionDesc')}</p>
              <ul className="mt-8 space-y-3">
                {bullets.map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <b.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-ers-blue-600" />
                    <span className="text-gray-700">{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`/${locale}/projets`} variant="primary">
                  {t('seeProjects')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceTable title={t('constructionTypeTitle')} rows={types} />

      <section className="bg-white py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight text-gray-900 md:text-4xl">
              {t('constructionLocalTitle')}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-ers-gold-500" />
            <p className="mt-8 text-lg font-light leading-relaxed text-gray-700">
              {t('constructionLocalIntro')}
            </p>
            <ul className="mt-8 space-y-4">
              {localPoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-ers-gold-600" />
                  <span className="text-base font-light leading-relaxed text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg font-light leading-relaxed text-gray-700">
              {t('constructionLocalOutro')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
