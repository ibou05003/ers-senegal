import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface Article {
  slug: string
  titleFr: string
  titleEn: string
  excerptFr: string
  excerptEn: string
  category: string
  date: string
  image: string
}

export default function ArticleCard({ article }: { article: Article }) {
  const t = useTranslations('news')
  const locale = useLocale()

  const title = locale === 'fr' ? article.titleFr : article.titleEn
  const excerpt = locale === 'fr' ? article.excerptFr : article.excerptEn

  return (
    <Link
      href={`/${locale}/actualites/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-ers-blue-50 px-3 py-1 text-xs font-medium text-ers-blue-800">
            {article.category === 'press'
              ? t('categoryPress')
              : article.category === 'case-study'
                ? t('categoryCaseStudy')
                : article.category === 'insight'
                  ? t('categoryInsight')
                  : t('categoryEvent')}
          </span>
          <span className="text-xs text-gray-400">
            {new Date(article.date).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-ers-blue-700">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {excerpt}
        </p>
        <span className="text-sm font-semibold text-ers-blue-700">
          {t('readMore')} →
        </span>
      </div>
    </Link>
  )
}
