import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function WindPage() {
  const t = useTranslations('services')

  return (
    <>
      <section className="gradient-green pb-20 pt-32">
        <div className="container-wide mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t('windTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t('windSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/wind-turbines.jpg"
                  alt="Éoliennes"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-lg leading-relaxed text-gray-700">{t('windDesc')}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
