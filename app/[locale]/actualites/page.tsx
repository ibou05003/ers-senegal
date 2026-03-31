import { useTranslations } from 'next-intl'
import ArticleCard from '@/components/blog/ArticleCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { SAMPLE_ARTICLES } from '@/lib/constants'

export default function NewsPage() {
  const t = useTranslations('news')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{t('subtitle')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_ARTICLES.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.1}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
