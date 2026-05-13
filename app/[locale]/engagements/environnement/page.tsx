import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import CommitmentSection from '@/components/commitments/CommitmentSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function EnvironmentPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <PageHero
        title={t('environmentTitle')}
        subtitle={t('environmentSubtitle')}
        image="/images/engagements/environnement-ampoule-verte.jpg"
      />
      <CommitmentSection
        number="02"
        lead={t('environmentLead')}
        body={[t('environmentBody1'), t('environmentBody2')]}
      />

      <section className="bg-[#FAF7F2] py-24 md:py-32">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <p className="mb-16 text-xs uppercase tracking-[0.3em] text-gray-500">Impact mesuré</p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3">
            <div>
              <div className="font-serif text-5xl tabular-nums tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                <AnimatedCounter end={18000} label="" className="!text-inherit" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                Tonnes CO₂ évitées / an — Kahone
              </p>
            </div>
            <div>
              <div className="font-serif text-5xl tabular-nums tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                <AnimatedCounter end={27000} label="" className="!text-inherit" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                Tonnes CO₂ évitées / an — Niakhar (prévu)
              </p>
            </div>
            <div>
              <div className="font-serif text-5xl tabular-nums tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                <AnimatedCounter end={45000} label="" className="!text-inherit" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                Objectif total CO₂ évitées / an
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
