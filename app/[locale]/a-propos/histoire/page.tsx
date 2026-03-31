import { useTranslations } from 'next-intl'
import SectionTitle from '@/components/ui/SectionTitle'
import Timeline from '@/components/about/Timeline'

export default function HistoryPage() {
  const t = useTranslations('about')

  return (
    <>
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('historyTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('historySubtitle')}
          </p>
        </div>
      </section>

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
