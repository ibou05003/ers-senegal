import { useTranslations, useLocale } from 'next-intl'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function PreFooterCTA() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="bg-[#0A1628] py-24 md:py-32">
      <div className="container-wide mx-auto px-6 text-center lg:px-8">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
          {t('ctaTitle')}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-white/60 md:text-lg">
          {t('ctaSubtitle')}
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`/${locale}/contact`} variant="secondary" size="lg">
            {t('ctaButton')}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={`/${locale}/projets`} variant="white" size="lg">
            {t('ctaSecondary')}
          </Button>
        </div>
      </div>
    </section>
  )
}
