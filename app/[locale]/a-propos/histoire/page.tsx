import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Timeline from '@/components/about/Timeline'

export default function HistoryPage() {
  const t = useTranslations('about')

  return (
    <>
      <PageHero title={t('historyTitle')} subtitle={t('historySubtitle')} image="/images/about-preview.jpg" />

      <section className="section-padding py-20 md:py-28">
        <div className="container-wide mx-auto">
          <p className="mx-auto mb-20 max-w-3xl text-center text-lg leading-relaxed text-gray-600 md:text-xl">
            {t('historyIntro')}
          </p>
          <Timeline />
        </div>
      </section>
    </>
  )
}
