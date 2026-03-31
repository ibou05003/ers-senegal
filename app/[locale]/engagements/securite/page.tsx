import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Shield, BookOpen } from 'lucide-react'

export default function SafetyPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <section className="gradient-green pb-24 pt-36 md:pb-28 md:pt-40">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('safetyTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            {t('safetySubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Shield className="mb-4 h-8 w-8 text-ers-blue-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {t('safetyPolicy')}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t('safetyPolicyDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <BookOpen className="mb-4 h-8 w-8 text-ers-blue-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {t('safetyTraining')}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t('safetyTrainingDesc')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
