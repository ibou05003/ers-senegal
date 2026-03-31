import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { SAMPLE_ARTICLES } from '@/lib/constants'
import { ArrowLeft } from 'lucide-react'

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params
  const t = useTranslations('news')

  const article = SAMPLE_ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="section-padding pt-32">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-2xl font-bold">Article non trouvé</h1>
        </div>
      </section>
    )
  }

  const title = locale === 'fr' ? article.titleFr : article.titleEn
  const excerpt = locale === 'fr' ? article.excerptFr : article.excerptEn

  return (
    <>
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 lg:px-8">
          <Link
            href={`/${locale}/actualites`}
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToNews')}
          </Link>
          <h1 className="max-w-3xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white">
              {article.category === 'press'
                ? t('categoryPress')
                : article.category === 'case-study'
                  ? t('categoryCaseStudy')
                  : t('categoryInsight')}
            </span>
            <span className="text-sm text-white/70">
              {t('publishedOn')}{' '}
              {new Date(article.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mx-auto max-w-3xl">
            <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={article.image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-700">{excerpt}</p>
              <p className="text-gray-600">
                {locale === 'fr'
                  ? 'Le contenu complet de cet article sera disponible prochainement via le CMS. Cet espace sera alimenté par l\'équipe communication d\'ERS SA.'
                  : 'The full content of this article will be available soon through the CMS. This space will be managed by the ERS SA communications team.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
