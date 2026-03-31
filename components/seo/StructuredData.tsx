import { ERS_INFO } from '@/lib/constants'

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ERS_INFO.name,
    alternateName: ERS_INFO.shortName,
    url: 'https://er-senegal.com',
    logo: 'https://er-senegal.com/images/logo.png',
    description: ERS_INFO.slogan,
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ERS_INFO.address,
      addressLocality: 'Dakar',
      addressCountry: 'SN',
    },
    contactPoint: ERS_INFO.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
    })),
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
