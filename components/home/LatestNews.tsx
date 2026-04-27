import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import ArticleCard from '@/components/blog/ArticleCard'
import { SAMPLE_ARTICLES } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'

export default function LatestNews() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="container-wide mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              {t('newsTitle')}
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-gray-900 md:text-5xl">
              Dernières actualités
            </h2>
          </div>
          <Link
            href={`/${locale}/actualites`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 underline decoration-1 underline-offset-[6px] hover:text-ers-blue-700"
          >
            {t('newsCta')}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {SAMPLE_ARTICLES.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
