import { useTranslations } from 'next-intl'
import ArticleCard from '@/components/blog/ArticleCard'
import { SAMPLE_ARTICLES } from '@/lib/constants'
import PageHero from '@/components/ui/PageHero'

export default function NewsPage() {
  const t = useTranslations('news')

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} image="/images/news/centrale-soleil.jpg" />

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_ARTICLES.map((article, i) => (
              
                <ArticleCard article={article} />
              
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
