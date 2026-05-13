import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/ui/PageHero'
import TeamGrid from '@/components/about/TeamGrid'
import { PageStructuredData } from '@/components/seo/StructuredData'
import { TEAM_MEMBERS } from '@/lib/constants'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: t('teamTitle'),
    description: t('teamSubtitle'),
    keywords: ['équipe ERS', 'team Energy Resources Senegal', "chef d'exploitation", 'Sabaly'],
    alternates: {
      canonical: `https://er-senegal.com/${locale}/a-propos/equipe`,
      languages: {
        'fr-SN': 'https://er-senegal.com/fr/a-propos/equipe',
        en: 'https://er-senegal.com/en/a-propos/equipe',
      },
    },
  }
}

export default function TeamPage() {
  const t = useTranslations('about')
  const sabaly = TEAM_MEMBERS[0]

  return (
    <>
      <PageStructuredData
        type="person"
        data={{
          name: sabaly.name,
          jobTitle: sabaly.role,
          image: `https://er-senegal.com${sabaly.image}`,
        }}
      />
      <PageHero
        title={t('teamTitle')}
        subtitle={t('teamSubtitle')}
        image="/images/team/equipe-trio-centrale.jpg"
      />

      <section className="section-padding py-20 md:py-28">
        <div className="container-wide mx-auto">
          <TeamGrid />
        </div>
      </section>
    </>
  )
}
