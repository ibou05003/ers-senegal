import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { PageStructuredData } from '@/components/seo/StructuredData'
import { MapPin, Wind, Calendar, Users } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'

const HERO = '/images/projects/notto-paysage-eolien.jpg'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects' })
  const title = t('nottoTitle')
  const description = `${t('nottoDesc').slice(0, 150)}…`
  return {
    title,
    description,
    keywords: ['Teranga Notto', 'éolien Sénégal', 'wind Senegal', 'énergie renouvelable'],
    alternates: {
      canonical: `https://er-senegal.com/${locale}/projets/notto`,
      languages: {
        'fr-SN': 'https://er-senegal.com/fr/projets/notto',
        en: 'https://er-senegal.com/en/projets/notto',
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: HERO, width: 1200, height: 630, alt: title }],
    },
  }
}

export default function NottoPage() {
  const t = useTranslations('projects')
  const project = PROJECTS.find((p) => p.id === 'notto')!

  const details = [
    { icon: MapPin, label: t('location'), value: t('nottoLocation') },
    { icon: Wind, label: t('technology'), value: t('nottoTechnology') },
    { icon: Calendar, label: t('status'), value: t('nottoStatus') },
    { icon: Users, label: t('partner'), value: 'ERS SA' },
  ]

  return (
    <>
      <PageStructuredData
        type="project"
        data={{
          id: project.id,
          name: t('nottoTitle'),
          description: t('nottoDesc'),
          location: t('nottoLocation'),
          coordinates: project.coordinates,
          status: t('nottoStatus'),
          technology: t('nottoTechnology'),
          capacity: t('nottoCapacity'),
        }}
      />
      <section className="relative pb-24 pt-36 md:pb-28 md:pt-40">
        <Image
          src={HERO}
          alt={t('nottoTitle')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ers-blue-900/80" />
        <div className="container-wide relative mx-auto px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-ers-gold-600 px-4 py-1 text-sm font-semibold text-white">
            {t('nottoStatus')}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('nottoTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('nottoLocation')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d, i) => (
              
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  <d.icon className="mb-2 h-5 w-5 text-ers-gold-600" />
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {d.label}
                  </div>
                  <div className="mt-1 font-semibold text-gray-900">{d.value}</div>
                </div>
              
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto">
          <div className="mx-auto max-w-3xl">
            
              <h2 className="text-2xl font-bold text-gray-900">{t('nottoTitle')}</h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-ers-gold-500" />
              <p className="mt-6 text-lg leading-relaxed text-gray-700">{t('nottoDesc')}</p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">{t('nottoDesc2')}</p>
              <div className="mt-8 rounded-xl bg-ers-blue-50 p-5 border-l-4 border-ers-blue-500">
                <p className="text-xs uppercase tracking-[0.2em] text-ers-blue-700">
                  Phase actuelle
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Travaux en cours. La capacité installée et le calendrier précis de mise en service seront communiqués prochainement.
                </p>
              </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
