import { useTranslations } from 'next-intl'
import SectionTitle from '@/components/ui/SectionTitle'
import InteractiveMap from '@/components/projects/InteractiveMap'
import ProjectCard from '@/components/projects/ProjectCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { PROJECTS } from '@/lib/constants'

export default function ProjectsPage() {
  const t = useTranslations('projects')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{t('subtitle')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionTitle title={t('mapTitle')} />
          <InteractiveMap />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.15}>
                <ProjectCard
                  id={project.id}
                  name={project.id === 'kahone' ? t('kahoneTitle') : t('niakharTitle')}
                  location={project.location}
                  capacity={project.capacity}
                  status={project.status === 'operational' ? 'operational' : 'development'}
                  image={`/images/${project.id}-solar.jpg`}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
