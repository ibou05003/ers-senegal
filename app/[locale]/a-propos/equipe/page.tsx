import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import TeamGrid from '@/components/about/TeamGrid'

export default function TeamPage() {
  const t = useTranslations('about')

  return (
    <>
      <PageHero title={t('teamTitle')} subtitle={t('teamSubtitle')} image="/images/about-preview.jpg" />

      <section className="section-padding py-20 md:py-28">
        <div className="container-wide mx-auto">
          <TeamGrid />
        </div>
      </section>
    </>
  )
}
