import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/ui/PageHero'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: t('missionTitle'),
    description: t('mission'),
    alternates: {
      canonical: `https://er-senegal.com/${locale}/a-propos/mission`,
      languages: {
        'fr-SN': 'https://er-senegal.com/fr/a-propos/mission',
        en: 'https://er-senegal.com/en/a-propos/mission',
      },
    },
  }
}

export default function MissionPage() {
  const t = useTranslations('about')

  const values = [
    { num: '01', title: t('valueSouverainete'), desc: t('valueSouveraineteDesc') },
    { num: '02', title: t('valueOuverture'), desc: t('valueOuvertureDesc') },
    { num: '03', title: t('valuePolyvalence'), desc: t('valuePolyvalenceDesc') },
    { num: '04', title: t('valueExpertise'), desc: t('valueExpertiseDesc') },
  ]

  return (
    <>
      <PageHero
        title={t('missionTitle')}
        subtitle={t('missionSubtitle')}
        image="/images/about/baobab-mission.jpg"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Mission</p>
              <p className="mt-6 font-serif text-2xl italic leading-relaxed text-gray-900 md:text-3xl">
                {t('mission')}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Vision</p>
              <p className="mt-6 font-serif text-2xl italic leading-relaxed text-gray-900 md:text-3xl">
                {t('vision')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <p className="mb-16 text-xs uppercase tracking-[0.3em] text-gray-500">
            {t('values')}
          </p>
          <div className="border-t border-gray-300">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`grid items-baseline gap-6 py-10 md:grid-cols-[120px_1fr] md:gap-12 md:py-14 ${
                  i < values.length - 1 ? 'border-b border-gray-300' : ''
                }`}
              >
                <div className="font-serif text-5xl font-light text-gray-300 md:text-6xl lg:text-7xl">
                  {v.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
                    {v.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-gray-600">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
