'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useLocale } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/placeholder-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ers-green-900/80 via-ers-green-900/60 to-ers-green-900/80" />

      {/* Content */}
      <div className="container-wide relative z-10 mx-auto px-4 py-32 text-center lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          {t('heroTitle')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          {t('heroSubtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={`/${locale}/projets`} variant="secondary" size="lg">
            {t('heroCta')}
          </Button>
          <Button href={`/${locale}/contact`} variant="white" size="lg">
            {t('heroCtaSecondary')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  )
}
