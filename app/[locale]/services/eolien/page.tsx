import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function WindPage() {
  const t = useTranslations('services')

  return (
    <>
      <PageHero title={t('windTitle')} subtitle={t('windSubtitle')} image="/images/wind-turbines.jpg" />

      <section className="py-20 md:py-28">
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
