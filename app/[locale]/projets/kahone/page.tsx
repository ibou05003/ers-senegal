import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { PageStructuredData } from '@/components/seo/StructuredData'
import { MapPin, Zap, Calendar, Users } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'

const HERO = '/images/projects/kahone-centrale-solaire-aerienne.jpg'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects' })
  const title = t('kahoneTitle')
  const description = `${t('kahoneDesc').slice(0, 150)}…`
  const path = `${locale}/projets/kahone`
  return {
    title,
    description,
    keywords: ['Kahone', 'centrale solaire Sénégal', '20 MWc', 'SENELEC', 'Kaolack', 'photovoltaïque'],
    alternates: {
      canonical: `https://er-senegal.com/${path}`,
      languages: {
        'fr-SN': `https://er-senegal.com/fr/projets/kahone`,
        en: `https://er-senegal.com/en/projets/kahone`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: HERO, width: 1200, height: 630, alt: title }],
    },
  }
}
const SECONDARY = '/images/projects/kahone-vue-panoramique.jpg'
const GALLERY = [
  '/images/projects/kahone-galerie-1.jpg',
  '/images/projects/kahone-galerie-2.jpg',
  '/images/projects/kahone-galerie-3.jpg',
]

export default function KahonePage() {
  const t = useTranslations('projects')
  const project = PROJECTS.find((p) => p.id === 'kahone')!

  const details = [
    { icon: MapPin, label: t('location'), value: t('kahoneLocation') },
    { icon: Zap, label: t('capacity'), value: t('kahoneCapacity') },
    { icon: Calendar, label: t('status'), value: t('kahoneStatus') },
    { icon: Users, label: t('partner'), value: t('kahonePartner') },
  ]

  return (
    <>
      <PageStructuredData
        type="project"
        data={{
          id: project.id,
          name: t('kahoneTitle'),
          description: t('kahoneDesc'),
          location: t('kahoneLocation'),
          coordinates: project.coordinates,
          status: t('kahoneStatus'),
          technology: t('kahoneTechnology'),
          capacity: t('kahoneCapacity'),
        }}
      />
      <section className="relative pb-24 pt-36 md:pb-28 md:pt-40">
        <Image
          src={HERO}
          alt={t('kahoneTitle')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ers-blue-900/75" />
        <div className="container-wide relative mx-auto px-4 text-center lg:px-8">
          <span className="inline-block rounded-full bg-ers-blue-600 px-4 py-1 text-sm font-semibold text-white">
            {t('kahoneStatus')}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('kahoneTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('kahoneLocation')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <d.icon className="mb-2 h-5 w-5 text-ers-blue-600" />
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
                alt={`${t('kahoneTitle')} — vue panoramique aérienne`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t('kahoneTitle')}</h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-ers-gold-500" />
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {t('kahoneDesc')}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {t('kahoneDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            {t('impact')}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedCounter end={18000} label={t('kahoneImpactCo2')} />
            <AnimatedCounter end={160000} label={t('kahoneImpactHomes')} />
            <AnimatedCounter end={150} label={t('kahoneImpactJobs')} suffix="+" />
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{t('gallery')}</p>
            <p className="font-serif text-xs italic text-gray-500">
              © ERS SA · 2024
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
            {GALLERY.map((src, i) => (
              <figure key={src}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${t('kahoneTitle')} — vue ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-serif text-xs italic text-gray-600">
                  {t('kahonePhotoCaption')}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
