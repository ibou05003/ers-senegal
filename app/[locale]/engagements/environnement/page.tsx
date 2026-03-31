import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Leaf, TreePine } from 'lucide-react'

export default function EnvironmentPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('environmentTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t('environmentSubtitle')}
          </p>
        </div>
      </section>

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
                <Leaf className="mb-4 h-8 w-8 text-ers-green-600" />
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
                <TreePine className="mb-4 h-8 w-8 text-ers-green-600" />
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
