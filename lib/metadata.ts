import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

const SITE_URL = 'https://er-senegal.com'

interface BuildPageMetadataOptions {
  locale: string
  /** Path without leading slash, e.g. "a-propos/histoire" */
  path: string
  /** Translation namespace + key for title (e.g. { ns: 'about', key: 'historyTitle' }) */
  title: { ns: string; key: string }
  /** Translation namespace + key for description (≤155 chars recommended) */
  description: { ns: string; key: string }
  /** Optional OG image (relative to /public) */
  image?: string
  /** Additional keywords for this page */
  keywords?: string[]
}

export async function buildPageMetadata({
  locale,
  path,
  title: titleRef,
  description: descRef,
  image,
  keywords,
}: BuildPageMetadataOptions): Promise<Metadata> {
  const tTitle = await getTranslations({ locale, namespace: titleRef.ns })
  const tDesc = await getTranslations({ locale, namespace: descRef.ns })

  const title = tTitle(titleRef.key as 'title')
  const description = tDesc(descRef.key as 'subtitle')
  const url = `${SITE_URL}/${locale}${path ? `/${path}` : ''}`
  const ogImage = image || '/images/hero/centrale-solaire-aerienne-senegal.jpg'

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        'fr-SN': `${SITE_URL}/fr${path ? `/${path}` : ''}`,
        en: `${SITE_URL}/en${path ? `/${path}` : ''}`,
        'x-default': `${SITE_URL}/fr${path ? `/${path}` : ''}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: locale === 'fr' ? 'fr_SN' : 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
