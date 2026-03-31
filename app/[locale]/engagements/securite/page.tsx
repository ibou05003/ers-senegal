import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Shield, BookOpen } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function SafetyPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <PageHero title={t('safetyTitle')} subtitle={t('safetySubtitle')} image="/images/about-preview.jpg" />

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
