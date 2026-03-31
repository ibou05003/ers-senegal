import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Users, GraduationCap } from 'lucide-react'

export default function DiversityPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('diversityTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t('diversitySubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Users className="mb-4 h-8 w-8 text-ers-orange-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {t('diversityWomen')}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t('diversityWomenDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <GraduationCap className="mb-4 h-8 w-8 text-ers-orange-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {t('diversityYouth')}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t('diversityYouthDesc')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
