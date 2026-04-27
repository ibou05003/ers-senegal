import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import SectionTitle from '@/components/ui/SectionTitle'
import InteractiveMap from '@/components/projects/InteractiveMap'
import ProjectCard from '@/components/projects/ProjectCard'
import { AllProjectsStructuredData } from '@/components/seo/StructuredData'
import { PROJECTS } from '@/lib/constants'
import PageHero from '@/components/ui/PageHero'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'projects' })
  return {
    title: t('title'),
    description: t('subtitle'),
    keywords: ['projets ERS', 'centrales Sénégal', 'Kahone', 'Niakhar', 'Notto', 'Cap des Biches', 'Teranga'],
    alternates: {
      canonical: `https://er-senegal.com/${locale}/projets`,
      languages: {
        'fr-SN': 'https://er-senegal.com/fr/projets',
        en: 'https://er-senegal.com/en/projets',
      },
    },
  }
}

const TITLE_KEYS: Record<string, string> = {
  kahone: 'kahoneTitle',
  niakhar: 'niakharTitle',
  notto: 'nottoTitle',
  'cap-des-biches': 'capDesBichesTitle',
}

export default function ProjectsPage() {
  const t = useTranslations('projects')

  return (
    <>
      <AllProjectsStructuredData />
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/projects/kahone-galerie-1.jpg"
      />

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-gray-700">{t('intro')}</p>
          </div>
          <SectionTitle title={t('mapTitle')} />
          <InteractiveMap />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {PROJECTS.map((project, i) => (
              
                <ProjectCard
                  id={project.id}
                  name={t(TITLE_KEYS[project.id] as 'kahoneTitle')}
                  location={project.location}
                  capacity={project.capacity}
                  status={project.status}
                  image={project.image}
                />
              
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
