import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Leaf, TreePine } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function EnvironmentPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <PageHero title={t('environmentTitle')} subtitle={t('environmentSubtitle')} image="/images/renewable-sunset.jpg" />

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <AnimatedCounter end={18000} label="Tonnes CO₂ évitées / an (Kahone)" />
            <AnimatedCounter end={27000} label="Tonnes CO₂ évitées / an (Niakhar - prévu)" />
            <AnimatedCounter end={45000} label="Total CO₂ évitées / an (objectif)" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Leaf className="mb-4 h-8 w-8 text-ers-blue-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {t('environmentCarbon')}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t('environmentCarbonDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <TreePine className="mb-4 h-8 w-8 text-ers-blue-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {t('environmentBiodiversity')}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t('environmentBiodiversityDesc')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
