import { useTranslations } from 'next-intl'
import SectionTitle from '@/components/ui/SectionTitle'
import Timeline from '@/components/about/Timeline'

export default function HistoryPage() {
  const t = useTranslations('about')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('historyTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t('historySubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            {t('historyIntro')}
          </p>
          <Timeline />
        </div>
      </section>
    </>
  )
}
