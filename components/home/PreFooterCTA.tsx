'use client'

import { useTranslations, useLocale } from 'next-intl'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function PreFooterCTA() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="section-padding bg-ers-blue-900">
      <div className="container-wide mx-auto text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t('ctaTitle')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            {t('ctaSubtitle')}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={`/${locale}/contact`} variant="secondary" size="lg">
              {t('ctaButton')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={`/${locale}/projets`} variant="white" size="lg">
              {t('ctaSecondary')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
