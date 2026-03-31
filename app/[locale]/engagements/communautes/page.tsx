import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Sprout, HeartPulse, GraduationCap } from 'lucide-react'

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
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('communitiesTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t('communitiesSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {initiatives.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-ers-green-50 text-ers-green-700">
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
