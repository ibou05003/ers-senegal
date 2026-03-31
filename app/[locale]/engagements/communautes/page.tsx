import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Sprout, HeartPulse, GraduationCap } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export default function CommunitiesPage() {
  const t = useTranslations('commitments')

  const initiatives = [
    {
      icon: Sprout,
      title: t('communitiesAgri'),
      desc: t('communitiesAgriDesc'),
    },
    {
      icon: HeartPulse,
      title: t('communitiesHealth'),
      desc: t('communitiesHealthDesc'),
    },
    {
      icon: GraduationCap,
      title: t('communitiesEducation'),
      desc: t('communitiesEducationDesc'),
    },
  ]

  return (
    <>
      <PageHero title={t('communitiesTitle')} subtitle={t('communitiesSubtitle')} image="/images/community-education.jpg" />

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {initiatives.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-ers-blue-50 text-ers-blue-700">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
