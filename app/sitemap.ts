import type { MetadataRoute } from 'next'
import { PROJECTS, SAMPLE_ARTICLES } from '@/lib/constants'

const SITE_URL = 'https://er-senegal.com'
const LOCALES = ['fr', 'en'] as const

const STATIC_PATHS = [
  '',
  'a-propos',
  'a-propos/histoire',
  'a-propos/mission',
  'a-propos/equipe',
  'a-propos/partenaires',
  'services',
  'services/developpement',
  'services/construction',
  'services/exploitation',
  'services/production',
  'services/maintenance',
  'projets',
  'engagements',
  'engagements/communautes',
  'engagements/environnement',
  'engagements/diversite',
  'engagements/securite',
  'actualites',
  'carrieres',
  'contact',
  'mentions-legales',
  'confidentialite',
  'cookies',
  'code-de-conduite',
  'anti-corruption',
  'lanceur-alerte',
]

function buildUrl(locale: string, path: string): string {
  const suffix = path ? `/${path}` : ''
  return `${SITE_URL}/${locale}${suffix}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = PROJECTS.map((p) => `projets/${p.id}`)
  const articlePaths = SAMPLE_ARTICLES.map((a) => `actualites/${a.slug}`)
  const allPaths = [...STATIC_PATHS, ...projectPaths, ...articlePaths]

  const now = new Date()

  return allPaths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: buildUrl(locale, path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : path.startsWith('projets/') ? 0.8 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, buildUrl(l, path)]),
        ),
      },
    })),
  )
}
