'use client'

import { useTranslations, useLocale } from 'next-intl'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ArticleCard from '@/components/blog/ArticleCard'
import { SAMPLE_ARTICLES } from '@/lib/constants'

export default function LatestNews() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <SectionTitle title={t('newsTitle')} />
        <div className="grid gap-8 md:grid-cols-3">
          {SAMPLE_ARTICLES.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.1}>
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={`/${locale}/actualites`} variant="outline">
            {t('newsCta')}
          </Button>
        </div>
      </div>
    </section>
  )
}
