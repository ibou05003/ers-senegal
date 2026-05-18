import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'

const TITLE_KEYS: Record<string, string> = {
  kahone: 'kahoneTitle',
  niakhar: 'niakharTitle',
  notto: 'nottoTitle',
  'cap-des-biches': 'capDesBichesTitle',
}

export default function ProjectsPreview() {
  const t = useTranslations('home')
  const p = useTranslations('projects')
  const common = useTranslations('common')
  const locale = useLocale()

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              {t('projectsTitle')}
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-gray-900 md:text-5xl">
              {t('projectsSubtitle')}
            </h2>
          </div>
          <Link
            href={`/${locale}/projets`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 underline decoration-1 underline-offset-[6px] hover:text-ers-blue-700"
          >
            {common('viewAll')}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12">
          {PROJECTS.map((project) => {
            const disabled = project.id === 'notto' || project.id === 'cap-des-biches'
            const content = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  {project.image.includes('/logo') ? (
                    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-ers-blue-50 to-ers-blue-100 p-12 ${disabled ? '' : 'transition-transform duration-700 group-hover:scale-[1.03]'}`}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={260}
                        height={240}
                        className="h-auto max-h-48 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`object-cover ${disabled ? '' : 'transition-transform duration-700 group-hover:scale-[1.03]'}`}
                    />
                  )}
                  <div className="absolute left-4 top-4">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white ${
                        project.status === 'operational' ? 'bg-ers-blue-700' : 'bg-ers-gold-700'
                      }`}
                    >
                      {project.status === 'operational'
                        ? common('operational')
                        : common('inDevelopment')}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-xl font-semibold tracking-tight text-gray-900 ${disabled ? '' : 'transition-colors group-hover:text-ers-blue-700'}`}>
                      {p(TITLE_KEYS[project.id] as 'kahoneTitle')}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{project.location}</p>
                    {project.status === 'operational' && (
                      <p className="mt-2 font-serif text-base italic text-ers-blue-700">
                        {project.capacity}
                      </p>
                    )}
                  </div>
                  {!disabled && (
                    <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ers-blue-700" />
                  )}
                </div>
              </>
            )

            if (disabled) {
              return (
                <div key={project.id} className="block cursor-default">
                  {content}
                </div>
              )
            }

            return (
              <Link
                key={project.id}
                href={`/${locale}/projets/${project.id}`}
                className="group block"
              >
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
