import { ERS_INFO, PROJECTS } from '@/lib/constants'

const SITE_URL = 'https://er-senegal.com'

interface ProjectSchemaProps {
  type: 'project'
  data: {
    id: string
    name: string
    description: string
    location: string
    coordinates: { lat: number; lng: number }
    status: string
    technology: string
    capacity: string
  }
}

interface PersonSchemaProps {
  type: 'person'
  data: { name: string; jobTitle: string; image?: string }
}

interface ArticleSchemaProps {
  type: 'article'
  data: { title: string; description: string; date: string; image: string; url: string }
}

interface BreadcrumbSchemaProps {
  type: 'breadcrumb'
  data: { items: { name: string; url: string }[] }
}

type PageStructuredDataProps =
  | ProjectSchemaProps
  | PersonSchemaProps
  | ArticleSchemaProps
  | BreadcrumbSchemaProps

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: ERS_INFO.name,
    alternateName: ERS_INFO.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Energy Resources Sénégal SA — Acteur engagé du développement énergétique au Sénégal et en Afrique de l'Ouest.",
    foundingDate: String(ERS_INFO.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: ERS_INFO.address,
      addressLocality: 'Dakar',
      addressCountry: 'SN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ERS_INFO.coordinates.lat,
      longitude: ERS_INFO.coordinates.lng,
    },
    contactPoint: ERS_INFO.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      availableLanguage: ['fr', 'en'],
    })),
    email: ERS_INFO.emails[0],
    sameAs: [],
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: ERS_INFO.name,
    description:
      "Site officiel d'Energy Resources Sénégal SA — projets d'énergie renouvelable au Sénégal.",
    publisher: { '@id': `${SITE_URL}#organization` },
    inLanguage: ['fr-SN', 'en'],
  }
}

function projectSchema(p: ProjectSchemaProps['data']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: p.name,
    description: p.description,
    location: {
      '@type': 'Place',
      name: p.location,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: p.coordinates.lat,
        longitude: p.coordinates.lng,
      },
    },
    status: p.status,
    additionalType: p.technology,
    funder: { '@id': `${SITE_URL}#organization` },
    url: `${SITE_URL}/fr/projets/${p.id}`,
  }
}

function personSchema(p: PersonSchemaProps['data']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.jobTitle,
    image: p.image,
    worksFor: { '@id': `${SITE_URL}#organization` },
  }
}

function articleSchema(a: ArticleSchemaProps['data']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: a.title,
    description: a.description,
    image: a.image,
    datePublished: a.date,
    publisher: { '@id': `${SITE_URL}#organization` },
    mainEntityOfPage: a.url,
  }
}

function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export default function StructuredData() {
  const baseSchemas = [organizationSchema(), websiteSchema()]
  return (
    <>
      {baseSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export function PageStructuredData(props: PageStructuredDataProps) {
  let schema: object
  switch (props.type) {
    case 'project':
      schema = projectSchema(props.data)
      break
    case 'person':
      schema = personSchema(props.data)
      break
    case 'article':
      schema = articleSchema(props.data)
      break
    case 'breadcrumb':
      schema = breadcrumbSchema(props.data.items)
      break
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Helper to expose all current projects as JSON-LD on the projets index page
export function AllProjectsStructuredData() {
  return (
    <>
      {PROJECTS.map((p) => (
        <script
          key={p.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              projectSchema({
                id: p.id,
                name: p.name,
                description: `${p.name} — ${p.location}, ${p.capacity}`,
                location: p.location,
                coordinates: p.coordinates,
                status: p.status,
                technology: p.technology,
                capacity: p.capacity,
              }),
            ),
          }}
        />
      ))}
    </>
  )
}
