import { useTranslations, useLocale } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { Wrench, ShieldAlert, BarChart3, Boxes, RefreshCw, Clock, ClipboardList, MapPin } from 'lucide-react'

export default function MaintenancePage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const bullets = [
    { icon: ShieldAlert, text: t('maintenanceBullet1') },
    { icon: BarChart3, text: t('maintenanceBullet2') },
    { icon: Boxes, text: t('maintenanceBullet3') },
    { icon: RefreshCw, text: t('maintenanceBullet4') },
  ]

  const atouts = [
    { icon: Clock, title: t('maintenanceAtout1Title'), desc: t('maintenanceAtout1Desc') },
    { icon: ClipboardList, title: t('maintenanceAtout2Title'), desc: t('maintenanceAtout2Desc') },
    { icon: MapPin, title: t('maintenanceAtout3Title'), desc: t('maintenanceAtout3Desc') },
  ]

  return (
    <>
      <PageHero
        title={t('maintenanceTitle')}
        subtitle={t('maintenanceSubtitle')}
        image="/images/services/maintenance-equipe-salle-controle.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/services/maintenance-equipe-salle-controle.jpg"
                alt="Équipe ERS en salle de contrôle assurant la maintenance d'une centrale"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ers-blue-50 text-ers-blue-700">
                <Wrench className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">{t('maintenanceDesc')}</p>
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

      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-gray-500">
            {t('maintenanceAtoutTitle')}
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {atouts.map((a) => (
              <div key={a.title}>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-ers-gold-600 shadow-sm">
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl tracking-tight text-gray-900 md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-gray-700">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
