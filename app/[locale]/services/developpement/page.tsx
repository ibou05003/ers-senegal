import { useTranslations, useLocale } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { Compass, FileSearch, Layers, Users, Banknote } from 'lucide-react'

export default function DevelopmentPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const bullets = [
    { icon: FileSearch, text: t('developmentBullet1') },
    { icon: Layers, text: t('developmentBullet2') },
    { icon: Users, text: t('developmentBullet3') },
    { icon: Banknote, text: t('developmentBullet4') },
  ]

  return (
    <>
      <PageHero
        title={t('developmentTitle')}
        subtitle={t('developmentSubtitle')}
        image="/images/services/developpement-equipe-corporate.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/developpement-equipe-corporate.jpg"
                  alt="Équipe ERS en réunion sur le développement de projets énergétiques"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            
            
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ers-blue-50 text-ers-blue-700">
                <Compass className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">{t('developmentDesc')}</p>
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
