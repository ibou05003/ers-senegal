import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { Battery, Clock, Zap, Shield } from 'lucide-react'

export default function StoragePage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const features = [
    { icon: Battery, text: '15 MW / 45 MWh de capacité de stockage' },
    { icon: Clock, text: 'Fourniture d\'énergie au-delà des heures d\'ensoleillement' },
    { icon: Zap, text: 'Stabilisation du réseau électrique' },
    { icon: Shield, text: 'Réduction de la dépendance aux énergies fossiles' },
  ]

  return (
    <>
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('storageTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('storageSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/battery-storage.jpg"
                  alt="Stockage par batteries"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-lg leading-relaxed text-gray-700">{t('storageDesc')}</p>
              <div className="mt-8 space-y-4">
                {features.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-ers-blue-50">
                      <f.icon className="h-4 w-4 text-ers-blue-700" />
                    </div>
                    <span className="text-gray-700">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href={`/${locale}/projets/niakhar`} variant="primary">
                  Voir le projet Teranga Niakhar
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
