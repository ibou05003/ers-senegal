import { useTranslations } from 'next-intl'
import TeamGrid from '@/components/about/TeamGrid'

export default function TeamPage() {
  const t = useTranslations('about')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('teamTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t('teamSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <TeamGrid />
        </div>
      </section>
    </>
  )
}
