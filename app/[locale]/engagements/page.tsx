import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { ArrowUpRight } from 'lucide-react'

export default function CommitmentsPage() {
  const t = useTranslations('commitments')
  const locale = useLocale()

  const pillars = [
    {
      num: '01',
      title: t('communitiesTitle'),
      desc: t('communitiesSubtitle'),
      href: `/${locale}/engagements/communautes`,
    },
    {
      num: '02',
      title: t('environmentTitle'),
      desc: t('environmentSubtitle'),
      href: `/${locale}/engagements/environnement`,
    },
    {
      num: '03',
      title: t('diversityTitle'),
      desc: t('diversitySubtitle'),
      href: `/${locale}/engagements/diversite`,
    },
    {
      num: '04',
      title: t('safetyTitle'),
      desc: t('safetySubtitle'),
      href: `/${locale}/engagements/securite`,
    },
  ]

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/engagements/index-equipe-terrain.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-serif text-xl italic leading-relaxed text-gray-700 md:text-2xl">
              {t('intro')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="border-t border-gray-200">
            {pillars.map((p, i) => (
              <Link
                key={p.num}
                href={p.href}
                className={`group block py-10 md:py-14 ${
                  i < pillars.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="grid items-baseline gap-6 md:grid-cols-[120px_1fr_auto] md:gap-10">
                  <div className="font-serif text-5xl font-light text-gray-300 md:text-6xl lg:text-7xl">
                    {p.num}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-ers-blue-700 md:text-2xl">
                      {p.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-gray-600">
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors group-hover:text-ers-blue-700 md:self-center">
                    <span className="underline decoration-1 underline-offset-[6px]">
                      Découvrir
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
