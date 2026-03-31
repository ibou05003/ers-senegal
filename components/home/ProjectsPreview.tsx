'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { PROJECTS } from '@/lib/constants'

export default function ProjectsPreview() {
  const t = useTranslations('home')
  const p = useTranslations('projects')
  const common = useTranslations('common')
  const locale = useLocale()

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <SectionTitle title={t('projectsTitle')} subtitle={t('projectsSubtitle')} />

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/images/${project.id}-solar.jpg`}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${
                        project.status === 'operational'
                          ? 'bg-ers-blue-600'
                          : 'bg-ers-gold-600'
                      }`}
                    >
                      {project.status === 'operational'
                        ? common('operational')
                        : common('inDevelopment')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {project.id === 'kahone' ? p('kahoneTitle') : p('niakharTitle')}
                  </h3>
                  <p className="mb-1 text-sm text-gray-500">{project.location}</p>
                  <p className="mb-4 text-sm font-semibold text-ers-blue-700">
                    {project.capacity}
                  </p>
                  <Button
                    href={`/${locale}/projets/${project.id}`}
                    variant="outline"
                    size="sm"
                  >
                    {common('seeProject')}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
