import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { PageStructuredData } from '@/components/seo/StructuredData'
import { MapPin, Zap, Battery, Calendar } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'

const HERO = '/images/projects/niakhar-panneaux-perspective.jpg'
const SECONDARY = '/images/projects/niakhar-vue-aerienne.jpg'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects' })
  const title = t('niakharTitle')
  const description = `${t('niakharDesc').slice(0, 150)}…`
  return {
    title,
    description,
    keywords: ['Teranga Niakhar', 'solaire Sénégal', 'BESS', 'stockage batteries', 'Fatick', '30 MWc'],
    alternates: {
      canonical: `https://er-senegal.com/${locale}/projets/niakhar`,
      languages: {
        'fr-SN': 'https://er-senegal.com/fr/projets/niakhar',
        en: 'https://er-senegal.com/en/projets/niakhar',
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: HERO, width: 1200, height: 630, alt: title }],
    },
  }
}

export default function NiakharPage() {
  const t = useTranslations('projects')
  const project = PROJECTS.find((p) => p.id === 'niakhar')!

  const details = [
    { icon: MapPin, label: t('location'), value: t('niakharLocation') },
    { icon: Zap, label: t('capacity'), value: t('niakharCapacitySolar') },
    { icon: Battery, label: 'Stockage BESS', value: t('niakharCapacityStorage') },
    { icon: Calendar, label: t('status'), value: t('niakharStatus') },
  ]

  return (
    <>
      <PageStructuredData
        type="project"
        data={{
          id: project.id,
          name: t('niakharTitle'),
          description: t('niakharDesc'),
          location: t('niakharLocation'),
          coordinates: project.coordinates,
          status: t('niakharStatus'),
          technology: t('niakharTechnology'),
          capacity: t('niakharCapacitySolar'),
        }}
      />
      <section className="relative pb-24 pt-36 md:pb-28 md:pt-40">
        <Image
          src={HERO}
          alt={t('niakharTitle')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ers-blue-900/75" />
        <div className="container-wide relative mx-auto px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-ers-gold-600 px-4 py-1 text-sm font-semibold text-white">
            {t('niakharStatus')}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('niakharTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('niakharLocation')}
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={SECONDARY}
                  alt={`${t('niakharTitle')} — vue aérienne du site`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            
            
              <h2 className="text-2xl font-bold text-gray-900">{t('niakharTitle')}</h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-ers-gold-500" />
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {t('niakharDesc')}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {t('niakharDesc2')}
              </p>
              <div className="mt-6 rounded-xl bg-ers-gold-50 p-5 border-l-4 border-ers-gold-500">
                <p className="text-sm leading-relaxed text-gray-700">
                  {t('niakharInnovation')}
                </p>
              </div>
            
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            {t('impact')} ({t('niakharStatus').toLowerCase()})
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedCounter end={27000} label={t('kahoneImpactCo2')} />
            <AnimatedCounter end={240000} label={t('kahoneImpactHomes')} />
            <AnimatedCounter end={250} label={t('kahoneImpactJobs')} suffix="+" />
          </div>
        </div>
      </section>
    </>
  )
}
