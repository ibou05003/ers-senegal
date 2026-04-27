import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Timeline from '@/components/about/Timeline'

export default function HistoryPage() {
  const t = useTranslations('about')

  return (
    <>
      <PageHero
        title={t('historyTitle')}
        subtitle={t('historySubtitle')}
        image="/images/about/histoire-kahone-paysage.jpg"
      />

      <section className="section-padding py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="mx-auto mb-16 max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            <p>{t('historyIntro')}</p>
            <p>{t('historyParagraph2')}</p>
            <p>{t('historyParagraph3')}</p>
          </div>
          <Timeline />
        </div>
      </section>
    </>
  )
}
