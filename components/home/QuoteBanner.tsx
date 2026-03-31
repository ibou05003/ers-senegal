'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function QuoteBanner() {
  const t = useTranslations('home')

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/kahone-solar.jpg')" }}
      />
      <div className="absolute inset-0 bg-ers-blue-900/80" />

      <div className="container-wide relative z-10 mx-auto px-4 text-center lg:px-8">
        <ScrollReveal>
          <blockquote className="mx-auto max-w-4xl">
            <p className="text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
              {t('quoteText')}
            </p>
            <footer className="mt-8">
              <div className="mx-auto h-1 w-16 rounded-full bg-ers-gold-500" />
              <cite className="mt-4 block text-lg font-semibold not-italic text-white/90">
                {t('quoteAuthor')}
              </cite>
              <span className="text-sm text-white/60">{t('quoteRole')}</span>
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  )
}
