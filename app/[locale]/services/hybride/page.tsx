import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HybridPage() {
  const t = useTranslations('services')

  return (
    <>
      <PageHero title={t('hybridTitle')} subtitle={t('hybridSubtitle')} image="/images/hybrid-system.jpg" />

      <section className="py-20 md:py-28">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hybrid-system.jpg"
                  alt="Solution hybride"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-lg leading-relaxed text-gray-700">{t('hybridDesc')}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
