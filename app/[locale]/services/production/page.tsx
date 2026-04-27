import { useTranslations, useLocale } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { Zap, Sun, ShoppingBag, FileText, LineChart } from 'lucide-react'

export default function ProductionPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const bullets = [
    { icon: Sun, text: t('productionBullet1') },
    { icon: ShoppingBag, text: t('productionBullet2') },
    { icon: FileText, text: t('productionBullet3') },
    { icon: LineChart, text: t('productionBullet4') },
  ]

  return (
    <>
      <PageHero
        title={t('productionTitle')}
        subtitle={t('productionSubtitle')}
        image="/images/services/production-vue-aerienne-centrale.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/production-vue-aerienne-centrale.jpg"
                  alt="Vue aérienne d'une centrale solaire ERS produisant de l'électricité au Sénégal"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            
            
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ers-blue-50 text-ers-blue-700">
                <Zap className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">{t('productionDesc')}</p>
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
      </section>
    </>
  )
}
